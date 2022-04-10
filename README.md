## Technology used :
- Django
- Sqlite3 database
- React-native

## Project Structure :

```
|- backend/ 
	|- manage.py : Django manager main file
	|- requirements.txt : Containing packages required to run this application
	|- backend/
		|- settings.py : settings for all apps created in this project
		|- urls.py : directing urls used by various applications
		|- __init__.py : declaring backend as a python package
		|- asgi.py : projectc configuration
		|- wsgi.py : used during deployment of project on server 
	|- olp/
		|- __init__.py : declaring my_app as a python package
		|- urls.py : directing urls within the application
		|- apps.py : declaring this folder as the application
		|- models.py : contain definition of tables used in the application
		|- views.py : contain funtionalities to be performed in the application 
		|- admin.py : registering tables with django admin site
		|- tests.py : containg tests if required (useful in deployment)
		|- serializers.py : Contains the model serializers
		|- 

|- grp 18/
	|- App.js : Main app
	

```

## Setting up the project
Steps to be followed:

1) Set Up virtual Python3 environment

	```python -m venv env```

2) Activate the environment

	```windows: env\bin\activate```

4) Unzip the folder in the virtual environment folder

5) Follow the below commands to set up the database with the required tables

	```python3 manage.py makemigrations
	python3 manage.py migrate```

6) Start the Django server using the below command

	```python manage.py runserver ```

7) Open the Local Host to view the App
	
- CORS:
	```pip install django-cors-headers```  

- native-base:	
	```npm install native-base
	expo install react-native-svg
	expo install react-native-safe-area-context```
