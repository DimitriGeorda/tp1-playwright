import { test, expect } from '@playwright/test';

test('ajouter deux tâches et supprimer "Acheter du pain"', async ({ page }) => {
  //Ouvrir la page TodoMVC
  await page.goto('https://demo.playwright.dev/todomvc/');


  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Acheter du pain');
  await input.press('Enter');
  await input.fill('Aller courir');
  await input.press('Enter');

  await expect(page.getByText('Acheter du pain')).toBeVisible();
  await expect(page.getByText('Aller courir')).toBeVisible();

  const tachePain = page.getByText('Acheter du pain').locator('..'); 
  await tachePain.hover();
  await tachePain.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByText('Aller courir')).toBeVisible();
  await expect(page.getByText('Acheter du pain')).toHaveCount(0);
});
