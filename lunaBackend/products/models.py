from django.db import models

from users.models import cUser

class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()

    thumbnail = models.ImageField(upload_to='products/thumbnails/', default='products/def.png')

    actual_price = models.PositiveIntegerField()
    discount_pct = models.PositiveIntegerField()
    original_price = models.PositiveIntegerField()

    product_type = models.CharField(max_length=64)
    type_path = models.CharField(max_length=128) 
    type = models.CharField(max_length=128)

    seller = models.ForeignKey(cUser, on_delete=models.CASCADE)

    def update_price(self):
        self.actual_price = self.original_price - (self.original_price / (self.discount_pct / 100))
        
        self.save()

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/', default='products/def.png')