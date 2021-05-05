"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""



from django.contrib import admin
from django.urls import path, include


# We import 'settings', 
# because we want to work and use variables that are in our 'settings.py' file!
# (for example MEDIA_URL):
from django.conf import settings
# Also we need function called 'static'
from django.conf.urls.static import static
# this is a function that allows us to connect our URL!



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls')),
]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# so here we are setting the url (settings.MEDIA_URL) and 
# also we are setting in which folder to looking to (document_root=setting.MEDIA_ROOT)