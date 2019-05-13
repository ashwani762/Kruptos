from rest_framework import routers
from .api import KruptosViewSet

router = routers.DefaultRouter()
router.register('api/kruptos', KruptosViewSet, 'kruptosAPI')

urlpatterns = router.urls
