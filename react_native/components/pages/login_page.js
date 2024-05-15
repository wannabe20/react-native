import { View, TextInput, Text } from "react-native";

export default function LoginPage(){
    const [text, onChangeText] = React.useState('Useless Text');

return(
    <View>
    <Text>
        Toto je login page
    </Text>
      <Text>
      Zadej prosím svoje údaje 
    </Text>
    <TextInput  style={styles.input}
        onChangeText={onChangeText}
        value={text}/>
    </View>
);}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });