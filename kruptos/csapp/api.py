from csapp.models import Kruptos
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from .serializers import KruptosSerializer

class KruptosViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = KruptosSerializer

    def get_queryset(self):
        return Kruptos.objects.all()

    def perform_create(self, serializer):
        serializer.save()
    
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)