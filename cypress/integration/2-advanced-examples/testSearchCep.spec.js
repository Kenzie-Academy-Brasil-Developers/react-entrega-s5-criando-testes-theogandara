context("Search CEP", () => {
  it("Search CEP", () => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1440, 900)

    cy.get('input').type("18406340")
    cy.get('.primary').click()

    cy.get(':nth-child(2) > :nth-child(2) > input').type("3099")
    cy.get(':nth-child(2) > .inline > .fluid > input').type("Teste Finalizado !")
  })
})