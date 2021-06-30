class toolqapage{

    elements = {

        firstnameInput: () => cy.get('#firstName'),
        lastnameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        phoneInput: () => cy.get('#userNumber')
    }

    typeFirstname (first_name){
        this.data.firstnameInput().type(first_name);
    }

    typeLastname (last_name){
        this.data.lastnameInput().type(last_name);
    }

    typeEmail (email){
        this.data.emailInput().type (email);
    }

    typePhone (phone){
        this.data.phoneInput().type(phone);
    }
}