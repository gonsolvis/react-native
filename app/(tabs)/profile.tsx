import { View, Text } from 'react-native'
import React from 'react'
import mixpanel from '../Mixpanel';

export default function Profile() {

  mixpanel.track('profile tabr', {
    some_property: 'some_value'
  });

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>profile</Text>
    </View>
  )
}