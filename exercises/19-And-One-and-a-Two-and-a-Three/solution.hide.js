let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let contactArr = []
for(let key in contact){
    // Code goes here
    contactArr.push(key + " : " + contact[key])
}
console.log(contactArr)
