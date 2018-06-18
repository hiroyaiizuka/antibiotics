import React, { Component } from 'react';
import { Dimensions, Text,View,ScrollView, StyleSheet} from 'react-native';

class EscalationScreen extends React.Component{


static navigationOptions = ({navigation}) =>{
  const {state} = navigation
  return {
      title: '治療',
      headerStyle: { backgroundColor : 'rgb(241,112,89)'},
  }
}


    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
        <ScrollView  horizontal={true} pagingEnabled={true}>
         <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                }}>

            <View >
                <Text style ={styles.esc}> 重症度が低い{"\n"}耐性菌リスク(-)</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:110,left:10}}> ⤴︎ escalation 治療</Text>
            </View> 
            
            <View style = {styles.guidline } >
                <Text style={{fontWeight: 'bold', paddingBottom: 2, color: 'rgb(255,255,255)',}} >内服薬 (外来治療):</Text> 
                <Text style ={{ color: 'rgb(255,255,255)',fontSize:13}}>βラクタマーゼ阻害配合ペニシリン系 + マクロライド系薬{"\n"}レスピラトリーキノロン(結核をマスク！)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 2, color: 'rgb(255,255,255)',}}>注射薬:</Text>
                <Text style ={{ color: 'rgb(255,255,255)',fontSize:13}}>スルバクタム･アンピシリン{"\n"}セフトリアキソン (嫌気性菌感染疑いには、使用しない)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 2, color: 'rgb(255,255,255)',}}>非定型肺炎が疑われる場合:</Text>
                <Text style ={{ color: 'rgb(255,255,255)',fontSize:13}}>レボフロキサシン(結核をマスク！)</Text>
                <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:10, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>内服:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2,fontSize:13}}>オーグメンチン 375mg + サワシリン 250mg  1日3回{"\n"}(± ジスロマック2000mg 1回)</Text>
                <Text style={{fontWeight: 'bold', marginTop: 15, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2,fontSize:13}}>ロセフィン2g/日  or  ユナシン 1.5-3g  6時間毎 </Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:9, right:10}}> 感染症プラチナマニュアル2017</Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:9, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
            </View>


         </View>

         
         <View style={{
                     width: screenWidth,
                     backgroundColor: '#fff',
                     flex: 1,
                }}>
                <Text　style ={styles.esc}> 重症  or{"\n"}  耐性菌リスク(+)</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:110,left:10}}> ⤵︎ descalation  単剤治療</Text>
            

            <View style = {styles.guidline} >
                <Text style={{fontWeight: 'bold', paddingBottom: 10, paddingTop: 2, color: 'rgb(255,255,255)',}}>注射薬(単剤投与):</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 8}}>第4世代セフェム系薬  or  ニューキノロン系薬{"\n"}(→ 嫌気性菌感染を疑う際は、使用を避ける)</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:17}}>タゾバクタム･ピペラシン{"\n"}カルバペネム系 </Text>
                <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:76, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>  

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:15}}>ゾシン4.5g  6時間毎</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4}}>マキシピーム2g  6時間毎  (嫌気性菌感染を疑う際は避ける)</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4}}>メロペン1g  8時間毎</Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:15, right:10}}> 感染症プラチナマニュアル2017</Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:15, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
            </View>

         </View>
         <View style={{
                width: screenWidth,
                backgroundColor: '#fff',
                flex: 1,
                }}>
           <Text　style ={styles.esc}> 重症  and{"\n"}  耐性菌リスク(+)</Text>
           <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:110,left:10}}> ⤵︎ descalation  多剤治療</Text>
           

            <View style = {styles.guidline}>
                <Text style={{fontWeight: 'bold', paddingBottom: 10, paddingTop: 2, color: 'rgb(255,255,255)',}}>注射薬(2剤併用投与):</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>タゾバクタム・ピペラシン</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>カルバペネム系</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>第4世代セフェム系薬  (嫌気性菌感染を疑う際は避ける)</Text>
             
                <Text style = {{color: 'rgb(255,255,255)', paddingLeft: 50, paddingTop:5, paddingBottom: 5, fontWeight: 'bold'}}>+</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>アミノグリコシド系薬</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>ニューキノロン系薬</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 16, color: 'rgb(255,255,255)',}}>MRSA感染を疑う場合:　</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1}}>抗MRSA薬</Text>
                <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:8, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>
            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:17}}>ゾシン4.5g  6時間毎</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4}}> + クラビット500mg/日 or  ゲンタシン 5mg/kg/日</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4}}>(± バンコマイシン1g  12時間毎)</Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:14, right:10}}> 感染症プラチナマニュアル2017</Text>
                <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:14, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
            </View>
        </View>  


        </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    esc: {
        backgroundColor: '#fff',
            marginTop: 20,
            marginBottom: 1,
            height: 68,
            width: 160,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf:'center',
            padding: 15,
            fontSize: 15,
            fontWeight: 'bold'
    },
    guidline: {
        backgroundColor: 'rgb(130,200,143)',
        marginTop: 40,
        marginBottom: 7,
        height: 230,
        width: 378,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    example: {
        backgroundColor : 'rgb(114,95,70)',
        height: 255,
        width: 374,
        paddingLeft:13,
        paddingTop:20
    },
    
});


export default EscalationScreen;