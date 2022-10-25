// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.

const Employee = require('../lib/Employee');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";

describe("Employee class", () => {
    describe("Initialization", () => {
        // Positive test
        it("Properties of the employee are set on initialization", () => {
            const obj = new Employee(egName, egId, egEmail);
    
            expect(obj.name).toEqual(egName);
            expect(obj.id).toEqual(egId);
            expect(obj.email).toEqual(egEmail);
        })

        it("Throw error: No parameters", () => {
            const cb = () => new Employee();
            const err = new Error(
                "Expected 3 parameters, recieved 0"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: No name", () => {
            const cb = () => new Employee(egName);
            const err = new Error(
                "Expected 3 parameters, recieved 1"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: No name", () => {
            const cb = () => new Employee(egName, egId);
            const err = new Error(
                "Expected 3 parameters, recieved 2"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Name not string", () => {
            const cb = () => new Employee(egId, egId, egEmail);
            const err = new Error(
                "Expected a string as the name parameter, recived a non-string"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Name not number", () => {
            const cb = () => new Employee(egName, egName, egEmail);
            const err = new Error(
                "Expected a number as the id parameter, recived non-number"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Name not string", () => {
            const cb = () => new Employee(egName, egId, egId);
            const err = new Error(
                "Expected a string as the email parameter, recived non-string"
            );

            // Assert
            expect(cb).toThrowError(err);
        })
    })

    describe("Methods", () => {
        it("getName method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getName()).toBe(egName);
        })

        it("getName method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getId()).toBe(egId);
        })

        it("getName method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getEmail()).toBe(egEmail);
        })

        it("getName method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getRole()).toBe("Employee");
        })

    })
})