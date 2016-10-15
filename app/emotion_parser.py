import json

def emotion_parser(input_json):
	"""
	this function parse input emotion json string into folowing output hashmap
	INPUT: 
		input_json:
			result from emotion parsing each 5 seconds of dictionary
	OUTPUT:
		emotion_map:
			resulting hashmap of key as emotion and value as the score of emotion
	"""
	input_string = json.loads(input_json)
	emotion_map = {}
	for emotion in input_string['docEmotions']:
		emotion_map[emotion] = input_string['docEmotions'][emotion]
	return emotion_map

if __name__ == "__main__":
	input_string =open('test2.txt').read()
	print emotion_parser(input_string)
