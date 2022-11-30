describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/myumkm/index.php/home/')
    cy.get("a[href='http://localhost/myumkm/index.php/administrator']").click()
    cy.get("input[name='username']").type('admin');
    cy.get("input[name='password']").type('admin');
    cy.get("button[class='btn btn-primary btn-block submit']").click()
    cy.visit('http://localhost/myumkm/index.php/admin/produk/super')
    cy.get("a[data-target='#ModalHapus67']").click()
    cy.wait(2000)
    cy.get("div.modal-footer>button").eq(1).click()
  })
})