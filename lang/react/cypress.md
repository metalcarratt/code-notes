# Cypress
## Set up
Install:
```sh
npm install cypress --save-dev
```

Add to scripts:
```json
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```
And run: `npm run cypress:open`

After running cypress a window opens. Choose to create a testing type and choose a browser. It then opens in your browser. In the browser you can create your first spec. It will end up in `cypress/e2e/<spec-name>.cy. The inside will look something like:

```ts
describe('spec', () => {
  it('passes', () => {
  });
});

## Commands
Go to the web site you want to test:
```ts
cy.visit('http://localhost:3000');
```

Write a log:
```ts
cy.log('Doing something');
```

Check for text on the screen:
```ts
cy.contains('My Text');
```

Check for text on an element and click it:
```ts
cy.contains('Button').click();
```

Find element using css selector and click it:
```ts
cy.get('#my-id').click();
```

Enter text into element:
```ts
cy.get('#my-id').click().type('text');
```

Check for text within a `input[type=text]`:
```ts
cy.get('#my-id').should('have.value', 'my-value');
```
