import socket
import json
from pprint import pprint


class VNDB:
    """
    Class for interacting with the VNDB API

    Example:
    >> vndb = VNDB()
    >> res = vndb.get("get vn basic,details (id = 17)")
    >> print(res)

    {'items': [...], 'more': False, 'num': 1}

    """

    def __init__(self):
        self.sock = socket.socket()
        self.sock.connect(("api.vndb.org", 19534))
        self._login()
        res = self._get_response()
        if res != "ok":
            raise Exception("Not able to login")

    def _login(self):
        login_command = 'login {"protocol":1,"client":"test","clientver":0.1}'
        self._send_command(login_command)

    def _get_response(self):
        finished = False
        whole = ''
        while not finished:
            buffer = self.sock.recv(4096)
            whole += buffer.decode("utf-8")
            if '\x04' in whole:
                finished = True

        whole = whole.replace('\x04', '').strip()
        return whole

    def _send_command(self, cmd):
        self.sock.send(bytes(f"{cmd}\x04".encode("utf-8")))

    def get(self, cmd):
        self._send_command(cmd)
        res = self._get_response()
        if res.startswith("results"):
            res = res.strip("results")
            res = json.loads(res)
            return res
        elif res.startswith("error"):
            res = res.strip("error ")
            res = json.loads(res)
            raise Exception(res["msg"])
