import {test, expect} from '@playwright/test'
import fs from "fs"
test("logging, error handling, assertion", async ({ request }) => {
    try {
        const res = await request.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!res.ok()) {
            throw new Error("error");
        }
        const respjson = await res.json();
        console.log(respjson)
        //API assertions
        // Status code
        expect(res.status()).toBe(200);
        // Verify property exists
        expect(respjson).toHaveProperty('id');
        // Exact match
        expect(respjson.id).toBe(1);
        // Partial text match
        expect(respjson.title).toContain('sunt');
        // Not null / not empty
        expect(respjson.body).toBeTruthy();
        // Verify type
        expect(typeof respjson.userId).toBe('number');
        //logging API output to a file 
        fs.writeFileSync(
            'apiResponse.json',
            JSON.stringify(respjson, null, 2)
//response (The Value): This is the target JavaScript object, array, or primitive data you want to transform into a text 
// string.null (The Replacer): The second argument is a "replacer" used to filter or modify object properties during 
// serialization.
// 2 (The Space / Indentation): This controls the formatting of the output string. Passing 2 means each nested level 
//of the JSON data will be visually indented by 2 spaces, adding line breaks for optimal legibilit
        );
        console.log("Response saved successfully");
    } 
    catch (error) {
        console.error("Error:", error.message);
        throw error; // Fail the test
    }
});