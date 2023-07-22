import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.item}>
                    <Ionicons name="notifications-outline" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch />
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Account</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={styles.item}>
                    <Ionicons name="notifications-outline" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch />
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Account</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={styles.item}>
                    <Ionicons name="notifications-outline" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch />
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Account</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={styles.item}>
                    <Ionicons name="notifications-outline" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch />
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Account</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={styles.item}>
                    <Ionicons name="notifications-outline" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch />
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" style={styles.itemIcon} />
                    <Text style={styles.itemText}>Account</Text>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemContainer: {
        backgroundColor: '#FFF',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    itemIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
        tintColor: '#888',
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    chevronIcon: {
        width: 16,
        height: 16,
        tintColor: '#888',
    },
});

export default Settings;
