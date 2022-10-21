import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeSvg} from "./src/icon/homeSvg/homeSvg";
import {ActivitySvg} from "./src/icon/activitySvg/activitySvg";
import {SliderSvg} from "./src/icon/sliderSvg/sliderSvg";
import {CalendarSvg} from "./src/icon/calendarSvg/calendarSvg";
import {useState} from "react";

type ActiveNameSvgType = 'home' | 'calendar' | 'activity' | 'slider'

export default function App() {
    const [active, setActive] = useState<ActiveNameSvgType>('home');

    return (
        <View style={styles.container}>
            <Text>Lesson 2</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <HomeSvg/>
                <ActivitySvg/>
                <SliderSvg/>
                <CalendarSvg/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
