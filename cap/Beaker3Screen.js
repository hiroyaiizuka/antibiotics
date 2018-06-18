import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Button} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';


class Beaker3Screen extends React.Component{
    
    state = {
        tableHead: ['商品名(経口)','血液透析(HD)'],
        tableHead2: ['商品名(静注)','血液透析(HD)'],
        tableData: [
            ['サワシリン','1回250mg 1日1回、HD日はHD 後',],
            ['オーグメンチン','1回1錠 1日2回、HD日はHD 後'],
            ['ユナシン','1回375mg 1日1回、HD日はHD 後'],
            ['メイアクトMS','1回100mg 1日1-2回'],
            ['クラリス','1回200mg 1日1回'],
            ['ジスロマック','1回500mg 1日1回　成人用ドライシロップ: 1回2000mg, 空腹時1回服用'],
            ['エリスロシン','1回100-150mg 1日4回'],
            ['ミノマイシン','1回100mg 1日2回'],
            ['ダラシン', '1回150-300mg 1日3-4回'],
            ['クラビット','初回1回500mg 1日1回\n3日目以降250mg 2日に1回'],
            ['シプロキサン','1回200mg 1日1回'],
            ['ジェニナック','1回400mg 1日1回'],
            ['リネゾリド','1回600mg 1日2回'],
        
        ],
        tableData2: [
            ['ペニシリンG','1回30-60万単位 1日2-7回'],
            ['ビクシリンS','1回0.5g 1日2回、HD日はHD後'],
            ['ユナシンS','1回3g 1日1回、HD日はHD後'],
            ['ゾシン','1回2.25-4.5g 1日2回'],
            ['セファメジンα','1回0.5-1g 毎HD後'],
            ['パンスポリン','1回0.5g 1日1回、HD日はHD後'],
            ['セフトリアキソン','1回1-2g 1日1回'],
            ['セフォタックス','1回0.5g 1日2回'],
            ['モダシン','1回1g 毎HD後'],
            ['マキシピーム','1回0.5g 1日1回、HD日はHD後'],
            ['ファーストシン','1回0.5g 1日1回、HD日はHD後'],
            ['ジスロマック','1回0.5g 1日1回'],
            ['エリスロシン','1回0.4g 1日3回'],
            ['メロペン','1回0.5g 1日1回、HD日はHD後'],
            ['フィニバックス','1回0.25g-0.5g 1日1回、HD日はHD後'],
            ['ミノマイシン','1回0.1g 1日2回'],
            ['クラビット','初日1回0.5g 1日1回\n3日目以降 0.25g 2日に1回'],
            ['シプロキサン','必要に応じて低用量(0.2g) 1日1回'],
            ['ダラシン','1回0.6g 1日2-4回'],
            ['アネメトロ','1回0.5g 1日3-4回'],
            ['バンコマイシン','初回20-25mg/kg\nその後は透析後に 1回7.5ー10mg/kg'],
            ['ザイボックス','1回0.6g 1日2回'],
            ['ゲンタシン','初回2.5mg/kg、維持1.7mg/kg 毎HD後'],
            ['アミカシン','1回5-7.5mg/kg 毎HD後'],


  
        
        ]
    }

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '透析患者への投与量',
            headerStyle: { backgroundColor : '#3cb371'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: "#fff",
            headerBackTitle: null,
        }
    }
    


    render(){
        const state = this.state;
        return(
            <ScrollView style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} flexArr={[0.5,1]} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} flexArr={[0.5,1]} textStyle={styles.text}/>
                </Table>
            
                <View style={{margin:20}}></View>

                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead2} flexArr={[0.5,1]} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData2} flexArr={[0.5,1]} textStyle={styles.text}/>
                </Table>
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6,fontSize: 12},
  });


export default Beaker3Screen;