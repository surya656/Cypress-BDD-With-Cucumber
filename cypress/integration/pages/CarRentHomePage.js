/// <reference types="Cypress" />

import { should } from "chai"

class CarRentHomePage{

    // select country to rent a car
    SelectCountry(countryOption){
        cy.get('select[name="country"]').should('be.visible').invoke('text').then((countryText)=>{
            cy.log(countryText)
            if(countryText != countryOption){
            cy.get('select[name="country"]').select(countryOption).should('contain',countryOption)
            }
        })
    }

    // select city to rent a car
    SelectCity(cityOption){
        cy.get('select[name="city"]').should('be.visible').invoke('text').then((countryText)=>{
            cy.log(countryText)
            if(countryText != cityOption){
                cy.get('select[name="city"]').select(cityOption).should('contain',cityOption)
            }
        })
          
    }

    // enter pickup date to rent a car
    EnterPickupDate(dateText){
        cy.get('input[placeholder="Pick-up"]').should('be.visible').type(dateText)
    }

    // enter drop off date to rent a car
    EnterDropOffDate(dateText){
        cy.get('input[placeholder="Drop-off"]').should('be.visible').type(dateText)
    }

    // click on search button 
    ClickOnSearchButton(){
        cy.contains('button','Search').should('be.visible').click()
    }

    // validate Car deatils table is displayed
    ValidateCarDetailsTableDisplayed(){
        cy.contains('th','Company').should('be.visible')
        cy.contains('th','Model').should('be.visible')
        cy.contains('a','Rent').first().should('be.visible')
    }

    // click on On First car to rent
    RentFirstCar(){
        cy.contains('a','Rent').first().should('be.visible').click()
    }

    // enter car model
    EnterCarModel(carModel){
        cy.get('input[placeholder="Model"]').should('be.visible').type(carModel)
    }

    // validate car details for particular mode
    ValidateCarWithModelDiplayed(carModel){
        cy.contains('th','Company').should('be.visible')
        cy.contains('th','Model').should('be.visible')
        cy.get('tbody tr td:nth-child(3)').each((element,$index)=>{
            cy.get('tbody tr td:nth-child(3)').eq($index).invoke('text').then((modelText)=>{
                expect(modelText).to.equals(carModel)
            })
        })
    }
}

export default CarRentHomePage;