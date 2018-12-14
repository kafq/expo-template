import React from 'react'
import { SafeAreaView } from 'react-native'

interface LayoutProps {
  children: JSX.Element[]
}

const Layout = (props: LayoutProps) => <SafeAreaView>{props.children}</SafeAreaView>

export { Layout }