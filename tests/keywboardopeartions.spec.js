import { test, expect } from '@playwright/test';

test('keyboard-handling', async function({page})
{

    await page.goto("http://www.mycontactform.com")

    await page.type("#user", "hi")// locatorvalue, valuetosend
    //await page.locator("#user").type("hi")

    //control+a

    await page.keyboard.press('Control+A')

    //control+c

     await page.keyboard.press('Control+C')

     //tab (password button)

     await page.keyboard.down('Tab')
     
     await page.keyboard.up('Tab')

      //control+v

     await page.keyboard.press('Control+V')

       //tab (login button)

     await page.keyboard.down('Tab')
     
     await page.keyboard.up('Tab')

     //Login button clicking

     await page.keyboard.down('Enter')
     
     await page.keyboard.up('Enter')

     await page.waitForTimeout(4000)

     await page.close()

}


)