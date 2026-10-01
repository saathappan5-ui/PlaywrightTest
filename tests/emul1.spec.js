import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  await page.locator('#search-box-input').click();
  await page.locator('#search-box-input').fill('shoes');
  await page.locator('#search-box-input').press('Enter');
  await expect(page.getByRole('link', { name: 'Aadi Casual Shoes Grey Men\'s Outdoor Shoes Aadi Casual Shoes Grey Men\'s Outdoor' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Aadi Casual Shoes Grey Men\'s Outdoor Shoes Aadi Casual Shoes Grey Men\'s Outdoor' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('#add-cart-button-id')).toMatchAriaSnapshot(`- text: add to cart`);
});