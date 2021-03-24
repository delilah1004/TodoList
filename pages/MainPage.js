import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json'
import Item from '../components/Item'
import Loading from '../components/Loading';

export default function MainPage() {
  console.disableYellowBox = true;
  
  const [state, setState] = useState([])

  const [ready, setReady] = useState(true)

  useEffect(()=>{
		//뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{
        setState(data)
        setReady(false)
    },1000)
  },[])

  let tasks = state.task;

  return ready ? <Loading/> : (
    <ScrollView style={styles.scrollView}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>To do List</Text>
        {
          tasks.map((task, i) => {
            return (
              <Item task={task} key={i}/>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#262C74',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    borderRadius: 10
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  }
})