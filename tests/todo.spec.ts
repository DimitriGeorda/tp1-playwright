// tp1-playwright

/*
import { test, expect } from '@playwright/test';
test('ajouter une tâche TODO', async ({ page }) => {
await page.goto('https://demo.playwright.dev/todomvc');
await page.getByPlaceholder('What needs to be done?').fill('Implémenter un test E2E');
await page.keyboard.press('Enter');
await expect(page.getByText('Implémenter un test E2E')).toBeVisible();
await page.pause();
});
*/

//tp2 - POM

import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
test('ajouter et compléter une tâche', async ({ page }) => {
const todoPage = new TodoPage(page);
await todoPage.goto();
await todoPage.addTask('Acheter du café');
await todoPage.isTaskVisible('Acheter du café');
await todoPage.completeTask('Acheter du café');
await todoPage.isTaskCompleted('Acheter du café');
});