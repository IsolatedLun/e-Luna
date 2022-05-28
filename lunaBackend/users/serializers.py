from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):
    transactions = serializers.SerializerMethodField(source='transactions')

    def get_transactions(self, obj):
        return []

    class Meta:
        model = models.cUser
        fields = ['username', 'is_verified', 'id', 'is_superuser', 'profile', 'location',
        'business_email_address', 'transactions']

class SellerUserPreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = ['username', 'is_verified', 'id']