// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'l9ugykxn0e'
export const apiEndpoint = `https://${apiId}.execute-api.eu-central-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'vturbin.us.auth0.com',            // Auth0 domain
  clientId: 'VEipPPYlVPnDIKC9QhloTxPUIPOrImQA',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
