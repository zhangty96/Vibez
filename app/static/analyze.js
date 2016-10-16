function searchCurKeywords() {
  var phrase = document.getElementById('search').value;
  var keywords = phrase.split(' ');
  var match_locs = searchWords(keywords);
  console.log(match_locs);
  $.draw_bar(match_locs);
}

function searchWords(keywords) {
  if (keywords.length == 1) {
    if (keywords[0] in word_locs) {
      return word_locs[keywords[0]];
    } else {
      return [];
    }
  } else {
    match_locs = [];
    for (var i = 0; i < words.length - keywords.length; i++) {
      if (match(keywords, words, i)) {
        match_locs.append(loc[i]);
      }
    }
    return match_locs;
  }
}

function match(keywords, words, i) {
  for (var j = 0; j < keywords.length; j++) {
    if (keywords[j] != words[i+j]) {
      return false;
    }
    return true;
  }
}
