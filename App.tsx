import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeSvg} from "./src/icon/homeSvg/homeSvg";
import {ActivitySvg} from "./src/icon/activitySvg/activitySvg";
import {SliderSvg} from "./src/icon/sliderSvg/sliderSvg";
import {CalendarSvg} from "./src/icon/calendarSvg/calendarSvg";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Lesson 2</Text>
            <HomeSvg/>
            <ActivitySvg/>
            <SliderSvg/>
            <CalendarSvg/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
