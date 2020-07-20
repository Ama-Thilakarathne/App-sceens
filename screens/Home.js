import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'

const Home=()=>{
    const data = [
        {id:1,name:"mukesh",position:"web dev"},
        {id:2,name:"suresh",position:"android dev"},
        {id:3,name:"ramesh",position:"ML dev"},
        {id:4,name:"hitesh",position:"web dev"},
    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard} key={item.id}>
            <View style={styles.cardView}>
     
            <Image 
             style={{width:60, height:60, borderRadius:60/2}}
             source={{uri:"https://images.unsplash.com/photo-1586299485759-f62264d6b63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}}
             />
     
             <View>
             <Text style={styles.text}> {item.name} </Text>
              <Text style={styles.text}>{item.position}</Text>
     
             </View>
             
     
            </View>
             
             </Card>
        )
    })
    return (
        <View>
      <FlatList 
      data = {data}
      renderItem={({item})=>{
          return renderList(item)
      }}
      keyExtractor={item=>'${item.id}'}
      />

<FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />

        </View>
        
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        padding:10
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
        fab: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        },

})
//export {Home}
export default Home