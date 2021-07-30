from rest_framework import serializers
from .models import SubList

class SubListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubList
        fields = "__all__"