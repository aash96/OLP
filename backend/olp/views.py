from asyncio.windows_events import NULL
from select import select
import string
from django.shortcuts import render
import json
from django.http.response import JsonResponse
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .serializers import *
from .models import *

# Create your views here.
class StudentViewSet(viewsets.ModelViewSet):
   queryset = Student.objects.all()
   serializer_class = StudentSerializer

class StudentList(APIView):

   def get_queryset(self):
      students = Student.objects.all()
      return students
   def get(self,request):
      students = self.get_queryset()
      serializer = StudentSerializer(students, many=True)
      return Response(serializer.data)
   def post(self,request):
      #print("reqdata:", request.data)
      #s_data = JSONParser().parse(request)
      # sql = 'select * from olp_student as s where s.student_id="' + str(request.data['user_id']) + '" and s.password="' + str(request.data['password']) + '"'
      # print("sql:",sql)
      # students =  Student.objects.raw(sql)
      # for p in students:
      #    print(p.email)
      # if students is NULL:
      #    print("NULL")
      # jsonr = '{"message": "true"}'
      s = StudentSerializer(data=request.data)
      # if type(request.data['user_id']) is not int or type(request.data['password']) is not str :
      #    jsonr = '{"message": "false"}'
      try:
         Student.objects.filter(student_id=request.data['user_id'], password=request.data['password'])
      except:
         jsonr = '{"message": "false"}'
      else:
         if Student.objects.filter(student_id=request.data['user_id'], password=request.data['password']):
            jsonr = '{"message": "true"}'
         else:
            jsonr = '{"message": "false"}'
      
      return JsonResponse(json.loads(jsonr),status= status.HTTP_200_OK)
      # serializer = StudentSerializer(request.data)
      # if serializer.is_valid:
      #    password = serializer.data.

      
