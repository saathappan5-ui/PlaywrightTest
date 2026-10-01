/*
browser context: separate browser profile inside the browser
it will be isolated
each  browser context can have multiple pages

* */
import{test} from '@playwright/test'
test('two tabs-navigation', async function({browser})
{
   let c= await browser.newContext()
   let page1=await c.newPage()
   let page2=await c.newPage()
   await page1.goto("http://www.google.com")
   await page2.goto("http://www.facebook.com")
   //page1
   await page1.bringToFront()
   console.log("page 1 title is ", await page1.title())
   //page2
   await page2.bringToFront()
   console.log("page 2 title is ", await page2.title())
   //page1
   await page1.bringToFront()
   await page1.waitForTimeout(5000)
   await page1.getByText('About').click()
   await page1.waitForTimeout(4000)
   await page2.waitForTimeout(4000)
   await page1.close()
   await page2.close()
})