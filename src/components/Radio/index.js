import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Radio = ({options=[], horizontal=false, onChanceSelect, selected}) => {
    return (
        <View>
            {
                options.map((opt, index)=> (
                    <TouchableOpacity onPress={() => onChanceSelect(opt, index)} style={[styles.optContainer, {marginTop: 20}]}>
                        <View style={styles.outlineCircle}>
                            {selected == index && <View style={styles.innerCircle}/> }
                        </View>
                        <Text style={[styles.txt, {color: selected == index ?'#444' : '#777'}]}>{opt}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',
    },
    txt: {
        color: 'white',
        fontSize: 14,
        marginLeft: 4
    }
})

export default Radio;
