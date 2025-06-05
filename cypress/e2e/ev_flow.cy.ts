describe('EV Flow', () => {
  it('enters hand and sees positive EV', () => {
    cy.visit('/')
    cy.get('input[aria-label="hand"]').type('AhKhQhJhTh')
    cy.get('input[aria-label="pot"]').type('100')
    cy.contains('Calculate').click()
    cy.contains('Net EV')
  })
})
