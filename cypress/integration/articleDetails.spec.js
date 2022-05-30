describe('article details', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.task('cleanDB');
    cy.task('createArticle', { title: 'test1', content: 'testcontent1' }).then(
      (a) => {
        cy.visit(`/articles/${a.id}`);
      }
    );
  });

  it('shows the title and the content of the article', () => {
    cy.contains('test1');
    cy.contains('testcontent1');
  });
});
