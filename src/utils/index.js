import { Platform, Alert, ToastAndroid } from "react-native";
import moment from "moment";
import { Colors, Metrics } from '../theme'

class Util {

    isPlatformAndroid = () => Platform.OS === "android";

    getLocalDateTime(givenDate: string) {
        var utcDate = givenDate.toString();
        // var gmtDateTime = moment.utc(utcDate, "YYYY-MM-DD HH");
        // var gmtDateTime = moment.utc(utcDate);
        // var local = gmtDateTime.local().format("YYYY-MMM-DD h:mm A");
        const fromNow = moment(utcDate, "YYYY-MMM-DD h:mm A").fromNow();
        return fromNow
    }

    showCommonMessage(
        title,
        message,
        onOkPressed = () => console.log("OK Pressed")
    ) {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "ok",
                    onPress: onOkPressed
                }
            ],
            { cancelable: false }
        );
    }

    showToast(message: String) {
        if (this.isPlatformAndroid()) {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            showCommonMessage('Success', message)
        }
    }

}

export default new Util();
