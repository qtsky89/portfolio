from . import views
from django.urls import path

urlpatterns = [
    path('api/v1/project', views.ProjectView.as_view(), name='api_project'),
]
