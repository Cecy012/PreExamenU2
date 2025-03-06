import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlaylistScreen } from '../../components/PlaylistScreen';
import { PlayerScreen } from '../../components/PlayerScreen';
import React from 'react';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Playlist">
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
        <Stack.Screen name="Details" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
