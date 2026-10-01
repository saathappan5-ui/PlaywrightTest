import {test, expect} from '@playwright/test';
test('LaunchBrowser',async({page})=>{
  
   await page.goto ('https://www.saucedemo.com/')

await expect(page).toHaveScreenshot('example.png', {
    threshold: 0.3,             // Perceived color difference per pixel (0 to 1, default is 0.2)
    maxDiffPixels: 100,         // Absolute number of allowed differing pixels
    maxDiffPixelRatio: 0.01,    // Ratio of allowed differing pixels (0 to 1)
  });
});