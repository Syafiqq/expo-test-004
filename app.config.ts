/* eslint-disable max-lines-per-function */
import type {ConfigContext, ExpoConfig} from '@expo/config';


export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  platforms: ['ios', 'android'],
  name: 'drivers-app',
  slug: 'drivers-app',
  description: 'People\'s Linen Drivers App',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    ...config.ios,
    supportsTablet: true,
  },
  android: {
    ...config.android,
    adaptiveIcon: {
      ...config.android?.adaptiveIcon,
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
  },
  web: {
    ...config.web,
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  experiments: {
    ...config.experiments,
    typedRoutes: true
  },
  extra: {
    ...config.extra,
  }
});
