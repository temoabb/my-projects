from rest_framework import serializers

# also we need a usermodel: 
from django.contrib.auth.models import User

from .models import Product


# And here we'll create serializer and it i going to be a class: 

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # here must be 2 required fields: model and field; 

        # model, that we want to serialize: 
        model = Product

        # and fields, that we want to render out:
        fields = '__all__'
        # in models.py, the model Product has fields: name, price, image, description... 
        # '__all__' means that they all are here 





        # to use it, we have to import serializer in views.py 









