import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('go gor shopping');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('get ready for party');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'get ready for party' }).getByTestId('todo-item-toggle').check();
  await expect(page.getByTestId('todo-list')).toContainText('go gor shopping');
  await expect(page.getByRole('listitem').filter({ hasText: 'go gor shopping' }).getByTestId('todo-item-toggle')).not.toBeChecked();
  await page.getByRole('link', { name: 'Active' }).click();
});