import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Easing, TouchableOpacity, Image} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';




class LodingPage extends Component {
    

  static navigationOptions = {
      header:null
      };
      constructor(props){
            super(props);
            this.state={
                isOverlayVisible: true,
                backgroundColorContainer: "white",
                whichUser : 1,//1 for householder, 2 for volunteer, 3 for technician
                buttonUser1bcolor : "#F37021",
                buttonUser2bcolor : "white",
                buttonUser3bcolor : "white",
                buttonUser1color : "white",
                buttonUser2color : "#F37021",
                buttonUser3color : "#F37021",
            }
            this.springAnimXY = new Animated.ValueXY({x:0,y:1000})
      }
      slideDown=()=>{
        Animated.spring(
            this.springAnimXY, {
                toValue: {x:0,y:0},
            }
        ).start();
        this.setState({backgroundColorContainer:"grey"});
      }
      login(){
        if(this.state.whichUser==2){
          this.props.navigation.navigate('VolunteerFirstPage')
        }
      }
  render() {
    return (
    <TouchableOpacity style={[styles.container,{backgroundColor:this.state.backgroundColorContainer}]}
    onPress={this.slideDown}
    activeOpacity={1}>
      <View style={{position:"absolute"}}>
        <Image
        source={require('../../assets/img/plainorange-07.png')} 
        style={{height:100,width:100}}
        />
      </View>
            <Animated.View style={[this.springAnimXY.getLayout()]}>
            <View style={styles.containerOverlay}>
            <Text style={styles.textLogin}>登入</Text>
            <View style={styles.containerButtonUser}>
                <Button
                onPress={()=>this.setState({whichUser:1,
                  buttonUser1bcolor : "#F37021",
                  buttonUser2bcolor : "white",
                  buttonUser3bcolor : "white",
                  buttonUser1color : "white",
                  buttonUser2color : "#F37021",
                  buttonUser3color : "#F37021",})}
                title={"屋主"}
                titleStyle={{color:this.state.buttonUser1color}}
                icon={<Image
                  source={require('../../assets/img/home-variant.png')}
                  style={{tintColor:this.state.buttonUser1color,height:17,width:17}} 
                  />}
                buttonStyle={{backgroundColor:this.state.buttonUser1bcolor,paddingLeft:"5%"}}
                containerStyle={{justifyContent: 'center',flex:1,marginRight:"2%"}}/>
                <Button 
                onPress={()=>this.setState({whichUser:2,
                  buttonUser1bcolor : "white",
                  buttonUser2bcolor : "#F37021",
                  buttonUser3bcolor : "white",
                  buttonUser1color : "#F37021",
                  buttonUser2color : "white",
                  buttonUser3color : "#F37021",})}
                title={"志工"}
                titleStyle={{color:this.state.buttonUser2color}}
                icon={<Image
                  source={require('../../assets/img/baseline_assignment_white_48dp.png')}
                  style={{tintColor:this.state.buttonUser2color,height:17,width:17}} 
                  />}
                containerStyle={{justifyContent: 'center',flex:1,marginRight:"2%"}}
                buttonStyle={{backgroundColor:this.state.buttonUser2bcolor}}
                />
                <Button
                onPress={()=>this.setState({whichUser:3,
                  buttonUser1bcolor : "white",
                  buttonUser2bcolor : "white",
                  buttonUser3bcolor : "#F37021",
                  buttonUser1color : "#F37021",
                  buttonUser2color : "#F37021",
                  buttonUser3color : "white",})}
                title={"技師"}
                titleStyle={{color:this.state.buttonUser3color}}
                icon={<Image
                      source={require('../../assets/img/progress-wrench.png')}
                      style={{tintColor:this.state.buttonUser3color,height:17,width:17}} 
                      />}
                containerStyle={{justifyContent: 'center',flex:1}}
                buttonStyle={{backgroundColor:this.state.buttonUser3bcolor}}
                />
            </View>
            <View style={styles.containerInput}>
                <Input
                placeholder={"電子郵件"}
                leftIcon={
                    <Icon
                    name='mail'
                    type='Feather'
                    color='#F37021'
                    size={17}
                    />
                  }
                inputStyle={styles.inputstyleEmailPw}
                containerStyle={{paddingHorizontal:18}}/>
                <Input
                placeholder={"密碼"}
                leftIcon={
                    <Icon
                    name='lock'
                    type='Foundation'
                    color='#F37021'
                    size={17}
                    />
                  }
                  inputStyle={styles.inputstyleEmailPw}
                  containerStyle={{paddingHorizontal:18}}/>
            </View>
            <Button 
            title={"忘記密碼 ？"}
            containerStyle={styles.containerstyleButtonForgetPW}
            buttonStyle={styles.butttonstyleButtonForgetPW}
            titleStyle={{fontSize:14,color:"#BBBBBB",fontWeight:"bold",textDecorationLine:"underline"}}/>
            <Button 
            onPress={()=>this.login()}
            title={"登入"}
            containerStyle={styles.containerstyleButtonLogin}
            buttonStyle={styles.buttonstyleButtonLogin}
            titleStyle={{fontWeight:"bold"}}/>
            <Button 
            title={"註冊"}
            containerStyle={styles.containerstyleButtonRegister}
            buttonStyle={styles.buttonstyleButtonRegister}
            titleStyle={{color:"#BBBBBB",fontWeight:"bold"}}/> 
            </View>
            </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "grey",
    zIndex: 0,
  },
  containerOverlay:{
    position: "relative",
    width: "90%",
    height: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F2F1EF",
    zIndex: 2,
  },
  textLogin:{
    position:"relative",
    fontSize:40,
    marginTop:"15%",
    marginLeft:"38%",
    color:"#BFBFBF"
  },
  containerButtonUser:{
    flexDirection:"row",
    justifyContent: 'space-between',
    marginHorizontal: "8%",
    marginTop:"12%",
    padding:0,
    margin:0,
    backgroundColor:"#F2F1EF",
  },
  buttonstyleButtonUser:{
      backgroundColor:"#F37021",
  },
  containerInput:{
    position:"relative",
    marginHorizontal: "8%",
    marginTop:0,
    backgroundColor:"white",
    paddingBottom:"5%",
  },
  inputstyleEmailPw:{
      paddingBottom:5,
      paddingLeft:15,
  },
  containerstyleButtonForgetPW:{
    marginTop:"0.2%",
    paddingTop:0,
    marginRight: "8%",
    marginLeft: "63.3%",
  },
  butttonstyleButtonForgetPW:{
    backgroundColor:"#F2F1EF",
  },
  containerstyleButtonLogin:{
    marginTop:"18%",
    marginHorizontal: "8%",
  },
  containerstyleButtonRegister:{
    marginTop:"3%",
    marginHorizontal: "8%",
    borderWidth:1,
    borderColor:"#BFBFBF",
    marginBottom:"5%"
  },
  buttonstyleButtonLogin:{
    backgroundColor:"#F37021",    
  },
  buttonstyleButtonRegister:{
    backgroundColor:"white",
  }
})

export default LodingPage;