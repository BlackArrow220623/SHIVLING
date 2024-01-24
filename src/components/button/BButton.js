import React from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native';
import Text from '../text/BText'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import commonColors from '../../Utils/Constants/Colors';
const Button = props => {

  return (

    props.isLoading && props.disabled ?
    <View style={styles.button_container}>
    <TouchableOpacity disabled={props.disabled} style={styles.disabledButton}>
      {props.isLoading == false ? (
        <Text style={styles.text}>{props.title}</Text>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color={commonColors.white} />
        </View>
      )}
    </TouchableOpacity>
  </View>
      :
      <View style={styles.button_container}>
        <TouchableOpacity
          style={[props.mode == "outlined" ? styles.outlined : styles.button, props.style]}
          onPress={props.onPress}
          disabled={props.disabled}>
          <Text bold style={props.mode == "outlined" ? styles.outlinedText : styles.text}
          >{props.title}</Text>
        </TouchableOpacity>
      </View>

  );
};
const styles = StyleSheet.create({
  button_container: {
    flex: 1,
    // flexDirection : 'row',
  },
  outlined: {
    alignItems: 'center',
    backgroundColor: "#FFF",
    color: "red",
    padding: 10,
    marginLeft: 5,
    height: 50,
    borderWidth: 2,
    // borderColor: "#FF8329",
    borderRadius: 4,
    borderColor: commonColors.grey

  },
  button: {
    alignItems: 'center',
    backgroundColor: commonColors.sandal,
    color: '#fff',
    padding: 10,
    marginLeft: 5,
    height: 50,
    borderRadius: 4
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: commonColors.disabledSecondary,
    color: '#fff',
    padding: 10,
    marginLeft: 5,
    height: 50,
    borderRadius: 4
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#000"

  },
  outlinedText: {
    // fontWeight: 'bold',
    fontSize: 18,
    // color:  "#FF8329"
    color: commonColors.grey
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Button;