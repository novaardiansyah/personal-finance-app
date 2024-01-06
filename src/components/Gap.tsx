import { View } from 'react-native'
import React from 'react'

interface Props {
  mb?: number,
  mt?: number,
  ml?: number,
  mr?: number,
  pb?: number,
  pt?: number,
  pl?: number,
  pr?: number,
  my?: number,
  mx?: number,
  py?: number,
  px?: number
}

export default function Gap({ ...props }: Props)
{
  return (
    <View style={{ marginBottom: props?.mb || 0, marginTop: props?.mt || 0, marginLeft: props?.ml || 0, marginRight: props?.mr || 0, paddingBottom: props?.pb || 0, paddingTop: props?.pt || 0, paddingLeft: props?.pl || 0, paddingRight: props?.pr || 0, marginVertical: props?.my || 0, marginHorizontal: props?.mx || 0, paddingVertical: props?.py || 0, paddingHorizontal: props?.px || 0 }} />
  )
}