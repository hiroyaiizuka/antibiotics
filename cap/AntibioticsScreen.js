import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';


class AntibioticsScreen extends React.Component{

    static navigationOptions = {
        title: '治療'
    }
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                   <Text style = {styles. kei}>軽症、外来患者群</Text>
                   <View style={styles.guidline}>
                        <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(255,255,255)',}}> 内服薬: </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> βラクタマーゼ阻害配合ペニシリン系薬 </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> マクロライド系薬 </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> レスピラトリーキノロン</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 12, paddingBottom: 4,color: 'rgb(255,255,255)', fontWeight: 'bold'}}> 注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> レボフロキサシン (結核をマスクする、注意！)</Text>
                        <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:8, right:-9}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>
                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>細菌性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:13}}>オーグメンチン 375mg + サワシリン 250mg  1日3回{"\n"}(± ジスロマック2000mg 1回)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>非定型肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:13}}>ジスロマック2000mg 1回{"\n"}または、ビブラマイシン100mg を1日2回 </Text>
                        <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>免疫不全、基礎疾患あり:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:13}}>クラビット500mg 1日1回{"\n"}結核をマスクする！使用前に要検討！</Text>
                        <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:5, right:10}}> 感染症プラチナマニュアル2017</Text>
                        <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:5, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
                    </View>

                </View>

                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style = {styles.tyu}>中等症、入院群</Text>
                    <View style ={styles.guidline}>
                        <Text  style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(255,255,255)',}} > 注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> スルバクタム・アンピシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> レボフロキサシン (結核をマスクするので注意！)</Text>
                        <Text style={{fontWeight: 'bold',paddingTop:10, paddingBottom: 4, color: 'rgb(255,255,255)',}}> 非定型肺炎が疑われる場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> ミノサイクリン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:13}}> レボフロキサシン (結核をマスクするので注意！)</Text>
                        <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:10, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>

                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>細菌性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:13}}>ロセフィン2g/日</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:3, right:4, fontSize:13}}>(± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 15, color: 'rgb(255,255,255)'}}>誤嚥性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:13}}>ユナシン 1.5-3g  6時間毎 </Text>
                        <Text style={{fontWeight: 'bold', marginTop: 12, color: 'rgb(255,255,255)'}}>緑膿菌の関与が疑われる場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:13}}>ゾシン4.5g  6時間毎  or  マキシピーム2g  6時間毎</Text>
                        <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:31, right:10}}> 感染症プラチナマニュアル2017</Text>
                        <Text　style={{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:29, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
                    </View>

 

                </View>

                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text  style = {styles.tyu}>重症、ICU群</Text>
                    <View style ={styles.guidline}>
                        <Text style={{fontWeight: 'bold', paddingBottom: 6, color: 'rgb(255,255,255)',}}>注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>A 法:    カルバペネム系 or タゾバクタム･ピペラシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>B 法:    スルバクタムアンピシリン or セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>C 法:    A or B 法 + アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>D 法:    A or B 法 + レボフロキサシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>E 法:    A or B or C or D + 抗MRSA薬</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>※ B 法は、緑膿菌を考慮しない場合</Text>
                        <Text style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right', position: 'relative', top:17, left:10}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>

                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>通常投与量:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingTop:1, fontSize:13}}>ロセフィン2g/日  or  ユナシン1.5-3g  6時間毎</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:2, right:4, fontSize:13}}>(± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 20, color: 'rgb(255,255,255)'}}>緑膿菌感染を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingTop:1, fontSize:13}}>ゾシン4.5g  6時間毎  or  マキシピーム2g  8時間毎</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:2, fontSize:13}}>(or  メロペン1g  8時間毎) ± クラビット500mg/日</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 20, color: 'rgb(255,255,255)'}}>インフルエンザ後の肺炎:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingTop:1, fontSize:13}}>バンコマイシン1g  12時間毎    上記へ追加を検討する</Text>
                        <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:8, right:10}}> 感染症プラチナマニュアル2017</Text>
                        <Text　style = {{fontSize: 9, color: 'rgb(255,255,255)',textAlign:'right',position: 'relative', top:8, right:10}}> レジデントのための感染症マニュアル第3版</Text>  
                    </View>
                </View>
            </ScrollView>
        );
    }
}
    const styles = StyleSheet.create({
        kei: {
            backgroundColor: '#fff',
            marginTop: 40,
            marginBottom: 1,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold'
        },
        guidline: {
                backgroundColor: 'rgb(130,200,143)',
                marginTop: 20,
                marginBottom: 7,
                height: 200,
                width: 373,
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
        tyu: {
            backgroundColor: '#fff',
            marginTop: 40,
            marginBottom: 1,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold'
        },
        


    })
    

export default AntibioticsScreen;