//hooks
//before all: only once before all the test cases started its execution
// after all: only once after all the test cases finsihed its execution
// before each: run before each test case
//after each: run after each test case 
/*
beforeall: visiting 
     before each: title   test case1: clicking    aftereach: printing 
     
afterall: closing 
* */


import {test} from '@playwright/test'
let page
test.beforeAll(async({browser})=>{
     page=await browser.newPage()
     await page.goto("http://www.google.com")
     
})
test.afterAll(async()=>{
    await page.waitForTimeout(3000)
    await page.close()
})
test.beforeEach((async()=>{
    console.log("title is ", await page.title())
}))
test.afterEach((async()=>{
    console.log("after each")
}))
test('clicking', async({})=>{
    await page.waitForTimeout(3000)
    console.log("clicking on About")
    await page.getByText('About').click()
})