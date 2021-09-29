import React, {useState} from 'react'
import { View } from 'react-native'
import Form from '../components/Form'
import Title from '../components/Title'
import Layout from './Layout'
import tw from 'tailwind-react-native-classnames';
import firebase from 'firebase'

export default function Register() {
    const [errorMessage, setError] = useState(""),
    [successMessage, setSuccess] = useState("")
    const register = (email, password) => {
        if (!email && !password)
            alert("Please enter all the required fields")
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                setSuccess("User registered successfully")
                setError("")
            }).catch(err => setError(err.message))
        }
    }
    return (
        <Layout>
            <View style={tw`w-3/4`}>
                <Title text="Register" />
                {!!errorMessage && <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>{errorMessage}</Text>}
                {!!successMessage && <Text style={tw`bg-green-400 p-1 my-2 text-green-700`}>{successMessage}</Text>}
                <Form signup={true} onSubmit={register} />
            </View>
        </Layout>
    )
}