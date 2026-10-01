import {test, expect} from '@playwright/test'
test.skip('creating baseling', async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // baseline image
     await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot('base1.png')

    await page.getByPlaceholder('Username').fill("Admin")
    await page.waitForTimeout(2000)
    //matching 
    expect( await page.screenshot()).toMatchSnapshot('base1.png')
    await page.waitForTimeout(9000)
    await page.close()
})

test('creating baseline- element', async function({page})
{
    await page.goto("https://www.facebook.com")
    // baseline image
    let ele=await page.locator("//*[@name='email']")
    await expect(ele).toHaveScreenshot('ele.png')
    // sending value
    await ele.fill("hi")
    //comparison
    expect( await ele.screenshot()).toMatchSnapshot('ele.png')
    await page.waitForTimeout(2000)
    await page.close()
})
