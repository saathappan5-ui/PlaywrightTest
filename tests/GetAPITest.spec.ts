import {test, expect} from '@playwright/test';
test.use({'baseURL':'https://jsonplaceholder.typicode.com'})

test('apistatus', async ({request}) =>{

    const response = await request.get('/users');
    console.log(response.status());
    await expect(response).toBeOK();
});