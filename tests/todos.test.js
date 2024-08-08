import {test, expect} from "@playwright/test";


test("practice test should pass" , async ({ page }) => {
    await page.goto('http://localhost:3000/')
    const newTodoInput = page.getByLabel('New Todo');
    await newTodoInput.fill('hello');
    await expect(newTodoInput).toHaveValue('hello');
});

test("ticket 8" , async ({ page }) => {
    await page.goto('http://localhost:3000/')
    const seeHeading = page.getByRole('heading', {name: 'Todo List App'});
    await expect(seeHeading).toHaveText('Todo List App');
    const newTodoInput = page.getByLabel('New Todo');
    await newTodoInput.fill('hello'); 
    await expect(newTodoInput).toHaveValue('hello');
});