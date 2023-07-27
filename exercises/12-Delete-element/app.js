let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(nameOfPerson) {
    let deleteArray = people.filter((x) => x != nameOfPerson);
    return deleteArray
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
