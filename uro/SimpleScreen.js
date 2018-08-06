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
                <Text style={{ paddingBottom: 4,paddingTop:8}} >･ Ecoli (80%以上){"\n"}･ Klebsiella、Proteus{"\n"}･ 腐性ブドウ球菌  (性的に activeな女性に多い)</Text> 
                <Text style={{ paddingBottom: 4,paddingTop: 30,}} >  近年では「健常者」からの</Text> 
                <Text>   ESBL産生菌検出事例が増えつつある！(7.4%)</Text> 

                <Text style = {{fontSize: 9,textAlign:'right', position: 'relative', top:26, left:10}}> Shiori et al; 食衛誌　Vol. 58, No. 1</Text> 
            </View>

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>治療の基本)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold',paddingTop: 8}}>1.   無症候性細菌尿は、治療対象にならない</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>     (例外:   妊婦、侵襲性の泌尿器科処置、小児など)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 18}}>2.   尿路感染症は、敗血症の原因のナンバーワン</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      一旦治療を決めれば、断固強力に行う。</Text>
                <Text style={{fontWeight: 'bold',paddingTop: 18}}>3.  治療期間:  膀胱炎 3日、腎盂腎炎 14日間</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      再発例や14日間の治療で失敗した例は、3-4週間</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:12, right:8}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:12, right:8}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>


         </View>

         
         <View style={{
                     width: screenWidth,
                     backgroundColor: '#fff',
                     flex: 1,
                }}>
                <Text　style ={styles.esc}>膀胱炎</Text>
                <View style = {styles.guidline} >
                    <Text style={{fontWeight: 'bold', paddingBottom: 10, paddingTop: 2}}>内服薬: </Text>
                    <Text style ={{paddingTop: 8}}>バクタ 2錠　　　　　  1日2回　3日間</Text>
                    <Text>ケフレックス 500mg   1日3回   7日間</Text>
                    <Text>オーグメンチン 1錠　   1日2回   3日間</Text>
                    <Text>ホスミシン 3g　　　　1回経口投与</Text>
                    <Text style ={{paddingTop: 32}}>バクタは妊婦には使用を避ける</Text>
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:10, right:-10}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                    <Text style = {{fontSize: 8,textAlign:'right', position: 'relative', top:10, left:10}}> レジデントのための感染症マニュアル第3版,  医学書院</Text> 
      
                </View>  
                 
                <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>ポイント)</Text>
                <View style = {styles.example}>
                    <Text style={{fontWeight: 'bold', fontSize:15,textDecorationLine: 'underline'}}>1.  ニューキノロン系について</Text>
                    <Text style = {{paddingTop: 10, fontSize:13}}>クラビット耐性の大腸菌が増えてきた。(全国平均31%)</Text>
                    <Text style = {{paddingTop: 1, fontSize:13}}>緑膿菌への貴重な治療薬であるため、膀胱炎には</Text>
                    <Text style = {{paddingTop: 1, fontSize:13}}>できるだけ使用しない。温存する！</Text>
                    <Text　style ={{ paddingTop: 28,fontWeight: 'bold', fontSize:15, textDecorationLine: 'underline'}}> 2. 治療が失敗した時</Text>
                    <Text　style ={{paddingTop: 8, fontSize:13}}> 解剖学的な異常や、上部尿路感染症の存在を示唆する</Text>
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:13, right:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                    <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:13, right:10}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
                </View>
            </View>
    
           
         <View style={{
                width: screenWidth,
                backgroundColor: '#fff',
                flex: 1,
                }}>
           <Text　style ={styles.esc}> 腎盂腎炎 </Text>
           <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:110,left:10}}> ⤵︎ descalation  多剤治療</Text>
           

            <View style = {styles.guidline}>
                <Text style={{fontWeight: 'bold'}}>軽症、外来治療:</Text>
                <Text style ={{ paddingTop: 0, fontSize:13}}>バクタ １回2錠　1日2回   14日間</Text>
                <Text style ={{  paddingTop: 1, fontSize: 12}}>ロセフィン 2g外来で投与後に{"\n"}オーグメンチン 375mg + サワシリン 250mg  1日3回  14日間</Text>
  
                <Text style={{fontWeight: 'bold', paddingBottom: 0, paddingTop: 10,}}>中等症以上、入院治療:</Text>
                <Text style ={{paddingTop: 1, fontSize:13}}>セフメタゾール 2g　12時間毎</Text>
                <Text style ={{ paddingTop: 1, fontSize:13}}>ロセフィン 2g　　　24時間毎</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 10,}}>ショック:</Text>
                <Text style ={{ paddingTop: 1, fontSize:13}}>メロペン 1g  8時間毎</Text>
                <Text style = {{fontSize: 8, textAlign:'right', position: 'relative', top:4, left:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text> 
            </View>
            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:10, top:0, marginBottom: 5}}>ポイント)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', fontSize:15,textDecorationLine: 'underline', marginTop:10}}>1. 3日治療しても解熱しないとき</Text>
                <Text　style ={{paddingTop: 8, fontSize:13}}> 起因菌の感受性を確認するとともに、膿瘍の合併を考える</Text>
                <Text style={{fontWeight: 'bold', fontSize:15,textDecorationLine: 'underline', marginTop:20}}> 2. ESBL産生菌を疑うとき</Text>
                <Text　style ={{paddingTop: 8, fontSize:13}}>軽症例では、セフメタゾール{"\n"}重症例では、カルバペネム系で治療する</Text>
                <Text　style = {{fontSize: 8,textAlign:'right',position: 'relative', top:30, right:10}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 8, textAlign:'right',position: 'relative', top:30, right:10}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
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
    example: {
        backgroundColor : '#b0e0e6',
        height: 255,
        width: 374,
        paddingLeft:13,
        paddingTop:20
    },
    
});


export default SimpleScreen;