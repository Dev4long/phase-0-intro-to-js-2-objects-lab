let employee = {
    name: 'Sam' , 
    streetAddress:'11 Broadway'
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign ({},employee, {[key] : value});
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key , value) {
    return Object.assign (employee, {[key] : value});
}
function deleteFromEmployeeByKey (employee, key) {
    let newObject= Object.assign ({},employee);
    delete newObject[key]
    return newObject

}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    let newEmployee = Object.assign (employee);
    delete newEmployee[key]
    return newEmployee 
}