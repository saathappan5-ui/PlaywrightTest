import {test} from '@playwright/test'

test('checkbox', async({page}) =>

    {
await page.goto("https://demo.automationtesting.in/Register.html")


await page.getByPlaceholder('First Name').type('Saathapppan');

await page.getByPlaceholder('Last Name').type('Muthu');

await page.locator('//textarea[@ng-model='Adress']').type('Dwaraga Avenue');

await page.waitForTimeout(2000);

await page.close();

    }

)