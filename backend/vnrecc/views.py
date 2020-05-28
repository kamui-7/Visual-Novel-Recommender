from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import requests
from bs4 import BeautifulSoup as BS
from .apps import VnreccConfig
import re


class CallModel(APIView):

    def get(self, request):
        if request.method == "GET":
            user_name = request.GET.get("user")
            user_id = self.get_id_from_name(user_name)
            # Do the actual processing
            response = {"res": []}
            recs = VnreccConfig.top_v[int(user_id)]
            for iid, _ in recs:
                title = VnreccConfig.df[VnreccConfig.df["iid"]
                                        == iid]["title"].iloc[0]
                response["res"].append(
                    {"id": iid, "title": title, "img": self.get_vn_image(iid), "desc": self.get_desc(iid)})

            return JsonResponse(response)

    def get_vn_image(self, vn_id):

        res = requests.get(f"https://vndb.org/v{int(vn_id)}").text
        soup = BS(res, "html.parser")
        img = soup.find("div", class_="vnimg")
        img = img.find("img").get("src")

        return img

    def get_jp_title(self, eng):
        jp_title = VnreccConfig.df[VnreccConfig.df["title"]
                                   == eng]["orig"].iloc[0]
        return jp_title

    def get_desc(self, iid):
        desc = VnreccConfig.df[VnreccConfig.df["iid"]
                               == iid]["desc"].iloc[0]
        return desc + "..."

    def get_id_from_name(self, name):
        uid = VnreccConfig.df[VnreccConfig.df["uname"]
                              == str(name)]["uid"].iloc[0]
        return uid
