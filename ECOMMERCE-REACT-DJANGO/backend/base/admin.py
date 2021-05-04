from django.contrib import admin

# import * means import every model from 'models.py' 
from .models import *


# Register your models here.
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(ShippingAddress)
admin.site.register(Order)
admin.site.register(OrderItem)