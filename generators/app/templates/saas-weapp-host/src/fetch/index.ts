// @ts-ignore
const SaasFetch = window['saas-fetch'];
// @ts-ignore
const { SaasFetchChoice } = window;

SaasFetch.registerFetcher('choice', SaasFetchChoice);
SaasFetch.setupConfig({
  typeName: 'choice',
});
