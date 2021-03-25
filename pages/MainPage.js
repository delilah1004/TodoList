import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import data from '../data.json'
import Item from '../components/Item';
import Loading from '../components/Loading';
import ParticleBackground from "react-native-particle-background";

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

  const date = new Date();

  let day = ['일', '월', '화', '수', '목', '금', '토']

  return ready ? <Loading /> : (
    <View style={styles.container}>
      <LinearGradient
        colors={['#93B0FF', '#B89AFA']}
        style={styles.background} />
      <StatusBar style="light" />
      <View style={styles.background}>
        <ParticleBackground
          particleColor="#FFF"
          particleSize={8}
          particleDispersion={32}
        />
      </View>
      <Text style={styles.title}>TO DO LIST</Text>
      {/* <Text style={styles.title}>TODAY</Text>
      <Text style={styles.title}>계획을 달성하자!</Text> */}
      {/* <Image 
        style={styles.image}
        source={'../assets/alien.gif'}/> */}
      <View style={styles.list}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.spaceTop}>
            <Text style={styles.today}>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일 {day[date.getDay()]}요일</Text>
          </View>
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
    paddingTop: 40
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '110%',
  },
  image: {
    width: '100%',
    height: '20%'
  },
  title: {
    paddingVertical: 20,
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FFF',
    textAlign: 'center'
  },
  spaceTop: {
    marginHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: '#EEE',
    alignItems: 'center'
  },
  today: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Sunflower_500Medium',
    color: '#FFF'
  },
  list: {
    flex: 1,
    backgroundColor: '#BDB1F6',
    paddingHorizontal: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  space: {
    width: '100%',
    height: 20
  }
})