import { test,expect } from '@playwright/test';

test ('SnapdealTest1', async({page}) =>
{
await page.goto('https://www.snapdeal.com/');
const SearchBox = await page.locator('#search-box-input').fill('pants');
await page.keyboard.press('Enter');

await page.waitForTimeout(4000);

const SearchBoxText = await page.getByRole('textbox', { name: 'keyword'}).innerText();

//const SearchBoxText = await page.locator('#inputValEnter').innerText();

await expect(SearchBoxText).toBe('pants')

console.log('SearchBoxText');

await page.close();

});
