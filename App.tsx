import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeSvg} from "./src/icon/homeSvg/homeSvg";
import {ActivitySvg} from "./src/icon/activitySvg/activitySvg";
import {SliderSvg} from "./src/icon/sliderSvg/sliderSvg";
import {CalendarSvg} from "./src/icon/calendarSvg/calendarSvg";
import {useState} from "react";

type ActiveNameSvgType = 'home' | 'calendar' | 'activity' | 'slider'

export default function App() {
    const [activeSvg, setActiveSvg] = useState<ActiveNameSvgType>('home');

    return (
        <View style={styles.container}>
            <Text>Lesson 2</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => {
                    setActiveSvg('home')
                }} hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}><HomeSvg/></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActiveSvg('home')
                }} hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}><ActivitySvg/></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActiveSvg('home')
                }} hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}><SliderSvg/></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActiveSvg('home')
                }} hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}><CalendarSvg/></TouchableOpacity>
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
