import React, { Component } from 'react';
import { Appstyles as styles } from '../Style';
import { View, Image,Text } from 'react-native';
export class CharView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            name: this.props.route.params.name,
            status: this.props.route.params.status,
            species: this.props.route.params.species,
            type: this.props.route.params.type,
            gender: this.props.route.params.gender,
            origin: this.props.route.params.origin,
            location: this.props.route.params.location,
            image: this.props.route.params.image,
            created: this.props.route.params.created,
  
        };
    }

    render() {
        return (

            <View style={{ height: '100%', backgroundColor: '#3B185F', flexDirection: 'column', alignItems: 'flex-start' }}>

                <View style={{ flexDirection: 'row', height:'40%' }}>
                    <Image style={{ width: '100%', height: '100%'}} source={{
                        uri: this.state.image,
                    }} />
                </View>
                <View style={{ margin:15 }} />
                <Text style={styles.text}>Name:  {this.state.name}</Text>
                <Text style={styles.text}>Status:  {this.state.status}</Text>
                <Text style={styles.text}>Species:  {this.state.species}</Text>
                <Text style={styles.text}>Type:  {this.state.type}</Text>
                <Text style={styles.text}>Gender:  {this.state.gender}</Text>
                <Text style={styles.text}>Created:  {this.state.created}</Text>
              
            </View>

            );
    }

}
export default CharView;