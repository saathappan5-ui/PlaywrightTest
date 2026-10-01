//import{test, expect} from '@playwright'
import{test, expect} from '@playwright/test'
test.skip('hard asserts', async({page})=>
{
await page.goto("https://www.google.com")
await expect(page).toHaveTitle('yahoo')//fail
await page.waitForTimeout(4000)
console.log("bye")
await page.close()
}
)

test('soft asserts', async({page})=>
{
await page.goto("https://www.google.com")
await expect.soft(page).toHaveTitle('Google')//fail
await page.waitForTimeout(4000)
console.log("bye")
await page.close()
}
)