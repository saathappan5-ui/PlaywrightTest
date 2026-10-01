import {test} from '@playwright/test'
test('file upload', async function({page})
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.waitForTimeout(3000)
    await page.locator("#filesToUpload").setInputFiles(["C:\\Users\\Dell\\OneDrive\\Desktop\\aa.txt","C:\\Users\\Dell\\OneDrive\\Desktop\\bb.txt"])

  //  C:\\Users\\HP\\OneDrive\\Desktop\\SYLLABUS-PYTHON.docx
 await page.waitForTimeout(3000)
 await page.close()
})