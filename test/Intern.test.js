// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Intern = require('../lib/Intern');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";
const egSchool = "The School for Builders";

describe("Intern Class", () => {
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