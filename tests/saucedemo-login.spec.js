import { test, expect } from '@playwright/test';
 
test('User can log in and view product catalog', async ({ page }) => {
  // 1. Open the login page
  await page.goto('https://www.saucedemo.com/');
 
  // 2. Fill in login credentials
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
 
  // 3. Click the Login button
  await page.locator('#login-button').click();
 
  // 4. Verification 1: Verify the URL redirected to inventory.html
  await expect(page).toHaveURL(/.*inventory.html/);
 
  // 5. Verification 2: Check that the logo heading 'Swag Labs' is visible
  const logo = page.locator('.app_logo');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveText('Swag Labs');
 
  // 6. Action: Add the first product to the cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
 
  // 7. Verification 3: Assert the cart badge displays "1"
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
// Test Case 2: Negative Flow (Error Handling)
test('User sees error message with invalid credentials', async ({ page }) => {
  // 1. Open the login page
  await page.goto('https://www.saucedemo.com/');
 
  // 2. Fill in valid user but invalid password
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong_password');
 
  // 3. Click the Login button
  await page.locator('#login-button').click();
 
  // 4. Verification: Assert error banner displays the expected rejection text
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});