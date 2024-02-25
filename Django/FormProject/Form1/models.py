from django.db import models

# Create your models here.
class Users(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    roll_no = models.IntegerField()
    def __str__(self):
        return f"First Name: {self.first_name}, Last Name: {self.last_name}, Roll Number: {self.roll_no}"
    class Meta:
        verbose_name = "Use"
        ordering = ['-first_name']
