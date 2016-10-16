import json

def script_parser(json_string):
   """
   parse the result of speech to text into two things
   INPUT:

   OUTPUT:
      wordlist: 
         list of tuples (words,time)
      wordseg:
         a list of list [time, [lsit of words]]
   """
   BUCKET = 5

   input_string = json.loads(json_string)
   wordtime = input_string['results']
   start_time = 0
   wordseg = [(0, [])]
   wordlist = []
   for sentence in wordtime:
      for word in sentence['alternatives'][0]['timestamps']:
         if word[1]-wordseg[-1][0] < BUCKET:
            wordseg[-1][1].append(word[0])
         else:  #if this is out of the timeframe
            wordseg.append((wordseg[-1][0] + BUCKET, []))
            wordseg[-1][1].append(word[0])
         wordlist.append(tuple([word[0],word[1]]))

   return wordlist,wordseg

def key_word_parser(json_string):
   """
   parse json string into list of five top occuring words
   INPUT:
      json_string: result of keyvalue api call
   OUTPUT:
      keywords = list of five words
   """
   input_string = json.loads(json_string)
   keywords = []
   for word in input_string['keywords'][0:5]:
      keywords.append(word['text'])
   return keywords

if __name__ == "__main__":

   input_string =open('test3.txt').read();
   # print input_string

   # print script_parser(input_string)[0]
   # print "-------------"
   # print script_parser(input_string)[1]
   print key_word_parser(input_string)
