import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {TextInput,Button,Card} from 'react-native-paper'
const EditUser = ()=>{
    const [Name, setName] = useState("")
    const [Mobile, setMobile] = useState("")
    

    return(
        <View style={StyleSheet.root}>

            <Card style={styles.mycard}>
            <View style={styles.cardView}>
     
             <View>
            
             <Text style={styles.text}> Profile </Text>

             </View>
             
     
            </View>
             
             </Card>

             <Image 
             style={{width:70,marginLeft:100,marginTop:25, height:70, borderRadius:60/2}}
             source={{uri:"https://images.unsplash.com/photo-1586299485759-f62264d6b63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}}
             />




            
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={Name}
                theme = {theme}
                mode="outlined"
                onChangeText={text => setName(text)}
                />

            <TextInput
                
                label="Mobile"
                style={styles.inputStyle}
                value={Mobile}
                theme = {theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setName(text)}
                />


                <Button style={styles.buttonstyleupdate} mode="contained" onPress={() =>setModal(true)}>
                    Edit Info
                </Button>

                <Button style={styles.buttonstyle} mode="contained" onPress={() =>setModal(true)}>
                    Sign Out
                </Button>

        
        </View>

    )
}
const theme = {
    colors:{
        primary:"black"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1,

    },
    inputStyle:{
        marginLeft:30,
        marginRight:30,
        marginTop:20,
        height:30,
        padding:0
    },
    buttonstyleupdate:{
        color:"white",
        backgroundColor:"black",
        marginTop:50,
        marginLeft:5,
        marginRight:5
    },
    buttonstyle:{
        color:"white",
        backgroundColor:"#ff0000",
        marginTop:10,
        marginLeft:5,
        marginRight:5
    },
    text:{
        fontSize:20,
        marginLeft:65,
        color:"Black"

        
    },
    mycard:{
        margin:5,
        padding:10,
        backgroundColor:"#45b6fe"
    },
    cardView:{
        flexDirection:"row",
        padding:6
    }

})

export default EditUser;