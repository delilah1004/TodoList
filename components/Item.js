import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({ task }) {

  const [checked, setChecked] = useState(false);

  return (
    <View
      style={styles.item}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#262C74"
        uncheckedColor="#262C74"
      />
      <Text
        style={[checked ? styles.strikeText : styles.unstrikeText]}>{task.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10
  },
  strikeText: {
    color: '#bbb',
    fontFamily: 'Montserrat_100Thin',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    fontFamily: 'Montserrat_100Thin',
    color: '#29323c',
  }
})