import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Easing, TouchableOpacity,Image, ListView} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import {PixelRatio,Dimensions} from 'react-native';
import onLayout from 'react-native-on-layout'
const data = require('../../../assets/json/progressedcases.json');
var {height, width} = Dimensions.get('window');

class UnprogressedCase extends Component{
    onLayout = (e) => {
        this.setState({
          overlayWidth: e.nativeEvent.layout.width,
          overlayHeight: e.nativeEvent.layout.height,
          overlayX: e.nativeEvent.layout.x,
          overlayY: e.nativeEvent.layout.y
        })
      }
    static navigationOptions= {
        headerTitle:"待理案件",
        headerTitleStyle:{flex:2,textAlign:"center", },
        headerTintColor:"#F37021",
        headerRight:(<Image
                    source={require('../../../assets/img/help-circle.png')}
                    style={{height:25,width:25,tintColor:"#F37021",margin:3}}
                    />)
      }
    constructor(){
        super();
        this.dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1 !== row2
        })
        this.springAnimXY = new Animated.ValueXY({x:0,y:height})
    };
    slideUpOverlay=()=>{
        Animated.spring(
            this.springAnimXY, {
                toValue: {x:0,y:0},
            }
        ).start();
      }
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.caseContainer}>
            <ListView
            dataSource={this.dataSource.cloneWithRows(data)}
            renderRow={(rowData) =>
                <TouchableOpacity style={styles.caseitemContainer}
                onPress={this.slideUpOverlay}>
                    <View>
                    <Text style={{fontSize:40,color:"#BBBBBB"}}>{rowData.name}</Text>
                    </View>
                    <View >
                    <Text style={{fontSize:22,textAlign:"right",color:"#BBBBBB"}}>申請日期</Text>
                    <Text style={{fontSize:25,textAlign:"right",color:"#BBBBBB"}}>{rowData.date}</Text>
                    </View>
                </TouchableOpacity>}
            />
        
            </View>
            <Animated.View style={[this.springAnimXY.getLayout(),{position:"absolute",height:"100%",width:"100%",justifyContent: 'flex-end',}]}>
                <View style={styles.overlay} onLayout={this.onLayout}>
                    <Image
                        source={require('../../../assets/img/Yes.png')}
                        style={{height:50,width:50,tintColor:"#F37021"}}
                    />
                    <Text style={{color:"#BBBBBB",fontSize:40}}>結案成功</Text>
                </View>
            </Animated.View>
        </View>
        );
       
    }
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        alignItems: 'center',
        // justifyContent: 'center',
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundColor:"#F2F1EF",
    },
    caseContainer:{
        marginTop:"5%",
        position:"relative",
        width:"90%",
    },
    caseitemContainer:{
        paddingTop:"5%",
        paddingBottom:"5%",
        paddingHorizontal:"5%",
        flexDirection:"row",
        justifyContent: 'space-between',
        margin:10,
        backgroundColor:"white",
    },
    overlay:{
        position: "relative",
        alignItems: "center",
        // top:"55%",
        left:"15%",
        // top:"75%",
        width: "70%",
        // height: "100%",
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 2,
        paddingTop:"10%",
        paddingBottom:"10%",
    }
})
export default UnprogressedCase;
