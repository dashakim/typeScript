function greeter(person:string) {
    return `Hello ${person}`
}
let user = 'John Doe'
document.body.textContent = greeter(user)