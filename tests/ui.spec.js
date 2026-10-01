import { test, expect } from '@playwright/test';
test('OrangeHRM API + UI Validation', async ({ request, page }) => {
    // API Login
    const loginResponse = await request.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        {
            form: {
                username: 'Admin',
                password: 'admin123'
            }
        }
    );
    
  
    console.log(loginResponse.status());
    // UI Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    // Dashboard Validation
    await expect(
        page.locator('//h6[text()="Dashboard"]')
    ).toBeVisible();
    // Navigate to PIM
 //   await page.getByText('PIM').click();
 await page.waitForTimeout(2000);
    await page.getByText('Leave').click();
   
});