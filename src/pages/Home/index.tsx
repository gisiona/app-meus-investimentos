import React, { Fragment } from 'react';
import { View , 
    Image,
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../../assets/logo.png';
import backgroungImage from '../../assets/home-background.png';

import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    function handleNavigationToDashboard() {
        navigation.navigate('Dashboard');
    }

    return (
              
        <ImageBackground source={""} 
            style={styles.container} 
            imageStyle={{ width: 274, height: 368}}
        >

             <View style={styles.main}>
                <Image source={logo} />
                <Fragment>                
                    <Text style={styles.title}> O jeito mais fácil de controlar todos seus investimentos em um único lugar.</Text>
                    <Text style={styles.description}>Um novo jeito de interagir com seus investimentos. </Text>
                </Fragment>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} 
                    onPress={handleNavigationToDashboard}>
                    <View style={styles.buttonIcon}>
                        <Text> 
                            <Icon name="arrow-right" color="#fff" size={24}/>
                        </Text>
                    </View>
                    <Text style={styles.buttonText}> Entrar </Text>
                </RectButton>
            </View>
        
        </ImageBackground>
        
    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,      
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 350,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;