import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'TODO_LISTS';

export const saveLists = async (lists) => {
    try {
        const json = JSON.stringify(lists);
        await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (e) {
        console.error('Error saving lists', e);
    }
};

export const loadLists = async () => {
    try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        return json  != null ? JSON.parse(json) : [];
    } catch (e) {
        console.error('Error loading list', e);
        return [];
    }
};