import youtube_dl

options = {
'format': 'bestaudio/best',
'extractaudio': True,
'audioformat': "wav",
'outtmpl': '%(id)s',
'noplaylist': True,
}  # save file as the YouTube ID
with youtube_dl.YoutubeDL(options) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=H8i5OOslFZo'])