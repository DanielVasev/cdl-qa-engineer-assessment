import { Page, Locator, expect } from '@playwright/test';

export class NewsPage {
  readonly page: Page
  readonly newsLink: Locator
  readonly cloudOnlyCta: Locator
  readonly contentBox0: Locator

  constructor(page: Page) {
    this.page = page
    this.newsLink = page.getByRole('link', { name: 'News', exact: true })
    this.cloudOnlyCta = page.locator('#contentbox5').getByText('Cloud-only transformation')
    this.contentBox0 = page.locator('#contentbox0')
  }

   async waitForPageLoad() {
    await expect(this.page).toHaveTitle('CDL | News')
  }

  async openNews() {
    await this.newsLink.click()
  }

  async clickCloudOnlyCta() {
    await this.cloudOnlyCta.click();
  }

  async waitForCloudPageLoad() {
    await expect(this.contentBox0).toContainText('AWS migration complete');
  }
}