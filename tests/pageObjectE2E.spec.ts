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
  const home = new HomePage(page)
  const news = new NewsPage(page)
  const careers = new CareersPage(page)
  const menuActions = new MenuActions(page)

  //Home page validation and navigating to "News"
  await home.waitForPageLoad()
  await menuActions.clickMediaNews()
  
  //"News" page validating and navigating to "Cloud-Only"
  await news.waitForPageLoad()
  await news.clickCloudOnlyCta()   
 
  //Validate "Cloud-only" page and executing "Back" btn event 
  await news.waitForCloudPageLoad()
  await page.goBack() 

  //Navigate to Careers Page and page validation 
  await menuActions.clickCareersVacBtn()
  await careers.waitForCareersPageLoad()

  //Filter and validate job advert And Click event. 
  await careers.filterVacancies('java engineer')
  await careers.openVacancy('This is an exciting')
})
    // teardown: close context/browser or reset state    
    test.afterEach(async ({ page }) => {
    await page.close() 
})