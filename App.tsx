import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <TouchableOpacity
                    style={[styles.item, {backgroundColor: activeSvg === 'home' ? 'purple' : 'white'}]}
                    onPress={() => {
                        setActiveSvg('home')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                    <HomeSvg color={activeSvg === 'home' ? 'white' : undefined}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, {backgroundColor: activeSvg === 'activity' ? 'purple' : 'white'}]}
                    onPress={() => {
                        setActiveSvg('activity')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                    <ActivitySvg color={activeSvg === 'activity' ? 'white' : undefined}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, {backgroundColor: activeSvg === 'calendar' ? 'purple' : 'white'}]}
                    onPress={() => {
                        setActiveSvg('calendar')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                    <CalendarSvg color={activeSvg === 'calendar' ? 'white' : undefined}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, {backgroundColor: activeSvg === 'slider' ? 'purple' : 'white'}]}
                    onPress={() => {
                        setActiveSvg('slider')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                    <SliderSvg color={activeSvg === 'slider' ? 'white' : undefined}/>
                </TouchableOpacity>

            </View>
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
    item: {
        // backgroundColor: 'purple',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
});
