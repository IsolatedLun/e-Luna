from rest_framework import serializers
from . import models
from starRating.models import ProductStarRating
from starRating.serializers import ProductStarRatingSerializer

class ProductPreviewSerializer(serializers.ModelSerializer):
    rating  = serializers.SerializerMethodField(source='rating')

    def get_rating(self, obj):
        _model = ProductStarRating.objects.get(product_id=obj.id)

        return ProductStarRatingSerializer(_model).data['rating_data']

    class Meta:
        model = models.Product
        fields = ['id', 'name', 'thumbnail', 'actual_price', 'discount_pct', 'rating']