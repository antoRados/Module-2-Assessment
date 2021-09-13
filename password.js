// Part 2 - Password Validator

console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
console.log("_-_-_-_-_-_-_-_-_-_-_-_Welcome To Your Password Validator_-_-_-_-_-_-_-_-_-_-_-_")
console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")

// Please provide new password to test out the validation
let passwordInput = "Password11"

if(passwordInput.length < 10){
    console.log(`Password is ${passwordInput.length} characters please consider a longer password, for added security.`)
} else {
    console.log(`Password is ${passwordInput.length} characters long, it is secure!`)
}