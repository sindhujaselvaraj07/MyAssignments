/**
 * Assignment:2
 * 
 * 1. Log in to Salesforce application 
 *    Note: Create a json fie for the username and password and login 
 * 2. Click the app launcher icon
 * 3. Click View All
 * 4. Enter Marketing in the Search text box
 * 5. Click Marketing
 * 6. Click Contacts dropdown
 * 7. Click New Contact
 * 8. Fill the mandatory fields
 * 9. Click Save
 * 10. Verify the Contact created
 * 11. Click Upload files and verify the file uploaded
 * 12. Click View All
 * 13. Click the uploaded file
 * 14. Download the file and save it in your directory
 * 
 */

import {test} from '@playwright/test'
//import {parse} from 'csv-parse/sync'
import fs from 'fs';  //fs--->file synchronisation, whateverfile u need to connect with your appln
import path from 'path';
const testData= JSON.parse(fs.readFileSync(path.join(__dirname,"credentialsSF.json"),'utf-8')); //to pick current directory. Sync--converts the data into string

for(const data of testData){
test(`Reading data from json file ${data.testcase_id}`, async({page})=>
{
    await page.goto("https://ford-f1-dev-ed.develop.my.salesforce.com");
    await page.fill("#username", data.username);
    await page.fill("#password", data.password);
    await page.click("#Login");
    await page.waitForTimeout(3000); 
await page.getByRole('button', { name: 'App Launcher' }).click();
await page.getByText("View All").click();
await page.waitForTimeout(3000); 
await page.locator("//div[@data-name='Marketing CRM Classic']").click();
//await page.locator("//span[contains(text(),'Contacts')]").first().click();
await page.locator("//span[contains(text(),'Contacts List')][1]").click();
await page.locator("//span[contains(text(),'New Contact')]").click();
await page.getByPlaceholder("First Name").fill("AAA");
    await page.getByPlaceholder("Last Name").fill("BBB");
    await page.waitForTimeout(3000);
  await page.locator("//button[@name='salutation']").click(); 
   //await page.click("//a[contains(text(),'Mrs.')]");
   await page.click("//span[@title='Mr.']");
    await page.click("//button[@class='slds-button slds-button_brand']");
    console.log(await page.getByRole("alertdialog").innerText());
//    await page.locator("//a[@title='Upload Files']").setInputFiles("./tests/screenshot.png");
await page.setInputFiles("input[type='file']","./tests/screenshot.png");
//await page.locator("//input[@type='file']").setInputFiles("./tests/screenshot.png");
await page.waitForLoadState('load');
//await page.waitForTimeout(3000);
await page.locator("(//span[@class=' label bBody'])[1]").click(); 
//await page.getByText("Done").nth(0).click(); 
//const uploadfile = page.waitForEvent('filechooser')
//await page.locator("[class$='slds-button slds-button--neutral ok desktop uiButton--default uiButton--brand uiButton']").click();
//await page.locator("//span[@class='slds-file-selector__button slds-button slds-button_neutral']").click();
//await page.waitForTimeout(3000);
/* page.on('dialog', async alertType=>{ //on - It is a listener to handle that particular event. alertType is a variable name
    console.log(alertType.type())
    const msg = alertType.message();
    console.log(msg);
await alertType.accept(); 

} )  */
//await page.getByText("Done").click(); //first show button in the application - simple alert
console.log(await page.getByRole("alertdialog").innerText());
await page.locator("//span[@title='Notes & Attachments']").click();
/* page.waitForSelector("//div[@class='slds-size_12-of-12 slds-grid']");
await page.locator("//div[@class='slds-size_12-of-12 slds-grid']").click();  */
await page.locator("//button[@title='Download']").click(); 
    const Filetodownload = page.waitForEvent('download');
    await page.getByText("Download",{exact:true}).click();
    const Filepath = await Filetodownload;
    await Filepath.saveAs("downloaded files/"+ (await Filetodownload).suggestedFilename());
})}
 
