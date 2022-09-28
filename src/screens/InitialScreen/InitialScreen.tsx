import {
  NavigationProp,
  ParamListBase,
  useTheme,
} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
export const InitialScreen: React.FC<IProps> = ({navigation}) => {
  const styles = React.useMemo(() => createStyles(), []);
  const {colors} = useTheme();

  const handlePress = React.useCallback((value: string) => {
    console.log(value);
    navigation.navigate('SignInScreen');
  }, []);

  return (
    <View style={styles.body}>
      <Text style={[styles.text, {color: colors.text}]}>Initial Screen</Text>
      <TouchableOpacity onPress={() => handlePress('sadasd')}>
        <Text>Go</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
