import { test, expect } from '@playwright/test';
//importing data from json file 
import queryData from './queryData.json';
test('GET with Query Parameters', async ({ request }) => {
    const response = await request.get(
        'https://restful-booker.herokuapp.com/booking?firstname=' +
        queryData.firstname +
        '&lastname=' +
        queryData.lastname
    );
    let r= await response.json()
    console.log(r)
    console.log(response.status());
    expect(response.status()).toBe(200);
    
});