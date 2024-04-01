/**
 * 
 * Assignment: 3
 * 
 * 1. Auto login to your Salesforce application
 * 2. Click the App launcher icon
 * 3. Click View All
 * 4. Enter Content in the Search box
 * 5. Click Content
 * 6. Click Chatter
 * 7. Click Question
 * 8. Fill the Question and Details field
 * 9. Click Ask
 * 10. Verify the Question and Details created
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
await page.locator("//p[normalize-space()='Chatter']").click();
await page.locator("//span[text()='Question']").click();
await page.getByPlaceholder("What would you like to know?").fill("test");
await page.locator("//div[@data-placeholder='If you have more to say, add details here...']").fill("Detail test");
await page.locator("//button[@title='Click, or press Ctrl+Enter']").click();
console.log(await page.locator("//article[@class='cuf-feedElement cuf-feedItem']").first().innerText());

})}