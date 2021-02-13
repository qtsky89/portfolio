from django.db import models
from django.utils import timezone


class Project(models.Model):
    name = models.CharField(max_length=256, unique=True, primary_key=True)
    image = models.CharField(max_length=4096, default='')
    constraint = models.CharField(max_length=256, default='')
    created_date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return str(self.service_name)
