//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ToastAndroid, Keyboard } from 'react-native';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import fontFamily from '../../utils/fontFamily';
import Button from '../button';
import Viewprofile from '../userProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { TodoCheck } from '../../Redux/reducer/Reducer';
import { addTodo, updateTodo } from '../../Redux/action/action';



// addtodo Component Screen Details
const Addtodo = ({ route }) => {
    const [title, setTitle] = useState(existingTodo ? existingTodo.title : '');
    const [desc, setDesc] = useState(existingTodo ? existingTodo.desc : '');

    const navigation = useNavigation();

    const [todoitem, setTodos] = useState([])

    const existingTodo = route.params?.todo || null;

    const todoData = useSelector(state => state.TodoCheck.todoData)

    console.log('new id=>>>>', existingTodo);

    const dispatch = useDispatch()


    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'title') setTitle(text);
        if (valueFor === 'desc') setDesc(text);
    };

    useEffect(() => {
        if (existingTodo) {
            setTitle(existingTodo.title);
            setDesc(existingTodo.desc);
        }

    }, [existingTodo]);
    useEffect(() => {
        console.log('Todo Data Updated newwwwwwww=>>>>>>:', todoData); // Debugging
    }, [todoData]);

    const toast = (msg) => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
    const getCurrentTime = () => {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let TimeType = hour < 12 ? 'AM' : 'PM';

        if (hour > 12) {
            hour -= 12;
        }
        if (hour === 0) {
            hour = 12;
        }

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hour}:${minutes}:${seconds} ${TimeType}`;
    };


    const submitTodo = async () => {
        let updatedTodos;
        if (!title.length || !desc.length) {
            toast('Title and Description Required');
        } else if (existingTodo) {

            const updatedTodo = { ...existingTodo, title: title.toString(), desc: desc.toString() };

            console.log('new updated valueeee->>>', updatedTodo);

            dispatch(updateTodo(updatedTodo));
            // updatedTodos = todoData.map(t =>
            //     t.id === existingTodo.id ? { ...t, title, desc } : t
            // );
            toast('Todo Updated Successfully');
            setTitle('');
            setDesc('');

            // await AsyncStorage.setItem('todoData', JSON.stringify(updatedTodos));
            navigation.setParams({ todo: null });
            // navigation.goBack(); // Navigate back to Todo List
            navigation.navigate('Viewtodo');

        } else {
            const todo = {
                id: Math.random().toString(),
                title,
                desc,
                time: getCurrentTime()
            };

            dispatch(addTodo(todo));
            toast('Todo added successfully!');

            setTitle('');
            setDesc('');
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
                        <Button onPress={submitTodo} title={existingTodo !== undefined && existingTodo !== null ? 'UPDATE' : 'ADD'} />
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
