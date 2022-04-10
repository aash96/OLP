from django.urls import include, path

from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'studentsvs', StudentViewSet)

urlpatterns = [
   path('', include(router.urls)),
   path('students/',StudentList.as_view(),name="students")
]