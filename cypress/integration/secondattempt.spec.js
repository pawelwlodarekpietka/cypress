import toolqapage from '../../pages/toolqapage'

const tests = require('../fixtures/database_en_50.json')

describe("Second Attempt For God's Sake", () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    });
});

tests.forEach(test=> {

    it("Don't know", () => {

        toolqapage.typeFirstname(test.first_name)
        toolqapage.typeLastname(test.last_name)
        toolqapage.typeEmail(test.email)
        toolqapage.typePhone(test.phone)

    })
})