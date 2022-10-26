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
    describe("Initialization", () => {
        // Positive Test
        it("Properties of the employee are set on initialization", () => {
            const obj = new Engineer(egName, egId, egEmail, egGithub);

            expect(obj.name).toEqual(egName);
            expect(obj.id).toEqual(egId);
            expect(obj.email).toEqual(egEmail);
            expect(obj.github).toEqual(egGithub);
        })
    })

    // Methods
    describe("Methods", () => {
        it("getGithub method returns gihub link", () => {
            const obj = new Engineer(egName, egId, egEmail, egGithub);

                expect(obj.getGithub()).toBe("https://github.com/" + egGithub);
        })

        it("getRole method returns 'Engineer' as role", () => {
            const obj = new Engineer(egName, egId, egEmail, egGithub);

                expect(obj.getRole()).toBe("Engineer");
        })
    })
})