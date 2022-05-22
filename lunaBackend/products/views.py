from consts import OK
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from . import serializers
from . import models

class ProductsView(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductPreviewSerializer