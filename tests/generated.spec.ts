
import { test, expect } from '@playwright/test';


test('ajouter une tâche "buy a pen" dans TodoMVC', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  const input = page.getByRole('textbox', { name: 'What needs to be done?' });
  await input.click();
  await input.fill('buy a pen');
  await input.press('Enter');
  await expect(page.getByText('buy a pen')).toBeVisible();
});



