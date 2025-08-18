function Check_Password(password) {

    let condition = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,15}$/;

    if (condition.test(password)) {
        return "Valid Password";
    } else {
        return "Invalid Password";
    }
}
console.log(Check_Password("Pass@1234"));
console.log(Check_Password("isitcorect"));
console.log(Check_Password("HelloWorld1!"));