/** post Component  page Style  */

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flex: 1,
        backgroundColor: colors.backgroundColor
    },
    linearGradient: {
        flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 5,
    },
    mainHeaderContainer: {
        marginTop: 36,
        // marginHorizontal: 24,,
        width: '92%',
        alignSelf: 'center'
    },
    titleHeader: {
        fontFamily: fontFamily.regular,
        fontSize: 30,
        lineHeight: 37,
        fontWeight: '700',
        color: colors.white
    },
    userProfile: {
        marginTop: 30,

    },
    dateColor: {
        fontSize: 18,
        fontWeight: fontFamily.regular,
        color: colors.white,
        fontWeight: '500',
    },
    secondTiltle: {
        marginVertical: 6,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        color: colors.white,
    },
    imgProfile: {
        width: 45,
        height: 45,
        borderRadius: 4,
        flexDirection: 'row',
        alignContent: 'flex-end',
        display: 'flex'
        // flex: 1
    },
    imgMainContainer: {
        backgroundColor: '#F7F7FA',
        width: 48,
        height: 48,
        flex: 1,
        alignSelf: 'flex-end',
        borderRadius: 48,
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
    },
    mainPhoneContainer: (isEnabled) => ({
        height: 116,
        marginVertical: 35,
        width: '100%',
        backgroundColor: '#cbcfe133',
        borderRadius: 10,
    }),
    userTitle: {
        marginTop: 16,
        marginHorizontal: 16,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: fontFamily.regular,
        color: colors.white,
    },
    phoneNumberUser: {
        marginVertical: 10,
        marginLeft: 16,
        lineHeight: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fontFamily.regular,
        color: colors.white,

    },
    userPrice: {
        marginLeft: 16,
        lineHeight: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fontFamily.regular,
        color: colors.green,
    },
    exploreLine: {
        width: '1.5%',
        height: 30,
        backgroundColor: '#51C833',
        borderRadius: 5
    },
    lineMainContainer: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    exploreText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 25,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        marginLeft: 10,
        alignSelf: 'center'
    }

});
export default styles;


