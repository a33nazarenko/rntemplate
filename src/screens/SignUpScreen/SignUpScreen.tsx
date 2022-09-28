import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
export const SignUpScreen: React.FC<IProps> = ({navigation}) => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>SignUpScreen</Text>
    </View>
  );
};
