from consts import OK, ERR
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from users import serializers

from . import models

class SellerView(APIView):
    def get(self, req, id, name):
        try:
            seller = models.cUser.objects.get(id=id)
            serializer = serializers.cUserSerializer(seller).data

            return Response(data=serializer, status=OK)
        except:
            return Response(data={'detail': 'User does not exist'}, status=ERR)