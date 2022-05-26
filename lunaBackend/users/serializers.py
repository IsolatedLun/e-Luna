from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = ['username', 'is_verified', 'id', 'is_superuser', 'profile', 'location']

class SellerUserPreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = ['username', 'is_verified', 'id']