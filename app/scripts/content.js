// 'use strict';


// const Translate = requirejs('@google-cloud/translate');
require(['@google-cloud/translate'], function (Translate) {
  //foo is now loaded.
});
// define(function (require) {
//   var Translate = require('google-cloud/translate');
// });
// const translate = new Translate();

// var elements = document.getElementsByTagName('*');

// const target = 'ru';
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];
        
//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             translate
//             .translate(text, target)
//             .then(results => {
//               let translations = results[0];
//               translations = Array.isArray(translations) ? translations : [translations];
          
//             //   console.log('Translations:');
//               translations.forEach((translation, i) => {
//                 //   if (text[i] === 'apple') {
//                       var replacedText = text.replace('apple', translation);
//                       element.replaceChild(document.createTextNode(replacedText), node);
//                 //   }
//                 // console.log(`${text[i]} => (${target}) ${translation}`);
//               });
//             })
//             .catch(err => {
//               console.error('ERROR:', err);
//             });
            

//             // if (replacedText !== text) {
                
//             // }
//         }
//     }
// }

// Imports the Google Cloud client library
// const Translate = require('@google-cloud/translate');

// Creates a client
// const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'Hello, world!';


// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.
// translate
//   .translate(text, target)
//   .then(results => {
//     let translations = results[0];
//     translations = Array.isArray(translations)
//       ? translations
//       : [translations];

//     console.log('Translations:');
//     translations.forEach((translation, i) => {
//       console.log(`${text[i]} => (${target}) ${translation}`);
//     });
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });