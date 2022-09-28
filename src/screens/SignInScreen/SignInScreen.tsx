import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
export const SignInScreen: React.FC<IProps> = ({navigation}) => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>SignInScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
