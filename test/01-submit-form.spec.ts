import { test, expect } from '@playwright/test'

test.describe('[Feedback form]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#feedback')
  })
  
  test('expect feedback form', async ({ page }) => {
    await page.type('#name', 'any_name')
    await page.type('#email', 'any_name@email.com')
    await page.type('#subject', 'any_subject')
    await page.type('#comment', 'any_comment')

    await page.click('input[name=clear]')

    await expect(page.locator('#name')).toBeEmpty()
    await expect(page.locator('#email')).toBeEmpty()
    await expect(page.locator('#subject')).toBeEmpty()
    await expect(page.locator('#comment')).toBeEmpty()
    
  })

  test('expect feedback form', async ({ page }) => {
    await page.type('#name', 'any_name')
    await page.type('#email', 'any_name@email.com')
    await page.type('#subject', 'any_subject')
    await page.type('#comment', 'any_comment')

    await page.click('input[name=submit]')

    await page.waitForSelector('#feedback-title')
  })  
})
