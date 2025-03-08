import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';
import { View, Text } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonLoader = () => {
    return (
        <SkeletonPlaceholder >
            <View style={styles.mainContainer}>
                {/* Profile Row */}
                <View style={styles.mainProfile}>
                    <View style={styles.userProfile} />

                    <View style={{ marginLeft: 10 }}>
                        <View style={styles.userTitle} />
                        <View style={styles.userEmail} />
                    </View>
                </View>

                {/* Description */}
                <View style={styles.description}>
                    <View style={styles.texComments} />
                </View>

                {/* Watch Section */}
                <View style={styles.watchMain}>
                    <View style={styles.watchIcon} />
                    <View style={styles.mainDateText} />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        height: 120,
        marginVertical: 10,
        width: '92%',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#cbcfe133',
        borderRadius: 10,
    },
    checkItem: {
        width: 24,
        height: 24,
        borderColor: '#CBCFE1',
        borderWidth: 2
    },
    mainProfile: {
        flexDirection: 'row'
    },
    userProfile: {
        marginLeft: 16,
        marginVertical: 10,
        borderRadius: 4,
        width: 36,
        height: 36,
        resizeMode: 'contain'
    },
    userTitle: {
        marginLeft: 8,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fontFamily.regular,
        color: colors.white
    },
    userEmail: {
        marginLeft: 8,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontFamily.regular,
        color: colors.white
    },
    checkBoxMain: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 10
    },
    description: {
        marginLeft: 16
    },
    texComments: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontFamily.regular,
        color: colors.white
    },
    watchIcon: {
        width: 16,
        height: 16,
    },
    watchMain: {
        marginVertical: 9,
        marginLeft: 16,
        flexDirection: 'row'
    },

    mainDateText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15,
        marginLeft: 8,
        fontFamily: fontFamily.regular,
        color: colors.white
    },
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    }
});
export default SkeletonLoader;