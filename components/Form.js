import React, {useState} from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import FormLabel from './FormLabel'
import FormInput from './FormInput'
import FormButton from './FormButton'

const FormInputGroup = ({children}) => {
    return (
        <View style={tw`my-3 space-y-2`}>
            {children}
        </View>
    )
}

export default function Form({signup, onSubmit}) {
    const navigation = useNavigation(),
    screen = signup ? "Home" : "Register";
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("")
    return (
        <View>
            <FormInputGroup>
                <FormLabel text="Email"/>
                <FormInput
                    onChangeText={(text)=>setEmail(text)}
                    value={email}>
                </FormInput>
            </FormInputGroup>
            <FormInputGroup>
                <FormLabel text="Password"/>
                <FormInput
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                    secureTextEntry={true}>
                </FormInput>
            </FormInputGroup> 
            <FormButton
                primary = {true}
                text={!signup ? "Login" : "Register"}
                onPress={()=>onSubmit(email, password)}/>        
            <FormButton
                primary = {false}
                text={signup ? "Login" : "Register"}
                onPress={()=>navigation.navigate(screen)}/>  
        </View>
    )
}

