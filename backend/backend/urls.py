from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from subApp import views

router = routers.DefaultRouter()
router.register('list', views.SubListView, 'subscription')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]