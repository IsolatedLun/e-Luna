from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductsView.as_view(), name='products'),
    path('product/<int:id>/<str:name>', views.ProductView.as_view(), name='products'),

    path('filtered', views.ProductsFilteredView.as_view(), name='filtered-products')
]