import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { firebase_db } from "../firebaseConfig"

export default function Item({ task }) {

  const change = () => {
    firebase_db.ref('/task/' + task.idx).set(task,function(error) {})
    firebase_db.ref('/task/' + task.idx).update({ checked: false })
    firebase_db.ref('/done/' + task.idx).remove().then(function () {})
  }

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {change()}}
      color="#262C74">
      <Text
        style={[task.checked ? styles.strikeText : styles.unstrikeText]}>{task.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  }
})