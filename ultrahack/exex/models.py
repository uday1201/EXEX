from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class author(AbstractBaseUser):
    name = models.CharField(max_length=100, blank=False, default='')
    created = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(
                        verbose_name='email address',
                        max_length=255,
                        unique=True,
                    )
    profile_picture = models.URLField(
        ("Profile Picture"), 
        max_length=128, 
        db_index=True, 
        unique=True,
        blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['date_of_birth']

class article(models.Model):
	title = models.CharField(max_length=250, blank=False, default='Title')
	date = models.DateTimeField(auto_now_add=True)
	subtitle = models.CharField(max_length=500, blank=True, default='Subtitle')
	summary = models.CharField(max_length=1500, blank=True, default='summary')
	latitude = models.DecimalField(max_digits=12, decimal_places=8, default="")
	longitude = models.DecimalField(max_digits=12, decimal_places=8, default="")
	place = models.CharField(max_length=100)
	author = models.ForeignKey(author, on_delete=models.CASCADE)
	content = models.CharField(max_length=50000)
	price = models.IntegerField(
		default=0,
		validators=[MaxValueValidator(999),MinValueValidator(0)]
		)
	article_image = models.URLField(
		("Image"),
		max_length=128,
		db_index=True,
		unique=True,
		blank=True
		)
