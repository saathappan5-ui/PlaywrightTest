import {test, expect} from '@playwright/test';
test.use({'baseURL':'https://jsonplaceholder.typicode.com'})

test('apistatus', async ({request}) =>{

    const response = await request.get('/users');
    console.log(response.status());
    await expect(response).toBeOK();

      expect(response.status()).toBe(200);

    // Get response body as JSON
    const responseBody = await response.json();

    // Validate response body is not empty
    expect(responseBody).not.toEqual({});

    console.log(responseBody);
});