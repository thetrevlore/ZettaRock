
for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let replacedText = text;

            for (var enWord in dictionary) {
                replacedText = replacedText.replace(enWord, dictionary[enWord])
            }

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
