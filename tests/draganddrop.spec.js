import { test, expect } from '@playwright/test';

test('mouse-handling-drag and drop', async function({page})
{
    await page.goto("https://jqueryui.com/droppable/")
    //webelements: inside the frame
    // get into that frame
    let frame= await page.frameLocator("//*[@id='content']/iframe")
    let source=await frame.locator("#draggable")
    let target=await frame.locator("#droppable")
    await source.dragTo(target)
    await page.waitForTimeout(4000)
    await page.close()
})


//https://jqueryui.com/droppable/