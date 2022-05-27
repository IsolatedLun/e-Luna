from numpy import source
from rest_framework import serializers
from . import models

from starRating.models import ProductStarRating
from starRating.serializers import ProductStarRatingSerializer
from users.serializers import cUserSerializer

class ProductSerializer(serializers.ModelSerializer):
    rating  = serializers.SerializerMethodField(source='rating')
    seller = serializers.SerializerMethodField(source='seller')
    images = serializers.SerializerMethodField(source='images')
    reviews = serializers.SerializerMethodField(source='reviews')
    tags = serializers.SerializerMethodField(source='tags')

    def get_rating(self, obj):
        _model = ProductStarRating.objects.get(product_id=obj.id)

        return ProductStarRatingSerializer(_model).data['rating_data']

    def get_seller(self, obj):
        return cUserSerializer(obj.seller).data

    def get_images(self, obj):
        img_queryset = models.ProductImage.objects.filter(id=obj.id)

        return [x.image for x in img_queryset]

    def get_reviews(self, obj):
        return []

    def get_tags(self, obj):
        return []

    class Meta:
        model = models.Product
        fields = '__all__'

class ProductPreviewSerializer(serializers.ModelSerializer):
    rating  = serializers.SerializerMethodField(source='rating')
    seller = serializers.SerializerMethodField(source='seller')

    def get_rating(self, obj):
        _model = ProductStarRating.objects.get(product_id=obj.id)

        return ProductStarRatingSerializer(_model).data['rating_data']

    def get_seller(self, obj):
        return cUserSerializer(obj.seller).data

    class Meta:
        model = models.Product
        fields = ['id', 'name', 'thumbnail', 'actual_price', 'discount_pct', 
        'original_price', 'rating', 'seller']