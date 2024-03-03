from django.shortcuts import render, redirect 
from django.template.loader import render_to_string
from django.http import HttpResponse, HttpResponseNotFound

monthly_challenges = {
    "jan":"January, 31 days",
    "feb":"February, 28/29 days",
    "mar":"March, 31 days",
    "apr":"April, 30 days", 
}
# Create your views here.
def index(request):
    return HttpResponse("This my first app.")

def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month]
        # response_data = f"<h1>{challenge_text}</h1>"
        # response_data = render_to_string("app1/challenge.html")
        # return HttpResponse(response_data)
        # return render(request, "app1/challenge.html")
        return render(request, "app1/challengeI.html", {
            "text": challenge_text, "month_name": month
        })
    except:
        # return HttpResponseNotFound("<h1>This word is not present in monthly challenges!</h1>")
        return render(request, "404.html") 
    
def forL(request):
    months = list(monthly_challenges.keys())
    return render(request, "app1/challengeL.html", {
        "months": months
    })

def create_session(request):
    request.session['name'] = 'name'
    request.session['pass'] = '1234'
    return HttpResponse("<h1>Django<br>The session is set</h1>")

def access_session(request):
    response = "<h1>Welcome to Sessions of Django</h1><br>"
    if request.session.get('name'):
        response += "Name: {0} <br>".format(request.session.get('name'))
    if request.session.get('pass'):
        response += "Password: {0} <br>".format(request.session.get('pass'))
        return HttpResponse(response)
    else:
        return redirect('create/')