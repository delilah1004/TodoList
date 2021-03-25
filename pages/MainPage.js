import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json'
import Item from '../components/Item';
import Loading from '../components/Loading';
import bg from '../assets/bg_particle.png';

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
    }, 2000)
  }, [])

  let tasks = state.task;

  const date = new Date();

  let day = ['일', '월', '화', '수', '목', '금', '토']

  return ready ? <Loading /> : (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}></ImageBackground>
      <StatusBar style="auto" />
      <Text style={styles.topText}>TO DO LIST</Text>
      <View style={styles.imageSpace}></View>
      <View style={styles.list}>
        <View style={styles.spaceTop}>
          <Text style={styles.today}>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일 {day[date.getDay()]}요일</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {
            tasks.map((task, i) => {
              return (
                <Item task={task} key={i} />
                )
            })
          }
          <View style={styles.space}></View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  topText: {
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FFF',
    textAlign: 'center'
  },
  imageSpace: {
    width: '100%',
    height: 150
  },
  spaceTop: {
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: '#EEE',
    alignItems: 'center'
  },
  today: {
    marginVertical: 10,
    fontSize: 20,
    fontFamily: 'Gaegu_700Bold',
    color: '#FFF'
  },
  list: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 30
  },
  space: {
    width: '100%',
    height: 20
  }
})