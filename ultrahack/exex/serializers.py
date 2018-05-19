from django.contrib.auth.models import User
from exex.models import author, article
from rest_framework import serializers


class authorSerializer(serializers.ModelSerializer):
    class Meta:
        model = author
        fields = ('name', 'created', 'email', 'profile_picture')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class articleSerializer(serializers.ModelSerializer):
	class Meta:
		model = article
		fields = ('title', 'date', 'subtitle', 'summary', 'latitude', 'longitude', 'place', 'author', 'content', 'price', 'article_image')