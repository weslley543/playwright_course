import { test, expect } from '@playwright/test'


test.describe.parallel('[API Testing]', () => {
  const baseUrl = 'https://anapioficeandfire.com/api'
  test('[Expect Status 200]', async ({ request }) => {
    const response = await request.get(`${baseUrl}/characters/583`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    expect (typeof responseBody).toBe('object')
  })

  test('[Expect Status 404]', async ({ request }) => {
    const response = await request.get(`${baseUrl}/characterss/583`)
    expect(response.status()).toBe(404)
  })
})
