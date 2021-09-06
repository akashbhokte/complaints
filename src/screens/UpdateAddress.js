import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import axios from 'axios';
import Allcity from './Allcity';
import { Picker } from '@react-native-picker/picker';


const UpdateAddress = ({ navigation }) => {
    const [Addr1, setAddr1] = useState("");
    const [Addr2, setAddr2] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Pincode, setPincode] = useState("");
    const [allcity, setallcity] = useState([]);
    const [Custdata, setCustdata] = useState({});

    useEffect(() => {
        getdata()
    }, [])
    async function getdata() {
        console.log("hello")
        var resdata = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/customerbymobile/', {
            'mobile': '7038343454'
        });
        console.log('resdata is ', resdata.data)
        setCustdata(resdata.data.Customer)
    }


    // useEffect(() => {
    //     fun()
    //   }, [])

    function fun() {
        console.log("fun function call")




    }




    // Custdata.address="ABCD"
    console.log("Custdata = ", Custdata)
    // console.log("Custdata :-", Custdata.Customer.address)
    // async function submitHandler() {
    //     fun()
    //     console.log("SubmitClicked")

    //     var newdata = {
    //         address: Addr1 + ", " + Addr2,
    //         address1: City + ", " + State,
    //         Pincode: Pincode,
    //     }

    //     // let customerDataapi = {
    //     //     domainrecno: auth.state.info.domainRecno,
    //     //     languagerecno: 1,
    //     //     shortguid: uuid(),
    //     //     tenantrecno: 1,
    //     //     code: custData.mobile,
    //     //     mobile: custData.mobile,
    //     //     descn: custData.descn,
    //     //     mailid: custData.mailid,
    //     //     address: custData.address,
    //     //     address1: custData.address,
    //     //     pincode: custData.pincode,
    //     //     gstn: custData.gstn,
    //     //     aadhar: custData.aadhar,
    //     //     acountno: custData.acountno,
    //     //     ifsc: custData.ifsc,
    //     //     creditallowed: false,
    //     //   };

    //     console.log("newdata", newdata);
    //     // var senddataapi = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/customer/', newdata)

    // }


    const allstate = [{
        'state': 'Andhra Pradesh',
        'city': [
            'Adilabad',
            'Anantapur',
            'Chittoor',
            'Kakinada',
            'Guntur',
            'Hyderabad',
            'Karimnagar',
            'Khammam',
            'Krishna',
            'Kurnool',
            'Mahbubnagar',
            'Medak',
            'Nalgonda',
            'Nizamabad',
            'Ongole',
            'Hyderabad',
            'Srikakulam',
            'Nellore',
            'Visakhapatnam',
            'Vizianagaram',
            'Warangal',
            'Eluru',
            'Kadapa',
        ]
    },
    {
        'state': 'Arunachal Pradesh',
        'city': [
            'Anjaw',
            'Changlang',
            'East Siang',
            'Kurung Kumey',
            'Lohit',
            'Lower Dibang Valley',
            'Lower Subansiri',
            'Papum Pare',
            'Tawang',
            'Tirap',
            'Dibang Valley',
            'Upper Siang',
            'Upper Subansiri',
            'West Kameng',
            'West Siang',
        ]
    },
    {
        'state': 'Assam',
        'city': [
            'Baksa',
            'Barpeta',
            'Bongaigaon',
            'Cachar',
            'Chirang',
            'Darrang',
            'Dhemaji',
            'Dima Hasao',
            'Dhubri',
            'Dibrugarh',
            'Goalpara',
            'Golaghat',
            'Hailakandi',
            'Jorhat',
            'Kamrup',
            'Kamrup Metropolitan',
            'Karbi Anglong',
            'Karimganj',
            'Kokrajhar',
            'Lakhimpur',
            'Marigaon',
            'Nagaon',
            'Nalbari',
            'Sibsagar',
            'Sonitpur',
            'Tinsukia',
            'Udalguri',
        ]
    },
    {
        'state': 'Bihar',
        'city': [
            'Araria',
            'Arwal',
            'Aurangabad',
            'Banka',
            'Begusarai',
            'Bhagalpur',
            'Bhojpur',
            'Buxar',
            'Darbhanga',
            'East Champaran',
            'Gaya',
            'Gopalganj',
            'Jamui',
            'Jehanabad',
            'Kaimur',
            'Katihar',
            'Khagaria',
            'Kishanganj',
            'Lakhisarai',
            'Madhepura',
            'Madhubani',
            'Munger',
            'Muzaffarpur',
            'Nalanda',
            'Nawada',
            'Patna',
            'Purnia',
            'Rohtas',
            'Saharsa',
            'Samastipur',
            'Saran',
            'Sheikhpura',
            'Sheohar',
            'Sitamarhi',
            'Siwan',
            'Supaul',
            'Vaishali',
            'West Champaran',
            'Chandigarh',
        ]
    },
    {
        'state': 'Chhattisgarh',
        'city': [
            'Bastar',
            'Bijapur',
            'Bilaspur',
            'Dantewada',
            'Dhamtari',
            'Durg',
            'Jashpur',
            'Janjgir-Champa',
            'Korba',
            'Koriya',
            'Kanker',
            'Kabirdham (Kawardha)',
            'Mahasamund',
            'Narayanpur',
            'Raigarh',
            'Rajnandgaon',
            'Raipur',
            'Surguja',
        ]
    },
    {
        'state': 'Delhi',
        'city': [
            'Central Delhi',
            'East Delhi',
            'New Delhi',
            'North Delhi',
            'North East Delhi',
            'North West Delhi',
            'South Delhi',
            'South West Delhi',
            'West Delhi',
        ]
    },
    {
        'state': 'Goa',
        'city': [
            'North Goa',
            'South Goa'
        ]
    },
    {
        'state': 'Gujarat',
        'city': [
            'Ahmedabad',
            'Amreli district',
            'Anand',
            'Banaskantha',
            'Bharuch',
            'Bhavnagar',
            'Dahod',
            'The Dangs',
            'Gandhinagar',
            'Jamnagar',
            'Junagadh',
            'Kutch',
            'Kheda',
            'Mehsana',
            'Narmada',
            'Navsari',
            'Patan',
            'Panchmahal',
            'Porbandar',
            'Rajkot',
            'Sabarkantha',
            'Surendranagar',
            'Surat',
            'Vyara',
            'Vadodara',
            'Valsad',
        ]
    },
    {
        'state': 'Haryana',
        'city': [
            'Ambala',
            'Bhiwani',
            'Faridabad',
            'Fatehabad',
            'Gurgaon',
            'Hissar',
            'Jhajjar',
            'Jind',
            'Karnal',
            'Kaithal',
            'Kurukshetra',
            'Mahendragarh',
            'Mewat',
            'Palwal',
            'Panchkula',
            'Panipat',
            'Rewari',
            'Rohtak',
            'Sirsa',
            'Sonipat',
            'Yamuna Nagar',
        ]
    },
    {
        'state': 'Himachal Pradesh',
        'city': [
            'Bilaspur',
            'Chamba',
            'Hamirpur',
            'Kangra',
            'Kinnaur',
            'Kullu',
            'Lahaul and Spiti',
            'Mandi',
            'Shimla',
            'Sirmaur',
            'Solan',
            'Una',
        ]
    },
    {
        'state': 'Jammu and Kashmir',
        'city': [
            'Anantnag',
            'Badgam',
            'Bandipora',
            'Baramulla',
            'Doda',
            'Ganderbal',
            'Jammu',
            'Kargil',
            'Kathua',
            'Kishtwar',
            'Kupwara',
            'Kulgam',
            'Leh',
            'Poonch',
            'Pulwama',
            'Rajauri',
            'Ramban',
            'Reasi',
            'Samba',
            'Shopian',
            'Srinagar',
            'Udhampur',
        ]
    },
    {
        'state': 'Jharkhand',
        'city': [
            'Bokaro',
            'Chatra',
            'Deoghar',
            'Dhanbad',
            'Dumka',
            'East Singhbhum',
            'Garhwa',
            'Giridih',
            'Godda',
            'Gumla',
            'Hazaribag',
            'Jamtara',
            'Khunti',
            'Koderma',
            'Latehar',
            'Lohardaga',
            'Pakur',
            'Palamu',
            'Ramgarh',
            'Ranchi',
            'Sahibganj',
            'Seraikela Kharsawan',
            'Simdega',
            'West Singhbhum',
        ]
    },
    {
        'state': 'Karnataka',
        'city': [
            'Bagalkot',
            'Bangalore Rural',
            'Bangalore Urban',
            'Belgaum',
            'Bellary',
            'Bidar',
            'Bijapur',
            'Chamarajnagar',
            'Chikkamagaluru',
            'Chikkaballapur',
            'Chitradurga',
            'Davanagere',
            'Dharwad',
            'Dakshina Kannada',
            'Gadag',
            'Gulbarga',
            'Hassan',
            'Haveri district',
            'Kodagu',
            'Kolar',
            'Koppal',
            'Mandya',
            'Mysore',
            'Raichur',
            'Shimoga',
            'Tumkur',
            'Udupi',
            'Uttara Kannada',
            'Ramanagara',
            'Yadgir',
        ]
    },
    {
        'state': 'Kerala',
        'city': [
            'Alappuzha',
            'Ernakulam',
            'Idukki',
            'Kannur',
            'Kasaragod',
            'Kollam',
            'Kottayam',
            'Kozhikode',
            'Malappuram',
            'Palakkad',
            'Pathanamthitta',
            'Thrissur',
            'Thiruvananthapuram',
            'Wayanad',
        ]
    },
    {
        'state': 'Madhya Pradesh',
        'city': [
            'Alirajpur',
            'Anuppur',
            'Ashok Nagar',
            'Balaghat',
            'Barwani',
            'Betul',
            'Bhind',
            'Bhopal',
            'Burhanpur',
            'Chhatarpur',
            'Chhindwara',
            'Damoh',
            'Datia',
            'Dewas',
            'Dhar',
            'Dindori',
            'Guna',
            'Gwalior',
            'Harda',
            'Hoshangabad',
            'Indore',
            'Jabalpur',
            'Jhabua',
            'Katni',
            'Khandwa (East Nimar)',
            'Khargone (West Nimar)',
            'Mandla',
            'Mandsaur',
            'Morena',
            'Narsinghpur',
            'Neemuch',
            'Panna',
            'Rewa',
            'Rajgarh',
            'Ratlam',
            'Raisen',
            'Sagar',
            'Satna',
            'Sehore',
            'Seoni',
            'Shahdol',
            'Shajapur',
            'Sheopur',
            'Shivpuri',
            'Sidhi',
            'Singrauli',
            'Tikamgarh',
            'Ujjain',
            'Umaria',
            'Vidisha',
        ]
    },

    {
        'state': 'Maharashtra',
        'city': [
            'Ahmednagar',
            'Akola',
            'Amravati',
            'Aurangabad',
            'Bhandara',
            'Beed',
            'Buldhana',
            'Chandrapur',
            'Dhule',
            'Gadchiroli',
            'Gondia',
            'Hingoli',
            'Jalgaon',
            'Jalna',
            'Kolhapur',
            'Latur',
            'Mumbai City',
            'Mumbai suburban',
            'Nandurbar',
            'Nanded',
            'Nagpur',
            'Nashik',
            'Osmanabad',
            'Parbhani',
            'Pune',
            'Raigad',
            'Ratnagiri',
            'Sindhudurg',
            'Sangli',
            'Solapur',
            'Satara',
            'Thane',
            'Wardha',
            'Washim',
            'Yavatmal',
        ]
    },
    {
        'state': 'Manipur',
        'city': [
            'Bishnupur',
            'Churachandpur',
            'Chandel',
            'Imphal East',
            'Senapati',
            'Tamenglong',
            'Thoubal',
            'Ukhrul',
            'Imphal West',
        ]
    },
    {
        'state': 'Meghalaya',
        'city': [
            'East Garo Hills',
            'East Khasi Hills',
            'Jaintia Hills',
            'Ri Bhoi',
            'South Garo Hills',
            'West Garo Hills',
            'West Khasi Hills',
        ]
    },

    {
        'state': 'Mizoram',
        'city': [
            'Aizawl',
            'Champhai',
            'Kolasib',
            'Lawngtlai',
            'Lunglei',
            'Mamit',
            'Saiha',
            'Serchhip',
        ]
    },
    {
        'state': 'Nagaland',
        'city': [
            'Dimapur',
            'Kohima',
            'Mokokchung',
            'Mon',
            'Phek',
            'Tuensang',
            'Wokha',
            'Zunheboto',
        ]
    },
    {
        'state': 'Orissa',
        'city': [
            'Angul',
            'Boudh (Bauda)',
            'Bhadrak',
            'Balangir',
            'Bargarh (Baragarh)',
            'Balasore',
            'Cuttack',
            'Debagarh (Deogarh)',
            'Dhenkanal',
            'Ganjam',
            'Gajapati',
            'Jharsuguda',
            'Jajpur',
            'Jagatsinghpur',
            'Khordha',
            'Kendujhar (Keonjhar)',
            'Kalahandi',
            'Kandhamal',
            'Koraput',
            'Kendrapara',
            'Malkangiri',
            'Mayurbhanj',
            'Nabarangpur',
            'Nuapada',
            'Nayagarh',
            'Puri',
            'Rayagada',
            'Sambalpur',
            'Subarnapur (Sonepur)',
            'Sundergarh',
        ]
    },
    {
        'state': 'Pondicherry',
        'city': [
            'Karaikal',
            'Mahe',
            'Pondicherry',
            'Yanam',
        ]
    },
    {
        'state': 'Punjab',
        'city': [
            'Amritsar',
            'Barnala',
            'Bathinda',
            'Firozpur',
            'Faridkot',
            'Fatehgarh Sahib',
            'Fazilka',
            'Gurdaspur',
            'Hoshiarpur',
            'Jalandhar',
            'Kapurthala',
            'Ludhiana',
            'Mansa',
            'Moga',
            'Sri Muktsar Sahib',
            'Pathankot',
            'Patiala',
            'Rupnagar',
            'Ajitgarh (Mohali)',
            'Sangrur',
            'Nawanshahr',
            'Tarn Taran',
        ]
    },

    {
        'state': 'Rajasthan',
        'city': [
            'Ajmer',
            'Alwar',
            'Bikaner',
            'Barmer',
            'Banswara',
            'Bharatpur',
            'Baran',
            'Bundi',
            'Bhilwara',
            'Churu',
            'Chittorgarh',
            'Dausa',
            'Dholpur',
            'Dungapur',
            'Ganganagar',
            'Hanumangarh',
            'Jhunjhunu',
            'Jalore',
            'Jodhpur',
            'Jaipur',
            'Jaisalmer',
            'Jhalawar',
            'Karauli',
            'Kota',
            'Nagaur',
            'Pali',
            'Pratapgarh',
            'Rajsamand',
            'Sikar',
            'Sawai Madhopur',
            'Sirohi',
            'Tonk',
            'Udaipur',
        ]
    },
    {
        'state': 'Sikkim',
        'city': [
            'East Sikkim',
            'North Sikkim',
            'South Sikkim',
            'West Sikkim',
        ]
    },

    {
        'state': 'Tamil Nadu',
        'city': [
            'Ariyalur',
            'Chennai',
            'Coimbatore',
            'Cuddalore',
            'Dharmapuri',
            'Dindigul',
            'Erode',
            'Kanchipuram',
            'Kanyakumari',
            'Karur',
            'Madurai',
            'Nagapattinam',
            'Nilgiris',
            'Namakkal',
            'Perambalur',
            'Pudukkottai',
            'Ramanathapuram',
            'Salem',
            'Sivaganga',
            'Tirupur',
            'Tiruchirappalli',
            'Theni',
            'Tirunelveli',
            'Thanjavur',
            'Thoothukudi',
            'Tiruvallur',
            'Tiruvarur',
            'Tiruvannamalai',
            'Vellore',
            'Viluppuram',
            'Virudhunagar',
        ]
    },

    {
        'state': 'Tripura',
        'city': [
            'Dhalai',
            'North Tripura',
            'South Tripura',
            'Khowai',
            'West Tripura',
        ]
    },
    {
        'state': 'Uttar Pradesh',
        'city': [
            'Agra',
            'Allahabad',
            'Aligarh',
            'Ambedkar Nagar',
            'Auraiya',
            'Azamgarh',
            'Barabanki',
            'Budaun',
            'Bagpat',
            'Bahraich',
            'Bijnor',
            'Ballia',
            'Banda',
            'Balrampur',
            'Bareilly',
            'Basti',
            'Bulandshahr',
            'Chandauli',
            'Chhatrapati Shahuji Maharaj Nagar',
            'Chitrakoot',
            'Deoria',
            'Etah',
            'Kanshi Ram Nagar',
            'Etawah',
            'Firozabad',
            'Farrukhabad',
            'Fatehpur',
            'Faizabad',
            'Gautam Buddh Nagar',
            'Gonda',
            'Ghazipur',
            'Gorakhpur',
            'Ghaziabad',
            'Hamirpur',
            'Hardoi',
            'Mahamaya Nagar',
            'Jhansi',
            'Jalaun',
            'Jyotiba Phule Nagar',
            'Jaunpur district',
            'Ramabai Nagar (Kanpur Dehat)',
            'Kannauj',
            'Kanpur',
            'Kaushambi',
            'Kushinagar',
            'Lalitpur',
            'Lakhimpur Kheri',
            'Lucknow',
            'Mau',
            'Meerut',
            'Maharajganj',
            'Mahoba',
            'Mirzapur',
            'Moradabad',
            'Mainpuri',
            'Mathura',
            'Muzaffarnagar',
            'Panchsheel Nagar district (Hapur)',
            'Pilibhit',
            'Shamli',
            'Pratapgarh',
            'Rampur',
            'Raebareli',
            'Saharanpur',
            'Sitapur',
            'Shahjahanpur',
            'Sant Kabir Nagar',
            'Siddharthnagar',
            'Sonbhadra',
            'Sant Ravidas Nagar',
            'Sultanpur',
            'Shravasti',
            'Unnao',
            'Varanasi',
        ]
    },
    {
        'state': 'Uttarakhand',
        'city': [
            'Almora',
            'Bageshwar',
            'Chamoli',
            'Champawat',
            'Dehradun',
            'Haridwar',
            'Nainital',
            'Pauri Garhwal',
            'Pithoragarh',
            'Rudraprayag',
            'Tehri Garhwal',
            'Udham Singh Nagar',
            'Uttarkashi',
        ]
    },

    {
        'state': 'West Bengal',
        'city': [
            'Birbhum',
            'Bankura',
            'Bardhaman',
            'Darjeeling',
            'Dakshin Dinajpur',
            'Hooghly',
            'Howrah',
            'Jalpaiguri',
            'Cooch Behar',
            'Kolkata',
            'Maldah',
            'Paschim Medinipur',
            'Purba Medinipur',
            'Murshidabad',
            'Nadia',
            'North 24 Parganas',
            'South 24 Parganas',
            'Purulia',
            'Uttar Dinajpur',
        ]
    },
    ]




    useEffect(() => {
        getcity()
    }, [State])


    function getcity() {

        var citydropdown = allstate.filter(itm => (itm.state == State))
        // console.log("citydropdown",citydropdown[0].city)
        if (citydropdown.length > 0) {
            setallcity(citydropdown[0].city)
        }
    }


    async function UpdateAdd(newdata) {


        var senddataapi = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/updatebyaddress/', newdata)
        console.log("senddataapi", senddataapi.data)
        navigation.navigate('Profile');

    }


    async function submitHandler() {
        fun();
        console.log("SubmitClicked")

        // var newdata = {
        //     address: Addr1 + ", " + Addr2,
        //     address1: City + ", " + State,
        //     Pincode: Pincode,

        // }
        // console.log("newdata = ",newdata);




        setCustdata(prev => {
            var newdata = prev

            newdata.address = Addr1 + ", " + Addr2,
                newdata.address1 = City + ", " + State,
                newdata.pincode = Pincode
            newdata.mobile = "7038343454"

            // var senddataapi = axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/updatebyaddress/', newdata)
            // console.log("senddataapi", senddataapi.data)
            UpdateAdd(newdata)

            console.log("newdata", newdata)

            return { ...newdata }
        })




    }



    return (
        <View style={styles.inner}>


            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Address Line 1 :</Text>
                <TextInput placeholder=" Address Line 1"
                    style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
                    onChangeText={text => {
                        setAddr1(text)
                    }}
                />

            </View>



            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Address Line 2 :</Text>
                <TextInput placeholder=" Address Line 2"
                    style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
                    onChangeText={text => {
                        setAddr2(text)
                    }}
                />
            </View>


            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Pincode :</Text>
                <TextInput placeholder=" Pincode"
                    style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
                    onChangeText={text => {
                        setPincode(text)
                        console.log(Pincode)
                    }}
                />
            </View>







            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>State :</Text>
                </View>
                {/* <TextInput placeholder="State"
                    style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
                    onChangeText={text => {
                        setState(text)
                    }}
                /> */}


                <View style={{ flex: 1 }}>

                    <Picker
                        selectedValue={State}
                        onValueChange={(itemValue, itemIndex) =>
                            setState(itemValue)
                        }>

                        {/*                         
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" /> */}

                        {allstate.map((item) => {
                            return (
                                <Picker.Item label={item.state} value={item.state} />

                            )

                        })}
                    </Picker>
                </View>


            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>City :</Text>
                {/* <TextInput placeholder="City"
                    style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
                    onChangeText={text => {
                        setCity(text)
                    }}
                /> */}

                <View style={{ flex: 1 }}>

                    <Picker
                        selectedValue={City}
                        onValueChange={(itemValue, itemIndex) =>
                            setCity(itemValue)
                        }>
                        {/* {allstate
                            .filter(i => i.state == State)[0].city
                            .map(j => {
                                <Picker.Item label={j} value={j} />

                            })

                        } */}

                        {allcity.map((item) => {
                            return (
                                <Picker.Item label={item} value={item} />

                            )

                        })}

                        {/* {
                            allstate.map((item) => {
                                return (
                                    <Picker.Item label={item.state} value={item.state} />

                                )

                            })
                        } */}


                        {/* <Picker.Item label="Java" value="java" />
<Picker.Item label="JavaScript" value="js" />  */}



                        {/* {allcitydata.map((item) => {
                            return (
                                <Picker.Item label={item} value={item} />

                            )

                        })} */}
                    </Picker>
                </View>

            </View>

            <View style={styles.space}>

                <Button


                    title='Submit' onPress={submitHandler}

                />

            </View>

        </View>
    )
}

export default UpdateAddress


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 12,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 7,
        textAlign: 'center',
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
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    }
});





// import React, { useState, useEffect } from 'react'
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
// import axios from 'axios';
// import Allcity from './Allcity';
// import { Picker } from '@react-native-picker/picker';


// const UpdateAddress = ({ navigation, route }) => {
//     const { setFinalAddr } = route.params
//     const [Addr1, setAddr1] = useState("");
//     const [Addr2, setAddr2] = useState("");
//     const [City, setCity] = useState("");
//     const [State, setState] = useState("");
//     const [Pincode, setPincode] = useState("");
//     const [allcity, setallcity] = useState([]);
//     const [Custdata, setCustdata] = useState({})

//     useEffect(() => {
//         getdata()
//     }, [])
//     async function getdata() {
//         console.log("hello")
//         var resdata = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/updatebyaddress/', {
//             'mobile': '8237487914'
//         });
//         console.log('resdata is ', resdata.data)
//         setCustdata(resdata.data.Customer)
//     }
//    async function senData() {

//    }

//     // useEffect(() => {
//     //     fun()
//     //   }, [])

//     function fun() {
//         console.log("fun function call")




//     }




//     // Custdata.address="ABCD"
//     console.log("Custdata = ", Custdata)
//     // console.log("Custdata :-", Custdata.Customer.address)
//     // async function submitHandler() {
//     //     fun()
//     //     console.log("SubmitClicked")

//     //     var newdata = {
//     //         address: Addr1 + ", " + Addr2,
//     //         address1: City + ", " + State,
//     //         Pincode: Pincode,
//     //     }

//     //     // let customerDataapi = {
//     //     //     domainrecno: auth.state.info.domainRecno,
//     //     //     languagerecno: 1,
//     //     //     shortguid: uuid(),
//     //     //     tenantrecno: 1,
//     //     //     code: custData.mobile,
//     //     //     mobile: custData.mobile,
//     //     //     descn: custData.descn,
//     //     //     mailid: custData.mailid,
//     //     //     address: custData.address,
//     //     //     address1: custData.address,
//     //     //     pincode: custData.pincode,
//     //     //     gstn: custData.gstn,
//     //     //     aadhar: custData.aadhar,
//     //     //     acountno: custData.acountno,
//     //     //     ifsc: custData.ifsc,
//     //     //     creditallowed: false,
//     //     //   };

//     //     console.log("newdata", newdata);
//     //     // var senddataapi = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/customer/', newdata)

//     // }


//     const allstate = [{
//         'state': 'Andhra Pradesh',
//         'city': [
//             'Adilabad',
//             'Anantapur',
//             'Chittoor',
//             'Kakinada',
//             'Guntur',
//             'Hyderabad',
//             'Karimnagar',
//             'Khammam',
//             'Krishna',
//             'Kurnool',
//             'Mahbubnagar',
//             'Medak',
//             'Nalgonda',
//             'Nizamabad',
//             'Ongole',
//             'Hyderabad',
//             'Srikakulam',
//             'Nellore',
//             'Visakhapatnam',
//             'Vizianagaram',
//             'Warangal',
//             'Eluru',
//             'Kadapa',
//         ]
//     },
//     {
//         'state': 'Arunachal Pradesh',
//         'city': [
//             'Anjaw',
//             'Changlang',
//             'East Siang',
//             'Kurung Kumey',
//             'Lohit',
//             'Lower Dibang Valley',
//             'Lower Subansiri',
//             'Papum Pare',
//             'Tawang',
//             'Tirap',
//             'Dibang Valley',
//             'Upper Siang',
//             'Upper Subansiri',
//             'West Kameng',
//             'West Siang',
//         ]
//     },
//     {
//         'state': 'Assam',
//         'city': [
//             'Baksa',
//             'Barpeta',
//             'Bongaigaon',
//             'Cachar',
//             'Chirang',
//             'Darrang',
//             'Dhemaji',
//             'Dima Hasao',
//             'Dhubri',
//             'Dibrugarh',
//             'Goalpara',
//             'Golaghat',
//             'Hailakandi',
//             'Jorhat',
//             'Kamrup',
//             'Kamrup Metropolitan',
//             'Karbi Anglong',
//             'Karimganj',
//             'Kokrajhar',
//             'Lakhimpur',
//             'Marigaon',
//             'Nagaon',
//             'Nalbari',
//             'Sibsagar',
//             'Sonitpur',
//             'Tinsukia',
//             'Udalguri',
//         ]
//     },
//     {
//         'state': 'Bihar',
//         'city': [
//             'Araria',
//             'Arwal',
//             'Aurangabad',
//             'Banka',
//             'Begusarai',
//             'Bhagalpur',
//             'Bhojpur',
//             'Buxar',
//             'Darbhanga',
//             'East Champaran',
//             'Gaya',
//             'Gopalganj',
//             'Jamui',
//             'Jehanabad',
//             'Kaimur',
//             'Katihar',
//             'Khagaria',
//             'Kishanganj',
//             'Lakhisarai',
//             'Madhepura',
//             'Madhubani',
//             'Munger',
//             'Muzaffarpur',
//             'Nalanda',
//             'Nawada',
//             'Patna',
//             'Purnia',
//             'Rohtas',
//             'Saharsa',
//             'Samastipur',
//             'Saran',
//             'Sheikhpura',
//             'Sheohar',
//             'Sitamarhi',
//             'Siwan',
//             'Supaul',
//             'Vaishali',
//             'West Champaran',
//             'Chandigarh',
//         ]
//     },
//     {
//         'state': 'Chhattisgarh',
//         'city': [
//             'Bastar',
//             'Bijapur',
//             'Bilaspur',
//             'Dantewada',
//             'Dhamtari',
//             'Durg',
//             'Jashpur',
//             'Janjgir-Champa',
//             'Korba',
//             'Koriya',
//             'Kanker',
//             'Kabirdham (Kawardha)',
//             'Mahasamund',
//             'Narayanpur',
//             'Raigarh',
//             'Rajnandgaon',
//             'Raipur',
//             'Surguja',
//         ]
//     },
//     {
//         'state': 'Delhi',
//         'city': [
//             'Central Delhi',
//             'East Delhi',
//             'New Delhi',
//             'North Delhi',
//             'North East Delhi',
//             'North West Delhi',
//             'South Delhi',
//             'South West Delhi',
//             'West Delhi',
//         ]
//     },
//     {
//         'state': 'Goa',
//         'city': [
//             'North Goa',
//             'South Goa'
//         ]
//     },
//     {
//         'state': 'Gujarat',
//         'city': [
//             'Ahmedabad',
//             'Amreli district',
//             'Anand',
//             'Banaskantha',
//             'Bharuch',
//             'Bhavnagar',
//             'Dahod',
//             'The Dangs',
//             'Gandhinagar',
//             'Jamnagar',
//             'Junagadh',
//             'Kutch',
//             'Kheda',
//             'Mehsana',
//             'Narmada',
//             'Navsari',
//             'Patan',
//             'Panchmahal',
//             'Porbandar',
//             'Rajkot',
//             'Sabarkantha',
//             'Surendranagar',
//             'Surat',
//             'Vyara',
//             'Vadodara',
//             'Valsad',
//         ]
//     },
//     {
//         'state': 'Haryana',
//         'city': [
//             'Ambala',
//             'Bhiwani',
//             'Faridabad',
//             'Fatehabad',
//             'Gurgaon',
//             'Hissar',
//             'Jhajjar',
//             'Jind',
//             'Karnal',
//             'Kaithal',
//             'Kurukshetra',
//             'Mahendragarh',
//             'Mewat',
//             'Palwal',
//             'Panchkula',
//             'Panipat',
//             'Rewari',
//             'Rohtak',
//             'Sirsa',
//             'Sonipat',
//             'Yamuna Nagar',
//         ]
//     },
//     {
//         'state': 'Himachal Pradesh',
//         'city': [
//             'Bilaspur',
//             'Chamba',
//             'Hamirpur',
//             'Kangra',
//             'Kinnaur',
//             'Kullu',
//             'Lahaul and Spiti',
//             'Mandi',
//             'Shimla',
//             'Sirmaur',
//             'Solan',
//             'Una',
//         ]
//     },
//     {
//         'state': 'Jammu and Kashmir',
//         'city': [
//             'Anantnag',
//             'Badgam',
//             'Bandipora',
//             'Baramulla',
//             'Doda',
//             'Ganderbal',
//             'Jammu',
//             'Kargil',
//             'Kathua',
//             'Kishtwar',
//             'Kupwara',
//             'Kulgam',
//             'Leh',
//             'Poonch',
//             'Pulwama',
//             'Rajauri',
//             'Ramban',
//             'Reasi',
//             'Samba',
//             'Shopian',
//             'Srinagar',
//             'Udhampur',
//         ]
//     },
//     {
//         'state': 'Jharkhand',
//         'city': [
//             'Bokaro',
//             'Chatra',
//             'Deoghar',
//             'Dhanbad',
//             'Dumka',
//             'East Singhbhum',
//             'Garhwa',
//             'Giridih',
//             'Godda',
//             'Gumla',
//             'Hazaribag',
//             'Jamtara',
//             'Khunti',
//             'Koderma',
//             'Latehar',
//             'Lohardaga',
//             'Pakur',
//             'Palamu',
//             'Ramgarh',
//             'Ranchi',
//             'Sahibganj',
//             'Seraikela Kharsawan',
//             'Simdega',
//             'West Singhbhum',
//         ]
//     },
//     {
//         'state': 'Karnataka',
//         'city': [
//             'Bagalkot',
//             'Bangalore Rural',
//             'Bangalore Urban',
//             'Belgaum',
//             'Bellary',
//             'Bidar',
//             'Bijapur',
//             'Chamarajnagar',
//             'Chikkamagaluru',
//             'Chikkaballapur',
//             'Chitradurga',
//             'Davanagere',
//             'Dharwad',
//             'Dakshina Kannada',
//             'Gadag',
//             'Gulbarga',
//             'Hassan',
//             'Haveri district',
//             'Kodagu',
//             'Kolar',
//             'Koppal',
//             'Mandya',
//             'Mysore',
//             'Raichur',
//             'Shimoga',
//             'Tumkur',
//             'Udupi',
//             'Uttara Kannada',
//             'Ramanagara',
//             'Yadgir',
//         ]
//     },
//     {
//         'state': 'Kerala',
//         'city': [
//             'Alappuzha',
//             'Ernakulam',
//             'Idukki',
//             'Kannur',
//             'Kasaragod',
//             'Kollam',
//             'Kottayam',
//             'Kozhikode',
//             'Malappuram',
//             'Palakkad',
//             'Pathanamthitta',
//             'Thrissur',
//             'Thiruvananthapuram',
//             'Wayanad',
//         ]
//     },
//     {
//         'state': 'Madhya Pradesh',
//         'city': [
//             'Alirajpur',
//             'Anuppur',
//             'Ashok Nagar',
//             'Balaghat',
//             'Barwani',
//             'Betul',
//             'Bhind',
//             'Bhopal',
//             'Burhanpur',
//             'Chhatarpur',
//             'Chhindwara',
//             'Damoh',
//             'Datia',
//             'Dewas',
//             'Dhar',
//             'Dindori',
//             'Guna',
//             'Gwalior',
//             'Harda',
//             'Hoshangabad',
//             'Indore',
//             'Jabalpur',
//             'Jhabua',
//             'Katni',
//             'Khandwa (East Nimar)',
//             'Khargone (West Nimar)',
//             'Mandla',
//             'Mandsaur',
//             'Morena',
//             'Narsinghpur',
//             'Neemuch',
//             'Panna',
//             'Rewa',
//             'Rajgarh',
//             'Ratlam',
//             'Raisen',
//             'Sagar',
//             'Satna',
//             'Sehore',
//             'Seoni',
//             'Shahdol',
//             'Shajapur',
//             'Sheopur',
//             'Shivpuri',
//             'Sidhi',
//             'Singrauli',
//             'Tikamgarh',
//             'Ujjain',
//             'Umaria',
//             'Vidisha',
//         ]
//     },

//     {
//         'state': 'Maharashtra',
//         'city': [
//             'Ahmednagar',
//             'Akola',
//             'Amravati',
//             'Aurangabad',
//             'Bhandara',
//             'Beed',
//             'Buldhana',
//             'Chandrapur',
//             'Dhule',
//             'Gadchiroli',
//             'Gondia',
//             'Hingoli',
//             'Jalgaon',
//             'Jalna',
//             'Kolhapur',
//             'Latur',
//             'Mumbai City',
//             'Mumbai suburban',
//             'Nandurbar',
//             'Nanded',
//             'Nagpur',
//             'Nashik',
//             'Osmanabad',
//             'Parbhani',
//             'Pune',
//             'Raigad',
//             'Ratnagiri',
//             'Sindhudurg',
//             'Sangli',
//             'Solapur',
//             'Satara',
//             'Thane',
//             'Wardha',
//             'Washim',
//             'Yavatmal',
//         ]
//     },
//     {
//         'state': 'Manipur',
//         'city': [
//             'Bishnupur',
//             'Churachandpur',
//             'Chandel',
//             'Imphal East',
//             'Senapati',
//             'Tamenglong',
//             'Thoubal',
//             'Ukhrul',
//             'Imphal West',
//         ]
//     },
//     {
//         'state': 'Meghalaya',
//         'city': [
//             'East Garo Hills',
//             'East Khasi Hills',
//             'Jaintia Hills',
//             'Ri Bhoi',
//             'South Garo Hills',
//             'West Garo Hills',
//             'West Khasi Hills',
//         ]
//     },

//     {
//         'state': 'Mizoram',
//         'city': [
//             'Aizawl',
//             'Champhai',
//             'Kolasib',
//             'Lawngtlai',
//             'Lunglei',
//             'Mamit',
//             'Saiha',
//             'Serchhip',
//         ]
//     },
//     {
//         'state': 'Nagaland',
//         'city': [
//             'Dimapur',
//             'Kohima',
//             'Mokokchung',
//             'Mon',
//             'Phek',
//             'Tuensang',
//             'Wokha',
//             'Zunheboto',
//         ]
//     },
//     {
//         'state': 'Orissa',
//         'city': [
//             'Angul',
//             'Boudh (Bauda)',
//             'Bhadrak',
//             'Balangir',
//             'Bargarh (Baragarh)',
//             'Balasore',
//             'Cuttack',
//             'Debagarh (Deogarh)',
//             'Dhenkanal',
//             'Ganjam',
//             'Gajapati',
//             'Jharsuguda',
//             'Jajpur',
//             'Jagatsinghpur',
//             'Khordha',
//             'Kendujhar (Keonjhar)',
//             'Kalahandi',
//             'Kandhamal',
//             'Koraput',
//             'Kendrapara',
//             'Malkangiri',
//             'Mayurbhanj',
//             'Nabarangpur',
//             'Nuapada',
//             'Nayagarh',
//             'Puri',
//             'Rayagada',
//             'Sambalpur',
//             'Subarnapur (Sonepur)',
//             'Sundergarh',
//         ]
//     },
//     {
//         'state': 'Pondicherry',
//         'city': [
//             'Karaikal',
//             'Mahe',
//             'Pondicherry',
//             'Yanam',
//         ]
//     },
//     {
//         'state': 'Punjab',
//         'city': [
//             'Amritsar',
//             'Barnala',
//             'Bathinda',
//             'Firozpur',
//             'Faridkot',
//             'Fatehgarh Sahib',
//             'Fazilka',
//             'Gurdaspur',
//             'Hoshiarpur',
//             'Jalandhar',
//             'Kapurthala',
//             'Ludhiana',
//             'Mansa',
//             'Moga',
//             'Sri Muktsar Sahib',
//             'Pathankot',
//             'Patiala',
//             'Rupnagar',
//             'Ajitgarh (Mohali)',
//             'Sangrur',
//             'Nawanshahr',
//             'Tarn Taran',
//         ]
//     },

//     {
//         'state': 'Rajasthan',
//         'city': [
//             'Ajmer',
//             'Alwar',
//             'Bikaner',
//             'Barmer',
//             'Banswara',
//             'Bharatpur',
//             'Baran',
//             'Bundi',
//             'Bhilwara',
//             'Churu',
//             'Chittorgarh',
//             'Dausa',
//             'Dholpur',
//             'Dungapur',
//             'Ganganagar',
//             'Hanumangarh',
//             'Jhunjhunu',
//             'Jalore',
//             'Jodhpur',
//             'Jaipur',
//             'Jaisalmer',
//             'Jhalawar',
//             'Karauli',
//             'Kota',
//             'Nagaur',
//             'Pali',
//             'Pratapgarh',
//             'Rajsamand',
//             'Sikar',
//             'Sawai Madhopur',
//             'Sirohi',
//             'Tonk',
//             'Udaipur',
//         ]
//     },
//     {
//         'state': 'Sikkim',
//         'city': [
//             'East Sikkim',
//             'North Sikkim',
//             'South Sikkim',
//             'West Sikkim',
//         ]
//     },

//     {
//         'state': 'Tamil Nadu',
//         'city': [
//             'Ariyalur',
//             'Chennai',
//             'Coimbatore',
//             'Cuddalore',
//             'Dharmapuri',
//             'Dindigul',
//             'Erode',
//             'Kanchipuram',
//             'Kanyakumari',
//             'Karur',
//             'Madurai',
//             'Nagapattinam',
//             'Nilgiris',
//             'Namakkal',
//             'Perambalur',
//             'Pudukkottai',
//             'Ramanathapuram',
//             'Salem',
//             'Sivaganga',
//             'Tirupur',
//             'Tiruchirappalli',
//             'Theni',
//             'Tirunelveli',
//             'Thanjavur',
//             'Thoothukudi',
//             'Tiruvallur',
//             'Tiruvarur',
//             'Tiruvannamalai',
//             'Vellore',
//             'Viluppuram',
//             'Virudhunagar',
//         ]
//     },

//     {
//         'state': 'Tripura',
//         'city': [
//             'Dhalai',
//             'North Tripura',
//             'South Tripura',
//             'Khowai',
//             'West Tripura',
//         ]
//     },
//     {
//         'state': 'Uttar Pradesh',
//         'city': [
//             'Agra',
//             'Allahabad',
//             'Aligarh',
//             'Ambedkar Nagar',
//             'Auraiya',
//             'Azamgarh',
//             'Barabanki',
//             'Budaun',
//             'Bagpat',
//             'Bahraich',
//             'Bijnor',
//             'Ballia',
//             'Banda',
//             'Balrampur',
//             'Bareilly',
//             'Basti',
//             'Bulandshahr',
//             'Chandauli',
//             'Chhatrapati Shahuji Maharaj Nagar',
//             'Chitrakoot',
//             'Deoria',
//             'Etah',
//             'Kanshi Ram Nagar',
//             'Etawah',
//             'Firozabad',
//             'Farrukhabad',
//             'Fatehpur',
//             'Faizabad',
//             'Gautam Buddh Nagar',
//             'Gonda',
//             'Ghazipur',
//             'Gorakhpur',
//             'Ghaziabad',
//             'Hamirpur',
//             'Hardoi',
//             'Mahamaya Nagar',
//             'Jhansi',
//             'Jalaun',
//             'Jyotiba Phule Nagar',
//             'Jaunpur district',
//             'Ramabai Nagar (Kanpur Dehat)',
//             'Kannauj',
//             'Kanpur',
//             'Kaushambi',
//             'Kushinagar',
//             'Lalitpur',
//             'Lakhimpur Kheri',
//             'Lucknow',
//             'Mau',
//             'Meerut',
//             'Maharajganj',
//             'Mahoba',
//             'Mirzapur',
//             'Moradabad',
//             'Mainpuri',
//             'Mathura',
//             'Muzaffarnagar',
//             'Panchsheel Nagar district (Hapur)',
//             'Pilibhit',
//             'Shamli',
//             'Pratapgarh',
//             'Rampur',
//             'Raebareli',
//             'Saharanpur',
//             'Sitapur',
//             'Shahjahanpur',
//             'Sant Kabir Nagar',
//             'Siddharthnagar',
//             'Sonbhadra',
//             'Sant Ravidas Nagar',
//             'Sultanpur',
//             'Shravasti',
//             'Unnao',
//             'Varanasi',
//         ]
//     },
//     {
//         'state': 'Uttarakhand',
//         'city': [
//             'Almora',
//             'Bageshwar',
//             'Chamoli',
//             'Champawat',
//             'Dehradun',
//             'Haridwar',
//             'Nainital',
//             'Pauri Garhwal',
//             'Pithoragarh',
//             'Rudraprayag',
//             'Tehri Garhwal',
//             'Udham Singh Nagar',
//             'Uttarkashi',
//         ]
//     },

//     {
//         'state': 'West Bengal',
//         'city': [
//             'Birbhum',
//             'Bankura',
//             'Bardhaman',
//             'Darjeeling',
//             'Dakshin Dinajpur',
//             'Hooghly',
//             'Howrah',
//             'Jalpaiguri',
//             'Cooch Behar',
//             'Kolkata',
//             'Maldah',
//             'Paschim Medinipur',
//             'Purba Medinipur',
//             'Murshidabad',
//             'Nadia',
//             'North 24 Parganas',
//             'South 24 Parganas',
//             'Purulia',
//             'Uttar Dinajpur',
//         ]
//     },
//     ]




//     useEffect(() => {
//         getcity()
//     }, [State])


//     function getcity() {

//         var citydropdown = allstate.filter(itm => (itm.state == State))
//         // console.log("citydropdown",citydropdown[0].city)
//         if (citydropdown.length > 0) {
//             setallcity(citydropdown[0].city)
//         }
//     }




// async function updatads(newdata){
//     var senddataapi = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/customer/', newdata)

// }


//     async function submitHandler() {
//         fun();
//         console.log("SubmitClicked")

//         // var newdata = {
//         //     address: Addr1 + ", " + Addr2,
//         //     address1: City + ", " + State,
//         //     Pincode: Pincode,

//         // }
//         // console.log("newdata = ",newdata);





//         setCustdata(prev => {
//             var newdata = prev

//             newdata.address = Addr1 + ", " + Addr2,
//                 newdata.address1 = City + ", " + State,
//                 newdata.pincode = Pincode
//   updatads(newdata)

//             console.log("senddataapi", senddataapi.data)

//             console.log("newdata", newdata)

//             return { ...newdata }
//         })



//         setFinalAddr(Addr1 + ", " + Addr2 + ", " + City + ", " + Pincode + ", " + State + " India")
//         navigation.navigate('Profile');
//     }



//     return (
//         <View style={styles.inner}>


//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Address Line 1 :</Text>
//                 <TextInput placeholder=" Address Line 1"
//                     style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
//                     onChangeText={text => {
//                         setAddr1(text)
//                     }}
//                 />

//             </View>



//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Address Line 2 :</Text>
//                 <TextInput placeholder=" Address Line 2"
//                     style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
//                     onChangeText={text => {
//                         setAddr2(text)
//                     }}
//                 />
//             </View>


//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>Pincode :</Text>
//                 <TextInput placeholder=" Pincode"
//                     style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
//                     onChangeText={text => {
//                         setPincode(text)
//                         console.log(Pincode)
//                     }}
//                 />
//             </View>







//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <View style={{ flex: 1 }}>

//                     <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>State :</Text>
//                 </View>
//                 {/* <TextInput placeholder="State"
//                     style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
//                     onChangeText={text => {
//                         setState(text)
//                     }}
//                 /> */}


//                 <View style={{ flex: 1 }}>

//                     <Picker
//                         selectedValue={State}
//                         onValueChange={(itemValue, itemIndex) =>
//                             setState(itemValue)
//                         }>

//                         {/*                         
//   <Picker.Item label="Java" value="java" />
//   <Picker.Item label="JavaScript" value="js" /> */}

//                         {allstate.map((item) => {
//                             return (
//                                 <Picker.Item label={item.state} value={item.state} />

//                             )

//                         })}
//                     </Picker>
//                 </View>


//             </View>

//             <View style={{ flex: 1, flexDirection: 'row' }}>

//                 <Text style={{ flex: 1, fontSize: 20, marginTop: 28, fontWeight: 'bold' }}>City :</Text>
//                 {/* <TextInput placeholder="City"
//                     style={{ flex: 1, borderBottomWidth: 1, color: 'black' }}
//                     onChangeText={text => {
//                         setCity(text)
//                     }}
//                 /> */}

//                 <View style={{ flex: 1 }}>

//                     <Picker
//                         selectedValue={City}
//                         onValueChange={(itemValue, itemIndex) =>
//                             setCity(itemValue)
//                         }>
//                         {/* {allstate
//                             .filter(i => i.state == State)[0].city
//                             .map(j => {
//                                 <Picker.Item label={j} value={j} />

//                             })

//                         } */}

//                         {allcity.map((item) => {
//                             return (
//                                 <Picker.Item label={item} value={item} />

//                             )

//                         })}

//                         {/* {
//                             allstate.map((item) => {
//                                 return (
//                                     <Picker.Item label={item.state} value={item.state} />

//                                 )

//                             })
//                         } */}


//                         {/* <Picker.Item label="Java" value="java" />
// <Picker.Item label="JavaScript" value="js" />  */}



//                         {/* {allcitydata.map((item) => {
//                             return (
//                                 <Picker.Item label={item} value={item} />

//                             )

//                         })} */}
//                     </Picker>
//                 </View>

//             </View>

//             <View style={styles.space}>

//                 <Button


//                     title='Submit' onPress={submitHandler}

//                 />

//             </View>

//         </View>
//     )
// }

// export default UpdateAddress


// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     inner: {
//         padding: 24,
//         flex: 12,
//         justifyContent: "space-around"
//     },
//     header: {
//         fontSize: 36,
//         marginBottom: 7,
//         textAlign: 'center',
//     },
//     textInput: {
//         marginLeft: 105,
//         height: 40,
//         borderColor: "#000000",
//         borderBottomWidth: 1,
//         marginBottom: 48
//     },
//     btnContainer: {
//         flex: 1,
//         backgroundColor: "white",
//         marginTop: 12,
//         flexDirection: 'row',
//     },
//     space: {
//         flex: 1,
//         marginHorizontal: 10,


//     },
//     textAlignment:
//     {
//         marginBottom: 4,
//         fontSize: 19,
//         fontWeight: "bold",
//         marginTop: 28
//     },
//     navigationContainer: {
//         backgroundColor: "#ecf0f1"
//     },
//     textArea: {
//         height: 150,
//         justifyContent: "flex-start"
//     }
// });




