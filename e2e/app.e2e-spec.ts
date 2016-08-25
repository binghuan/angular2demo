import { Bhangular2demoPage } from './app.po';

describe('bhangular2demo App', function() {
  let page: Bhangular2demoPage;

  beforeEach(() => {
    page = new Bhangular2demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
