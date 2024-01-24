/****************************************************/
// Common Styles are added here and taken in every page.
/****************************************************/

import { StyleSheet } from 'react-native';
import Fonts from '../fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../Constants/Colors';

const styles = EStyleSheet.create({

    container: {
        flex: 1,
        borderRadius: 6,
        margin: 6,
        backgroundColor: "#fff",
        overflow: "hidden"
    },

    // badge: {
    //     padding: 4,
    //     flexDirection: "row",
    //     marginRight: 5,
    //     borderRadius: 4,
    //     borderWidth: 0.75
    // },
    badgeText: {
        fontSize: 12,
        fontFamily: Fonts.regular
    },
    textField: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    required: {
        color: "red"
    },
    navbarButton: {
        padding: 10,
        fontSize: 16
    },
    tabBar: {
        flex: 1,
        padding: 10,
        marginBottom: 0,
        // borderWidth: 1,
        borderTopLeftRadius: 5, borderTopRightRadius: 5
    },
    tabBarfull: {
        height: 45,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    customertabBar: {
        height: 45,
        width: 137,
        alignItems: 'center',
        justifyContent: 'center'
    },

    customertwotabBar: {
        height: 45,
        width: 205,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        resizeMode: 'contain',
        width: 250,
        height: 100
    },
    mainName: {
        fontWeight: 700, fontSize: "15rem", fontFamily: 'Dm Sans', marginTop: 0, lineHeight: "19.58rem"
    },
    subName: {
        fontWeight: 500, fontSize: "15rem", fontFamily: 'Dm Sans', marginTop: 0, lineHeight: "19.58rem"
    },
    subText: {
        fontSize: "11rem",
        fontWeight: 400,
        color: '#707070',
        lineHeight: "12.89rem",
        fontFamily: "Roboto-Regular"
    },
    subHead: {
        fontSize: "11rem",
        fontWeight: 400,
        color: '#929292',
        lineHeight: "14.32rem",
        fontFamily: "Dm Sans",
    },
    badge: {
        borderWidth: "1rem",
        padding: "4rem",
        fontSize: "11rem",
        borderWidth: "0.75rem",
        borderStyle: 'solid',
        borderRadius: "3rem",
        textAlign: 'center',
        fontWeight: "500",
    },
    subValue: {
        fontSize: "12rem", color: Colors.greenishBlack, fontWeight: '400', lineHeight: "15.62rem"
    },
    subNumberValue: {
        fontSize: "14rem",
        fontWeight: '700',
        color: '#181A0E',
        lineHeight: "16.41rem",
        fontFamily: "Roboto-Regular"
    },
    subNumber: {
        fontSize: "12rem",
        fontWeight: 400,
        color: '#707070',
        lineHeight: "14.06rem",
        fontFamily: "Roboto-Regular"
    },
    boldNumber: {
        fontSize: "11rem",
        fontWeight: '600',
        color: '#181A0E',
        lineHeight: "14.32rem",
        fontFamily: "Roboto-Regular"
    },
    subTabHeader: {
        fontSize: "11rem",
        fontWeight: '900',
        color: Colors.cemat
    },
    formLabel: {
        fontSize: '13rem',
        color: Colors.gray,
        fontWeight: '700',
        fontFamily: "Dm Sans",
    },

});

export default styles;