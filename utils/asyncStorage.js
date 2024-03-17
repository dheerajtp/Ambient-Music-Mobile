import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return {
        status: true,
        value,
      };
    }
    return {
      status: false,
    };
  } catch (e) {
    return {
      status: false,
    };
  }
};

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const asyncStorage = {
  storeData,
  getData,
  removeItem,
};

export default asyncStorage;
