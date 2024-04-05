let contact = {
    fullName: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
}

for (let key in contact) {
    // Your code here
 const information = key + ' : ' + contact[key]
 
 console.log(information)
}


