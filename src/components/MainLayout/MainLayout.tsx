import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigation from '../../navigation/AppNavigation';
import AuthNavigation from '../../navigation/AuthNavigation';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {darkTheme} from '../../themes/dark';
import {lightTheme} from '../../themes/light';

export const MainLayout: React.FC = () => {
  const currentNav = React.useMemo(() => {
    return false ? <AuthNavigation /> : <AppNavigation />;
  }, []);

  const schema = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={schema === 'dark' ? darkTheme : lightTheme}>
        {currentNav}
      </NavigationContainer>
    </AppearanceProvider>
  );
};
