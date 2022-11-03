const stringArr = ['hi', 'bye', 'hello'];

let string = 'hi there Daria'
let checkString = stringArr[0];

const regex = new RegExp(`${checkString}`)

string = string.replace(regex, 'hello');

console.log(string);

const library = {
    "Whatever float's your boat" : "We can do whatever you want",
    "Monkey business" : "When something is ridiculous",
    "It's a piece of cake" : "It's easy"
};

//loop through the contents of the library
for (const idiom in library) {
    //create new regex with the current idiom
    const regex = new RegExp(`${idiom}`);
    const body = document.querySelector('body');
    bodyInnerText = body.innerText;
    const match = bodyInnerText.match(regex);
    //if any of the current idioms match with content on the web page, run the functionality for the user
    if (match) {
        giveMeaning(idiom);
    }
}

console.log(library);