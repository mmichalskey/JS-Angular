import { AngularservicedemoPage } from './app.po';

describe('angularservicedemo App', () => {
  let page: AngularservicedemoPage;

  beforeEach(() => {
    page = new AngularservicedemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
