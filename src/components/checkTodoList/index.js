//import liraries
import React, { Component, useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, } from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

import colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { checkMark } from '../../Redux/action/action';

import { userApi } from '../utils/index';


// create a component
const Checktodolist = (props) => {
    const [todoSelect, setTodoSelect] = useState([]);
    const [time, setTime] = useState();

    const [currentDate, setCurrentDate] = useState('');

    console.log('current dataaa=>>>', currentDate)

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


    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        setCurrentDate(
            date + '/' + (month < 10 ? 0 : '') + month + '/' + year
        );

    }, []);

    useEffect(() => {
        getTime()
    }, [])


    const checkTodoItems = async () => {
        // const result = await AsyncStorage.getItem('checkTodo');

        // dispatch(checkMark(result))



        // console.log('resultcheck', JSON.parse(result.selected))

        // useEffect(() => {
        //     if (result?.selected === true) {
        //         if (JSON.parse(result !== null) && selected === true) {
        //             setUserData(result.selected)
        //         }

        //     }
        // }, [])

        // let userList = [];
        // userData.map((user) => {
        //     console.log('user dataaa=>>', user)
        //     JSON.parse(result).map(value => {
        //         const oldInfo = userList.find((item) => item.id === user.id);
        //         console.log('valueeeeeeeee=>', user.id == value.id)
        //         if (user.id == value.id) {
        //             userList.push({ ...value, selected: true })
        //         } else {
        //             userList.push(user)
        //         }
        //         // const checkTodo = () => {
        //         //     if (value.selected == true) {
        //         //         return value
        //         //     }
        //         //     return {
        //         //         value
        //         //     }
        //         // }
        //     })
        // })
        // console.log('userlist dataaa=>>>', userList)

        // setUserData(userList)




        // JSON.parse(result).map(value => {
        //     // console.log('user value dataaa=>>>', value)
        //     console.log('value selected=>>', value.selected)
        //     if (value.selected == true) {
        //         alert('user')
        //         setUserData(value)
        //     }
        // });

        // JSON.parse(result).map(value => {
        //     // console.log('user value dataaa=>>>', value)
        //     console.log('value selected=>>', value.selected)
        //     if (value.selected == true) {
        //         alert('user')
        //         setUserData(value)
        //     }
        // });




        // if (result.selected == true) {
        //     setUserData(JSON.parse(result.selected));
        // }

    };



    const dispatch = useDispatch()
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        userDetails()
        onchangeTodo()
    }, [])

    useEffect(() => {
        checkTodoItems()

    }, [userData])
    const checkList = useSelector(state => state.TodoCheck.checkData)

    console.log('cheklistapi->', JSON.stringify(checkList))


    useEffect(() => {
        oncheckTodoSelected()
    }, [userData])

    const userDetails = async () => {
        try {
            const data = await userApi();
            console.log('api dataaa=>>>', JSON.stringify(data))
            // console.log('current user dataa list details=>>>!!!', (JSON.stringify(data.data)))
            setUserData(data?.data)

        } catch (error) {
            console.log('data tododdd=>>>', error.message)
        }
    }

    const userProfile = [
        {
            id: 0,
            imageProfile: require('../../assets/checkImg/checkimg1.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },

        {
            id: 1,
            imageProfile: require('../../assets/checkImg/checkimg2.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),

        },
        {
            id: 2,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
        {
            id: 3,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
    ]

    const _checkBoxSelection = value => {
        return (
            <TouchableOpacity
                onPress={() => setTodoSelect(!todoSelect)}
                value={value[value.id]}
            >
                {
                    todoSelect ? (
                        <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#cbcfe133" />)
                        : (
                            <MaterialCommunityIcons name="checkbox-marked" size={24} color="#cbcfe133" />
                        )
                }
            </TouchableOpacity>
        );
    };

    // const checkItem = async (value) => {
    //     // const { checked } = this.state;
    //     let newArr = [];

    //     if (!check.includes(value.id)) {
    //         // { (newValue) => { setChecked({ ...checked, [value.id]: newValue }) } }
    //         newArr = [...check, value.id];
    //     } else {
    //         newArr = check.filter(a => a.id !== value.id);
    //     }
    //     console.log('new array dataaa=>>>', newArr)
    //     setCheck(newArr)

    //     await AsyncStorage.setItem('checkitem', check);

    // };


    const onchangeTodo = async (itemSelected, index) => {

        const newTodo = userData.map(item => {
            if (item.id == itemSelected.id) {
                return {
                    ...item,
                    selected: !item?.selected
                }
            } else {
                return {
                    ...item,
                    selected: !!item?.selected
                }
            }

        })
        // dispatch(checkMark(newTodo))

        console.log('truedataaa=>>!!', JSON.stringify(newTodo))
        // await AsyncStorage.setItem('checked', JSON.stringify(userData))
        setUserData(newTodo)


    }



    const oncheckTodoSelected = async () => {
        var keys = userData.map((item) => item)
        var checks = userData.map((item) => item.selected)

        let checked = [];

        console.log('dataaaa=>>>>>>!!!!!!!!!!!!!!', checked)

        for (i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                checked.push(keys[i])
            }
        }
        dispatch(checkMark(checked))
        await AsyncStorage.setItem('checkTodo', JSON.stringify(checked));
    }

    return (
        <View style={styles.container}>
            {/* <Viewprofile mainTitle='Selected Explore' /> */}
            {
                userData.length > 0 ? userData.map((value, index) => {
                    return (
                        <View key={index} style={styles.mainContainer}>
                            <View>
                                <View style={styles.mainProfile}>
                                    <Image source={{ uri: value.user.profile }} style={styles.userProfile} />
                                    <View style={{ alignSelf: 'center', alignContent: 'center', }}>
                                        <Text style={styles.userTitle}>{value.user.name}</Text>
                                        <Text style={styles.userEmail}>{value.userEmail}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.checkBoxMain}>
                                        {/* <CheckBox
                                           value={checked[index]}
                                            onChange={() => onchangeTodo(value)}
                                        /> */}
                                        <CheckBox
                                            // disabled={false}
                                            style={styles.checkItem}


                                            // onChange={checkMarkList}
                                            onAnimationType='fill'
                                            offAnimationType='fade'
                                            boxType='square'
                                            tintColors={{ true: 'white', false: '#cbcfe133' }}
                                            onCheckColor={colors.white}
                                            onValueChange={() => onchangeTodo(value, index)}
                                            value={!!value.selected}
                                        // value={checked[value.id]}
                                        // onValueChange={(newValue) => { setChecked({ ...checked, [value.id]: newValue }) }}
                                        />
                                        {/* {_checkBoxSelection(value)} */}
                                        {/* <MaterialCommunityIcons name="checkbox-marked" size={24} color="#cbcfe133" /> */}
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.texComments}>{value.descriptions}</Text>
                                </View>
                                <View style={styles.watchMain}>
                                    <Image source={require('../../assets/userProfile/watchIcon.png')} style={styles.watchIcon} />
                                    <Text style={styles.mainDateText}>{`${currentDate + ' ' + time}`}</Text>
                                </View>

                            </View>
                        </View>
                    )
                }) : ''
            }
        </View>
    );
};

//make this component available to the app
export default Checktodolist;
