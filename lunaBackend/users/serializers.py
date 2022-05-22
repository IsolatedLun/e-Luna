from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = '__all__'

class SellerUserPreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = ['username', 'is_verified', 'id']