import{test,expect} from '@playwright/test'
test('post call validation-token ', async ({request})=>{
    let start=Date.now()
    let d={
        
    "username" : "admin",
    "password" : "password123"
    }
    let res=await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type": "application/json"},data:d})
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
    
    console.log("token is ", content.token)
    expect(content.token).not.toBeNull()
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