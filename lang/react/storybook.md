# Storybook

Installation:
```sh
npx storybook@latest init
```

To run:
```sh
npm run storybook
```

It runs on `http://localhost:6006`, but the page will auto-open.

Installs examples under `src/stories`. In that folder just add normal React components as well as a `<ComponentName>.stories.ts` file. You may need to make it `*.tsx` if you plan on using the `render` feature of `Story`.

**note** you can actually stick stories anywhere under `src` as long as it ends in `stories.ts` or `stories.tsx`. This is configured in `.storybook/main.ts`.

## Stories file
The base:
```ts
import type { Meta, StoryObj } from '@storybook/react';
import NotesTextField from './NotesTextField';
import { useState } from 'react';

const meta = {
  title: 'Example/NotesTextField', // dictates how it appears in the menu
  component: NotesTextField, // the component
  tags: ['autodocs'],
} satisfies Meta<typeof NotesTextField>;

export default meta;
type Story = StoryObj<typeof meta>;
```

Then create stories:
```ts
export const NoDefault: Story = {
  args: {
    value: '',
    onChange: () => {}
  },
};
```

For more control over the render:
```ts
export const WithDefault: Story = {
  args: {
    value: '',
    onChange: () => {}
  },
  render: () => {
    const [value, setValue] = useState('default');
    return <NotesTextField value={value} onChange={v => setValue(v)} />;
  }
}
```

## Add accessibility testing
Follow instructions here: https://storybook.js.org/docs/writing-tests/accessibility-testing
