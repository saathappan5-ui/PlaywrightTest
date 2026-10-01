import{test} from '@playwright/test'
test('xyzbank', async ({page}) =>
{

await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer")
//Transactions
await page.locator("//select[@name='userSelect']").selectOption('Hermoine Granger');

 //await page.locator('#country').selectOption('india');

 await page.locator("//button[@class='btn btn-default']").click();

 await page.waitForTimeout(2000)

 await page.locator("//button[@ng-click='transactions()']").click();

 await page.waitForTimeout(2000)

 //await page.screenshot({path:'C:\\Users\\Dell\\OneDrive\\Desktop\\ScreenshotFromPlaywright>1.png',fullPage:true})


 await page.screenshot({
    path: 'C:\\Users\\Dell\\OneDrive\\Desktop\\ScreenshotFromPlaywright\\Transaction.png',
    fullPage: true
});

await page.waitForTimeout(2000)

await page.locator("//button[@ng-click='back()']").click();
//Deposit
await page.locator("//button[@ng-click='deposit()']").click();

await page.locator("//input[@ng-model='amount']").fill('1000');

await page.locator("//button[text()='Deposit']").click();

 await page.screenshot({
    path: 'C:\\Users\\Dell\\OneDrive\\Desktop\\ScreenshotFromPlaywright\\Deposit.png',
    fullPage: true
});

await page.waitForTimeout(2000)
//withdrawl
await page.locator("//button[@ng-click='withdrawl()']").click();

await page.waitForTimeout(2000)

await page.getByPlaceholder("amount").fill('1000');

await page.waitForTimeout(2000)

await page.locator("//button[text()='Withdraw']").click();

 await page.screenshot({
    path: 'C:\\Users\\Dell\\OneDrive\\Desktop\\ScreenshotFromPlaywright\\Withdrawal.png',
    fullPage: true
});

await page.close()
}
)