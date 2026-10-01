import{test} from '@playwright/test'
test('mouse-handling', async function({page})
{
    await page.goto("http://www.mycontactform.com")
    // click, double click, right click, mouse hover, drag and drop
    let ele=await page.getByRole('button',{name:'Login'})
    //ele.press('Enter')
    //ele.dblclick()
    //ele.click({button:'right'})
    await ele.hover()
    await page.waitForTimeout(2000)
    await ele.click()
    await page.waitForTimeout(4000)
    await page.close()
})