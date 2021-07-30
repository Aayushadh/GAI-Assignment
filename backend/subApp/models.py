from django.db import models

class SubList(models.Model):
    email = models.EmailField(primary_key=True)
    def _str_(self):
        return self.email