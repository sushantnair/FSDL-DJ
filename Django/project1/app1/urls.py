from . import views 
from django.urls import path
urlpatterns = [
    path("<mmwords>", views.maha_mantra),
]