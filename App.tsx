import {StyleSheet, TouchableOpacity, View, Animated, Text} from 'react-native';
import {HomeSvg} from "./src/icon/homeSvg/homeSvg";
import {ActivitySvg} from "./src/icon/activitySvg/activitySvg";
import {SliderSvg} from "./src/icon/sliderSvg/sliderSvg";
import {CalendarSvg} from "./src/icon/calendarSvg/calendarSvg";
import {useEffect, useRef, useState} from "react";

type ActiveNameSvgType = 'home' | 'calendar' | 'activity' | 'slider'

export default function App() {
    const [activeSvg, setActiveSvg] = useState<ActiveNameSvgType>('home');
    const animationValue = useRef(new Animated.Value(0)).current
    const animationValue2 = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(Animated.stagger(1000, [
            Animated.timing(animationValue, {
                toValue: 250,
                duration: 1000,
                useNativeDriver: true
            }),
            /*Animated.timing(animationValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),*/
            Animated.timing(animationValue2, {
                toValue: -150,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(animationValue2, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),

        ])).start()

        /*Animated.spring(animationValue, {
            toValue: 250,
            useNativeDriver: true,
            damping: 1
        }).start()*/

        /*Animated.loop(Animated.timing(animationValue, {
            toValue: 250,
            duration: 3000,
            useNativeDriver: true
        })).start()*/

        /*Animated.timing(animationValue, {
            toValue: 250,
            duration: 3000,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start()
        })*/
    }, []);

    return (
        <View style={styles.container}>


            <Animated.View style={[
                {width: 100, height: 100, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'},
                {
                    transform: [{
                        translateX: animationValue,
                    }, {
                        translateY: animationValue2
                    }]
                }
            ]}><View><Text>!!! Let's go !!!</Text></View></Animated.View>


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
