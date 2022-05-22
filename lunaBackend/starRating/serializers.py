from rest_framework import serializers
from . import models

class StarRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StarRating
        fields = '__all__'

class ProductStarRatingSerializer(serializers.ModelSerializer):
    rating_data = serializers.SerializerMethodField(source='rating_data')

    def get_rating_data(self, obj):
        return StarRatingSerializer(obj.rating).data

    class Meta:
        model = models.ProductStarRating
        fields = '__all__'