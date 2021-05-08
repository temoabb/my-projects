# for superuser:
# temoabb name 
# temotemo password



# Here we are building our database! Our database tables! 

# We want to build out the tables in that database, start adding items to that, 

# and than rendering out this database items in our template, or in our frontend,

# instead of static data. 

# Django is going to use models to create database tables.




# In default django provides us 'sqlite' database. In 'settings.py' file we can now see:
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }
# This is ready for us. We'll use it temporarily, but not for long term purposes.





# At first all we need to do is apply migration. 
# Migration is going to build out the tables and set up our first database.

# We will see that in our terminal django tells us at first: 
# 'You have 18 unapplied migration(s)...'

# Migration sets up our database and then once we make changes we just have to rerun migrations.
# After that, these changes will be made to the database:

# 'python manage.py migrate' 
# (pay attention, that this is the first time, when we have 18 unapplied migration(s)..)

# After run that, all of those migrations will be applied.
# It took any changes that we needed to make any preparations that Django had for us 
# and it applied those migrations. 


# So we just migrated our database!


# Once we make some more changes, then we can make migrations again, django will reupdate our database and make those changes: 
#  'python manage.py makemigrations'
#  (for me this looks like we say to django: "prepare these all for migrating")
#  and then: 
# 'python manage.py migrate'



# Do not forget that in 'admin.py' we have to import and register our every single model (Product, Review..).
# Otherwise there won't be appropriate table in database.





from django.db import models

# Django has already built and gives us 'User' model to work with.
# So we aren't going to build up User's table again.
from django.contrib.auth.models import User
# after we applied our migrations, we can create our user:
# 'python manage.py createsuperuser' 

# and after that we can see our admin panel and see our database. 





# Everything below we can call 'database table'.

# Any attributes here will be 'database columns'. 

# (models.Model) parameter turns our class into a model. So now Django understands what this is.

class Product(models.Model):

    # Remember: User can have many products! 

    # ბევრი იუზერს შეიძლება შევუსაბამოთ ეს პროდუქტი; რადგან არა მხოლოდ ერთმა, ბევრმა შეიძლება შეიტანოს კალათაში.

    # So To define a many-to-one relationship, use 'ForeignKey':

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    # 'null=True' means that we allow this value to be empty in database. In this case, we are agree to have Product in our database, without an User.



    # 'blank=True' means, that we can fill out a form and not have to have this attribute completed.
    name = models.CharField(max_length=200, null=True, blank=True)


    # In order to use this image's field (Choose file), we have to install 'pillow'.

    # It is an image processing library: 'pip install pillow'
    image = models.ImageField(null=True, blank=True)


    brand = models.CharField(max_length=200, null=True, blank=True)


    category = models.CharField(max_length=200, null=True, blank=True)
    # 'CharField' and 'TextField' both are strings. But 
    # 'TextField' is a longer string. It doesn't need max_length attribute.
    description = models.TextField(null=True, blank=True)


    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    # decimal_places means decimal places after the whole number (5.23 decimal places are 2: 2 and 3)


    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)


    createdAt = models.DateTimeField(auto_now_add=True)
    # to get a snapshot when this product created. 



    # 'AutoField' is an IntegerField that automatically increments according to available IDs. You usually won’t need to use this directly; a primary key field will automatically be added to your model if you don’t specify otherwise.
    
    _id = models.AutoField(primary_key=True, editable=False)

    # django creates id by itself, but Dennis uses Brad Traversy's course and he rewrited django's id with _id.
    # We want to override Django's id, so we use 'AutoField'
    # 'primary_key=True' tells django, that use this and not what you originally wanted.

    # If you’d like to specify a custom primary key, specify primary_key=True on one of your fields. If Django sees you’ve explicitly set Field.primary_key, it won’t add the automatic id column.

   

    def __str__(self):
        return self.name





# This is a database table.

# Any attributes here will be 'database columns'. 

# (models.Model) parameter turns our class into a model. So now Django understands what this is.

class Review(models.Model):

    # Models can have relationship to each other: 
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)




# This is a database table.

# Any attributes here will be 'database columns'. 

# (models.Model) parameter turns our class into a model. So now Django understands what this is.


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True) 
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)



# This is a database table.

# Any attributes here will be 'database columns'. 

# (models.Model) parameter turns our class into a model. So now Django understands what this is


class OrderItem(models.Model):

    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty =  models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    # Here we need an URL of image, not image itself 
    image = models.CharField(max_length=200, null=True, blank=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)




# This is a 'database table'.

#  Any attributes here will be 'database columns'. 

# (models.Model) parameter turns our class into a model. So now Django understands what this is

class ShippingAddress(models.Model):

    # 'OneToOneField' means, that 'ShippingAddress' can have only one 'Order'.
    # This doesn't allow many-to-one relationship! 

    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)

    # CASCADE will just delete it. 
    # CASCADE means, that is if somebody deletes the 'Order', it is okay the 'ShippingAddress' is going with it, there is no need to save that.



    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)


# All of models (ShippingAddress, Review, Product, Order, OrderItem), 

# we have to export to and import in 'admin.py' file!