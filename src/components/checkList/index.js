//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import Viewprofile from '../userProfile';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';


// create a component
const Checklist = (props) => {
    const [todoSelect, setTodoSelect] = useState();
    const [checked, setChecked] = React.useState({});
    const isFocused = useIsFocused();

    const [checkUser, setCheckUser] = useState([]);

    const checkTodoItems = async () => {
        const result = await AsyncStorage.getItem('checkTodo');
        console.log('result dataaa=>>>', result)
        if (result !== null) setCheckUser(JSON.parse(result));

    };
    useEffect(() => {
        checkTodoItems();
    }, [isFocused]);

    const checkList = useSelector(state => state)

    console.log('checkList dataaa=>>>', checkList)

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
        {
            id: 4,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
        {
            id: 5,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
        {
            id: 6,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
        {
            id: 6,
            imageProfile: require('../../assets/checkImg/checkimg3.png'),
            Title: 'Jane Cooper',
            userEmail: 'jane.cooper@example.com',
            comments: 'Lorem text Lorem text Lorem text Lorem text Lorem text text Lorem text Lorem text Lorem text Lorem text...',
            date: '28/06/2022 10:00 AM',
            watchImg: require('../../assets/userProfile/watchIcon.png'),
        },
    ]
    // const todoSelection = i => {
    //     let temp = [...todoSelect];
    //     temp.forEach(item => {
    //         if (item.id === i.id) {
    //             item.selected = !item.selected;
    //         }
    //     });
    //     setTodoSelect(temp);
    // };




    return (
        <View style={styles.container}>
            <Viewprofile mainTitle='Selected Explore' />
            <ScrollView>
                {
                    checkUser.length > 0 ? checkUser.map((value, index) => {
                        return (
                            <View key={index} style={styles.mainContainer}>
                                <View>
                                    <View style={styles.mainProfile}>
                                        <Image source={{ uri: value?.user?.profile }} style={styles.userProfile} />
                                        <View style={{ alignSelf: 'center', alignContent: 'center', }}>
                                            <Text style={styles.userTitle}>{value?.user?.name}</Text>
                                            <Text style={styles.userEmail}>{value?.userEmail}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.description}>
                                        <Text style={styles.texComments}>{value?.descriptions}</Text>
                                    </View>
                                    <View style={styles.watchMain}>
                                        <Image source={require('../../assets/userProfile/watchIcon.png')} style={styles.watchIcon} />
                                        <Text style={styles.mainDateText}>{value?.date_time}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }) : ''
                }
            </ScrollView>

        </View>
    );
};

//make this component available to the app
export default Checklist;
