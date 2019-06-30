import * as singleSpa from 'single-spa';

const pathPrefix = (prefix) => () => window.location.hash.startsWith(prefix);

export default async () => {
  // 加载子站app
  // singleSpa.registerApplication('reactApp', () => SystemJS.import('../build/index.js'), pathPrefix('#/singleIndex'));

  // 加载站内app
  singleSpa.registerApplication('index', () => import('../index/index.js'), pathPrefix('#/index'));
  
  singleSpa.start();
}
