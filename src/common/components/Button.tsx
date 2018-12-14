import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = () => (
  <TouchableOpacity onPress={() => { alert('Hello') }}>
    <Text>Hello</Text>
  </TouchableOpacity>
)

export { Button }
