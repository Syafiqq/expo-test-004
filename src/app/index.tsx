import {Env} from '@env';
import {Text, View} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Env.APP_ENV: {Env.APP_ENV}</Text>
      <Text>Env.APP_NAME: {Env.APP_NAME}</Text>
      <Text>Env.APP_DESCRIPTION: {Env.APP_DESCRIPTION}</Text>
      <Text>Env.APP_SCHEME: {Env.APP_SCHEME}</Text>
      <Text>Env.APP_IOS_BUNDLE_ID: {Env.APP_IOS_BUNDLE_ID}</Text>
      <Text>Env.APP_ANDROID_PACKAGE_NAME: {Env.APP_ANDROID_PACKAGE_NAME}</Text>
      <Text>Env.APP_VERSION: {Env.APP_VERSION}</Text>
      <Text>Env.APP_BUILD_NUMBER: {Env.APP_BUILD_NUMBER}</Text>
    </View>
  );
}
