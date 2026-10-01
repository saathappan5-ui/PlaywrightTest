import{test,expect} from '@playwright/test'
test('getcallvalidation', async ({request})=>{
    let start=Date.now()
    let res=await request.get("https://jsonplaceholder.typicode.com/posts/1")
      let end=Date.now()
      //response time calculation
      console.log("response time is ",(end-start))
      // response time validation
      expect(end-start).toBeLessThan(3000)
        // response body
      console.log(await res.body())
        // convert into json format
      let content= await res.json()
      console.log(content)
    //response schema validation
      expect(content.id).toBe(1)
      expect(content.id).not.toBeNull()
      expect(content.userId).not.toBeNull()
      expect(content.title).toContain('sunt')
      expect(content).toHaveProperty('userId')
      expect(content).toHaveProperty('id')
      expect(content).toHaveProperty('title')
      expect(content).toHaveProperty('body')
        //headers 
      console.log(res.headersArray())
        //status code
      let code=res.status()
      console.log("Status code is ", code)
      //validation
      expect(code).toBe(200)
      //status text 
      let t= res.statusText()
      console.log("Status text is ", t)
      expect(t).toBe("OK")
})