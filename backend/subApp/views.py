from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SubListSerializer
from .models import SubList

# Create your views here.

class SubListView(viewsets.ModelViewSet):
    serializer_class = SubListSerializer
    queryset = SubList.objects.all()