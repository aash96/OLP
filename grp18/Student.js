import React from 'react';
import { StatusBar, View,Image, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
const Department = ({datafromapp}) => {
    return (
        <View>
            <StatusBar/>
            <FlatList
                data={datafromapp}
                keyExtractor={item => item.dept_cd}
                style={{ flexGrow: 1 }}
                renderItem={({ item }) => {
                    return (<View style={styles.item}>
                        <Text>Code: {item.dept_cd}</Text>
                        <Text>Name: {item.dept_name}</Text>
                        <Text>Faculty Strength: {item.faculty_cnt}</Text>
                    </View>)

                }}
            ></FlatList>
            <StatusBar/>
        </View>
        
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: "orange",
        margin: 5
    }
});
export default Department;