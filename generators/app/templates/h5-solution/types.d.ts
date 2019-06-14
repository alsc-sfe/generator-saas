import Bridge from '@alipay/mapp-dd-bridge';

declare global {
  const kBridge: typeof Bridge;
}
