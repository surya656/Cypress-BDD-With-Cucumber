Feature: End To End Rent Car Validation

    Rent Car in with Country/City as per Pickup and Drop date

    Background: 
        Given I navigate to Car Rent Page

    @SearchCarWithValidDate
    Scenario: Search a car availabe for todays date with Valid Country,City 
        When I select Country with Valid City
            |Country    | City      |
            |Poland     | Cracow     |
        And Enter Valid Todays Date for Pickup and Drop-off
        And Click on Search button
        Then Validate able to see List of Cars 

    @RentCarWithValidDate
     Scenario: Rent a Car available for future days for respective Country and City 
        When I select Country with Valid City
            |Country    | City     |
            |France    | Paris     |
        And Enter Valid Future Date for Pickup and Drop-off
            |Days       | 5 |
        And Click on Search button
        Then Validate able to see List of Cars   
        When Rent First Car Availabe
        And Validate Car Details with Valid Dates
            |Country   | City     |
            |France    | Paris    |        
        And Click On Rent button
        And  Enter The Personal Details to Rent a Car
            |Name       | Adam          |
            |LastName   | Smith         |
            |Card Number|1234567        |
            |Email Id   |adam@gmail.com |
        Then Click on Rent button to Confirm

    @SearchCarForModel
    Scenario: Search a Car with particular Model for respective Country,City and Date
        When I select Country with Valid City
            |Country    | City      |
            |Germainy   | Berlin    |
        And I Enter Car Model
            |Model  |Suzuki Swift |    
        And Enter Valid Todays Date for Pickup and Drop-off
        And Click on Search button
        Then Validate able to see List of Cars For particular Model
            |Model  |Suzuki Swift |

    @RentCarWithInvalidDate
    Scenario: Rent a Car with Invalid Date with respective Country and City 
        When I select Country with Valid City
            |Country    | City      |
            |Poland     | Wroclaw   |
        And Enter Invalid Date for Pickup and Drop-off
             |Days       | 10 |
        And Click on Search button
        Then Validate able to see List of Cars   
        When Rent First Car Availabe
        And Validate Car Details with Invalid Dates
            |Country   | City     |
            |Poland     | Wroclaw |        
        And Click On Rent button
        And  Enter The Personal Details to Rent a Car
            |Name       | Jim          |
            |LastName   | Joe          |
            |Card Number|987456        |
            |Email Id   |jim@gmail.com |
        Then Click on Rent button to Confirm

