import { Page, Locator, expect } from "@playwright/test"

export class MenuActions{
    readonly page:Page

    //Menu Parent Items 
    readonly menuBtn: Locator
    readonly mediaBtn: Locator
    readonly careersBtn: Locator

    //Menu sub-items
    readonly newsSubMenuBtn: Locator
    readonly vacanciesSubBtn: Locator

    constructor(page:Page){
        this.page = page
        this.menuBtn = page.getByRole('img', { name: 'Menu' })
        this.mediaBtn = page.getByText('Media')
        this.careersBtn = page.getByText('Careers')
        this.newsSubMenuBtn = page.getByRole('link', { name: 'News', exact: true })
        this.vacanciesSubBtn = page.getByRole('link', { name: 'Vacancies', exact: true })
    }

    async openMenu(){
        await this.menuBtn.click()
    }

    async clickMediaNews(){
        await this.menuBtn.click()
        await this.mediaBtn.click()
        await this.newsSubMenuBtn.click()
    }

    async clickCareersVacBtn(){
        await this.menuBtn.click()
        await this.careersBtn.click()
        await this.vacanciesSubBtn.click()
    }
}