import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ImagePicker from 'react-native-image-crop-picker';
import { Picker } from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown'

const App = () => {

    const [currentDate, setCurrentDate] = useState('');
    const [Customer, setCustomer] = useState("");
    const [User, setUser] = useState("");
    const [ForCustomer, setForCustomer] = useState("");
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState([]);

    const allCust = [
        'Cust 1',
        'Cust 2',
        'Cust 3',
        'Cust 4',
        'Cust 5',
        'Cust 6',
        'Cust 7',
        'Cust 8',
    ]
    const complaintType = [
        'Type 1',
        'Type 2',
        'Type 3',
        'Type 4',
        'Type 5',
        'Type 6',
        'Type 7',
        'Type 8',
    ]


    useEffect(() => {

        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var date = new Date().getDate(); //Current Date
        // var month = new Date().getMonth() + 1; //Current Month
        var month = monthNames[new Date().getMonth()];
        var year = new Date().getFullYear(); //Current Year

        setCurrentDate(
            date + ' ' + month + ' ' + year
        );
    }, []);

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, backgroundColor: '#1fddff' }}>
                <Text style={styles.header}>New Complaint</Text>
            </View>

            <View style={styles.inner}>
                <ScrollView >



                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Text style={{ flex: 1, fontSize: 12, marginBottom: 20, fontWeight: 'bold' }}>Date : {currentDate}</Text>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 10, }}>Customer :</Text>
                        {/* <TextInput placeholder="Customer"
                        style={{ flex: 1.5, borderWidth: 1, color: 'black', borderRadius: 5, height: 40 }}
                        onChangeText={text => {
                            setCustomer(text)
                        }}
                    /> */}

                        {/* <View style={{ flex: 1 }}>

                        <Picker
                            selectedValue={Customer}
                            onValueChange={(itemValue, itemIndex) =>
                                setCustomer(itemValue)
                            }>

                            {allCust.map((item) => {
                                return (
                                    <Picker.Item label={item} value={item} />

                                )

                            })}
                        </Picker>
                    </View> */}

                        <View style={{ flex: 1.5, marginTop: 3, color: 'black', height: 40 }}>
                            <SelectDropdown

                                data={allCust}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setCustomer(selectedItem);
                                    console.log("Customer :-", Customer);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>




                    </View>


                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 28, }}>User :</Text>
                        <TextInput placeholder=" User"
                            style={{ flex: 1.5, marginTop: 20, borderWidth: 1, color: 'black', borderRadius: 5, height: 40 }}
                            onChangeText={text => {
                                setUser(text)
                            }}
                        />
                    </View>



                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 28, }}>For Customer :</Text>
                        {/* <TextInput placeholder="For Customer"
                        style={{ flex: 1.5, marginTop: 20, borderWidth: 1, color: 'black', borderRadius: 5, height: 40 }}
                        onChangeText={text => {
                            setForCustomer(text)
                        }}
                    /> */}
                        <View style={{ flex: 1.5, marginTop: 15, color: 'black', height: 40 }}>
                            <SelectDropdown

                                data={allCust}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setForCustomer(selectedItem);
                                    console.log("For Customer:-", ForCustomer);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>




                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 28, }}>Complaint Type :</Text>
                        {/* <TextInput placeholder="Complaint Type"
                        style={{ flex: 1.5, marginTop: 20, borderWidth: 1, color: 'black', borderRadius: 5, height: 40 }}
                        onChangeText={text => {
                            setType(text)
                        }}
                    /> */}

                        <View style={{ flex: 1.5, marginTop: 20, color: 'black', height: 40 }}>
                            <SelectDropdown

                                data={complaintType}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setType(selectedItem);
                                    console.log("Complaint Type :-", Type);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 28, }}>Description :</Text>
                        <TextInput placeholder="Description"
                            multiline={true}
                            style={{
                                flex: 1.5, marginTop: 20, borderWidth: 1, color: 'black', borderRadius: 5, minHeight: 40,
                                maxHeight: 200
                            }}
                            onChangeText={text => {
                                setDescription(text)
                            }}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 18, marginTop: 28, }}>Image :</Text>
                        <TextInput placeholder="Image"

                            style={{ flex: 1.5, marginTop: 20, borderWidth: 1, color: 'black', borderRadius: 5, height: 40 }}
                            onChangeText={text => {
                                setImage(text)
                            }}
                        />


                    </View>


                </ScrollView>
            </View>
            <View style={{ flex: 1,backgroundColor:'white' }}>

                {/* <Button

                    title='Save' onPress={null}
                /> */}
                <TouchableOpacity onPress={null} style={styles.button}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 10,
        justifyContent: "space-around",
        backgroundColor: 'white',
        
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#1fddff',
        marginTop: 10,
        fontStyle:'italic',
        color:'white'
    },
    textInput: {
        marginLeft: 105,
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 48
    },
    btnContainer: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 12,
        flexDirection: 'row',
    },
    space: {
        flex: 1,
        marginHorizontal: 10,
        //marginTop: 200
    },
    textAlignment:
    {
        marginBottom: 4,
        fontSize: 19,
        fontWeight: "bold",
        marginTop: 28
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    button: {
        backgroundColor: "gray",
        height:38,
        padding: 1,
        borderRadius: 10,
        marginHorizontal:20,
        marginBottom:22,
        backgroundColor:'#1fddff'
    },
    buttonText: {
        color: "white",
        textAlign:'center',
        fontSize:30,
        fontStyle:'italic'
    }
});
