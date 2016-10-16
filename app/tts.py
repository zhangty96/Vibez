import os
def tts(filename):
  return os.popen('curl -X POST -u "9d4c0f7a-12fb-454d-bdf5-1c10b61f949b":"WPRvAC6P81yG" --header "Content-Type: audio/wav" --data-binary @' + filename + ' "https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&word_alternatives_threshold=0.9&continuous=true"').read()
