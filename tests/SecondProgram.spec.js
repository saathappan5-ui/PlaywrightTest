import {test, expect} from '@playwright/test';
test('LaunchBrowser',async({page})=>{
   await page.goto ('https://demo.playwright.dev/todomvc/#/')

await page.getByPlaceholder('What needs to be done?').fill('Amazon')
 //   await page.getByPlaceholder('placeholder="What needs to be done?').fill('Amazon')

   await page.keyboard.press('Enter')

   await page.getByText('Amazon').click();

 await page.waitForTimeout(10000);

    await page.close();
}
);