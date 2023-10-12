// Iteration 1: Names and Input


const hacker1 = "Michael"

const hacker2 = "Dwight"


console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

/* for (let i = 0; i < hacker1.length; i++) {

    for (let j = 0; j < hacker1.length; i++) {

        if (hacker1.length > hacker2.length) {

            console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
            
            } else if (hacker1.length < hacker2.length) {

                console.log (`The navigator's has the longest name, it has ${hacker2.length} characters`)
            }
        }
    } */

    if (hacker1.length > hacker2.length) {

        console.log (`The driver has the longest name, it has ${hacker1.length} characters`)

    }  else if (hacker1.length < hacker2.length) {

        console.log (`The driver has the longest name, it has ${hacker1.length} characters`)

    }


// Iteration 3: Loops



// for (const characters of hacker1) // Vertical print

//let uppercasedName = characters.toUpperCase() Vertical print

    

let uppercasedName = ""

for (let i = 0; i < hacker1.length; i++) {
   uppercasedName += hacker1[i].toUpperCase() + " "
    
}
console.log(uppercasedName)


let nameReversed = ""

for (let i = hacker1.length -1; i >= 0; i--) {
    nameReversed += hacker1[i]
}

console.log(nameReversed)

const result = hacker1.localeCompare(hacker2)

if (result < 0) {
    console.log("The driver's name goes first.")
} else if (result > 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (result = 0) {
    console.log("What?! You both have the same name?")

}

///// BONUS-01




const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum euismod libero, id semper ligula euismod sed. Sed id est ligula. Etiam gravida elementum odio sit amet lobortis. Fusce mauris ligula, condimentum nec hendrerit auctor, sagittis in sapien. In fringilla tincidunt pretium. Sed eget efficitur mi, vel pellentesque arcu. Nulla at congue augue. Curabitur finibus, massa nec luctus laoreet, tortor diam dapibus massa, eu scelerisque tellus elit in metus. Pellentesque maximus diam accumsan erat laoreet, placerat condimentum est lobortis. Etiam eget mi arcu. Nullam consectetur sed lacus sed consequat. Sed dapibus mi in mi fermentum, at mollis diam feugiat. Sed interdum augue in consequat cursus. Nulla arcu neque, ultricies at felis nec, pharetra ullamcorper mauris. Integer a nibh dictum, euismod libero vel, consequat lorem. Nullam nec lectus pellentesque, venenatis tortor in, convallis dui. Aliquam eu risus porta, volutpat lorem a, consectetur massa. Nulla facilisi. Quisque pellentesque purus a ultrices ornare. Curabitur sollicitudin egestas accumsan. Integer eu gravida dui, quis efficitur felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tristique metus dui, vitae viverra neque auctor eleifend. Vivamus consectetur ligula leo, eget placerat purus finibus vel. Praesent tristique, ligula ac mattis lobortis, ligula quam eleifend ligula, vitae laoreet leo lorem at nibh. Suspendisse leo mi, gravida a dictum nec, mattis dictum ipsum. Mauris felis nunc, dictum id pellentesque ut, porttitor in ipsum. Proin nec sagittis enim, a cursus augue. Praesent elementum auctor sollicitudin. Vivamus dolor erat, cursus nec accumsan posuere, iaculis vitae diam. Maecenas aliquam odio et felis tempus pellentesque. Mauris at dictum nulla."

function numberOfWords (lorem) {

    let count = 0;
    let check = false;

    for (let i = 0; i < longText.length; i++) {
        if (longText[i] !== " " && !check) {
            count ++;
        } else if (longText[i] === " ") {
            check = false;
        }
    }
    return count; 
}



numberOfWords(longText)
console.log(numberOfWords(longText))


