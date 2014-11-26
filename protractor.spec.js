// spec.js
describe('angularjs homepage', function() {
  it('should work', function() {
    browser.get('http://localhost:3000');

    expect(element(by.id('the_number')).getText())
        .toEqual('0');
    element(by.id('the_button')).click();
    expect(element(by.id('the_number')).getText())
        .toEqual('1');

  });
});
