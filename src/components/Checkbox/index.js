import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Checkbox = ({ values=[], onChanceSelect, selected }) => {
  return (
    <View> 
        { 
            values.map((value)=> (
            <TouchableOpacity style={[styles.optContainer]} onPress={() => onChanceSelect()}>
                <View style={styles.outlineSquare}>
                    {selected == 1 && <View style={styles.innerSquare}/>}
                </View>
                <Text style={styles.txt}>{value}</Text>
            </TouchableOpacity>
            ))
        }
    </View>
  );
};

const styles = StyleSheet.create({
  optContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 15
  },
  outlineSquare: {
    width: 20,
    height: 20,
    borderColor: "#777",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerSquare: {
    width: 10,
    height: 10,
    backgroundColor: "#444",
  },
  txt: {
    color: "white",
    fontSize: 14,
    marginLeft: 4,
  },
});

export default Checkbox;
