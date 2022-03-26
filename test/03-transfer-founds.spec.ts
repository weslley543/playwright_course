import { test, describe } from '@playwright/test'

test.describe('[Transfer founds and make payments]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
  })
  test('expect userMake transfer', async({ page }) => {
    await page.click('', '')
  })
})
