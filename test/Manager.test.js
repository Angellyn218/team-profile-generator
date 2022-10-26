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
    })

    // Methods
    describe("Methods", () => {
        it("getRole method returns 'Manager' as role", () => {
            const obj = new Manager(egName, egId, egEmail, egOfficeNumber);

                expect(obj.getRole()).toBe("Manager");
        })
    })
}) 