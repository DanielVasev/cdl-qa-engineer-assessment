import { Page, Locator, expect } from '@playwright/test';

export class NewsPage {
  readonly page: Page;
  readonly newsLink: Locator;
  readonly banner: Locator;
  readonly cloudOnlyCta: Locator;
  readonly contentBox0: Locator;

  constructor(page: Page) {
    this.page = page
    this.newsLink = page.getByRole('link', { name: 'News', exact: true })
    this.banner = page.locator('#videopad')
    this.cloudOnlyCta = page.locator('#contentbox5').getByText('Cloud-only transformation')
    this.contentBox0 = page.locator('#contentbox0')
  }

  async openNews() {
    await this.newsLink.click()
  }

  async validateBannerVisible() {
    await expect(this.banner).toBeVisible()
  }

  async clickCloudOnlyCta() {
    await this.cloudOnlyCta.click()
  }

  async clickBanner() {
    await this.banner.click()
  }

  async validateAwsMigration() {
    await expect(this.contentBox0).toContainText('AWS migration complete')
  }
}