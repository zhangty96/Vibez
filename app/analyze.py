from tts import tts
from alchemy import emotion
from script_parser import script_parser
from emotion_parser import emotion_parser


# returns a tuple (words, locs, word_locs, sentiments), where
# words is a list of words in order
# locs is a list of locations of the words in the audio
# word_locs is a hashmap from words to lists of positions in the audio
# seg_locs is a list of (strings) locations of the segments in the audio
# emotions is a hashmap from emotions to a list of scores, one score per 5 seconds
# all text is made lower case

def analyze(filename):
  tts_json = tts(filename)
  tts_json.strip() == '':
    return ([], [], {}, [], [])
  wordlist, wordseg = script_parser(tts_json)
  words = []
  locs = []
  word_locs = {}
  for word, loc in wordlist:
    word = word.lower()
    words.append(word)
    locs.append(loc)
    if word not in word_locs:
      word_locs[word] = [loc]
    else:
      word_locs[word].append(loc)
  seg_locs = []
  assert len(words) == len(locs)
  emotions = {}
  for start_time, phrase in wordseg:
    phrase = ' '.join(phrase)
    if phrase.strip() != '':
      emotion_json = emotion(phrase)
      emotion_map = emotion_parser(emotion_json)
      seg_locs.append(start_time)
      for emo, score in emotion_map.iteritems():
        if emo not in emotions:
          emotions[emo] = []
        emotions[emo].append(float(score))
  emotions = [{"name": emo, "data": scores} for emo, scores in emotions.iteritems()]
  return (words, locs, word_locs, seg_locs, emotions)

