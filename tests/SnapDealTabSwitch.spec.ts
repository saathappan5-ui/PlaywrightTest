import {test, expect} from '@playwright/test'

test ('SnapDealSwitchTab', async({page, context}) =>

{

await page.goto('https://www.snapdeal.com/');
const SearchBox = await page.locator('#search-box-input').fill('pants');
await page.keyboard.press('Enter');
await page.waitForTimeout(4000);

const ExpectedTextBox = "Lieo Trend Multicolor 10 Polyester Men's Sports Trackpants ( Pack of 2 )"

await page.getByText(ExpectedTextBox).click();

console.log('1');
  const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('.attr-prod-cls', { hasText: 'M' }).click(),
    ]);

    await newpage.waitForLoadState();

}
)
