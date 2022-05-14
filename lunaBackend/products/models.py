from django.db import models

from lunaBackend.users.models import cUser

class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()

    actual_price = models.PositiveIntegerField()
    discount_pct = models.PositiveIntegerField()

    product_type = models.CharField(max_length=64)
    type_path = models.CharField(max_length=128) 

    seller = models.ForeignKey(cUser, on_delete=models.CASCADE)

    def update_price(self):
        self.actual_price = self.actual_price - (self.actual_price / (self.discount_pct / 100))
        
        self.save()
    