"""
AI-2035 Local Development Server with HTTP Byte-Range Support & Old-Version Rewrites.
Enables instant HTML5 audio seeking (RFC 7233) and seamless local testing.
"""
import http.server
import socketserver
import os
import re
import sys
import shutil

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def rewrite_clean_path(self):
        clean_path = self.path.split('?')[0].split('#')[0]
        query = ('?' + self.path.split('?')[1]) if '?' in self.path else ''
        if clean_path in ('/old-version', '/old-version/'):
            self.path = '/old-version/index.html' + query
        elif clean_path in ('/about', '/about/'):
            self.path = '/about.html' + query
        elif clean_path in ('/supplements', '/supplements/', '/supplement', '/supplement/'):
            self.path = '/supplements.html' + query
        elif clean_path.startswith('/supplements/') or clean_path.startswith('/supplement/'):
            slug = clean_path.rstrip('/').split('/')[-1]
            if not slug.endswith('.html'):
                cand = os.path.join(DIRECTORY, 'supplements', slug + '.html')
                if os.path.isfile(cand):
                    self.path = f'/supplements/{slug}.html' + query

    def do_GET(self):
        self.rewrite_clean_path()
        super().do_GET()

    def do_HEAD(self):
        self.rewrite_clean_path()
        super().do_HEAD()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            parts = [p for p in self.path.split('?')[0].split('/') if p]
            if not self.path.endswith('/'):
                self.send_response(301)
                self.send_header("Location", self.path + "/")
                self.end_headers()
                return None
            for index in "index.html", "index.htm":
                index_path = os.path.join(path, index)
                if os.path.exists(index_path):
                    path = index_path
                    break
            else:
                return super().send_head()

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            size = fs[6]
        except Exception:
            f.close()
            return None

        range_header = self.headers.get('Range')
        if range_header:
            range_match = re.match(r'bytes=(\d+)-(\d*)', range_header)
            if range_match:
                start = int(range_match.group(1))
                end = int(range_match.group(2)) if range_match.group(2) else size - 1
                if start >= size:
                    self.send_error(416, "Requested Range Not Satisfiable")
                    f.close()
                    return None
                if end >= size:
                    end = size - 1
                length = end - start + 1

                self.send_response(206)
                self.send_header("Content-Type", self.guess_type(path))
                if path.lower().endswith('.pdf'):
                    self.send_header("Content-Disposition", "inline")
                self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                self.send_header("Content-Length", str(length))
                self.send_header("Accept-Ranges", "bytes")
                self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
                self.end_headers()

                f.seek(start)

                class LimitedFile:
                    def __init__(self, file_obj, limit):
                        self.file_obj = file_obj
                        self.remaining = limit

                    def read(self, read_size=-1):
                        if self.remaining <= 0:
                            return b''
                        if read_size < 0 or read_size > self.remaining:
                            read_size = self.remaining
                        data = self.file_obj.read(read_size)
                        self.remaining -= len(data)
                        return data

                    def close(self):
                        self.file_obj.close()

                return LimitedFile(f, length)

        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(path))
        if path.lower().endswith('.pdf'):
            self.send_header("Content-Disposition", "inline")
        self.send_header("Content-Length", str(size))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        """Silently handle client disconnects during media seeking."""
        try:
            shutil.copyfileobj(source, outputfile, length=64 * 1024)
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError, TimeoutError, OSError):
            pass
        finally:
            if hasattr(source, 'close'):
                source.close()

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    with ThreadingTCPServer(("0.0.0.0", PORT), RangeRequestHandler) as httpd:
        print(f"[AI-2035 Server] Running on http://localhost:{PORT} (with HTTP Byte-Range support)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
