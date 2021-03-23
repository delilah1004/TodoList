import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import { StyleSheet, View } from 'react-native';

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Item({ task, onToggle, key }) {
  return (
    <View
      style={styles.item}>
      <CheckBox
        onClick={onToggle(key)}
        isChecked={task.checked}
        rightText={task.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    paddingVertical: 10
  }
})