// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Engineer = require('../lib/Engineer');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";
const egGithub = "octocat";

describe("Engineer Class", () => {
    // Initialization
    // Positive Test
    it("Properties of the employee are set on initialization", () => {
        const obj = new Engineer(egName, egId, egEmail, egGithub);

        expect(obj.name).toEqual(egName);
        expect(obj.id).toEqual(egId);
        expect(obj.email).toEqual(egEmail);
        expect(obj.github).toEqual(egGithub);
    })

    // Throw Errors
    it("Throw error: No parameters", () => {
        const cb = () => new Engineer();

        // Assert
        expect(cb).toThrow();
    })

    it("Throw error: Id not a number", () => {
        const cb = () => new Engineer(egName);
        const err = new Error(
            "Expected a number as the id parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Email not a string", () => {
        const cb = () => new Engineer(egName, egId);
        const err = new Error(
            "Expected a string as the email parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Github not a string", () => {
        const cb = () => new Engineer(egName, egId, egEmail);
        const err = new Error(
            "Expected a string as the github parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Name not number", () => {
        const cb = () => new Engineer(egId, egId, egEmail, egGithub);
        const err = new Error(
            "Expected a string as the name parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Id not string", () => {
        const cb = () => new Engineer(egName, egName, egEmail, egGithub);
        const err = new Error(
            "Expected a number as the id parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Email not string", () => {
        const cb = () => new Engineer(egName, egId, egId, egGithub);
        const err = new Error(
            "Expected a string as the email parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("Throw error: Github not string", () => {
        const cb = () => new Engineer(egName, egId, egEmail, egId);
        const err = new Error(
            "Expected a string as the github parameter"
        );

        // Assert
        expect(cb).toThrowError(err);
    })

    it("getGithub method returns gihub link", () => {
        const obj = new Engineer(egName, egId, egEmail, egGithub);

            expect(obj.getGithub()).toBe("https://github.com/" + egGithub);
    })

    // Methods
    it("getRole method returns 'Engineer' as role", () => {
        const obj = new Engineer(egName, egId, egEmail, egGithub);

            expect(obj.getRole()).toBe("Engineer");
    })
})