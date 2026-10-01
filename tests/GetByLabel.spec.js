import {test, expect} from '@playwright/test';
test('LaunchBrowser',async({page})=>{
  
   await page.goto ('https://www.saucedemo.com/')
  
//    await page.goto('https://www.saucedemo.com/')

await page.getByLabel('Username').fill('Saathappan')

await page.getByLabel('Password').fill('Saathappan')

await page.getByRole('button', { name: 'login'}).click();

 await page.waitForTimeout(10000);

    await page.close();
}
);