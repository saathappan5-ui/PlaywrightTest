import {test} from '@playwright/test'
test.skip('fullpage-screenshot', async function({page})
{
    await page.goto("http://www.google.com")
    await page.waitForTimeout(2000)
    await page.screenshot({path:'s.png',fullPage:true})
    await page.waitForTimeout(2000)
    await page.close()
})


test('element-screenshot', async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder('Username').screenshot({path:'user.png'})

await page.waitForTimeout(4000)
await page.close()
})