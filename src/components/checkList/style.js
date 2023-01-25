/** post Component  page Style  */

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';

const styles = StyleSheet.create({

    mainProfile: {
        flexDirection: 'row'
    },
 
    userTitle: {
        marginLeft: 8,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
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

    watchIcon: {
        width: 16,
        height: 16,
    },
    watchMain: {
        marginVertical: 9,
        marginLeft: 16,
        flexDirection: 'row'
    },

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
   
    userProfile: {
        marginLeft: 16,
        marginVertical: 10,
        borderRadius: 4,
        width: 36,
        height: 36,
        resizeMode: 'contain'
    },

    userEmail: {
        marginLeft: 8,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontFamily.regular,
        color: colors.white
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
export default styles;


