describe('articles', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.task('cleanDB');
    cy.task('createArticle', { title: 'test1' });
    cy.task('createArticle', { title: 'test2' });
    cy.visit('/articles');
  });
  it('shows all articles in DB', () => {
    cy.contains('test1');
    cy.contains('test2');
  });

  it('can navigate to an article details', () => {
    cy.contains('test1').click();
    cy.url().should('match', /\/articles\/\d+/);
  });
});
