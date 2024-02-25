from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

monthly_challenges = {
    1:"January, 31 days",
    2:"February, 28/29 days",
    3:"March, 31 days",
    4:"April, 30 days", 
}
# Create your views here.
def index(request):
    return HttpResponse("This my first app.")

def monthly_challenge(request, month):
    try:
        num = int(month)
        challenge_text = monthly_challenges[num]
        response_data = f"<h1>{challenge_text}</h1>"
        return HttpResponse(response_data)
    except:
        return HttpResponseNotFound("<h1>This word is not present in monthly challenges!</h1>")