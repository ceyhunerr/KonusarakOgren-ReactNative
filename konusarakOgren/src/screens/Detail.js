import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Pressable, Image } from 'react-native';
import { Appstyles as styles } from '../Style';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import * as RootNavigation from '../RootNavigation';
export class Detail extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            episode: this.props.route.params.episode,
            characters: this.props.route.params.characters,
            isLoading: true,
           
            list: []


        };


    }
   

    componentDidMount() {
        var count = Object.keys(this.state.characters).length;
        for (let i = 0; i < count; i++) {
           
            axios
                .get(this.state.characters[i])
                .then(user => {
                     
                    this.state.list.push({
                        name: user.data.name,
                        status: user.data.status,
                        species: user.data.species,
                        type: user.data.type,
                        gender: user.data.gender,
                        image: user.data.image,
                        created: user.data.created,

                    })
                    this.setState(
                        {
                          
                            list: this.state.list,
                        }

                    )
                   
                })
            this.setState(
                {
                    isLoading: false,
                    
                }

            )
        }
       
    }

    itemView(item) {
       
        return (
            <Pressable style={styles.chars} onPress={() => {
                RootNavigation.navigate('CharView', {
                    id: item.id,
                    name: item.name,
                    status: item.status,
                    species: item.species,
                    type: item.type,
                    gender: item.gender,
                    origin: item.origin,
                    location: item.location,
                    image: item.image,
                    created: item.created,
                });


            }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <Image style={{ width: '20%', height: '80%', marginTop:10 }} source={{
                        uri: item.image,
                    }} />
                    
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.subtext} >{item.id}</Text>
                        <Text style={styles.text} >{item.name}</Text>
                        <Text style={styles.subtext} >{item.status}</Text>
                      
                    </View>
                </View>
                

            </Pressable>
        );
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: '#3B185F', height: '100%' }}>
                    <ActivityIndicator />

                </View>
            );
        } else {
            return (
                <View style={{ backgroundColor: '#3B185F', height: '100%', flexDirection: 'column' }}>

                    <Text style={{ flex: 0.07, fontSize: 20, textAlign: 'center', fontWeight: '900', backgroundColor: '#3B185F', color: '#2A0944', padding: 10 }}>EPISODE {this.state.episode}</Text>
                        <FlatList style={{ flex: 7 }} data={this.state.list} renderItem={({ item }) => this.itemView(item)} />
                    
                   
                </View>
            );
        }
       
    }
   
}

export default Detail;