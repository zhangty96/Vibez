import json
from watson_developer_cloud import AlchemyLanguageV1

API_KEY = '09587e700d3f83975527b8363015deaea2ca5cf8'


def emotion(text_input):
	alchemy_language = AlchemyLanguageV1(api_key=API_KEY)
	return json.dumps(alchemy_language.emotion(text=text_input), indent=2)

def keyword(text_input):
	alchemy_language = AlchemyLanguageV1(api_key=API_KEY)
	return json.dumps(alchemy_language.keywords(text=text_input), indent=2)
