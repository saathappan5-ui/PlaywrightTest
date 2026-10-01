import { test, expect } from '@playwright/test';
/*In Playwright API testing, mocking a request means intercepting the actual API call
 and returning a fake response instead of hitting the real server.


 To mock an API request, a route acts as an interceptor or a simulator that captures an incoming 
 HTTP request based on its URL path and HTTP method, preventing it from hitting the 
 real server and returning a predefined test response instead.
* */
test('Mocking request', async ({ page }) => {
//page.route() is used to intercept/mock/modify requests 
// fulfill: mock the response without hitting the real server 

    //actual response: I am a Teapot
    await page.route('https://restful-booker.herokuapp.com/booking/1', async route => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                firstname: 'Saathappan',
                lastname: 'Muthu',
                totalprice: 1000,
                depositpaid: true
            })
        });

    });

    //evaluate-> return the response.json format
    const response = 

    await page.evaluate(async () => {
        const res = await fetch(
            'https://restful-booker.herokuapp.com/booking/1'
        );
        return await res.json();//
    }

);

    console.log(response);

    expect(response.firstname).toBe('Saathappan');
});