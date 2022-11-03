// to work with api:
// npm install deepl-node

import * as deepl from 'deepl-node';
let string = 'Whatever floats your boat!';

const authKey = "???"; // Replace with your key
const translator = new deepl.Translator(authKey);

// example of translation
(async () => {
    const result = await translator.translateText(string, null, 'fr');
    console.log(result.text); // Bonjour, le monde !
})();