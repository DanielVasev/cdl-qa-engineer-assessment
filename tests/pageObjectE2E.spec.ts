import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { NewsPage } from '../page-objects/NewsPage'
import { CareersPage } from '../page-objects/CareersPage'
import { MenuSelectors } from '../page-objects/MenuSelectors'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cdl.co.uk/')
})

test('E2E steps', async ({ page }) => {
  const home = new HomePage(page)
  const media = new NewsPage(page)
  const careers = new CareersPage(page)

  //Interaction with the menu
  await home.openMenu()
  await home.goToMedia()
  await media.openNews()

  //Navigation and validation in the News page 
  await media.validateBannerVisible()
  await media.clickCloudOnlyCta()
  await media.clickBanner()
  await media.validateAwsMigration()

  //Single event / emulate click back btn 
  await page.goBack()

  //Navigate to Careers Page
  await home.openMenu()
  await home.goToCareers()
  await careers.openVacancies()

  //Filter and validate job advert And Click event. 
  await careers.validateWorkAtCdl()
  await careers.filterVacancies('java engineer')
  await careers.openVacancy('This is an exciting')
})

 test.afterEach(async ({ page }) => {
    // teardown: close context/browser or reset state
    await page.close()
})