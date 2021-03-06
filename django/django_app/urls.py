from . import views
from django.urls import re_path

urlpatterns = [
    re_path(r'api/v1/project/?(?P<pk>[\w]*)/?', views.ProjectView.as_view(), name='api_project'),
    re_path(r'api/v1/document/(?P<pk>[\S]*)/?', views.DocumentView.as_view(), name='api_document'),
]
