import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeDrawerMenu from './HomeDrawerMenu';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileNavigator from './ProfileNavigator';
import ContactUsNavigator from './_ContactUsNavigator';
import StudentNavigator from './StudentNavigator';
import { DRAWER } from 'src/constants/routes';
import { useAuth } from 'src/hooks';
import { IHomeDrawerNavigatorParamsList } from '../_types';
import { isPad } from 'src/functions';

const HomeNavigator = () => {
  const { state } = useAuth();
  const HomeDrawer = createDrawerNavigator<IHomeDrawerNavigatorParamsList>();
  return (
    <HomeDrawer.Navigator
      defaultStatus="closed"
      drawerContent={props => <HomeDrawerMenu authType={state.authType} {...props} />}
      initialRouteName={DRAWER.HOME}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: { width: isPad() ? 480 : 230 },
      }}>
      {state.authType === 1 ? (
        <>
          <HomeDrawer.Screen name={DRAWER.HOME} component={HomeStackNavigator} />
          <HomeDrawer.Screen name={DRAWER.EDIT} component={ProfileNavigator} />
          <HomeDrawer.Screen name={DRAWER.CONTACT_US} component={ContactUsNavigator} />
        </>
      ) : (
        <HomeDrawer.Screen name={DRAWER.PUPIL} component={StudentNavigator} />
      )}
    </HomeDrawer.Navigator>
  );
};

export default HomeNavigator;
