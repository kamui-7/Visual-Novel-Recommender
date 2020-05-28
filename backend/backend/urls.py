from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from vnrecc import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', views.CallModel.as_view())
]
