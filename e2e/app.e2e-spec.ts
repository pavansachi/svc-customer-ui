import { SvcCustomerUiPage } from './app.po';

describe('svc-customer-ui App', function() {
  let page: SvcCustomerUiPage;

  beforeEach(() => {
    page = new SvcCustomerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
