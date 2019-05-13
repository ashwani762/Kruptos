from django.contrib import admin
from .models import Kruptos

# Register your models here.
class CustomKruptosAdmin(admin.ModelAdmin):
    list_display = ('for_person', 'message')


admin.site.register(Kruptos, CustomKruptosAdmin)
