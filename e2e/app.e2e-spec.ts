import { AngularChangeDetectionExamplePage } from './app.po';

describe('angular-change-detection-example App', () => {
  let page: AngularChangeDetectionExamplePage;

  beforeEach(() => {
    page = new AngularChangeDetectionExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
