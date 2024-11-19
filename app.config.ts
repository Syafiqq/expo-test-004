/* eslint-disable max-lines-per-function */
import type {ConfigContext, ExpoConfig} from '@expo/config';

import {ClientEnv, Env} from './env';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  platforms: ['ios', 'android'],
  name: Env.APP_NAME,
  slug: Env.APP_NAME,
  description: Env.APP_DESCRIPTION,
  owner: Env.EXPO_ACCOUNT_OWNER,
  version: Env.APP_VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: Env.APP_SCHEME,
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    ...config.ios,
    supportsTablet: true,
    bundleIdentifier: Env.APP_IOS_BUNDLE_ID,
  },
  android: {
    ...config.android,
    adaptiveIcon: {
      ...config.android?.adaptiveIcon,
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: Env.APP_ANDROID_PACKAGE_NAME
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
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  }
});
