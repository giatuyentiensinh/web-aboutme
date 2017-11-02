import { TuyenngWebPage } from './app.po';

describe('tuyenng-web App', () => {
  let page: TuyenngWebPage;

  beforeEach(() => {
    page = new TuyenngWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
