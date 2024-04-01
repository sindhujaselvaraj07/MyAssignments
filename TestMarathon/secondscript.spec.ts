import { test,  chromium, expect } from "@playwright/test"; 
    test.setTimeout(0);
test.only('Salesforce', async({page})=>{ 
await page.goto("https://ford-f1-dev-ed.develop.my.salesforce.com");
await page.waitForTimeout(3000); 
await page.locator(`#username`).fill('sindhujas@testleaf.com');
await page.fill("#password", "MyJob@1993!");
await page.waitForTimeout(3000); 
await page.click("#Login");
console.log(await page.title());
await page.getByRole('button', { name: 'App Launcher' }).click();
console.log(await page.title());
await page.getByText("View All").click(); 
console.log(await page.title());
await page.locator("//div[@data-name ='Marketing CRM Classic']").click();
await page.locator("a[title='Leads'] + * svg").click();
await page.locator("//span[text()='New Lead']").click();
await page.getByPlaceholder("First Name").fill("abc");
await page.getByPlaceholder("Last Name").fill("zxcc");
await page.locator("//label[text()='Salutation']/following::button[1]").click();
await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click();
await page.locator("//input[@name='Company']").fill("ford");
await page.locator("//button[@name='SaveEdit']").click();
await page.waitForTimeout(3000); 
console.log(await page.getByRole("alertdialog").innerText());
await page.locator("//button[@name='Submit']").click();
await page.locator("//button[@class='slds-button slds-button_icon-border-filled']").click();
await page.locator("//span[text()='Convert']").click();
await page.waitForTimeout(3000); 
await page.locator("//button[@class='slds-button transparentButton']").last().click();
await page.locator("//span[text()='Opportunity Name']").fill("Test");
await page.locator("//button[@class='slds-button slds-button_brand']").click();
console.log(await page.locator("//div/h2[text()='Your lead has been converted']").innerText());
await page.locator("//button[text()='Go to Leads']").click();

})


