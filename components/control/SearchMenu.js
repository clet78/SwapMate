import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { SearchBar, Button, Icon } from 'react-native-elements'
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

export const SearchMenu = () => {
    
    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

    return (
        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 20, paddingLeft: 10, paddingRight: 10}}>
            
            <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      containerStyle={{paddingBottom: 10}}
                    />
            <SearchBar containerStyle={styles.searchBar}
                onChangeText={setSearch}
                value={search}
                lightTheme={true}
            />
        </View>
    )
}

export default SearchMenu

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       padding: 10,
       backgroundColor: "white"
    },
    picker: {
      marginVertical: 30,
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: "#666",
    },
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'yellow'
    },
    searchBar: {
        backgroundColor: 'white',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        alignSelf: 'stretch'
    },
    searchButton: {
        width: 60,
        height:60
    }
})

