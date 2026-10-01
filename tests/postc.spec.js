import{test,expect} from '@playwright/test'
import fs from "fs"
test('post call validation-booking id ', async ({request})=>{
    let start=Date.now()
    let f=fs.readFileSync("./tests/booking.json")

    let res=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:f})
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
    
    console.log("booking id is ", content.bookingid)
    expect(content.bookingid).not.toBeNull()
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