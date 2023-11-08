A simple NextJS app at [stevengouws.com](https://stevengouws.com/) for my online and print CV.

It seemed like an interesting little challenge to see if I could get it to look pretty similar printed or online, so that I don't have to maintain my CV in two places.

### Dev

```bash
npm run dev
```

### Tests

Since there isn't much functionality to test, I opted for simple visual regression testing with Playwright to make sure I don't inadvertently break the design, and then just some basic tests to ensure all the external links that I don't control are still functional and relevant.

#### Visual Regression

```bash
npm run test-visual
```

#### E2E

```bash
npm run test
```
