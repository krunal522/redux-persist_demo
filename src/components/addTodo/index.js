//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ToastAndroid, Keyboard } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';
import Button from '../button';
import Viewprofile from '../userProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { TodoCheck } from '../../Redux/reducer/Reducer';
import { addTodo } from '../../Redux/action/action';




// addtodo Component Screen Details
const Addtodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const instagram = 'www.instagram.com/'

    const [todoitem, setTodos] = useState([])

    const dispatch = useDispatch()


    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'title') setTitle(text + (`${instagram}`));
        if (valueFor === 'desc') setDesc(text);
    };

    const toast = (msg) => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }



    const submitTodo = async () => {
        if (!title.length || !desc.length) {
            toast('Title and Description Required ')
        } else {
            const todo = { id: Math.random().toString(), title, desc, time: Date.now() };

            // const updatedTodo = [...todoitem, todo];
            // setTodos(updatedTodo);
            dispatch(addTodo(todo))
            toast('Todo Insert Sucessfully')
            // await AsyncStorage.setItem('todos', JSON.stringify(updatedTodo));
            setTitle('')
            setDesc('')
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Viewprofile mainTitle='Add Todo’s' />

                <View style={styles.mainContainer}>
                    <View>
                        <Text style={styles.headerTitle}>Title</Text>
                        <View style={styles.inputContainer}>
                            <TextInput

                                value={title}
                                // onSubmitEditing={Keyboard.dismiss}
                                style={styles.textInputStyle}
                                onChangeText={text => handleOnChangeText(text, 'title')}
                                placeholderTextColor="#CBCFE1"
                                autoCorrect={false}
                                // defaultValue="steve"
                                // contextMenuHidden={true}
                                // editable={true}
                                // defaultValue={'www.facebook.com/'}
                                placeholder='Enter Title'
                            />
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.headerTitle}>Description</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={desc}

                                placeholderTextColor="#CBCFE1"
                                style={styles.textInputStyle}
                                autoCorrect={false}
                                placeholder='Enter Description'
                                onChangeText={text => handleOnChangeText(text, 'desc')}
                            />
                        </View>
                    </View>
                    <View>
                        <Button onPress={submitTodo} title='ADD' />
                    </View>


                </View>


            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        display: 'flex'

    },
    headerTitle: {
        fontWeight: fontFamily.regular,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        color: colors.white,
    },
    textInputStyle: {
        color: colors.white
    },
    mainContainer: {
        width: '92%',
        alignSelf: 'center',
        marginTop: 30,
    },
    inputContainer: {
        height: 50,
        backgroundColor: '#cbcfe133',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 5,
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: '#cbcfe199',
    },
    description: {
        marginTop: 20
    }
});

//make this component available to the app
export default Addtodo;
