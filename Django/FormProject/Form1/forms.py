from django import forms

class UserForm(forms.Form):
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    roll_no = forms.IntegerField(help_text="Enter 6 digit roll number")