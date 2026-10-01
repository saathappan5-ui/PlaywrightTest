import {test} from '@playwright/test'

test('xpathstudy', async({page}) =>
{

await page.goto("https://demo.automationtesting.in/Register.html")
// CSS selector
//await page.locator("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input").fill("test");


// Copied Xpath 

//await page.locator("//*[@id='basicBootstrapForm']/div[1]/div[1]/input").type("test");


// Own Xpath

//tagname[@attribute='value']

//await page.locator("//input[@placeholder='First Name']").type("test");

await page.getByPlaceholder('First Name').type("test");

await page.waitForTimeout(2000);

await page.close();
}

)