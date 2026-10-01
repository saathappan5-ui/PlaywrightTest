import {test} from '@playwright/test'
test('masking element ', async function({page})
{
    await page.goto("https://example.com/")
let e= await page.locator("body > div > h1")
await page.screenshot(
    {
        path:'m.png',
        mask:[e],
       // maskColor:"#FFFF00"
        maskColor:"#0000FF"
    }
)
await page.waitForTimeout(4000)
await page.close()
})