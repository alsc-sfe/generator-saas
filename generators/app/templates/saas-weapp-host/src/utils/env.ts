declare global {
  interface Window {
    env: string;
    publishEnv: string;
    cdnBase: string;
    hostAppName: string;
  }
}

export const { publishEnv, hostAppName } = window;

export const cdnHost = window.cdnBase;
