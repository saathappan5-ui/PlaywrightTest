import{test, expect} from '@playwright/test'
test('getresponsetest', async ({request})=>{

let start = Date.now()

let res = await request.get("https://jsonplaceholder.typicode.com/posts/1");

let end = Date.now()

console.log("Response time is", (end-start));

}
)