import { test, expect } from '@playwright/test';

test('la página principal muestra el mensaje de valor y el CTA de exploración', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('plantas');
  await expect(page.getByRole('link', { name: 'Explorar plantas' })).toBeVisible();
});
