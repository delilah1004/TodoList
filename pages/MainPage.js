import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import data from '../data.json'
import Item from '../components/Item';
import Loading from '../components/Loading';

export default function MainPage() {
  console.disableYellowBox = true;

  const [state, setState] = useState([])

  const [ready, setReady] = useState(true)

  useEffect(() => {
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(() => {
      setState(data)
      setReady(false)
    }, 1000)
  }, [])

  let tasks = state.task;

  return ready ? <Loading /> : (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6FA8B4', '#83B8C4', '#A3CCD0']}
        style={styles.background} />
      <StatusBar style="light" />
      <Text style={styles.title}>TO DO LIST</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        {
          tasks.map((task, i) => {
            return (
              <Item task={task} key={i} />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '110%',
  },
  title: {
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'MontserratSubrayada_400Regular',
    color: '#FFF',
    textAlign: 'center'
  },
  subTitle: {
    padding: 10,
    fontFamily: 'MontserratSubrayada_400Regular',
    color: '#FFF'
  }
})