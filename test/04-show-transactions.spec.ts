import { test, expect } from '@playwright/test'


test.describe('[Filter transactions]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
  })

  test('expec the result for each account', async ({ page })=> {
    await page.click('#account_activity_tab')
    await page.selectOption('#aa_accountId', '2')
    const checkingAccount = page.locator('#all_transactions_for_account tbody tr')

    await expect(checkingAccount).toHaveCount(2)
    await page.selectOption('#aa_accountId' ,'4')

    const loanAccount = page.locator('#all_transactions_for_account tbody tr')

    await expect(loanAccount).toHaveCount(4)

    const noResults = page.locator('.well')

    await expect(noResults).toBeVisible()
  })
})
