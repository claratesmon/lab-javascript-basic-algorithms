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

if (result > 0) {
    console.log("The driver's name goes first.")
} else if (result < 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (result = 0) {
    console.log("What?! You both have the same name?")

}



    


