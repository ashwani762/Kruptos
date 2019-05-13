from rest_framework import serializers
from csapp.models import Kruptos

# Lead Serializer

class KruptosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kruptos
        fields = '__all__'