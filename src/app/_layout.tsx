import {SplashScreen, Stack} from "expo-router";
import React, {useCallback, useEffect} from "react";

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
    <FirstTimeSetup>
      {children}
    </FirstTimeSetup>
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
