import{test} from '@playwright/test'
    
test('geolocation', async({page})=>
    {
    await page.goto("https://www.gps-coordinates.net/my-location")
    
    await page.waitForTimeout(16000)
    
    await page.close()
    })