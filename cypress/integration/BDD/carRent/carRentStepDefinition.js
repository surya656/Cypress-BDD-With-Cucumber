/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";
import CarRentHomePage from "../../pages/CarRentHomePage"
import CarRentDetailsPage from "../../pages/CarRentDetailsPage"
import CarRentSummaryPage from "../../pages/CarRentSummaryPage"


const carRentHomePage = new CarRentHomePage()
const carRentDetailsPage = new CarRentDetailsPage()
const carRentSummaryPage = new CarRentSummaryPage()
let todaysDate = moment()
let todaysDateString = todaysDate.format("YYYY-MM-DD");
let tomorrowsDateString, yesterdaysDateString;



Given('I navigate to Car Rent Page',()=>{
    cy.visit(Cypress.env('url'))
})

// scenario 1
When('I select Country with Valid City',(dataTable)=>{
   carRentHomePage.SelectCountry(dataTable.rawTable[1][0])
   carRentHomePage.SelectCity(dataTable.rawTable[1][1])
})

And('Enter Valid Todays Date for Pickup and Drop-off',()=>{
    carRentHomePage.EnterPickupDate(todaysDateString)
    carRentHomePage.EnterDropOffDate(todaysDateString)
})

And('Click on Search button',()=>{
    carRentHomePage.ClickOnSearchButton()
})

Then('Validate able to see List of Cars',()=>{
    carRentHomePage.ValidateCarDetailsTableDisplayed()
})

// scenario 2
And('Enter Valid Future Date for Pickup and Drop-off',(dataTable)=>{
    const tomorrowsDate = todaysDate.add("days", dataTable.rawTable[0][1]);
     tomorrowsDateString = moment(tomorrowsDate).format("YYYY-MM-DD");
    carRentHomePage.EnterPickupDate(todaysDateString)
    carRentHomePage.EnterDropOffDate(tomorrowsDateString)
})

When('Rent First Car Availabe',()=>{
    carRentHomePage.RentFirstCar()
})

And('Validate Car Details with Valid Dates',(dataTable)=>{ 
    carRentDetailsPage.ValidateCarDetails(dataTable.rawTable[1][0],dataTable.rawTable[1][1],todaysDateString,tomorrowsDateString)
})

And('Click On Rent button',()=>{
    carRentDetailsPage.ClickOnCarRentButton()
})

And('Enter The Personal Details to Rent a Car',(dataTable)=>{
    cy.url().should('contain',"rent")
    carRentSummaryPage.EnterName(dataTable.rawTable[0][1])
    carRentSummaryPage.EnterLastName(dataTable.rawTable[1][1])
    carRentSummaryPage.EnterCardNumber(dataTable.rawTable[2][1])
    carRentSummaryPage.EnterEmailId(dataTable.rawTable[3][1])
})

Then('Click on Rent button to Confirm',()=>{
    carRentSummaryPage.ClickToRentCar()
})

// scenario 3
And('I Enter Car Model',(dataTable)=>{
    carRentHomePage.EnterCarModel(dataTable.rawTable[0][1])
})


Then('Validate able to see List of Cars For particular Model',(dataTable)=>{
    carRentHomePage.ValidateCarWithModelDiplayed(dataTable.rawTable[0][1])
})

// scenario 4
And('Enter Invalid Date for Pickup and Drop-off',(dataTable)=>{
    const yesterdaysDate = todaysDate.subtract(dataTable.rawTable[0][1],"days")
    yesterdaysDateString = moment(yesterdaysDate).format("YYYY-MM-DD");
   carRentHomePage.EnterPickupDate(yesterdaysDateString)
   carRentHomePage.EnterDropOffDate(yesterdaysDateString)
})

And('Validate Car Details with Invalid Dates',(dataTable)=>{
    carRentDetailsPage.ValidateCarDetails(dataTable.rawTable[1][0],dataTable.rawTable[1][1],yesterdaysDateString,yesterdaysDateString)
})