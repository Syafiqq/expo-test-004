import {SplashScreen, Stack} from "expo-router";
import React, {useCallback, useEffect} from "react";
import {Provider, useInjection} from "inversify-react";
import container from "@/di/container";
import {Database} from "@nozbe/watermelondb";
import {DatabaseProvider} from '@nozbe/watermelondb/react'
import {Types} from "@/di/container.type";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack/>
    </Providers>
  );
}

function Providers({children}: { children: React.ReactNode }) {
  const database = useInjection<Database>(Types.watermelon);
  return (
    <Provider container={() => container}>
      <DatabaseProvider database={database}>
        <FirstTimeSetup>
          {children}
        </FirstTimeSetup>
      </DatabaseProvider>
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
