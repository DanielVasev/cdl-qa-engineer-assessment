import { test, expect } from '@playwright/test' 
/*
E2E Scenario to cover:
1. Navigate to CDL home page
2. Open side menu → "Media" → "News"
3. Validate the News page and open "Cloud-Only Transformation"
4. Go back to News page
5. Open side menu → "Careers" → "Vacancies"
6. Validate Careers Vacancies page
7. Search for "java engineer"
8. Validate that the expected job advert appears and open it
*/

test.beforeEach(async ({ page }) => {
    // Navigate to CDL home page before each test. 
    await page.goto('/')
})

test('E2E steps', async ({ page }) => {
  // Open the side menu
  await page.getByRole('img', { name: 'Menu' }).click()

  // Navigate to "Media" → "News"
  await page.getByText('Media').click()
  await page.getByRole('link', { name: 'News', exact: true }).click()

  // Validate that the News page banner/header image is visible
  await expect(page.locator('#videopad')).toBeVisible()

  // Click on the "Cloud-only transformation" CTA
  await page.locator('#contentbox5').getByText('Cloud-only transformation').click()

  // Interact with the Cloud-only page banner
  await page.locator('#videopad').click()

  // Validate the Cloud-only content is displayed
  await expect(page.locator('#contentbox0')).toContainText('AWS migration complete')

  // Go back to the News page
  await page.goBack()

  // Open the side menu again
  await page.getByRole('img', { name: 'Menu' }).click()

  // Navigate to "Careers" → "Vacancies"
  await page.getByText('Careers').click()
  await page.getByRole('link', { name: 'Vacancies', exact: true }).click()

  // Validate that the "Work at CDL" section is visible
  await expect(page.locator('#contentbox0').getByText('Work at CDL')).toBeVisible()

  // Filter job vacancies for "java engineer"
  const vacanciesFilter = page.locator('#vacsearch')
  await vacanciesFilter.fill('java engineer')
  await vacanciesFilter.press('Enter')

  // Locate the expected job advert
  const advertLocator = page.getByRole('link', { name: 'This is an exciting' })

  // Validate the advert text matches expectation
  await expect(advertLocator).toHaveText(
    'This is an exciting opportunity for a passionate Java engineer to join one of many agile squads ...'
  )

  // Click on the job advert to view details
  await advertLocator.click()
})

// Teardown: close page after each test
test.afterEach(async ({ page }) => {
  await page.close()
})
