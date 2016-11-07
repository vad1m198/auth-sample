var ClientOAuth2 = require('client-oauth2')

var bitbucketAuth = new ClientOAuth2({
  clientId: 'VReDDtftrDyQyAdyJL',
  clientSecret: 'bbTdBTne7LTLtUev2ANSzuQVesJAg5RR',
  accessTokenUri: 'https://bitbucket.org/site/oauth2/access_token',
  authorizationUri: 'https://bitbucket.org/site/oauth2/authorize',
  //authorizationGrants: ['code'],
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['account', 'repository']
})

function CreateToken() {
  console.log("createToken");
// Can also just pass the raw `data` object in place of an argument.
var token = bitbucketAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' })
console.log(token)
}