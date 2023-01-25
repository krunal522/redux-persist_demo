//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';
import Viewprofile from '../userProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

// create a component
const Viewtodo = () => {
    const [todolist, setTodosList] = useState([]);
    const [time, setTime] = useState();
    const isFocused = useIsFocused();
    console.log('result dataaa=>>>', todolist)

    const findTodoItems = async () => {
        const result = await AsyncStorage.getItem('todos');
        if (result !== null) setTodosList(JSON.parse(result));

    };

    useEffect(() => {
        getTime()
    }, [])

    const getTime = () => {
        var date, TimeType, hour, minutes, seconds, fullTime;

        date = new Date();

        hour = date.getHours();
        if (hour <= 11) {
            TimeType = 'AM';
        }
        else {
            TimeType = 'PM';

        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        minutes = date.getMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }

        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        fullTime = hour.toString() + ':' + minutes.toString() + ' ' + TimeType.toString();

        setTime(fullTime)
    }


    const todoData = useSelector(state => state.TodoCheck.todoData)

    console.log('todoData=>>>>!!!!!', JSON.stringify(todoData))


    useEffect(() => {
        findTodoItems();
    }, [isFocused]);

    return (

        <View style={styles.container}>
            <Viewprofile mainTitle='Todo’s' />
            <ScrollView>

                <View style={styles.mainContainer}>
                    {
                        todoData?.length === 0 ? (<View><Text style={styles.notFound}>Not Data Found </Text></View>) : ''
                    }
                    {
                        todoData.map((value, index) => {
                            return (
                                <View key={index} style={styles.userContainer}>
                                    <View style={styles.mainUserDetails}>
                                        <Text style={styles.insertUser}>{value.title}</Text>
                                        <View style={{ position: 'absolute', flexDirection: 'row', alignSelf: 'flex-end', }}>
                                            <Text style={styles.timeTxt}>{time}</Text>
                                        </View>
                                        <Text style={styles.descriptionUser}>{value.desc}</Text>

                                    </View>

                                </View>
                            )

                        })
                    }

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
    userContainer: {
        width: '92%',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CBCFE1'
    },
    mainContainer: {
        marginTop: 30,
    },
    mainUserDetails: {
        margin: 14
    },
    insertUser: {
        fontWeight: '500',
        flexDirection: 'row',
        display: 'flex',
        fontSize: 14,
        lineHeight: 18,
        width: '70%',
        fontFamily: fontFamily.regular,
        color: colors.white,
        alignContent: 'center',
    },
    notFound: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    descriptionUser: {
        fontWeight: '500',
        fontSize: 14,
        width: '80%',
        lineHeight: 18,
        fontFamily: fontFamily.regular,
        color: colors.white,
    },

    timeTxt: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        marginRight: 14,
        alignContent: 'center',
        fontFamily: fontFamily.regular,
        color: colors.white,
    }
});

export default Viewtodo;
