from . import views 
from django.urls import path
my = 'app1'
urlpatterns = [
    path("", views.forL), 
    path("<str:month>", views.monthly_challenge, name="month-name"),
    path("create/", views.create_session),
    path("access", views.access_session),
] 