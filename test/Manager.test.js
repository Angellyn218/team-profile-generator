// officeNumber
// getRole()—overridden to return 'Manager'

const Manager = require('../lib/Manager');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";
const egOfficeNumber = 1;

describe("Manager Class", () => {
    // Initialization
    describe("Initialization", () => {
        // Positive Test
        it("Properties of the employee are set on initialization", () => {
            const obj = new Manager(egName, egId, egEmail, egOfficeNumber);

            expect(obj.name).toEqual(egName);
            expect(obj.id).toEqual(egId);
            expect(obj.email).toEqual(egEmail);
            expect(obj.officeNumber).toEqual(egOfficeNumber);
        })

        // Throw Errors
        // it("Throw error: No parameters", () => {
        //     const cb = () => new Manager();

        //     // Assert
        //     expect(cb).toThrow();
        // })

        // it("Throw error: Id not a number", () => {
        //     const cb = () => new Manager(egName);
        //     const err = new Error(
        //         "Expected a number as the id parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Email not a string", () => {
        //     const cb = () => new Manager(egName, egId);
        //     const err = new Error(
        //         "Expected a string as the email parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Office Number not a number", () => {
        //     const cb = () => new Manager(egName, egId, egEmail);
        //     const err = new Error(
        //         "Expected a number as the office number parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Name not number", () => {
        //     const cb = () => new Manager(egId, egId, egEmail, egOfficeNumber);
        //     const err = new Error(
        //         "Expected a string as the name parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Id not string", () => {
        //     const cb = () => new Manager(egName, egName, egEmail, egOfficeNumber);
        //     const err = new Error(
        //         "Expected a number as the id parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Email not string", () => {
        //     const cb = () => new Manager(egName, egId, egId, egOfficeNumber);
        //     const err = new Error(
        //         "Expected a string as the email parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })

        // it("Throw error: Office Number not number", () => {
        //     const cb = () => new Manager(egName, egId, egEmail, egEmail);
        //     const err = new Error(
        //         "Expected a number as the office number parameter"
        //     );

        //     // Assert
        //     expect(cb).toThrowError(err);
        // })
    })

    // Methods
    describe("Methods", () => {
        it("getRole method returns 'Manager' as role", () => {
            const obj = new Manager(egName, egId, egEmail, egOfficeNumber);

                expect(obj.getRole()).toBe("Manager");
        })
    })
}) 