// tp1-playwright

/*
import { test, expect } from '@playwright/test';

test('ajouter deux tâches et supprimer "Acheter du pain"', async ({ page }) => {

  //Ouvrir la page TodoMVC
  await page.goto('https://demo.playwright.dev/todomvc/');


  const input = page.getByPlaceholder('What needs to be done?');

  // On ajoute la première tâche et on valide avec Enter.
  await input.fill('Acheter du pain');
  await input.press('Enter');

  // On ajoute la deuxième tâche et on valide avec Enter.
  await input.fill('Aller courir');
  await input.press('Enter');

  // Vérification que les deux tâches sont bien présentes dans la liste.
  await expect(page.getByText('Acheter du pain')).toBeVisible();
  await expect(page.getByText('Aller courir')).toBeVisible();
  
   // On remonte au parent de l'élément de texte pour accéder à son container.
   const tachePain = page.getByText('Acheter du pain').locator('..'); 
  
  // On survole la tâche pour faire apparaître le bouton de suppression (Delete).
  await tachePain.hover();
  
  // On clique sur le bouton de suppression de la tâche "Acheter du pain".
  await tachePain.getByRole('button', { name: 'Delete' }).click();
  
  // Vérifie que la deuxième tâche est toujours visible.
  await expect(page.getByText('Aller courir')).toBeVisible();
  
  // Vérifie que la tâche supprimée n'existe plus dans la liste.
  await expect(page.getByText('Acheter du pain')).toHaveCount(0);
  
});

*/

//tp2 - POM

import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('ajouter deux tâches et supprimer "Acheter du pain"', async ({ page }) => {
  const todoPage = new TodoPage(page);

  // Ouvrir la page TodoMVC
  await todoPage.goto();

  // Ajouter deux tâches
  await todoPage.addTask('Acheter du pain');
  await todoPage.addTask('Aller courir');

  // Vérifier que les deux tâches sont visibles
  await todoPage.isTaskVisible('Acheter du pain');
  await todoPage.isTaskVisible('Aller courir');

  // Supprimer "Acheter du pain"
  await todoPage.deleteTask('Acheter du pain');

  // Vérifier que "Aller courir" est toujours visible
  await todoPage.isTaskVisible('Aller courir');
});

