
# Playwright Demo

this repository was build with playwright 1.42.0 and node.js 20.11.1
it uses https://www.saucedemo.com/ site

# Installation
Execute the command npm install to intall all the required depencies:

```bash
  npm install
```

# Playwright test execution
in order to execute playwright, review the scripts within the Package.json file

``` 
    npm run execute
```

npm run execute will execute the command : 
```
npx playwright test tests/ --project=chromium --headed
```
