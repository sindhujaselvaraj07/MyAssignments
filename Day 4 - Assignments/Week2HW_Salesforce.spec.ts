 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 

import { test,  chromium } from "@playwright/test"; //
test('Salesforce login', async({page})=>{ 
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill('vidyar@testleaf.com');
await page.fill("#password", "Testleaf@1234");
//input[name="Login"]
//await page.click("[Value='Log In']");
await page.click("#Login");
console.log(page.url());
const title = await page.title();
if(title =='Login | Salesforce')
{
    console.log("Title is matching")
}
else
{
    console.log("Title is not matching")

}
await page.waitForTimeout(3000); 
}
)
/* 
 import { test,  chromium, expect } from "@playwright/test"; 
 test('Salesforce login', async()=>{ 
 const browser =  await chromium.launch({headless:false, channel:"chrome"});
const browserContext = await browser.newContext();
//launch the page
const page = await browserContext.newPage(); 
await page.goto("https://login.salesforce.com/");

await page.locator(`#username`).fill('vidyar@testleaf.com');
await page.fill("#password", "Testleaf@1234");
await page.click(".button r4 wide primary");
console.log(await page.title());

console.log(page.url());
await page.waitForTimeout(7000); 
await expect(page.getByTitle('')).toHaveText('Login | Salesforce');
//a
 }
 ) */
