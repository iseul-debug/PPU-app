import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { TabBarIcon2 } from '@/components/navigation/TabBarIcon2';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D7E4BD",
        tabBarInactiveBackgroundColor: "#294B29",
        // tabBarBackground: "#12372A",
        tabBarActiveBackgroundColor: "#294B29",
        headerShown: false,
        headerTitle: " ",
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Quà nè',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'gift' : 'gift-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon2
              name={focused ? "account" : "account-outline"}
              color={color}
            />
          ),
        }}
      />

    </Tabs>


  );
}
