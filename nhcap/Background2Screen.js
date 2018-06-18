import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

  class Background2Screen extends React.Component{
  
    static navigationOptions = ({navigation}) =>{
      const {state} = navigation
      return {
      title: '患者背景のアセスメント',
      headerStyle: { backgroundColor : 'rgb(24,77,116)'},
      headerRight:  <Button title="次へ" color = "#fff" onPress={() => state.params.handleCcr()}/>,
    }
  }
    componentDidMount(){
      this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('SevereH')})
  }
  
      render(){
          return(
            <View style = {styles.container}>　
            <View style ={styles.judge}>
             <Text style ={styles.judgetext} >積極的な肺炎治療をすることが、必ずしも患者の生命予後や</Text>
             <Text style ={styles.judgetext} >QOLを改善するとは限らない。患者個人や家族の意思を尊重</Text>
             <Text style ={styles.judgetext} >した上で治療方針を判断するような、生命倫理的側面を最初に</Text>
             <Text style ={styles.judgetext} >考慮する。</Text>
            </View>
            <View style = {styles.assess}>
              <Text style = {{color: '#fff', fontSize:16, paddingTop: 10,fontWeight: 'bold'}}>1) 誤嚥性肺炎のリスクの判断 </Text>
              <Text style={{paddingTop:8, paddingBottom: 40,color: '#fff'}}>意識障害、全身衰弱、長期臥床、脳血管障害{"\n"}慢性神経疾患、食道機能不全、胃食道逆流、医原性など </Text>
              <Text style = {{color: '#fff',fontSize:16,  fontWeight: 'bold'}}>2) 疾患末期、老衰等の終末期状態の判断 </Text>
              <Text style={{paddingTop:12, color: '#fff',  fontWeight: 'bold'}}>亜急性期型終末期:</Text>
              <Text style={{paddingTop:3, paddingBottom: 8, color: '#fff', fontSize:12}}>病状が進行して、生命予後が半年以内と考えられる時期</Text>
              <Text style={{paddingTop:8, color: '#fff',  fontWeight: 'bold'}}>慢性型終末期:</Text>
              <Text style={{paddingTop:4, paddingBottom: 1, color: '#fff', fontSize:12}}>病状が不可逆的かつ進行性で、その時代に可能な</Text>
              <Text style={{paddingBottom:1, color: '#fff', fontSize:12}}>最善の治療により病状の好転や進行の阻止が</Text>
              <Text style={{paddingBottom:1, color: '#fff', fontSize:12}}>期待できなくなり、近い将来の死が不可避な状態</Text>
              <Text style={{paddingTop:32, color: '#fff', fontWeight: 'bold',fontSize:15}}>1), 2) をもとに</Text>
              <Text style={{color: '#fff', paddingTop: 3, fontWeight: 'bold',fontSize:15}}>緩和医療や、治療の不開始を検討する</Text>
              <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:20, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>
          </View>
        )
    }
}
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(250,250,240)',
      height:1000
    },
    judge: {
      backgroundColor: '#fff',
      marginTop: 35,
      marginBottom: 1,
      height: 100,
      width: 352,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.4,
      shadowRadius: 2,
      alignSelf: 'center',
      padding: 15,
      
    },
    judgetext:{
      fontSize: 12,
      fontWeight: 'bold',
      padding: 3
    },
    assess: {
        backgroundColor: 'rgb(130,200,143)',
        marginTop: 35,
        marginBottom: 7,
        height: 400,
        width: 373,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
  })
  
  export default Background2Screen;