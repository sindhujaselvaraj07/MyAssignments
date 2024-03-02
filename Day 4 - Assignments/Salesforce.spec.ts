/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created

Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/
/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name

Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/
/* --------------------------------------------------------------------------------------------------------------------------------
/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
//https://ford-f1-dev-ed.develop.lightning.force.com/lightning/page/home
 */
import { test,  chromium } from "@playwright/test"; 
    test.setTimeout(0);
test.only('Salesforce', async({page})=>{ 
await page.goto("https://ford-f1-dev-ed.develop.my.salesforce.com");
await page.waitForTimeout(3000); 
await page.locator(`#username`).fill('sindhujas@testleaf.com');
await page.fill("#password", "MyJob@1993!");
await page.waitForTimeout(3000); 
await page.click("#Login");
console.log(await page.title());
await page.waitForTimeout(5000); 
await page.getByRole('button', { name: 'App Launcher' }).click();
console.log(await page.title());
await page.waitForTimeout(5000); 
await page.getByText("View All").click();
await page.waitForTimeout(3000); 
console.log(await page.title());
await page.locator("//div[@data-name='Sales']").click();
await page.waitForTimeout(3000); 
await page.locator("a[title=Leads]").click();
await page.waitForTimeout(3000); 
await page.locator("//span[contains(text(),'Leads List')]").click();
await page.waitForTimeout(3000); 
await page.locator("//span[contains(text(),'New Lead')]").click();
await page.waitForTimeout(3000); 
await page.getByPlaceholder("First Name").fill("Sindhuja");
    await page.getByPlaceholder("Last Name").fill("Shaffi");
    await page.waitForTimeout(3000); 
    await page.locator("//input[@name='Company']").fill('Ford');
    await page.waitForTimeout(3000); 
  // await page.locator("//button[@id='combobox-button-1192']").click();
  await page.locator("//button[@name='salutation']").click();
  await page.waitForTimeout(3000); 
   //await page.click("//a[contains(text(),'Mrs.')]");
   await page.click("//span[@title='Mr.']");
    await page.waitForTimeout(3000); 
    await page.locator("//button[@kx-scope='button-brand']").fill("Ford");
    await page.waitForTimeout(3000); 
    await page.click("//button[@class='slds-button slds-button_brand']");
})  

