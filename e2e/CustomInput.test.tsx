import {device,expect} from 'detox';

describe('Custom Input Test', () => {
  beforeAll(async () => await device.launchApp());
  
  it('should display placeholder text in the input field', async () => {
    await expect(element(by.id('custom-input'))).toBeVisible()
    await expect(element(by.id('custom-input'))).toHaveText('Email');
  });
});
