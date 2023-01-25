//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
// Viewprofile component Details Screen 
const Viewprofile = (props) => {
    const {
        mainTitle
    } = props || {};


    const [currentDate, setCurrentDate] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState);
    }


    // June 30th, 2022
    // m,d,y
    function getDaySuffix(num) {
        var array = ("" + num).split("").reverse();


        if (array[1] != "1") {
            switch (array[0]) {
                case "1": return "st";
                case "2": return "nd";
                case "3": return "rd";
            }
        }

        return "th";
    }

    useEffect(() => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            monthNames[d.getMonth()] + ' ' + date + getDaySuffix(date) + ',' + year
        );
    }, []);

    const userProfile = [
        {
            id: 0,
            Title: 'Let’s make today\ncount',
            Date: 'June 30th, 2022',
            secondTitle: 'Welcome Back!',
            imageProfile: require('../../assets/userProfile/userProfile.png'),
            userTitle: 'Cameron Williamson',
            userPhone: '+91 9876543210',
            userPrice: 'Rs. 10,000.00'

        },

    ]


    return (
        <View style={styles.container}>

            <View>
                {userProfile.map((value, index) => {
                    return (
                        <View key={index} style={styles.mainHeaderContainer}>
                            <Text style={styles.titleHeader}>{value.Title}</Text>
                            <View style={styles.userProfile}>
                                <View>
                                    <Text style={styles.dateColor}>{currentDate}</Text>
                                    <Text style={styles.secondTiltle}>{value.secondTitle}</Text>
                                    <View style={{ position: 'absolute', flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>
                                        <Image source={value.imageProfile} style={styles.imgProfile} />
                                    </View>
                                </View>
                            </View>
                            {
                                isEnabled ?
                                    <LinearGradient
                                        useAngle={true}
                                        angle={180}
                                        style={styles.mainPhoneContainer(isEnabled)}
                                        start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }}
                                        colors={['#43ff64d9', '#00d58e33']}>
                                        {/* <Text style={{ padding: 20 }}></Text> */}

                                        <View>

                                            <Text style={styles.userTitle}>{value.userTitle}</Text>
                                            <View style={{ marginVertical: 15, position: 'absolute', flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>
                                                <Switch
                                                    trackColor={{ false: "#767577", true: "#51C833" }}
                                                    onValueChange={toggleSwitch}
                                                    value={isEnabled}
                                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                                />
                                            </View>
                                            <Text style={styles.phoneNumberUser}>{value.userPhone}</Text>
                                            <Text style={styles.userPrice}>{value.userPrice}</Text>
                                        </View>
                                    </LinearGradient> :
                                    <View style={styles.mainPhoneContainer(isEnabled)}>
                                        {/* <Image source={require('../../assets/userProfile/design.png')} style={{ width: '100%', height: 116, position: 'absolute' }} /> */}
                                        <Text style={styles.userTitle}>{value.userTitle}</Text>
                                        <View style={{ marginVertical: 15, position: 'absolute', flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>

                                            <Switch
                                                trackColor={{ false: "#767577", true: "#51C833" }}
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                            />

                                        </View>
                                        <Text style={styles.phoneNumberUser}>{value.userPhone}</Text>
                                        <Text style={styles.userPrice}>{value.userPrice}</Text>

                                    </View>
                            }

                            {/* <Text style={{ padding: 20 }}></Text> */}

                            {/* <View style={styles.mainPhoneContainer(isEnabled)}>
                                <Text style={styles.userTitle}>{value.userTitle}</Text>
                                <View style={{ marginVertical: 15, position: 'absolute', flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>

                                    <Switch
                                        trackColor={{ false: "#767577", true: "#51C833" }}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    />

                                </View>
                                <Text style={styles.phoneNumberUser}>{value.userPhone}</Text>
                                <Text style={styles.userPrice}>{value.userPrice}</Text>
                            </View> */}

                            <View style={styles.lineMainContainer}>
                                <View style={styles.exploreLine}>
                                </View>
                                <Text style={styles.exploreText}>{mainTitle}</Text>
                            </View>

                        </View>
                    )
                })}

            </View>
        </View>

    );
};


//make this component available to the app
export default Viewprofile;
