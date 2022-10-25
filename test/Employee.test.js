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
    // Initialization
    // Positive test
    it("Properties of the employee are set on initialization", () => {
        const obj = new Employee(egName, egId, egEmail);

        expect(obj.name).toEqual(egName);
        expect(obj.id).toEqual(egId);
        expect(obj.email).toEqual(egEmail);
    })

    // Throw errors
    it("Throw error: No parameters", () => {
        const cb = () => new Employee();

        // Assert
        expect(cb).toThrow();
    })

    it("Throw error: id not a number", () => {
        const cb = () => new Employee(egName);
        const err = new Error(
            "Expected a number as the id parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: email not a string", () => {
        const cb = () => new Employee(egName, egId);
        const err = new Error(
            "Expected a string as the email parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Name not number", () => {
        const cb = () => new Employee(egId, egId, egEmail);
        const err = new Error(
            "Expected a string as the name parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Id not string", () => {
        const cb = () => new Employee(egName, egName, egEmail);
        const err = new Error(
            "Expected a number as the id parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Email not string", () => {
        const cb = () => new Employee(egName, egId, egId);
        const err = new Error(
            "Expected a string as the email parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    // Methods
    it("getName method returns the name of employee", () => {
        const obj = new Employee(egName, egId, egEmail);

        expect(obj.getName()).toBe(egName);
    })

    it("getId method returns the name of employee", () => {
        const obj = new Employee(egName, egId, egEmail);

        expect(obj.getId()).toBe(egId);
    })

    it("getEmail method returns the name of employee", () => {
        const obj = new Employee(egName, egId, egEmail);

        expect(obj.getEmail()).toBe(egEmail);
    })

    it("get method returns the name of employee", () => {
        const obj = new Employee(egName, egId, egEmail);

        expect(obj.getRole()).toBe("Employee");
    })
})