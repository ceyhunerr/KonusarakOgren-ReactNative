import { StyleSheet } from 'react-native';
export const Appstyles = StyleSheet.create(
    {
        container:
        {

            justifyContent: "space-around",
            alignItems: "center",
            width: '94%',
            height: 100,
            backgroundColor: '#2A0944',
            borderRadius: 15,
            margin: 10,


        },
        text:
        {
            fontSize: 15,
            fontFamily: 'arial',
            color: "white",
            fontWeight: '700',
            textAlign: 'center',
            padding: 5,
        },
        subtext:
        {
            fontSize: 10,
            fontFamily: 'Roboto',
            color: "white",
            fontWeight: '700',
            textAlign: 'center',
            padding: 5,
        },

        onceki: {
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontFamily: 'Arial',
            backgroundColor: "#A12568",
            marginHorizontal: 10,
            borderRadius: 10,
            height: '100%'
        },
        sonraki: {
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: "#FEC260",
            marginHorizontal: 10,
            borderRadius: 10,
            height: '100%'
        },
        chars:
        {

            justifyContent: "flex-start",
            alignContent: 'flex-start',
            width: '94%',
            height: 100,
            backgroundColor: '#2A0944',
            borderRadius: 15,
            margin: 10,


        },
    }
);