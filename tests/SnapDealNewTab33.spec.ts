import {test, expect} from '@playwright/test';

test('Snapdealcart', async ({page,context})=>{

    await page.goto('https://www.snapdeal.com/');
    await expect(page).toHaveTitle('Online shopping for Men, Women & Kids Fashion, Home Decor, lifestyle & More');

    await page.locator('#search-box-input').fill('Headphones');
    await page.keyboard.press('Enter');
   // await page.getByText('Neo HEDU SH12 Bluetooth Bluetooth Headphone On Ear 2 Hours Playback Active Noise cancellation IPX4(Splash & Sweat Proof) White').click();
    const CartClick = await page.locator('#add-cart-button-id')
    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        await page.waitForTimeout(5000),
        await CartClick.click(),
    ]) ;
        await newpage.waitForLoadState();

                                        
});