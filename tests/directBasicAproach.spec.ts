import { test, expect } from '@playwright/test'

 
                    /* 
                    Steps to cover:
                    - Navigate to CDL.co.uk
                    - Click on the side menu => "Media" => "News"
                    - Navigate to our "news" page
                    - Open "Cloud-Only Transformation"
                    - Go back
                    - Navigate to Career vacancies ( Header magnifier icon / Or by the side menu)
                    - Input "Software Developer Apprentice" into the filter
                    - Verify that "Software Developer Apprentice" is shown and click to show the role overview */

test.beforeEach(async ({ page }) => {
    // Navigate to CDL home page before each test. 
    await page.goto('https://www.cdl.co.uk/')
})

test('E2E steps', async ({ page }) => {
    await page.getByRole('img', { name: 'Menu' }).click() //Navigate to the side menu
    await page.getByText('Media').click() //Click on "Media" menu CTA 
    await page.getByRole('link', { name: 'News', exact: true }).click() // Click on "News" menu CTA 
    await expect(page.locator('#videopad')).toBeVisible() //Validate the banner / header image is displayed
    await page.locator('#contentbox5').getByText('Cloud-only transformation').click() // Navigate and click on "Clound-only" CTA 
    await page.locator('#videopad').click() // Click on web element with id Videopad
    await expect(page.locator('#contentbox0')).toContainText('AWS migration complete') // Navigate to element and validate is displayed on the page. 
    await page.goBack()//Navigate back one step / press back BTN in the browser 
    await page.getByRole('img', { name: 'Menu' }).click() // Click on the side menu
    await page.getByText('Careers').click() // Click on menu element "Careers"
    await page.getByRole('link', { name: 'Vacancies', exact: true }).click() // Click on the "Careers" sub-menu "Vacancies"
    await expect(page.locator('#contentbox0').getByText('Work at CDL')).toBeVisible() // Vallidate "WACdl" is visible / displayed on the page. 
    const vacanciesFilter = page.locator('#vacsearch')//Filter the job position 
    await vacanciesFilter.fill('java engineer')//Filter the job position 
    await vacanciesFilter.press('Enter')//Filter the job position / Press Enter
    const advertLocator = await page.getByRole('link', { name: 'This is an exciting' })
    console.log(advertLocator)
    await expect(advertLocator).toHaveText('This is an exciting opportunity for a passionate Java engineer to join one of many agile squads ...')
    await advertLocator.click()

})
