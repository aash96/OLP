from django.db import models

# Create your models here.


class Student(models.Model):
    student_id = models.AutoField(db_column='student_id', primary_key=True)
    student_name = models.CharField(db_column='student_name', max_length=256)
    email = models.EmailField(db_column='email', max_length=256)
    password = models.CharField(db_column='password', max_length=256)

    def _str_(self):
        return self.student_name

class Instructor(models.Model):
    instructor_id = models.AutoField(db_column='instructor_id', primary_key=True)
    instructor_name = models.CharField(db_column='student_name', max_length=256)
    email = models.EmailField(db_column='email', max_length=256)
    password = models.CharField(db_column='password', max_length=256)

    def _str_(self):
        return self.instructor_name


class Course(models.Model):
    course_id = models.AutoField(db_column='course_id', primary_key=True)
    course_name = models.CharField(db_column='course_name', max_length=256)
    instructor_id = models.ForeignKey(Instructor, on_delete=models.CASCADE, db_column='instructor_id')

    def _str_(self):
        return self.course_name

class Enrolled(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE, db_column='course_id')
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, db_column='student_id')


class Project(models.Model):
    project_id = models.AutoField(db_column='project_id', primary_key=True)
    project_name = models.CharField(db_column='project_name', max_length=256)
    content = models.TextField(db_column='content')
    instructor_id = models.ForeignKey(Instructor, on_delete=models.CASCADE, db_column='instructor_id')

    def _str_(self):
        return self.project_name

class Working_On(models.Model):
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE, db_column='project_id')
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, db_column='student_id')

class Topic(models.Model):
    topic_id = models.AutoField(db_column='topic_id', primary_key=True)
    topic_name = models.CharField(db_column='topic_name', max_length=256)
    content = models.TextField(db_column='content')
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE, db_column='course_id')
            
    def _str_(self):
        return self.topic_name

class Quiz(models.Model):
    quiz_id = models.AutoField(db_column='quiz_id', primary_key=True)
    quiz_name = models.CharField(db_column='quiz_name', max_length=256)
    topic_id = models.ForeignKey(Topic, on_delete=models.CASCADE, db_column='topic_id')

    def _str_(self):
        return self.quiz_name

class Question(models.Model):
    question_id = models.AutoField(db_column='question_id', primary_key=True)
    question_text = models.TextField(db_column='question_text')
    correct_ans = models.DecimalField(db_column='correct_ans', max_digits=6, decimal_places=3)
    marks = models.IntegerField(db_column='marks', default = 1)
    quiz_id = models.ForeignKey(Quiz, on_delete=models.CASCADE, db_column='quiz_id')

    def _str_(self):
        return self.question_id

class Answered(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, db_column='student_id')
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE, db_column='question_id')
    response = models.DecimalField(db_column='response', max_digits=6, decimal_places=3)

    def _str_(self):
        return self.response