const SaasFetch = window['saas-fetch'];
const SaasFetchChoice = window['SaasFetchChoice'];

SaasFetch.registerFetcher('choice', SaasFetchChoice);
SaasFetch.setupConfig({
  typeName: 'choice',
});
