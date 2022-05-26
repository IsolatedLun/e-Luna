from consts import OK, ERR
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from . import serializers
from . import models

class ProductsView(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductPreviewSerializer

class ProductView(APIView):
    def get(self, req, id, name):
        try:
            product = models.Product.objects.get(id=id)
            serializer = serializers.ProductSerializer(product).data

            return Response(data=serializer, status=OK)
        except:
            return Response(data={'detail': 'Product does not exist.'}, status=ERR)

class ProductsFilteredView(APIView):
    def post(self, req):
        queryset = models.Product.objects.filter(**req.data)
        filtered_queryset = serializers.ProductPreviewSerializer(queryset, many=True).data

        return Response(data=filtered_queryset, status=OK)