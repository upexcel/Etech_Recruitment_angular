import { HrrecclimaterialPage } from './app.po';

describe('hrrecclimaterial App', () => {
  let page: HrrecclimaterialPage;

  beforeEach(() => {
    page = new HrrecclimaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
