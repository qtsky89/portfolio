from django.test import TestCase, Client
from json import dumps


class ProjectViewTestCase(TestCase):
    def setUp(self):
        self.c = Client()

    def test_crud_normal1(self):
        data = {
            'name': 'test_project',
            'image': 'https://wonhee-image.s3.ap-northeast-2.amazonaws.com/test_project.png',
            'constraint': 'personal'
        }
        # create
        res = self.c.post('/api/v1/project', dumps(data), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        self.assertEqual(res.json(), {'code': 201, 'message': 'test_project is created'})

        # read
        res = self.c.get('/api/v1/project', content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['item'][0]['constraint'], 'personal')

        # update
        data['constraint'] = 'company'
        res = self.c.put(f'/api/v1/project/{data["name"]}', dumps(data), content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json(), {'code': 200, 'message': 'test_project is updated'})

        # read (update check)
        res = self.c.get(f'/api/v1/project/{data["name"]}', content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['item']['constraint'], 'company')

        # delete
        res = self.c.delete(f'/api/v1/project/{data["name"]}', content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json(), {'code': 200, 'message': 'test_project is deleted'})
