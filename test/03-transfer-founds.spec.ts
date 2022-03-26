import { test, expect } from '@playwright/test'

test.describe('[Transfer founds and make payments]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
  })
  test('expect userMake transfer', async({ page }) => {
    await page.click('#transfer_founds_tab')
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#td_toAccountId', '3')

    await page.type('#tf_amount', '588')

    await page.type('#tf_description', 'any_description')
    await page.click('#btn_submit')
    
    const boarderText = page.locator('h2.board-header')

    await expect(boarderText).toContainText('Verify')

    await page.click('#btn_submit')
    const message = page.locator('.alert-success')

    await expect(message).toContainText('You successfully submitted your transaction')
  })
})
