from django.urls import path, include
from account import views as UserViews

urlpatterns = [

    path('register/', UserViews.RegisterUser.as_view()),
]