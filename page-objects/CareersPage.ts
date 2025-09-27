import { Page, Locator, expect } from '@playwright/test'

export class CareersPage {
  readonly page: Page
  readonly vacanciesLink: Locator
  readonly workAtCdl: Locator
  readonly vacanciesFilter: Locator

  constructor(page: Page) {
    this.page = page
    this.vacanciesLink = page.getByRole('link', { name: 'Vacancies', exact: true })
    this.workAtCdl = page.locator('#contentbox0').getByText('Work at CDL')
    this.vacanciesFilter = page.locator('#vacsearch')
  }

  async openVacancies() {
    await this.vacanciesLink.click()
  }

  async validateWorkAtCdl() {
    await expect(this.workAtCdl).toBeVisible()
  }

  async filterVacancies(keyword: string) {
    await this.vacanciesFilter.fill(keyword)
    await this.vacanciesFilter.press('Enter')
  }

  async openVacancy(advertText: string) {
    const advertLocator = this.page.getByRole('link', { name: advertText })
    await expect(advertLocator).toHaveText(
      'This is an exciting opportunity for a passionate Java engineer to join one of many agile squads ...'
    )
    await advertLocator.click()
  }
}