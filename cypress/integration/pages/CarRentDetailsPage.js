/// <reference types="Cypress" />

class CarRentDetailsPage{
    // validate car details i.e contry,city,pickup and drop off date
    ValidateCarDetails(countryOption,cityOption,pickupDate,DropoffDate){
        cy.url().should('contain','details')
        cy.contains(countryOption).should('be.visible')
        cy.contains(cityOption).should('be.visible')
        cy.contains('h6',' Pickup date:').should('be.visible').and('contain',pickupDate)
        cy.contains('h6',' Dropoff date: ').should('be.visible').and('contain',DropoffDate)
    }

    // click on rent button
    ClickOnCarRentButton(){
        cy.contains('a',"Rent!").should('be.visible').click()
    }

}

export default CarRentDetailsPage;
