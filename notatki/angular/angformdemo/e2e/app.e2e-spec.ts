import { AngformdemoPage } from './app.po';

describe('angformdemo App', () => {
  let page: AngformdemoPage;

  beforeEach(() => {
    page = new AngformdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
