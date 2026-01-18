
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        password = serializers.CharField(write_only=True,min_length=8, style={'input_type': 'password'})
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):

        #if we use User.objects.create = it will save password in a plain text
        # if we use User.Object.create_user = it will automatically hashed the password
        user = User.objects.create_user(**validated_data) # use this method oly if we have required fields in filds list abobve we mention
        return user
        """
        we can also pass like this:
        
        user = User.Object.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        """

