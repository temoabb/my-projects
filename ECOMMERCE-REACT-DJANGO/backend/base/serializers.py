from rest_framework import serializers

# also we need a usermodel: 
from django.contrib.auth.models import User

from .models import Product


# We can get only JSON data in the frontend!

# Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types.


# The serializers in REST framework work very similarly to Django's Form and ModelForm classes. We provide a Serializer class which gives you a powerful, generic way to control the output of your responses, as well as a ModelSerializer class which provides a useful shortcut for creating serializers that deal with model instances and querysets.



# And here we'll create serializer and it is going to be a class: 

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # here must be 2 required fields: model and field; 

        # model, that we want to serialize: 
        model = Product

        # and fields, that we want to render out:
        fields = '__all__'

        # in 'models.py', the model Product has fields: name, price, image, description... 
        # '__all__' means that they all are here 
        

        # to use it, we have to import serializer in 'views.py'









