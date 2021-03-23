import React, { useState } from 'react'
// import CheckBox from 'react-native-check-box'
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Item({ task, onToggle, key }) {

  const [checked, setChecked] = useState(task.checked);

  return (
    <View
      style={styles.item}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#262C74"
      />
      <Text 
        style={[checked ? styles.strikeText : styles.unstrikeText]}>{task.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    alignItems: "center"
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  }
})