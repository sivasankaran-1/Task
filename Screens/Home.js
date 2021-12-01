import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Header />
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, alignItems: "center" }}>

                {/* <Text style={{ backgroundColor: "#fff", padding: 15, height: 50, justifyContent: "center", elevation: 5 }}> Siva</Text> */}
                <MaterialCommunityIcons name="sort-reverse-variant" color={"#00316E"} size={25} />
                <Searchbar
                    placeholder="Searchforproduct"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ width: 250, height: 45, borderWidth: 1, borderColor: "light-grey" }}
                />
                <MaterialCommunityIcons name="format-list-checkbox" color={"#00316E"} size={25} />




            </View>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    // horizontal={false}
                    height={200}
                    activeDotColor="#FF6347"

                >
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg',
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image

                            source={{
                                uri: 'https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg',
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-facebookJumbo-v2.jpg',
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />

                    </View>
                </Swiper>

            </View>
            <View style={styles.categoryContainer}>

                <TouchableOpacity
                    style={styles.categoryBtn}
                >
                    <View style={styles.categoryIcon}>
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: 'https://img1.exportersindia.com/product_images/bc-full/2018/7/5697232/fresh-vegetables-1532674328-4142072.jpeg',
                            }}
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Vegetable</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                >
                    <View style={styles.categoryIcon}>
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: 'https://www.afproduce.com/wp-content/uploads/2018/08/fruits1.jpg',
                            }}
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} >
                    <View style={styles.categoryIcon}>
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: 'https://5.imimg.com/data5/WL/SN/MY-15590/meat-and-poultry-product-testing-500x500.png',
                            }}
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt} numberOfLines={1}>Meat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                >
                    <View style={styles.categoryIcon}>
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: 'https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg',
                            }}
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Seafood</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 18, color: '#00316E', fontWeight: 'bold', marginLeft: 20, marginTop: 15 }}>Today Grocerry Details</Text>
            <FlatList
                numColumns={3}
                data={[
                    { key: 'Pumpkin', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "1Kg", review: "255" }, { key: 'Sunflower Oil', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "3Kg", review: "120" }, { key: 'Cauliflower', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" },
                    { key: 'Cauliflower1', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" },
                    { key: 'Cauliflower2', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" },
                    { key: 'Cauliflower3', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" }


                ]}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: "#fff", flex: 1, elevation: 1, margin: 10 }}>
                        <View style={{ flexDirection: 'row', margin: 5, alignItems: "center" }}>
                            {/* <View style={{ flex: 0.5, backgroundColor: "#fff", padding: 20, justifyContent: 'center', alignItems: "center" }}>
                                <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                            </View> */}
                            <View style={{ flex: 3, backgroundColor: '#fff', marginLeft: 10, alignItems: 'center', justifyContent: "center" }}>
                                <MaterialCommunityIcons name="heart-outline" color={"grey"} size={20} style={{ alignSelf: "flex-end" }} />
                                <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                                <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>{item.key}</Text>

                                <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}><Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>$30</Text> $60</Text>
                            </View>
                        </View>




                    </View>

                }

            />

            <Image style={{ width: '100%', height: 150 }} source={{ uri: "https://freedesignfile.com/upload/2021/04/Delicious-burger-food-advertisement-vector.jpg" }} />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", flex: 1
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        // backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 8,
        color: '#00316E',
        fontWeight: 'bold'
    },
    sliderContainer: {
        height: 200,
        width: '95%',
        marginTop: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },



    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
})
