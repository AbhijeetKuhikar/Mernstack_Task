let student1 = {
    name: "Abhijeet kuhikar",
    phone: 9112611221,
    status: true,
    address: "vaishali nagar nagpur",
    intrest: ["Rubiks Cube"],
    contactPerson: {
        name: "Shrujal mankar",
        phone: 8857032120
    }
}

for (let key in student1) {
    console.log(key + " : " + student1[key]);
} 
console.log(" ");
console.log(student1.name);
console.log(student1.phone);
console.log(student1.address);
console.log(student1.intrest);
console.log(student1.contactPerson);