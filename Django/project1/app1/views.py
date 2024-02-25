from django.shortcuts import render 
from django.http import HttpResponse, HttpResponseNotFound

maha_mantra_words = {
    "hare":"Srimati Radharani",
    "krishna":"The all attractive one",
    "rama":"Reservoir of pleasure",
}
# Create your views here.
def index(request):
    return HttpResponse("This my first app.")


def maha_mantra(request, mmwords):
    try:
        text = maha_mantra_words[mmwords]
        response_data = f"<h1>{text}</h1>"
        return HttpResponse(response_data)
    except:
        return HttpResponseNotFound("<h1>This word is not present in Hare Krsna Mahamantra!</h1>")