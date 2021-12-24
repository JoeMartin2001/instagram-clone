import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.main}>
                <Text>HomeCard</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 400,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
    }
})

export default HomeCard
