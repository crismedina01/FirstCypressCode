/// <reference types="cypress" />

//describe keyword helps user give a descriptive description of test suite

describe('Verify Wikipedia Home Page', () => {

    //beforeEach is used to run a certain set of code prior to the start of each test case,
    //useful for things like repetitive login

    //beforeEach('code for every test', () =>{
    //repetitive code like login credentials
    //})

    //it is used for each specific test case. Contains the actual code in curly brackets

    /********
    This test case helps me identify all selectors and practice using the VISIT and GET functions
    *********/

    it('Find all selectors for Wikipedia logo', () => {

        cy.visit('https://www.wikipedia.org/');

        //by Tag name
        cy.get('img')//.should('be.visible');

        //by ID
        cy.get('#www-wikipedia-org')

        //by Class name
        cy.get('.central-featured-logo')

        //by Attribute name
        cy.get('[alt]')

        //by Attribute name and value
        cy.get('[alt="Wikipedia"]')

        //by Class value. Note searching by 'Class value' requires entire Class name
        cy.get('[class="central-featured-logo"]')

        //by Tag name and Attribute with value
        cy.get('img[alt="Wikipedia"]')

        //by two different attributes
        cy.get('[width="200"][height="183"]')

        //by tag name, Attribute with value, and Class name
        cy.get('img[alt="Wikipedia"].central-featured-logo')

        //cy.get('#logo').should('be.visible');
    })
    /*
        it('Verify Wikipedia logo is visible', () => {
    
        })
        */

    /***********
    Test out the Search from Homepage feature of Wikipedia
    ************/

    it('Search Cypress in Wikipedia Homepage', () => {

        cy.get('#searchInput')
            .type('Cypress{enter}')

    })

    /***********
    Test out the Search from Childpage feature of Wikipedia
    ************/

    it('Search Cypress Automation in Wikipedia Childpage', () => {

        cy.get('[type="search"]#searchInput')
            .click()
            .type('Los Angeles{enter}')
    })

    /***********
    Test out an Assertion that we are in the correct Wikipedia page

    Here, I use Contains() to locate the side quick facts table for LA city
    The Then() function is next called to store the code seen in Contains() to avoid duplication
    Afterwards, the Text() function is used to locate the specific text seen in the table headers
        and save them to unique variables
    The Expect() assertions are called last to check and confirm whether we are on the correct Wikipedia page

    NOTE this testcase became JQuery
    ************/

    it('Verify we are in Los Angeles City Wikipedia Page', () => {
        /*
                cy.contains('.vcard', 'Los Angeles, California')
                    .find('[class="fn org"]')
                    .should('contain', 'Los Angeles, California')
        
                cy.contains('.vcard', 'Los Angeles, California')
                    .find('.category')
                    .should('contain', 'City')
        */
        cy.contains('.vcard', 'Los Angeles, California').then(losAngelesTableCard => {
            const cityName = losAngelesTableCard.find('[class="fn org"]').text()
            const locationCategory = losAngelesTableCard.find('.category').text()
            expect(cityName).to.equal('Los Angeles, California')
            expect(locationCategory).to.equal('City')
        })
    })
})