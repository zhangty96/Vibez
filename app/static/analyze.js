keywordsElemObj = document.getElementById("keywordsElem");
keywordsStr = [];
for (var i = 0; i < keywords.length; i++) {
  keywordsStr.push('<span class="tag tag-primary">' + keywords[i] + '</span>');
}
console.log(keywordsStr.join('\n'));
keywordsElemObj.innerHTML = keywordsStr.join('\n');

function searchCurKeywords() {
  var phrase = document.getElementById('search').value;
  var searchKeywords = phrase.split(' ');
  var match_locs = searchWords(searchKeywords);
  console.log(match_locs);
  $.draw_bar(match_locs);
}

function searchWords(searchKeywords) {
  if (searchKeywords.length === 1) {
    console.log(searchKeywords.length)
    keyword = searchKeywords[0].toLowerCase();
    if (keyword in word_locs) {
      return word_locs[keyword];
    } else {
      return [];
    }
  } else {
    console.log(searchKeywords)
    match_locs = [];
    for (var i = 0; i < words.length - searchKeywords.length; i++) {
      if (match(searchKeywords, words, i)) {
        match_locs.push(locs[i]);
      }
    }
    console.log(match_locs);
    return match_locs;
  }
}

function match(searchKeywords, words, i) {
  for (var j = 0; j < searchKeywords.length; j++) {
    if (searchKeywords[j].toLowerCase() !== words[i+j]) {
      return false;
    }
  }
  return true;
}
