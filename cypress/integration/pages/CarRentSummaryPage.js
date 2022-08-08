/// <reference types="Cypress" />

class CarRentSummaryPage{

    // enter name
    EnterName(name){
        cy.get('input[placeholder="Name"]').should('be.visible').type(name)
    }

    // enter lastname
    EnterLastName(lastName){
        cy.get('input[placeholder="Last name"]').should('be.visible').type(lastName)
    }

    // enter card number
    EnterCardNumber(cardNumber){
        cy.get('input[placeholder="Card number"]').should('be.visible').type(cardNumber)
    }

    // enter email id
    EnterEmailId(emailId){
        cy.get('input[placeholder="Email"]').should('be.visible').type(emailId)
    }

    // click on rent car
    ClickToRentCar(){
        cy.contains('button','Rent').should('be.visible').click()
    }

}

export default CarRentSummaryPage;