from django.shortcuts import render;
from django.http import JsonResponse;

from rest_framework.decorators import api_view;
from rest_framework.response import Response;

from .models import Product
from .products import products


from .serializers import ProductSerializer


# We should have @api_view for every def 
@api_view(['GET'])
def getRoutes(request):
    routes = [
      "/api/products/",
      "/api/products/create/",
      "/api/products/upload/",
      "/api/products/<id>/reviews",
      "/api/products/top",
      "/api/products/<id>",
      "/api/products/delete/<id>",
      "/api/products/<update>/<id>",
    ]
    return Response(routes)





@api_view(['GET'])
def getProducts(request):

    # below Product. is a model 'Product', that we imported above from models. 
    products = Product.objects.all()
    # .all() returns all the products from the database 

    # This needs to be serialized data, because now we work with the django rest framework:
    # return Response(products)
    # Object of type Product is not JSON serializable <- this will be a typeerror 

    # We need to create a serializer for every single model, that we want to return;
    # Serializer is going to wrap our model and than return back it into JSON format.

    # In app's directory (in this case in 'base' app) we have to create 'serializers.py' file.

    # 'sereializer' is going to be an object; Now it knows to serialize all of 'products'
    serializer = ProductSerializer(products, many=True)
    # 'many=True' says what are we serialize - one object, or multiple.
    #  In this case multiple, but when we get single product, many will be False: 'many=False'

    return Response(serializer.data)







# for single product:
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


    # product = None
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break