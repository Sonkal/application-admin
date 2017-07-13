import { ApplicationAdminPage } from './app.po';

describe('application-admin App', () => {
  let page: ApplicationAdminPage;

  beforeEach(() => {
    page = new ApplicationAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
