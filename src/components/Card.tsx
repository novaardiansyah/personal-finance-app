import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  customStyle?: Object
}

export default function Card({ children, customStyle }: Props)
{
  return (
    <View style={[styles.card_container, customStyle]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: '#2F2762',
    borderRadius: 24,
    padding: 28
  }
})