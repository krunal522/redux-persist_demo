import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, Switch, TouchableOpacity, Dimensions } from 'react-native';

// Responsive util (local, fallback if useResponsive.js not found)
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;

// Dummy data (local, fallback if dummyData.js not found)
const dummyData = [
    {
        id: 1,
        name: 'Jane Cooper',
        email: 'jane.cooper@email.com',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'June 30, 2022',
        time: '10:00 AM',
        status: false,
        image: require('../../assets/userProfile/userProfile.png'),
    },
    {
        id: 2,
        name: 'Wade Warren',
        email: 'wade.warren@email.com',
        desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'June 30, 2022',
        time: '11:30 AM',
        status: true,
        image: require('../../assets/userProfile/userProfile.png'),
    },
    {
        id: 3,
        name: 'Wade Warren',
        email: 'wade.warren@email.com',
        desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'June 30, 2022',
        time: '11:30 AM',
        status: true,
        image: require('../../assets/userProfile/userProfile.png'),
    },
    {
        id: 4,
        name: 'Wade Warren',
        email: 'wade.warren@email.com',
        desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'June 30, 2022',
        time: '11:30 AM',
        status: true,
        image: require('../../assets/userProfile/userProfile.png'),
    },
    {
        id: 5,
        name: 'Wade Warren',
        email: 'wade.warren@email.com',
        desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'June 30, 2022',
        time: '11:30 AM',
        status: true,
        image: require('../../assets/userProfile/userProfile.png'),
    },
    // Add more as needed
];

const CARD_BG = '#1E3A50';
const BG = '#0D2A3D';
const GREEN = '#00D26A';
const FONT = 'Inter'; // fallback to Montserrat if not available

export default function TestFigmaScreen() {
    const [toggle, setToggle] = useState(false);
    const [list, setList] = useState(dummyData);

    const onCheck = id => {
        setList(list =>
            list.map(item =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerSection}>
                <View style={styles.headerTextWrap}>
                    <Text style={styles.headerTitle}>{`Let's make today count`}</Text>
                    <Text style={styles.headerDate}>June 30th, 2022</Text>
                    <Text style={styles.headerSub}>Welcome back!</Text>
                </View>
                <Image source={require('../../assets/userProfile/userProfile.png')} style={styles.profilePic} />
            </View>
            <View style={{
                height: 116,
                marginVertical: 35,
                width: '90%',
                alignSelf: 'center',
                backgroundColor: '#cbcfe133',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 0,
                padding: 0,
                position: 'relative',
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        marginTop: 16,
                        marginHorizontal: 16,
                        fontWeight: '700',
                        fontSize: 20,
                        lineHeight: 24,
                        fontFamily: 'Montserrat',
                        color: '#fff',
                    }}>Cameron Williamson</Text>
                    <Text style={{
                        marginVertical: 10,
                        marginLeft: 16,
                        lineHeight: 24,
                        fontWeight: '600',
                        fontSize: 16,
                        fontFamily: 'Montserrat',
                        color: '#fff',
                    }}>+91 9876543210</Text>
                    <Text style={{
                        marginLeft: 16,
                        lineHeight: 24,
                        fontWeight: '600',
                        fontSize: 16,
                        fontFamily: 'Montserrat',
                        color: '#51C833',
                    }}>Rs. 10,000.00</Text>
                </View>
                <View style={{
                    marginVertical: 15,
                    position: 'absolute',
                    flexDirection: 'row',
                    flex: 1,
                    alignSelf: 'flex-end',
                    right: 16,
                    top: 16,
                }}>
                    <Switch
                        value={toggle}
                        onValueChange={setToggle}
                        trackColor={{ false: '#767577', true: '#51C833' }}
                        thumbColor={toggle ? '#f4f3f4' : '#f4f3f4'}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
                marginHorizontal: '5%',
                marginTop: verticalScale(24),
                marginBottom: verticalScale(8),
            }}>
                <View style={{
                    width: '1.5%',
                    height: 30,
                    backgroundColor: '#51C833',
                    borderRadius: 5,
                }} />
                <Text style={{
                    fontWeight: '600',
                    fontSize: 20,
                    lineHeight: 25,
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    marginLeft: 10,
                    alignSelf: 'center',
                }}>Explore</Text>
            </View>
            <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 4 }}>
                {list.map(item => (
                    <View key={item.id} style={styles.listCard}>
                        <View>
                            <Image source={item.image} style={styles.listImage} />
                        </View>
                        <View style={styles.listContent}>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                fontSize: 16,
                                marginBottom: 2,
                                textAlign: 'left',
                            }}>{item.name}</Text>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Montserrat',
                                fontWeight: '400',
                                fontSize: 12,
                                marginBottom: 2,
                                textAlign: 'left',
                            }}>{item.email}</Text>
                            <View style={{ alignItems: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '400',
                                    fontSize: 12,
                                    marginTop: 2,
                                    marginBottom: 0,
                                    textAlign: 'left',
                                }}>{item.desc}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, marginRight:16 }}>
                                <Image source={require('../../assets/userProfile/watchIcon.png')} style={{ width: 16, height: 16, marginRight: 6, resizeMode: 'contain' }} />
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '400',
                                    fontSize: 13,
                                    textAlign: 'left',
                                }}>{item.date} {item.time}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.checkWrap} onPress={() => onCheck(item.id)}>
                            <View style={[styles.checkbox, item.status && styles.checkboxChecked]}>
                                {item.status && <Text style={styles.checkboxTick}>✓</Text>}
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

function TabIcon({ label, icon }) {
    return (
        <View style={styles.tabIconWrap}>
            <Image source={icon} style={styles.tabIconImg} />
            <Text style={styles.tabIconLabel}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: BG,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: scale(24),
        paddingTop: verticalScale(24),
    },
    headerTextWrap: {
        flex: 1,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: FONT,
        fontWeight: '700',
        fontSize: scale(24),
        marginBottom: verticalScale(4),
    },
    headerDate: {
        color: '#fff',
        fontFamily: FONT,
        fontWeight: '500',
        fontSize: scale(16),
        marginBottom: verticalScale(2),
    },
    headerSub: {
        color: '#fff',
        fontFamily: FONT,
        fontWeight: '400',
        fontSize: scale(14),
    },
    profilePic: {
        width: scale(45),
        height: scale(45),
        borderRadius: scale(8),
        marginLeft: scale(12),
        marginTop: verticalScale(4),
    },
    scroll: {
        flex: 1,
        marginTop: verticalScale(16),
    },
    listCard: {
        backgroundColor: CARD_BG,
        borderRadius: scale(10),
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: scale(24),
        marginBottom: verticalScale(12),
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: scale(12),
        paddingRight: scale(12),
    },
    listImage: {
        width: scale(36),
        height: scale(36),
        borderRadius: scale(6),
        marginRight: scale(12),
        marginTop: 0,
    },
    listContent: {
        flex: 1,
        // justifyContent: 'flex-start',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        marginTop: 0,
    },
    checkWrap: {
        marginLeft: scale(10),
    },
    checkbox: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(6),
        borderWidth: 2,
        borderColor: '#CBCFE1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#CBCFE199',
        borderColor: '#CBCFE199',
    },
    checkboxTick: {
        color: '#FFFFFF',
        fontSize: scale(16),
        fontWeight: 'bold',
    },
    bottomTab: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: verticalScale(80),
        backgroundColor: GREEN,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20),
        paddingBottom: verticalScale(12),
    },
    tabIconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIconImg: {
        width: scale(28),
        height: scale(28),
        marginBottom: verticalScale(4),
        resizeMode: 'contain',
    },
    tabIconLabel: {
        color: '#fff',
        fontFamily: FONT,
        fontWeight: '500',
        fontSize: scale(12),
    },
}); 