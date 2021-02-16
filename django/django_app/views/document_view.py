import logging
from glob import glob
from django.conf import settings
from django.http import JsonResponse
from django.views.generic import View


logger = logging.getLogger('django')


class DocumentView(View):
    def get(self, request, *args, **kwargs):
        try:
            file_path = f'{settings.TEMPLATE_DIR}/{kwargs["pk"]}.md'

            if not glob(file_path):
                error_msg = f'{file_path} is not found'
                logger.error(error_msg)
                return JsonResponse({'code': 400, 'message': error_msg}, status=400)

            with open(file_path, 'rb') as fp:
                return JsonResponse({'code': 200, 'item': fp.read().decode('utf8')}, status=200)

        except Exception as e:
            logger.error(e)
            return JsonResponse({'code': 500, 'message': str(e)}, status=500)
