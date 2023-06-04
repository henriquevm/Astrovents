import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export default function Start() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../img/open.png')} style={styles.imgOpen}>
                <View style={styles.viewLogo}>
                    <Image source={require('../../../img/openLogo.png')} style={styles.imgOpenLogo} />
                    <Text style={styles.txtLogo}>Astrovents</Text>
                </View>
                <View style={styles.viewButtons}>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.txtLogin}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSignUp}>
                        <Text style={styles.txtSignUp}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}


