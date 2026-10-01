import { test, expect } from '@playwright/test';
test('Delete Booking', async ({ request }) => {
    // Generate Token
    const authResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth',
        {
            data: {
                username: 'admin',
                password: 'password123'
            }
        }
    );
    const authData = await authResponse.json();
    const token = authData.token;
    // Create Booking
    const createResponse = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: {
                firstname: 'Dhivya',
                lastname: 'Ksamy',
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: '2026-06-01',
                    checkout: '2026-07-01'
                },
                additionalneeds: 'Breakfast'
            }
        }
    );
    const createData = await createResponse.json();
    const bookingId = createData.bookingid;
    console.log('Booking ID:', bookingId);


    // Delete Booking
    const deleteResponse = await request.delete(
        'https://restful-booker.herokuapp.com/booking/' + bookingId,
        {
            headers: {
                Cookie: 'token=' + token
            }
        }
    );
    console.log('Delete Status:', deleteResponse.status());
    console.log(deleteResponse.statusText())
    expect(deleteResponse.status()).toBe(201);
    

});