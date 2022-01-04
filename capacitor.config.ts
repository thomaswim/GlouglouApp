import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'glouglou',
  webDir: 'www',
  bundledWebRuntime: false,
  "server": {
    "url": "http://192.168.0.10:4200",
    "cleartext": true
  },
};


export default config;
