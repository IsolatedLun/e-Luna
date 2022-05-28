from django.urls import path
from . import views

urlpatterns = [
    path('user/<int:id>/<str:name>', views.SellerView.as_view(), name='user'),
]