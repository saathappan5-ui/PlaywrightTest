import {test, expect} from '@playwright/test';
test('LaunchBrowser',async({page})=>{
   await page.goto ('https://www.snapdeal.com/')
    await page.locator('#search-box-input').fill('Amazon')
 //  await page.getByRole('textarea', {id:'search-box-input'}).fill('Amazon')
   await page.keyboard.press('Enter')
}
);