import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
import { ActivityIndicator } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const rootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])
  
  if (!fontsLoaded && !fontError) return <ActivityIndicator />

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Nova Ardiansyah' }} />
    </Stack>
  )
}

export default rootLayout