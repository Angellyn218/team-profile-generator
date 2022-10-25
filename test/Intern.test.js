// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Engineer = require('../lib/Engineer');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";
const egSchool = "The School for Builders";

describe("Engineer Class", () => {
    // Initialization
    describe("Initialization", () => {
        // Positive Test
        it("Properties of the employee are set on initialization", () => {
            const obj = new Intern(egName, egId, egEmail, egSchool);

            expect(obj.name).toEqual(egName);
            expect(obj.id).toEqual(egId);
            expect(obj.email).toEqual(egEmail);
            expect(obj.school).toEqual(egSchool);
        })

        // Throw Errors
        it("Throw error: No parameters", () => {
            const cb = () => new Intern();

            // Assert
            expect(cb).toThrow();
        })

        it("Throw error: Id not a number", () => {
            const cb = () => new Intern(egName);
            const err = new Error(
                "Expected a number as the id parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Email not a string", () => {
            const cb = () => new Intern(egName, egId);
            const err = new Error(
                "Expected a string as the email parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Github not a string", () => {
            const cb = () => new Intern(egName, egId, egEmail);
            const err = new Error(
                "Expected a string as the school parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Name not number", () => {
            const cb = () => new Intern(egId, egId, egEmail, egSchool);
            const err = new Error(
                "Expected a string as the name parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Id not string", () => {
            const cb = () => new Intern(egName, egName, egEmail, egSchool);
            const err = new Error(
                "Expected a number as the id parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Email not string", () => {
            const cb = () => new Intern(egName, egId, egId, egSchool);
            const err = new Error(
                "Expected a string as the email parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })

        it("Throw error: Github not string", () => {
            const cb = () => new Intern(egName, egId, egEmail, egId);
            const err = new Error(
                "Expected a string as the school parameter"
            );

            // Assert
            expect(cb).toThrowError(err);
        })
    })

    // Methods
    describe("Methods", () => {
        it("getSchool method returns school", () => {
            const obj = new Intern(egName, egId, egEmail, egSchool);

                expect(obj.getSchool()).toBe(egSchool);
        })

        it("getRole method returns 'Intern' as role", () => {
            const obj = new Intern(egName, egId, egEmail, egSchool);

                expect(obj.getRole()).toBe("Intern");
        })
    })
})