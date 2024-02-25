from django.urls import path
from . import views

urlpatterns = [
    path("", views.view_form, name='home'),
    path("form/", views.valid_function),
]