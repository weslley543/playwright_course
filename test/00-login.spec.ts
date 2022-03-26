import { test, expect } from '@playwright/test'

test.describe('[Login Flow]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
  })

  test('expect login failed', async ({ page }) => {
    await page.click('#signin_button')
    
    await page.type('#user_login', 'invalid_user')
    await page.type('#user_password', 'invalid_password')
    await page.click('text= Sign in')

    await expect(page.locator('.alert-error')).toContainText('Login and/or password are wrong.')
  })
  
  //positive scenario
  test('expect login succefully and logout', async ({ page }) => {
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    await expect(page.locator('#account_sumary_tab')).toBeVisible()
  })
})
