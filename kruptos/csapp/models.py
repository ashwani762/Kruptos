from django.db import models

# Create your models here.

class Kruptos(models.Model):
    for_person = models.CharField(max_length=100, default='Anonymous', blank=True, null=True)
    message = models.CharField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Kruptos"
        ordering = ('-created_at', )

    def __str__(self):
        return self.message