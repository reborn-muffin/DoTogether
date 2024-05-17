import {Tabs} from 'expo-router'
import {Icon, useTheme} from 'react-native-paper'
import {ScreenNames} from '../../../src/consts/routes'

const TabsLayout = () => {
  const theme = useTheme()
  const homeIcon = () => <Icon source={'home'} size={28} color={theme.colors.primary} />
  const settingsIcon = () => (
    <Icon source={'account-settings'} size={28} color={theme.colors.primary} />
  )

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarLabelStyle: {
          color: theme.colors.onBackground,
        },
        headerTintColor: theme.colors.onBackground,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Tabs.Screen name={ScreenNames.HOME} options={{tabBarIcon: homeIcon}} />
      <Tabs.Screen
        name={ScreenNames.SETTINGS}
        options={{tabBarIcon: settingsIcon, headerShown: true}}
      />
    </Tabs>
  )
}

export default TabsLayout
