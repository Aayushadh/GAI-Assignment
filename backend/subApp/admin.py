from django.contrib import admin
from .models import SubList

class SubListAdmin(admin.ModelAdmin):
    list_display = ['email']

# Register your models here.

admin.site.register(SubList, SubListAdmin)