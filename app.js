var ClientOAuth2 = require('client-oauth2')

var githubAuth = new ClientOAuth2({
  clientId: 'abc',
  clientSecret: '123',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  authorizationGrants: ['credentials'],
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['notifications', 'gist']
})