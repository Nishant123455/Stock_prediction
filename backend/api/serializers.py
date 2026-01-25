from rest_framework import serializers

class StockPridictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)