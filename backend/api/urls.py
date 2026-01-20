from django.urls import path, include
from account import views as UserViews
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [

    path('register/', UserViews.RegisterUser.as_view()),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    #createion of proceted View to asses private data iof backend by frontend using accessToken and refresh token
    path('protected-view/', UserViews.ProtectedView.as_view()),
]