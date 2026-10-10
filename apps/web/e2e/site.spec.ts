import { expect, test } from "@playwright/test";

test("home page communicates the positioning and the main next step", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /if no one else can do it/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /talk through your challenge/i })).toBeVisible();
});

test("five core pages load and have meaningful page headings", async ({ page }) => {
  const pages = [
    { path: "/", heading: /if no one else can do it/i },
    { path: "/services", heading: /one brief/i },
    { path: "/industries", heading: /good work starts/i },
    { path: "/about", heading: /we’re here for/i },
    { path: "/contact", heading: /the first step is/i },
  ];
  for (const route of pages) {
    await page.goto(route.path);
    await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
  }
});

test("contact form requires a valid project brief", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send project brief/i }).click();
  await expect(page.getByLabel(/your name/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /a thoughtful start/i })).toBeVisible();
});
