describe('articles', () => {
  it('shows all articles in db', async () => {
    cy.task('cleanDb');
    cy.task('createArticle', { title: 'test', content: 'test content' });
    cy.task('createArticle', { title: 'test2', content: 'test content2' });

    cy.visit('/articles');

    cy.contains('test');
    cy.contains('test2');
  });
});
