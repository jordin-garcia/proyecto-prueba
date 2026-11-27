import { expect, test } from '@playwright/test';

test('la página de inicio muestra el nombre del proyecto', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle('proyecto-prueba');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('proyecto-prueba');
});
