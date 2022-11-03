// const stringArr = ['hi', 'bye', 'hello'];

// let string = 'hi there Daria'
// let checkString = stringArr[0];

// const regex = new RegExp(`${checkString}`)

// string = string.replace(regex, 'hello');

// console.log(string);

const matchObj = {};

const library = {
    "Whatever float's your boat" : "We can do whatever you want",
    "Monkey business" : "When something is ridiculous",
    "It's a piece of cake" : "It's easy",
    "Hang in there" : "don't give up"
};

const body = document.querySelector('body');

//loop through the contents of the library
for (const idiom in library) {
    //create new regex with the current idiom
    const regex = new RegExp(`${idiom}`);
    bodyInnerText = body.innerText;
    const match = bodyInnerText.match(regex);
    //if any of the current idioms match with content on the web page, run the functionality for the user
    if (match) {
        console.log('Match!');
        matchObj[idiom] = library[idiom];
        console.log(matchObj);
        // giveMeaning(idiom, regex);   
    }
}

// function giveMeaning(idiom, regex) {
//     elArr = document.querySelectorAll('*');
//     //select the term in the page
//     for (let i = 0; i < elArr.length; i++) {
//         if (elArr[i].innerText.match(regex)) {
//             console.log('Found the very specific match');
//             console.log(elArr[i].innerText);
//         }
//     }
//     //highlight it, insert the definition next to it
//     //select the element and replace it with the same words but enclosed with specific style tags
// }

function popUp () {
 return;   
}

sampleTitle = document.createElement('h1');
sampleTitle.innerText = "HEY ITS KEVIN AND JASON"
body.appendChild(sampleTitle);

console.log('extension is working');