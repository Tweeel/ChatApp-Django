from django.db import models
from datetime import datetime

# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=255)

class Message(models.Model):
    value = models.TextField()
    timestamp = models.DateTimeField(default=datetime.now, blank=True)
    # room = models.ForeignKey(Room, on_delete=models.CASCADE)
    room = models.CharField(max_length=255)
    user = models.CharField(max_length=255)