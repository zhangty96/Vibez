import json
from watson_developer_cloud import AlchemyLanguageV1

def emotion(text_input):
	alchemy_language = AlchemyLanguageV1(api_key='5081e79ae767e8bdbb26f64def8f9615255a2913')
	print(json.dumps(alchemy_language.emotion(text=text_input), indent=2))
