import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page
  readonly menuButton: Locator
  readonly mediaMenu: Locator
  readonly careersMenu: Locator

  constructor(page: Page) {
    this.page = page
    this.menuButton = page.getByRole('img', { name: 'Menu' })
    this.mediaMenu = page.getByText('Media')
    this.careersMenu = page.getByText('Careers')
  }

  async openMenu() {
    await this.menuButton.click()
  }

  async goToMedia() {
    await this.mediaMenu.click()
  }

  async goToCareers() {
    await this.careersMenu.click()
  }
}