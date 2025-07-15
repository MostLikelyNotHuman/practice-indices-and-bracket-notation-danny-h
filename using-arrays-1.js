
//Create array
let booksArray = [
    ["A Tale of Two Cities", "The Little Prince", "The Alchemist"],
    ["Harry Potter and the Philosopher's Stone", "And Then There Were None", "Dream of the Red Chamber"],
    ["The Hobbit", "Alice's Adventures in Wonderland", "She: A History of Adventure"]
]

//Access and log all elements using bracket notation with numbers
console.log(`The books on shelf 1 are: ${booksArray[0][0]}, ${booksArray[0][1]}, ${booksArray[0][2]}`);
console.log(`The books on shelf 2 are: ${booksArray[1][0]}, ${booksArray[1][1]}, ${booksArray[1][2]}`);
console.log(`The books on shelf 3 are: ${booksArray[2][0]}, ${booksArray[2][1]}, ${booksArray[2][2]}`);

//Access and log all the elements in the array using bracket notation with variables as indices

for (let row = 0; row < booksArray.length; row++) {
    console.log(`The books on shelf ${row + 1} are: `)
    for (let item = 0; item < booksArray[row].length; item++) {
        console.log(booksArray[row][item]);
    }
}

//Write a loop that prints all the items on the second shelf

for (let column = 0; column < booksArray[1].length; column++) {
    console.log(`The book in position ${column + 1} in row 2 is ${booksArray[1][column]}`);
    }