import logging
from django.http import JsonResponse
from django.views.generic import View

logger = logging.getLogger('django')


class ProjectView(View):
    def get(self, request, format=None, *args, **kwargs):

        logger.info("test")
        return JsonResponse({"a": "b"})
