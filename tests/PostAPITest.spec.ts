import{test,expect} from '@playwright/test';

//test.use({'baseURL':'https://reqres.in/api'});

test('postrequest', async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{

        name:'Saathappan',
    }
}
)
;
console.log(response.status());
     expect(response).toBe(200);
}
);