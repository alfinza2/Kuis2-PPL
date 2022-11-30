describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/myumkm/index.php/home/')
    cy.get("a[href='http://localhost/myumkm/index.php/administrator']").click()
    cy.get("input[name='username']").type('admin');
    cy.get("input[name='password']").type('admin');
    cy.get("button[class='btn btn-primary btn-block submit']").click()
    cy.visit('http://localhost/myumkm/index.php/admin/produk')
    cy.get("a[class='btn btn-success btn-flat']").click()
    cy.get("input[name='xjudul']").type('keripik');
    cy.get("input[name='xharga']").type('10000');
    cy.get("span[title='-Pilih-']").click()
    cy.get(".select2-results__options>li").eq(3).click()
    cy.get('input[type=file]').selectFile('cypress/e2e/images/keripik.jpg')
    cy.get('#cke_1_contents > iframe').then($element => {

      const $body = $element.contents().find('body')
    
      let stripe = cy.wrap($body)
      stripe.find('p').eq(0).click().type('keripik singkong rasa pedas')
    })
    cy.wait(2000)
    cy.get("button[class='btn btn-primary btn-flat pull-right']").click()
  })
})