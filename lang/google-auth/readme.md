# Google Authentication

Basically copy+paste code from [here](https://medium.com/@toluarejibadey/how-to-use-google-login-in-vuejs-8c50cc2fa054) for FE and [here](https://medium.com/@toluarejibadey/how-to-use-google-login-in-nodejs-expressjs-125c76c01f54) for BE.

## Step 1 - Get client ID and secret
Go somewhere around here: https://console.cloud.google.com/apis/credentials, create a new web applicaton, add credentials and configure OAuth screen. Eventually, you should get the client ID and the secret.

You'll also need to set which accounts are allowed to log in and "Authorized JavaScript Origins" (your FE)

## Step 2 - FE code
The following will open a new browser window to let the user log in and then return to you an 'auth code' which you need to send to the BE:

```ts
import { googleSdkLoaded } from 'vue3-google-login'; // using Vue

googleSdkLoaded(google => {
  google.accounts.oauth2
    .initCodeClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'email profile openid',
      redirect_uri: 'http://localhost:4000/auth/callback', // Not sure if this has to match anything
      callback: async response => {
        if (response.code) {
          // call your BE here
        }
      }
    })
    .requestCode();
});
```

Here's an example of calling your BE:
```ts
const response = await axios.post('http://localhost:4000/auth', null, { Authorization: getAuthCode() });
```

## Step 3 - BE code
I created an auth endpoint in express like so:
```ts
app.use(cors());
app.post('/auth', async (req, res) => {
    try {
        const authCode = req.headers.authorization;
        // do other authorisation

    } catch (error) { /* ... */ }
});
```

Once your BE has the auth code, you can:

### get the access token from Google
```ts
const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';

const response = await axios.post(
  GOOGLE_TOKEN_ENDPOINT,
  {
    code, // the auth code sent from FE
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_SECRET,
    redirect_uri: 'postmessage',
    grant_type: 'authorization_code'
  });
const accessToken = response.data.access_token;
```

### get user details from Google
```ts
const GOOGLE_USERINFO_ENDPOINT = 'https://www.googleapis.com/oauth2/v3/userinfo';

const userResponse = await axios.get(
  GOOGLE_USERINFO_ENDPOINT,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
);
const userDetails = userResponse.data;
```
The user details payload from Google looks something like this:
```js
User Details {
  sub: 'x', // a number
  name: 'x', // full name
  given_name: 'x',
  family_name: 'x',
  picture: 'x', // a url you can directly embed this in a <img src="..." /> tag
  email: 'x',
  email_verified: true,
  locale: 'en'
}
```

