# tenq-action-subscriber

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tenq-action-subscriber.svg)](https://www.npmjs.com/package/tenq-action-subscriber) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tenq-action-subscriber
```

## Usage

```jsx
import React from 'react'
import 'tenq-action-subscriber/dist/index.css'
import TenqActionSubscribe from "tenq-action-subscriber";

const App = () => {
  const host = 'https://localhost';
  const token = '';

  const subs = (event) => {
    console.log(event)
  }
  return <div>
    <p>Подписка на акцию в vkontakte</p>
    <TenqActionSubscribe
      provider={'vkontakte'}
      label={'Участвовать c VK'}
      host={host} token={token}
      promo_id={3}
      onSubscribe={subs}
    />
  </div>
}

export default App

```

## License

MIT © [taraschubarko](https://github.com/taraschubarko)
