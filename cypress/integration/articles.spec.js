describe('articles', () => {
  it('shows all articles in DB', () => {
    cy.task('cleanDB');
    cy.task('createArticle', { title: 'test1' });
    cy.task('createArticle', { title: 'test2' });
    cy.visit('/articles');
    cy.contains('test1');
    cy.contains('test2');
  });
});
