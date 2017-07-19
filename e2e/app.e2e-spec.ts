import { Angular2EventsPage } from './app.po';

describe('angular2-events App', () => {
  let page: Angular2EventsPage;

  beforeEach(() => {
    page = new Angular2EventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
