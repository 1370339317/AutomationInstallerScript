
# Welcome to Cursor



# 1. Try generating with command K on a new line. Ask for a pytorch script of a feedforward neural network
# 2. Then, select the outputted code and hit chat. Ask if there's a bug. Ask how to improve.
# 3. Try selecting some code and hitting edit. Ask the bot to add residual layers.
# 4. To try out cursor on your own projects, go to the file menu (top left) and open a folder.


# Here is a simple example of a C++ code editor with keyword highlighting using Python language

import http.client
import json
import re
import http.server
import socketserver

def Getfake(email, password):
    conn = http.client.HTTPSConnection("wogame.co")
    payload = f"email={email}&password={password}"
    
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'sec-ch-ua': '"Google Chrome";v="111", "Not;A Brand";v="99", "Chromium";v="111"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
        'Referer': 'https://wogame.co/',
        'Origin': 'https://wogame.co',
    }
    
    conn.request("POST", "/api/v1/passport/auth/login", payload, headers)
    
    res = conn.getresponse()
    data = res.read()
    
    jsobj=json.loads(data.decode("utf-8"))

    js_token = jsobj['data']['token']
    print(js_token)

    tokenurl="/api/v1/client/subscribe?token="+js_token
    if js_token:
        con1=http.client.HTTPSConnection("wogame.fhlsep.cn")
        con1.request("GET", tokenurl, headers=headers)
        res = con1.getresponse()
        data = res.read()
        ret=data.decode("utf-8")
        if ret:
            return ret
    
    auth_data = jsobj['data']['auth_data']
    print(js_token)
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth_data,
        'sec-ch-ua': '"Google Chrome";v="111", "Not;A Brand";v="99", "Chromium";v="111"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
        'Referer': 'https://wogame.co/',
        'Origin': 'https://wogame.co',
    }
    
    conn.request("GET", "/api/v1/user/knowledge/fetch?id=5&language=zh-CN", headers=headers)
    
    res = conn.getresponse()
    data = res.read()
    js_body = json.loads(data.decode("utf-8"))['data']['body']

    result = re.search(r'https://.*?token=[^\']*', js_body)
    if result:
        resulturl=result.group(0)
    else:
        print("errr:"+js_body)
    conn.request("GET", resulturl, headers=headers)
    
    res = conn.getresponse()
    data = res.read()
    
    ret=data.decode("utf-8")
    print("body:"+ret)
    
    return ret



class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        try:
            email = self.path.split('=')[1].split('&')[0]
            password = self.path.split('=')[2]
            self.wfile.write(Getfake(email, password).encode())
        except:
            pass

PORT = 8000
with socketserver.TCPServer(("0.0.0.0", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
