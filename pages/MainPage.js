import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Item from '../components/Item';
import Loading from '../components/Loading';

export default function MainPage() {
  console.disableYellowBox = true;

  const [state, setState] = useState([])
  const [ready, setReady] = useState(true)

  useEffect(() => {
    // 뒤의 1000 숫자는 1초를 뜻함
    // 1초 뒤에 실행되는 코드들이 담겨있는 함수
    setTimeout(() => {
      let item = data.item;
      setState(item)
      setCateState(item)
      setReady(false)
    }, 2000)
  }, [])

  // 삼항연산자
  // 처음 ready 상태값은 true 이므로 Loading 이 반환됨
  // useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환
  return ready ? <Loading /> : (
    <ScrollView style={styles.container}>
      <StatusBar/>
      <View>
        {
          state.map((content, i) => {
            return (<Item content={content} key={i} />)
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
});