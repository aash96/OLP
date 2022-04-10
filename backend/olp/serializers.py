from rest_framework import serializers 
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        #fields = ('student_id','student_name','email','password')
        fields = "__all__"


