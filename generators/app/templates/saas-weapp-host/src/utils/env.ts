declare global {
  interface Window {
    env: string;
    publishEnv: string;
    cdnBase: string;
    hostAppName: string;
  }
}

export const { publishEnv, hostAppName, env } = window;

export const cdnHost = window.cdnBase;
