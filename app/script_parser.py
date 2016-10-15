import json

def script_parser(json_string):
   """
   parse the result of speech to text into two things
   INPUT:

   OUTPUT:
      wordmap: 
         list of tuples (words,time)
      wordseg:
         a list of list [time, [lsit of words]]
   """
   BUCKET = 5

   input_string = json.loads(json_string)
   wordtime = input_string['results']
   start_time = 0
   wordseg = [(0, [])]
   wordmap = []
   for sentence in wordtime:
      for word in sentence['alternatives'][0]['timestamps']:
         if word[1]-wordseg[-1][0] < BUCKET:
            wordseg[-1][1].append(word[0])
         else:  #if this is out of the timeframe
            wordseg.append((wordseg[-1][0] + BUCKET, []))
            wordseg[-1][1].append(word[0])
         wordmap.append(tuple([word[0],word[1]]))

   return wordmap,wordseg

if __name__ == "__main__":

   input_string =open('test.txt').read();
   # print input_string

   print script_parser(input_string)[0]
   print "-------------"
   print script_parser(input_string)[1]