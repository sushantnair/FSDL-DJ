from . import views
from django.urls import path
urlpatterns = [
    path("<int:month>", views.monthly_challenge),
]