import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { colours } from '../../styleConstants';
import NavigationIcon from './navIcons';

const TabBar = ({ state, descriptors, navigation}: any) =>{
    return (
      <View style={styles.container}>
        {state.routes.map((route: any , index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          return (
            <View key = {index} style = {styles.tabContainer}>
              <Pressable
                onPress = {onPress}
                style = {{ borderRadius: 20 }}>
                <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 5 }}>
                  <NavigationIcon route={label} isFocused={isFocused} />
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 25,
      backgroundColor: colours.primaryText,
      borderRadius: 25,
      alignSelf: 'center',
      width: '90%'
    },
    tabContainer: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      marginVertical: 10,
      borderRadius: 1, 
      borderColor: "#333B42"
    }, 
  })
  
  
  export default TabBar; 
