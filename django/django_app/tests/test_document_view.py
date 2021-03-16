from django.test import TestCase, Client


class ProjectViewTestCase(TestCase):
    def setUp(self):
        self.c = Client()

    def test_read_normal1(self):
        res = self.c.get('/api/v1/document/.test', content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json(), {'code': 200, 'item': '## .test.md\n* this is test file\n'})

    def test_read_abnormal1(self):
        res = self.c.get('/api/v1/document/.notexist', content_type='application/json')
        self.assertEqual(res.status_code, 400)
        self.assertEqual(res.json(), {'code': 400, 'message': '.notexist is not found'})
