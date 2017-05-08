import { AlleDrogoPage } from './app.po';

describe('alle-drogo App', () => {
  let page: AlleDrogoPage;

  beforeEach(() => {
    page = new AlleDrogoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
