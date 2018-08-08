import React, { Component } from 'react';
import { Dimensions, Text,View,ScrollView, StyleSheet} from 'react-native';

class SimpleScreen extends React.Component{


static navigationOptions = ({navigation}) =>{
  const {state} = navigation
  return {
      title: '治療',
      headerStyle: { backgroundColor : 'rgb(24,110,189)'},
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
                <Text style ={styles.esc}>総論</Text>
            </View> 
    
            <View style = {styles.guidline } >
                <Text style={{fontWeight: 'bold', position: 'relative'}}> 原因微生物:</Text>
                <Text style={{ paddingBottom: 4,paddingTop:8, fontSize:13}} >･グラム陰性桿菌の頻度はへる (6割程度)</Text>
                <Text style={{ paddingBottom: 2,fontSize:13}} >･薬剤耐性菌の頻度が増える</Text>
                <Text style={{fontSize: 11}}> (緑膿菌、エンテロバクター、セラチア、シトロバクター、腸球菌)</Text> 
                <Text style={{ paddingBottom: 4,paddingTop:16,fontSize:13}} >･グラム染色による、抗菌薬選択が望ましい</Text> 
                <Text style={{ paddingTop:8,fontSize:13}} >･黄色ブドウ球菌が検出された場合</Text> 
                <Text style={{ fontSize:13}} >  感染性心内膜炎などの血流感染や、腎･前立腺膿瘍を疑う</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:17, right:-6}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:17, right:-6}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>治療の基本)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold',paddingTop: 8}}>1.   無症候性細菌尿は、治療対象にならない</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      (例外、妊婦、侵襲性の泌尿器科処置、好中球減少時など)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 18}}>2.   男性の場合は、直腸診を行う</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>       前立腺腫大、圧痛や熱感を確認</Text>
                <Text style={{fontWeight: 'bold',paddingTop: 18}}>3.   治療期間:  膀胱炎、腎盂腎炎 7-14日間</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>       再発例や泌尿器科的異常がある場合、6週間</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:32, right:8}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:32, right:8}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>


         </View>

         
         <View style={{
                     width: screenWidth,
                     backgroundColor: '#fff',
                     flex: 1,
                }}>
                <Text　style ={styles.esc2}>膀胱炎、急性腎盂腎炎</Text>
                <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:10, marginTop: 20}}>膀胱炎)</Text>
                <View style = {styles.guidline2} >
                    <Text style={{fontWeight: 'bold', paddingBottom: 2}}>内服薬: </Text>
                    <Text>バクタ 2錠　　　　　  1日2回　7-14日間</Text>
                    <Text  style ={{fontSize: 12, paddingTop:2}}>オーグメンチン375mg + サワシリン250mg  1日3回  14日間</Text>
                 
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:17, right:-10}}> JAID/JSC感染症治療ガイドライン2015</Text>
                  
      
                </View>  
                 
                <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>腎盂腎炎)</Text>
                <View style = {styles.example}>
                    <Text style={{fontWeight: 'bold',}}>軽症: </Text>
                    <Text >セフメタゾール2g　12時間毎</Text>
                <Text style ={{ paddingTop: 1}}>ロセフィン2g　　　24時間毎</Text>
                    <Text style={{fontWeight: 'bold', paddingTop: 14}}>中等症: </Text>
                    <Text>ゾシン 　　　 4.5g  6時間毎 </Text>
                    <Text>マキシピーム  2g 　 6時間毎 </Text>
                    <Text style={{fontWeight: 'bold',paddingTop: 10}}>重症: </Text>
                    <Text>メロペン1g  8時間毎</Text>
                    <Text>クラビット 500mg/日  　上記に追加を検討する</Text>
                    <Text　style ={{paddingTop: 20, fontSize:13, fontWeight: 'bold' }}>グラム染色で、グラム陽性球菌(+):</Text>
                    <Text　style ={{paddingTop: 2, fontSize:13}}>Enterococcus  facium を考慮し</Text>
                    <Text　style ={{fontSize:13}}>バンコマイシン 1g 12時間毎　を追加する</Text>
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:17, right:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:17, right:10}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
                </View>
            </View>
    
           
         <View style={{
                width: screenWidth,
                backgroundColor: '#fff',
                flex: 1,
                }}>
           <Text　style ={styles.esc2}> 急性前立腺炎 </Text>
  
           

            <View style = {styles.guidline}>
                <Text style={{fontWeight: 'bold'}}>軽症、外来治療:</Text>
                <Text style ={{fontSize:13, paddingTop: 2,}}>バクタ 2錠　           1日2回   最低14日間  (通常3-4週間)</Text>
               
                <Text style ={{ paddingTop: 0, fontSize:13}}>クラビット 500mg 1日1回   最低14日間  (通常3-4週間)</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 0, paddingTop: 10,}}>中等症以上、入院治療:</Text>
                <Text style ={{fontSize:13, paddingTop: 2}}>腎盂腎炎と同じ治療薬</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 10,}}>重症で腸球菌の関与が疑われる場合:</Text>
                <Text style ={{fontSize:13, paddingTop: 2}}>ゲンタシン    5mg/kg/日 </Text>
                <Text style ={{fontSize:13}}>アンピシリン 2g 4-6時間毎　上記治療に追加{"\n"}(培養結果によっては、バンコマイシンに)</Text>
                <Text style = {{fontSize: 8, textAlign:'right', position: 'relative', top:8, left:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text> 
            </View>
            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>ポイント)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', fontSize:15,textDecorationLine: 'underline', marginTop:10}}>1.   前立腺に移行性の良い抗菌薬</Text>
                <Text　style ={{paddingTop: 8, fontSize:13}}> ST合剤、ニューキノロン系は前立腺への移行性が良い。{"\n"} 急性の場合、激しい炎症のため、βラクタム系も有効。</Text>
                <Text style={{fontWeight: 'bold', fontSize:15,textDecorationLine: 'underline', marginTop:20}}>2.  治療期間：3週間以上 (3-6週間)</Text>
                <Text　style ={{paddingTop: 8, fontSize:13}}> 十分な治療にもかかわらず感染を除去できなかったり{"\n"} 膿瘍を形成したりすることがある</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:32, right:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 8, textAlign:'right',position: 'relative', top:32, right:10}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
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
            height: 48,
            width: 100,
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
    esc2: {
        backgroundColor: '#fff',
            marginTop: 20,
            marginBottom: 1,
            height: 48,
            width: 180,
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
        backgroundColor: '#ffdead',
        marginTop: 30,
        marginBottom: 17,
        height: 210,
        width: 378,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    guidline2: {
        backgroundColor: '#ffdead',
        marginTop: 13,
        marginBottom: 17,
        height: 100,
        width: 374,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    example: {
        backgroundColor : '#b0e0e6',
        height: 400,
        width: 374,
        paddingLeft:19,
        paddingTop:20,
        alignSelf: 'center',
    },
    
});


export default SimpleScreen;