import { test, expect } from '@playwright/test';

async function addProductToCart(page: import('@playwright/test').Page) {
  await expect(page.locator('.inventory_list')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
}

test('Login -> Inventory -> Add product to Cart', async ({ page }) => {
  await page.goto('/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);
  
  await addProductToCart(page);

  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');
});