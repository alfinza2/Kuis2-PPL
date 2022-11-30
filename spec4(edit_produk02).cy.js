describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/myumkm/index.php/home/')
    cy.get("a[href='http://localhost/myumkm/index.php/administrator']").click()
    cy.get("input[name='username']").type('admin');
    cy.get("input[name='password']").type('admin');
    cy.get("button[class='btn btn-primary btn-block submit']").click()
    cy.visit('http://localhost/myumkm/index.php/admin/produk/super')
    cy.get("a[href='http://localhost/myumkm/index.php/admin/produk/get_edit_admin/67']").click()
    cy.get("input[name='xjudul']").clear().type('meja');
    cy.get('input[type=file]').selectFile('cypress/e2e/images/meja.jfif')
    cy.get('#cke_1_contents > iframe').then($element => {

      const $body = $element.contents().find('body')
    
      let stripe = cy.wrap($body)
      stripe.find('p').eq(0).click().clear().type('meja makan kayu bundar')
    })
    cy.wait(2000)
    cy.get("button[class='btn btn-primary btn-flat pull-right']").click()
  })
})