import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Button} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';


class Beaker2Screen extends React.Component{
    
    state = {
        tableHead: ['商品名','CCr>50', 'CCr 10-50', 'CCr< 10'],
        tableData: [
            ['サワシリン', '\n500mg (2Cp)\n(1日3回)','\n500mg (2Cp)\n(1日2-3回)','\n500mg (2Cp)\n(1日1回)'],
            ['オーグメンチン', '1125mg ※\n(3錠)\n(1日3回)','375-750mg (1-2錠)\n(1日2回)','375-750mg (1-2錠)\n(1日1回)'],
            ['ケフレックス', '500mg(2Cp)\n(1日4回)','250mg (1Cp)\n(1日1-3回)','250mg (1Cp)\n(1日1回)'],
            ['ケフラール', '\n500mg (2Cp)\n(1日3回)','250mg (1Cp)\n(1日3回)','250mg (1Cp)\n(1日1回)'],
            ['クラリシッド', '200-400mg (1-2錠)\n(1日2回)','200mg (1錠)\n(1日1-2回)','200mg (1錠)\n(1日1回)'],
            ['ミノマイシン', '100mg (1Cp)\n(1日2回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            
            ['ビブラミシン', '初日: 100mg(1錠)\n(1日2回)\n\n2日目以降:\n100mg(1錠)\n(1日1-2回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['ダラシン', '150-300mg (1-2Cp)\n(1日4回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['シプロキサン', '200-400mg (1-2錠)\n(1日2回)','100-200mg (0.5-1錠)\n(1日2回)','200mg (1錠)\n(1日1回)'],
           
            ['クラビット', '500mg (1錠)\n(1日1回)', 'CCr 20-50\n初日: 500mg\n\n2日目以降:\n250mg\n(1日1回)', 'CCr <20\n初日: 500mg\n\n3日目以降:\n250mg\n(2日に1回)'],
            ['バクタ配合錠', '1回2錠 \n(1日2回)','1回1錠\n(1日2回)','基本的には\n使用しない'],
            ['フラジール', '500mg (2錠)\n(1日3回)','500mg (2錠)\n(1日3回)','250mg (1錠)\n(1日3回)'],
        
        
        
        ]
    }

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '経口抗菌薬投与量',
            headerStyle: { backgroundColor : '#3cb371'},
            headerRight:  <Button title="透析" color = "#fff" onPress={() => state.params.handleCcr()}/>,
            headerTitleStyle: {color: '#fff'},
            headerTintColor: "#fff",
            headerBackTitle: null,
        }
    }
    

    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Beaker3')})
    }

    render(){
        const state = this.state;
        return(
            <ScrollView style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} flexArr={[1.1,1,1,1]} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} flexArr={[1.1,1,1,1]} textStyle={styles.text}/>
            </Table>
        <Text style = {{marginTop: 20}}>※ オーグメンチンは十分な血中濃度を得るため{"\n"}   サワシリンの併用を考慮する(オグサワ療法){"\n"}{"\n"}  (オーグメンチン 375mg + サワシリン 250mg  1日3回) {"\n"}{"\n"}</Text>
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6,fontSize: 12},
  });


export default Beaker2Screen;