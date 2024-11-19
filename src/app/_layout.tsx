import {SplashScreen, Stack} from "expo-router";
import React, {useCallback, useEffect} from "react";
import {Provider} from "inversify-react";
import container from "@/di/container";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack/>
    </Providers>
  );
}

function Providers({children}: { children: React.ReactNode }) {
  return (
    <Provider container={() => container}>
      <FirstTimeSetup>
        {children}
      </FirstTimeSetup>
    </Provider>
  )
}

function FirstTimeSetup({children}: { children: React.ReactNode }) {
  const executor = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    executor().then().catch();
  }, [executor]);

  return children;
}
