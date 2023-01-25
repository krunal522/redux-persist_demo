//import Todo List Details Screen A
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Userprofile from '../../components/userProfile/index';
import colors from '../../utils/colors';
import Checktodolist from '../../components/checkTodoList/index';
import styles from './style';

// create a component
const Todoscreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Userprofile mainTitle='Explore' />
                <View style={styles.todoListDetails}>
                    <Checktodolist />
                </View>
            </ScrollView>
        </View >
    );
};


//make this component available to the app
export default Todoscreen;
