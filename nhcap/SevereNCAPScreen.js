import React, { Component } from 'react';
import { Dimensions,  Text, View,  ScrollView, Button, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements';

class SevereNCAPScreen extends React.Component{
    state = {
        checked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
    }

   
    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '重症度評価',
            headerRight:  <Button title="治療" color = "#fff" onPress={() => state.params.handleCcr()}/>,
            headerStyle: { backgroundColor : 'rgb(241,112,89)'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: "#fff",
            headerBackTitle: null,
        }
    }
    
    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Escalate')})
    }

    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
            <View style={{
                width: screenWidth,
                backgroundColor: 'rgb(250,250,240)',
                flex: 1,
                padding:20
            }}>
                    <Text style ={styles.adrop}>A -DROP  </Text>
                <CheckBox 
                    title= '   A: 年齢           男性 ≧70歳、女性 ≧75歳'　
                    checked = {this.state.checked} 
                    onPress={()=> this.setState({checked: !this.state.checked})}/>
                <CheckBox 
                    title= '   D: 脱水           BUN ≧21  または、脱水あり'
                    checked = {this.state.checked1} 
                    onPress={()=> this.setState({checked1: !this.state.checked1})}/>
                <CheckBox 
                    title= '   R: 呼吸           SpO2 ≦90%'　   
                    checked = {this.state.checked2} 
                    onPress={()=> this.setState({checked2: !this.state.checked2})}/>
                <CheckBox 
                    title= '   O: 意識           意識障害あり'　
                    checked = {this.state.checked3} 
                    onPress={()=> this.setState({checked3: !this.state.checked3})}/>     
                <CheckBox 
                    title= '   P: 血圧           sBP ≦90mmHg'　
                    checked = {this.state.checked4} 
                    onPress={()=> this.setState({checked4: !this.state.checked4})}/>
               
                <View style = {styles.resultadrop}> 
                    <Text style={{marginBottom: 10, marginTop:0, fontSize: 17,color: 'rgb(255,255,255)', fontWeight:'bold',}}>１-２項目    中等症</Text>
                    <Text style = {{  fontSize: 17,color: 'rgb(255,255,255)', fontWeight:'bold',padding:6}}> ≧ ３項目     重症</Text>
                </View>
            </View>

            <View style={{
                width: screenWidth,
                backgroundColor: 'rgb(232,240,240)',
                flex: 1,
                paddingLeft: 30,
                paddingRight: 30,
            }}>
               <View >
                <Text style = {styles.qsofa}>q -SOFA</Text>
                <CheckBox 
                    title= '                sBP ≦ 100mmHg'　
                    checked = {this.state.checked5} 
                    onPress={()=> this.setState({checked5: !this.state.checked5})}/>
                 <CheckBox 
                    title= '                 呼吸数 ≧ 22回/分'　
                    checked = {this.state.checked6} 
                    onPress={()=> this.setState({checked6: !this.state.checked6})}/>
                 <CheckBox  
                    title= '                 意識状態の変化'　
                    checked = {this.state.checked7} 
                    onPress={()=> this.setState({checked7: !this.state.checked7})}/>
                <Text style = {styles.resultqsofa}> q-SOFA ≧２項目     敗血症疑い </Text>
                    <Text style = {styles.result}> A-DROP ≧３項目  q-SOFA ≧２項目{"\n"}{"\n"}→超重症 (ICUへ) </Text>
            </View>

            
            </View>
            
            <View　style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(233,231,217)',
                    flex: 1,
                    padding: 10
                }}>  
                <Text style = {styles.taisei}>耐性菌リスク</Text>
                <CheckBox 
                    title= '   過去90日以内の経静脈的抗菌薬の使用歴'　
                    checked = {this.state.checked8} 
                    onPress={()=> this.setState({checked8: !this.state.checked8})}/>
                <CheckBox 
                    title= '   過去90日以内に2日以上の入院歴'　
                    checked = {this.state.checked9} 
                    onPress={()=> this.setState({checked9: !this.state.checked9})}/>
                <CheckBox 
                    title= '   免疫抑制状態'　
                    checked = {this.state.checked10} 
                    onPress={()=> this.setState({checked10: !this.state.checked10})}/>
                <CheckBox 
                    title= '   活動性の低下'　
                    checked = {this.state.checked11} 
                    onPress={()=> this.setState({checked11: !this.state.checked11})}/>     
                <Text style = {styles.taiseiresult}> ２項目以上で耐性菌リスク(+)</Text>
                <Text style = {styles.sankou2}>成人肺炎診療ガイドライン2017</Text>
            </View>
  

        </ScrollView>
        );
    }    
}



const styles = StyleSheet.create({
    adrop: {
        backgroundColor: '#fff',
        marginTop: 30,
        marginBottom: 30,
        height: 50,
        width: 170,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 14,
        fontSize: 18,
        fontWeight: 'bold'
    },
    resultadrop: {
        backgroundColor: 'rgb(130,200,143)',
        marginTop: 40,
        marginBottom: 30,
        height: 100,
        width: 190,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,
      
       

    },
    qsofa: {
        backgroundColor: '#fff',
        marginTop: 50,
        marginBottom: 30,
        height: 50,
        width: 170,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 13,
        fontSize: 18,
        fontWeight: 'bold'
    },
    resultqsofa: {
        backgroundColor: 'rgb(130,200,143)',
        color: 'rgb(255,255,255)',
        fontWeight:'bold',
        marginTop: 50,
        height: 60,
        width: 250,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 19,
       
        fontSize: 16

    },
    result: {
       
        color: 'rgb(114,95,70)',
        fontWeight:'bold',
        marginTop: 40,
        height: 110,
        width: 330,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 20,
        fontSize: 17,
        borderColor: 'rgb(114,95,70)',
        borderRadius: 50
    },
  
    hiteikei: {
        fontSize: 18,
        textAlign: 'center', 
        marginTop: 14,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'rgb(114,95,70)'
    },
    answer: {
        backgroundColor: 'rgb(129,197,140)',
        marginTop: 20,
        height: 180,
        width: 380,
        padding: 15,
        
    },
  
    six: {
        fontSize: 14,
        color: 'rgb(255,255,255)',
        marginBottom:10,
        fontWeight: 'bold',
        padding:4
    },
    five: {
        fontSize: 14,
        color: 'rgb(255,255,255)',
        marginBottom:10,
        fontWeight: 'bold',
        padding:4
       
    },
    sankou: {
        fontSize: 10,
        color: 'rgb(255,255,255)',
        textAlign: 'right',
        fontWeight: 'bold',
        paddingTop:12
    },
    taisei: {
            backgroundColor: '#fff',
            marginTop: 38,
            marginBottom: 30,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 16,
            fontSize: 18,
            fontWeight: 'bold'
    },
    taiseiresult: {
        backgroundColor: 'rgb(130,200,143)',
        color: 'rgb(255,255,255)',
        fontWeight:'bold',
        marginTop: 60,
        height: 60,
        width: 250,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 19,   
        fontSize: 16
    },
    sankou2: {
        fontSize: 11,
        color: '#808080',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 45

    },
    

});
export default SevereNCAPScreen;