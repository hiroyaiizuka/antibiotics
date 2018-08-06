import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import {StyleSheet,Text,View,ScrollView, TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(
           ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
         ]);
      }


    render(){
      
        return(
            <ScrollView style ={styles.container}>
                
                    <View style = {styles.haien}>
                      <Text style = {styles.haienText}> 肺炎</Text>
                    </View>
                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 35}} onPress = {() =>{ this.props.navigation.navigate('Scroll')}}>
                        <Text style={{color: 'rgb(52,62,62)', paddingTop: 20}}>・市中肺炎</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 25}} onPress = {() =>{ this.props.navigation.navigate('SevereN')}}>
                        <Text style={{color: 'rgb(52,62,62)'}}>・医療介護関連肺炎{"\n"}   (NHCAP)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('SevereH')}}>
                        <Text style={{color: 'rgb(52,62,62)'}}>・院内肺炎{"\n"}   (HAP)</Text>
                    </TouchableOpacity>

                    <View style = {styles.nyouro}>
                        <Text style = {styles.haienText}> 尿路感染症 </Text>
                    </View>
                    <TouchableOpacity style = {{paddingLeft:140, paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('Different')}}>
                        <Text >・尿路感染症</Text>
                    </TouchableOpacity>

            </ScrollView>
        );
    }    
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(250,250,240)',
            height: 1000,

        },
        haien: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:80,
            marginBottom: 30  
        },
        haienText: {
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          paddingTop: 0
          
        },
        nyouro: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:60,
            marginBottom: 50  
        },
        
    })


export default HomeScreen;