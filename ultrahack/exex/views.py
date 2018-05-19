from django.shortcuts import render
from exex.models import author, article
from django.contrib.auth.models import User
from rest_framework import viewsets
from exex.serializers import authorSerializer, UserSerializer, articleSerializer, artSerializer
# Create your views here.

class authorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows authors to be viewed or edited.
    """
    queryset = author.objects.all().order_by('-created')
    serializer_class = authorSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class articleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows articles to be viewed or edited.
    """
    queryset = article.objects.all().order_by('-date')
    serializer_class = articleSerializer

class artViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows articles to be viewed or edited.
    """
    # pk lana h
    queryset = article.objects.all().order_by('-pk')
    serializer_class = artSerializer
# http://www.django-rest-framework.org/api-guide/viewsets/