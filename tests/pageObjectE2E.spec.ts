import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { NewsPage } from '../page-objects/NewsPage'
import { CareersPage } from '../page-objects/CareersPage'
import { MenuActions } from '../page-objects/MenuActions'

test.beforeEach(async ({ page }) => {
    //Url in the playwright.config file.
    await page.goto('/')
})

test('E2E steps', async ({ page }) => {
  // Initialize Page Objects
  const home = new HomePage(page)
  const news = new NewsPage(page)
  const careers = new CareersPage(page)
  const menuActions = new MenuActions(page)

  // Home page: wait for page load, then navigate to News
  await home.waitForPageLoad()
  await menuActions.clickMediaNews()

  // News page: validate load, then navigate to Cloud-only article
  await news.waitForPageLoad()
  await news.clickCloudOnlyCta()

  // Cloud-only page: validate load, then go back to News
  await news.waitForCloudPageLoad()
  await page.goBack()

  // Careers page: navigate via menu and validate load
  await menuActions.clickCareersVacBtn()
  await careers.waitForCareersPageLoad()

  // Vacancies: filter by "java engineer", validate advert, and open it
  await careers.filterVacancies('java engineer')
  await careers.openVacancy('This is an exciting')
})

// Teardown: close page after each test
test.afterEach(async ({ page }) => {
  await page.close()
})