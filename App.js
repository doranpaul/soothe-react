import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-ico-material-design';
import Lodgicon from 'react-native-ico-lodgicons';
import Icon from 'react-native-ico';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';




const Stack = createStackNavigator();

class HomeScreen extends React.Component {
  state = {
    screenText: 'Welcome to Soothe'
  }

  handleLogin = () => {
    this.props.navigation.navigate('SignIn');
  }

  changeText = (text) => {
    console.log(text + ' has been pressed');
    this.setState({
      screenText: text
    });
  }

  render(){
  const iconHeight = 26;
  const iconWidth = 26;
  return (
    <View style={styles.container}>

            <View style={styles.topBar}>
                <Text style={styles.appName}>SOOTHE||WELLNESS</Text>
                <Pressable onPress={this.handleLogin} style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>
            
            {/* Grouping Image and Text together */}
            <View style={styles.centerContent}>
              <Image source={require('./assets/images/reactlogo.png')} style={styles.logoImage} />
              <Text style={styles.overlayText}>{this.state.screenText}</Text>
              <StatusBar style="light" />
            </View>
            <View style={styles.topText}>
            <Text style={styles.topText}>Your tranquil space in the digital world.</Text>
            </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => this.changeText('Home')} style={styles.IconBehave} 
            androidRipple={{borderless:true, radius:50}}>
              <MaterialIcon name="home-button" group="material-design" height={iconHeight} width={iconWidth} color='#5D3FD3'/>
              </Pressable>

              <Pressable onPress={() => this.changeText('Workout')} style={styles.IconBehave} 
            androidRipple={{borderless:true, radius:50}}>
              <Lodgicon name="gym-dumbbell-black-silhouette" group="lodgicons" height={iconHeight} width={iconWidth} color='#5D3FD3'/>
              </Pressable>

              <Pressable onPress={() => this.changeText('Mindfulness')} style={styles.IconBehave} 
            androidRipple={{borderless:true, radius:50}}>
              <Icon name="thought-balloon" group="emojione-emojis" height={iconHeight} width={iconWidth} color='#5D3FD3'/>
              </Pressable>

              <Pressable onPress={() => this.changeText('Search')} style={styles.IconBehave} 
            androidRipple={{borderless:true, radius:50}}>
              <MaterialIcon name="searching-magnifying-glass" height={iconHeight} width={iconWidth} color='#5D3FD3'/>
              </Pressable>
        </View>
      </View>
            <StatusBar style="auto" />
    </View>
  );
}
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  root:{
    backgroundColor: '#5a4fcf',
  },

  container: {
    flex: 1,
    backgroundColor: '#5a4fcf',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },

  NavBar:{
    flexDirection:'row',
    backgroundColor:'#eee',
    height: 50,
    width: '90%',
    justifyContent:'space-evenly',
    borderRadius: 15,
    alignItems: 'center',
  },

  IconBehave: {

  },

  logoImage: {
    width: 500,
    height: 500,
    marginBottom: 220,  // Adjust this value as needed
    alignItems: 'center',
},

centerContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
},


topBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: 10,
  backgroundColor: 'whitesmoke',
  position: 'absolute',
  top: 20,
  left: 0,
  right: 0,
  zIndex: 1,  // Ensure the navbar is on top of other elements
},
appName: {
  color: '#5a4fcf',  // or any desired color
  fontSize: 20,
  fontWeight: 'bold',
  
},

loginButton: {
  padding: 10,
  backgroundColor: '#5a4fcf',  // or any desired color
  borderRadius: 8,
},

loginText: {
  color: 'white',  // or any desired color
},

overlayText: {
  position: 'absolute',
  fontSize: 30,
  color: 'whitesmoke',
  zIndex: 1, // Ensure the text is on top
  // Adjust these to position the text where you want on the image
  top: '55%', 
  left: 'centre',
},

topText: {
  position: 'absolute',
  fontSize: 14,
  color: 'whitesmoke',
  zIndex: 1, // Ensure the text is on top
  // Adjust these to position the text where you want on the image
  top: '60%', 
  left: '17%',
}


});
