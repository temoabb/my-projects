from django.contrib import admin
from django.urls import path, include


# We import 'settings', because we want to work and use variables that are in our 'settings.py' file!
# (for example MEDIA_URL)
from django.conf import settings


# Also we need function called 'static'
from django.conf.urls.static import static
# This is a function that allows us to connect our URL!



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls')),
]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# so here we are setting the url (settings.MEDIA_URL) and 
# also we are setting in which folder to look into (document_root=setting.MEDIA_ROOT)