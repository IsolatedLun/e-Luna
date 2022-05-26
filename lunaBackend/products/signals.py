from django.db.models.signals import post_save
from django.dispatch import receiver
from . import models
from starRating.models import ProductStarRating, StarRating


@receiver(post_save, sender=models.Product)
def create_star_rating(sender, instance, created, **kwargs):
    if created:
        rating = StarRating.objects.create()
        ProductStarRating.objects.create(product_id=instance.id, rating_id=rating.id)
    
    