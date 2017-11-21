
var elements = document.querySelectorAll('*:not(head):not(script):not(style):not(meta):not(title):not(img):not(footer):not(link)');
var targetLanguage = 'es';
var dictionary = {};

if(elements) {

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
      let node = element.childNodes[j];

      if (node.nodeType === 3) {
        let text = node.nodeValue;
        let textSansPunctuation = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g,"");
        let textSansNewLines = textSansPunctuation.replace(/\n/g, ' ')
        let textSansExtraWhitespace = textSansNewLines.replace(/\s{2,}/g," ");
        let enWords = textSansExtraWhitespace.split(' ');
        let xhr = {};

        enWords.forEach((enWord, t) => {
          if (!/\d/.test(enWord) && !dictionary[enWord]) {
            xhr[enWord] = new XMLHttpRequest();
            xhr[enWord].open("POST", "https://translation.googleapis.com/language/translate/v2?key=YOUR-GOOGLE-TRANSLATE-API-HERE", true)

            xhr[enWord].onreadystatechange = function() {
              if (xhr[enWord].readyState === 4) {
                let esTranslatedWord = JSON.parse(xhr[enWord].response).data.translations[0].translatedText
                dictionary[enWord] = esTranslatedWord;
                if (t === enWords.length-1 && i === elements.length-1) {
                  chrome.runtime.sendMessage({dictionary: dictionary})
                }
              }
            }

            xhr[enWord].send(JSON.stringify({ "q": enWord, "target": targetLanguage, "source": "en" }))
          }
        })

      }

    }

  }

}