import { CSC468DemoPage } from './app.po';

describe('csc468-demo App', () => {
  let page: CSC468DemoPage;

  beforeEach(() => {
    page = new CSC468DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
