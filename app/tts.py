import os
def tts(filename):
  USER = 'fd0006d7-8169-4d2e-9d8d-60aa10838d20';
  PASS = 'csiRaZg5if7a';
  return os.popen('curl -X POST -u "' + USER + '":"' + PASS + '" --header "Content-Type: audio/wav" --data-binary @' + filename + ' "https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&word_alternatives_threshold=0.9&continuous=true"').read()
