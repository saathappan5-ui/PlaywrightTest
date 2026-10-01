import {test,expect} from '@playwright/test'
// alert with ok
// confirm 
// prompt 
test.skip('alert with ok', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect (dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await page.waitForTimeout(3000)
        await dialog.accept()
    })
    //clicking on alert
    await page.locator("#alertBtn").click()
    await page.waitForTimeout(3000)
})
test.skip('confirm box with ok and cancel button', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect (dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await page.waitForTimeout(3000)
        await dialog.accept()// await dialog.dismiss()
    })
    //clicking on confirm box
    await page.locator("#confirmBtn").click()
    await page.waitForTimeout(3000)
})

test('prompt', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect (dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(3000)
        await dialog.accept("dhivya")// providing value 
    })
    //clicking on prompt box 
    await page.locator("#promptBtn").click()
    await page.waitForTimeout(3000)
})