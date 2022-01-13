import React from 'react'
import 'tenq-action-subscriber/dist/index.css'
import TenqActionSubscribe from "tenq-action-subscriber";

const App = () => {
  //const host = 'https://localhost';
  const host = 'https://nachai-api.progim.net';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmFjaGFpLWFwaS5wcm9naW0ubmV0XC9hcGlcL3YwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MjA3OTczNSwiZXhwIjoxNjQzMjg5MzM1LCJuYmYiOjE2NDIwNzk3MzUsImp0aSI6Im5vZWw5b09Lc3JEejFqVk4iLCJzdWIiOiI0Yzg5MDJhMy05NzZmLTQ5M2UtODcwMC1kYzcyZTdhZjU0YWMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.0LdCyQk4xpVWJN9uWTwcuUkCkYBNkkj1vd0mvvd3pGM';

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
