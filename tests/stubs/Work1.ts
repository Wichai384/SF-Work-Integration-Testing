import { test, expect } from '@playwright/test';
import { MyName } from './MyName';

test('Login -> Inventory -> Shopping Card stub', async ({ page }) => {
  await page.goto('/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

   await expect(page).toHaveURL(/inventory\.html/);
   await expect(page.locator('.inventory_list')).toBeVisible();

   await page.setContent(MyName);

   await expect(page.locator('[data-test="shopping-card-stub"]')).toBeVisible();
   await expect(page.locator('[data-test="customer-first-name"]')).toHaveText('วิชัย');
   await expect(page.locator('[data-test="customer-last-name"]')).toHaveText('ใสภา');
   await expect(page.locator('[data-test="customer-full-name"]')).toHaveText('วิชัย ใสภา');
});