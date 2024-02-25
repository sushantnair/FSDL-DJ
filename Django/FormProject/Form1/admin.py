from django.contrib import admin
from .models import *

# Register your models here.
class UserDisplay2(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'roll_no')
admin.site.register(Users, UserDisplay2)