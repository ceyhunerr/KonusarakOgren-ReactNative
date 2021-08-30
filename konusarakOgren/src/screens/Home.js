import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Pressable } from 'react-native';
import axios from 'axios';
import { Appstyles as styles } from '../Style';
import * as RootNavigation from '../RootNavigation';

class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isLoading: true,
            dataSource: null,
            url: 'https://rickandmortyapi.com/api/episode?page='
        }

    };

    itemView(item) {
        return (
            <Pressable style={styles.container} onPress={() => {
                
                RootNavigation.navigate('Detail', { episode: item.episode, characters: item.characters });
                
              
            }}>

                <Text style={styles.subtext} >{item.id}</Text>
                <Text style={styles.text} >{item.name}</Text>
                <Text style={styles.subtext} >{item.air_date}</Text>
                <Text style={styles.subtext} >{item.episode}</Text>

            </Pressable>
        );
    }



    componentDidMount() {
        axios
            .get(this.state.url + this.state.page)
            .then(user => {
                // console.log(user.data.results);
                this.setState(
                    {
                        dataSource: user.data.results,
                        isLoading: false,
                    }
                )
            })
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
                <View style={{ height: '100%' }}>
                    <Text style={{ flex: 0.5, fontSize: 20, textAlign: 'center', fontWeight: '900', backgroundColor: '#3B185F', color: '#2A0944', padding: 10 }}>EPISODE</Text>
                    <View contentContainerStyle={{ paddingBottom: 5, }} style={{ flex: 8, backgroundColor: '#3B185F', }}>

                        <FlatList
                            data={this.state.dataSource}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => this.itemView(item)}

                            onEndReachedThreshold={0.5}

                        />
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#3B185F', flexDirection: 'row', }}>
                        <Pressable onPress={() => {
                            console.log("Önceki")
                            if (this.state.page >= 2) {
                                this.setState({
                                    page: this.state.page -= 1,
                                    isLoading: true,
                                    dataSource: ''
                                })
                                this.componentDidMount()
                            }

                        }} style={styles.onceki} >
                            <Text style={{ height: '100%', color: 'white', fontWeight: '800', marginTop: 20 }}  >PREW</Text>

                        </Pressable>



                        <Pressable onPress={() => {
                            console.log("Sonraki")
                            if (this.state.page <= 2) {
                                this.setState({
                                    page: this.state.page += 1,
                                    isLoading: true,
                                    dataSource: ''
                                })
                                this.componentDidMount()
                            }

                        }} style={styles.sonraki} >
                            <Text style={{ height: '100%', color: 'white', fontWeight: '800', marginTop: 20 }}  >NEXT</Text>

                        </Pressable>
                    </View>
                </View>
            );


        }

    }
}


export default Home;