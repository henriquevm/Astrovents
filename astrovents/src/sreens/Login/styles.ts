import { StyleSheet, ImageBackground } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 100%
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    imgOpen: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    viewLogo: {
        flexDirection: 'row',
    },
    imgOpenLogo: {
        width: 80,
        height: 80
    },
    txtLogo: {
        color: '#000000',
        fontSize: 45,
        paddingTop: 10
    },
    viewButtons: {
        position: 'absolute',
        bottom: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonLogin:{
        height: 52,
        width: 167,
        marginRight: 5,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 2
        
    },
    txtLogin:{
        color: '#0c0c0c'
    },
    buttonSignUp:{
        height: 52,
        width: 167,
        marginLeft: 5,
        backgroundColor: '#0c0c0c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 2
    },
    txtSignUp:{
        color: '#f8f8f8'
    }
});