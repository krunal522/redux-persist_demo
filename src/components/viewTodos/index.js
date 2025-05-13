//import liraries
import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../utils/colors';
import { IconButton } from 'react-native-paper';
import fontFamily from '../../utils/fontFamily';
import Viewprofile from '../userProfile';
import { useSelector, useDispatch } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { deleteTodo } from '../../Redux/action/action';

// create a component
const Viewtodo = ({ navigation }) => {
    const [todolist, setTodosList] = useState([]);
    const [time, setTime] = useState();
    const isFocused = useIsFocused();
    console.log('result dataaa=>>>', todolist)


    const swipeListRef = useRef(null);

    const dispatch = useDispatch();

    const findTodoItems = async () => {
        const result = await AsyncStorage.getItem('todos');
        if (result !== null) setTodosList(JSON.parse(result));
    };

    const toast = (msg) => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

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

    const renderItem = ({ item }) => {

        console.log('iteeeee', item)
        return (
            <View style={styles.userContainer}>

                <View style={styles.mainUserDetails}>


                    <Text style={styles.insertUser}>{item.title}</Text>
                    <View style={{ position: 'absolute', flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <Text style={styles.timeTxt}>{item.time}</Text>
                    </View>
                    <Text style={styles.descriptionUser}>{item.desc}</Text>

                </View>

            </View>
        )


    }

    const deleteItem = (item) => {
        if (swipeListRef.current) {
            swipeListRef.current.closeAllOpenRows();
        }
        dispatch(deleteTodo(item));
        navigation.reset({
            index: 0,
            routes: [{ name: 'Viewtodo' }]
        });
        toast('Todo deleted successfully!');
    };

    const editItem = (todoId) => {
        if (swipeListRef.current) {
            swipeListRef.current.closeAllOpenRows();
        }
        navigation.setParams({ todo: null });
        const selectedTodo = todoData.find(t => t.id.toString() === todoId);
        if (selectedTodo) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Addtodo', params: { todo: selectedTodo } }],
            });
        }
    };


    

    const renderHiddenItem = ({ item }) => {
        console.log('RenderHiddenItem called with:', item); // Debugging
        return (
            <View style={styles.hiddenContainer}>
                <IconButton
                    icon="trash-can-outline"
                    iconColor="#c93c3c"
                    size={28}
                    onPress={() => deleteItem(item.id.toString())}  // Ensure item.id is passed
                    style={[styles.iconButtonDelete]}
                />
                <IconButton
                    icon="square-edit-outline"  // Professional edit icon
                    iconColor="#4a90e2"
                    size={30}
                    onPress={() => editItem(item.id.toString())}
                    style={[styles.iconButtonEdit]}
                />
            </View>
        );
    };

    // const handleRowOpen = () => {
    //     const interval = setInterval(() => {
    //         if (swipeListRef.current) {
    //             swipeListRef.current.closeAllOpenRows();
    //             console.log("Closed all open rows...");
    //             clearInterval(interval); // Stop interval after one execution
    //         }
    //     }, 1500);
    // };

    const handleRowOpen = () => {
        setTimeout(() => {
            if (swipeListRef.current) {
                swipeListRef.current.closeAllOpenRows();
                console.log("Closed all open rows...");
            }
        }, 1500);
    };

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


                    <SwipeListView
                        keyExtractor={(item, index) => item.id.toString()}
                        ref={swipeListRef}
                        data={todoData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={100}
                        scrollEnabled={false}
                        disableLeftSwipe={true}
                        showsVerticalScrollIndicator={false}
                        onRowOpen={handleRowOpen}
                        keyboardShouldPersistTaps="handled"
                    />





                    {/* <SwipeListView
                        data={todoData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.userContainer}>
                                <View style={styles.mainUserDetails}>
                                    <Text style={styles.insertUser}>{item.title}</Text>
                                    <View style={{ position: 'absolute', flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={styles.timeTxt}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.descriptionUser}>{item.desc}</Text>
                                </View>
                            </View>
                        )}
                        renderHiddenItem={({ item }) => (
                            <View style={styles.hiddenItem}>
                                <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
                                    <Text style={styles.deleteText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        rightOpenValue={-75} // Right swipe limit
                        disableRightSwipe={true} // Left swipe disable
                    /> */}

                </View>

            </ScrollView>
        </View >


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
        backgroundColor: colors.backgroundColor,
        width: '92%',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CBCFE1'
    },
    hiddenContainer: {
        flexDirection: "row",  // Ensure buttons are side by side
        backgroundColor: colors.backgroundColor,
        // paddingHorizontal: 15,
        width: '33%',
        justifyContent: 'center',
        // height: 65,
        alignSelf: 'flex-start',
        marginBottom: 20,
        borderRadius: 8,
        // borderWidth: 1,
        borderColor: '#CBCFE1' // Ensure enough space for both buttons
    },
    // iconButtonDelete: {
    //     marginRight: -5,
    // },
    iconButtonEdit: {
        right: 14

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
    },
});

export default Viewtodo;