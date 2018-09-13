import { NGElectronPage } from './app.po';

describe('ng-electron App', () => {
  let page: NGElectronPage;

  beforeEach(() => {
    page = new NGElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
