import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page
  
  readonly mediaMenu: Locator
  readonly careersMenu: Locator

  constructor(page: Page) {
    this.page = page
    
    this.mediaMenu = page.getByText('Media')
    this.careersMenu = page.getByText('Careers')
  }

  async goToMedia() {
    await this.mediaMenu.click()
  }

   async waitForPageLoad() {
    await expect(this.page).toHaveTitle('CDL | CDL - Innovate and Deliver');
  }
}