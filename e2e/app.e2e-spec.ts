import { ThamerPage } from './app.po';

describe('thamer App', function() {
  let page: ThamerPage;

  beforeEach(() => {
    page = new ThamerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
