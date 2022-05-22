from django.db import models

from products.models import Product

class StarRating(models.Model):
    _5_stars = models.PositiveIntegerField(default=0)
    _4_stars = models.PositiveIntegerField(default=0)
    _3_stars = models.PositiveIntegerField(default=0)
    _2_stars = models.PositiveIntegerField(default=0)
    _1_stars = models.PositiveIntegerField(default=0)

    rating = models.PositiveIntegerField(default=0)

class ProductStarRating(models.Model):
    rating = models.ForeignKey(StarRating, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)