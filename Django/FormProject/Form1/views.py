from django.http import HttpResponse
from .forms import UserForm
from django.shortcuts import render
from .models import Users

# Create your views here.
def view_form(request):
    userform = UserForm()
    return render(request, "Form1/template.html", {"userform": userform})

def valid_function(request):
    context = {}
    form = UserForm(request.POST or None)
    context['form'] = form
    if request.POST:
        if form.is_valid():
            return HttpResponse("Data is valid")
    return render(request, "Form1/template.html", {"userform": form})