
describe('Pizza App', () => {

 
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
   
   

   
    
    const button = () => cy.get('button[id="order-pizza"]');
    const name = () => cy.get('input[name=name]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const ham = () => cy.get('input[name=ham]');
    const bananaPeppers = () => cy.get('input[name=bananaPeppers]');
    const dropdown = () => cy.get('select[id="size-dropdown"]');
    const peppa = () => cy.get('input[name=pepperoni]');
    const onion = () => cy.get('input[name=onions]');
    const special = () => cy.get('input[name=special]');
    const orderButton = () => cy.get('button[id="order-button"]')
    
    it('can enter form page', () => {
        button().click()   
      
       })



    describe('can enter data and submit', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/pizza')
        })

        it('elements exist', () => { 
            name().should('exist')  
            pepperoni().should('exist')   
            ham().should('exist')   
            bananaPeppers().should('exist')    
            dropdown().should('exist')   
        })

        it('can type name', () => {
            name().type('Michael Thompson')
            name().should('have.value', 'Michael Thompson')
        })

        it('can select a size', () => {
            dropdown().select('small').should('have.value', 'small')
        })

        it('can select multiple toppings', () => {
            peppa().click()
            onion().click()
        })

        it('can type special instruction', () => {
            special().type('learn to code, idiot')
            special().should('have.value', 'learn to code, idiot')
        })

        it('can submit form', () => {
           orderButton().click() 
        })


    })



})

// it('', () => {})