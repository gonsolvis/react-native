import { View, Text } from 'react-native'
import mixpanel from '../Mixpanel';

export default function Index() {

  mixpanel.track('index tab', {
    some_property: 'some_value'
  });

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-5xl text-accent font-bold'> Welcome!</Text>
    </View>
  )
}