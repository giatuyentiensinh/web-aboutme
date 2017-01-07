import { WebAboutmePage } from './app.po';

describe('web-aboutme App', function() {
  let page: WebAboutmePage;

  beforeEach(() => {
    page = new WebAboutmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
