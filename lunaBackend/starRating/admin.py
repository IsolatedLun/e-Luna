from django.contrib import admin

from . import models

admin.site.register(models.ProductStarRating)
admin.site.register(models.StarRating)