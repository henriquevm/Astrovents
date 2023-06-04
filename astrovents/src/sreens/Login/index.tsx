import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export default function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.viewLogo}>
                <Text style={styles.txtLogo}>Astrovents</Text>
                <Image source={require('../../../img/openLogo.png')} style={styles.imgOpenLogo} />
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.txtLogin}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignUp}>
                    <Text style={styles.txtSignUp}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


