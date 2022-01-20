import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Pie from 'react-native-pie';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
};

const AddFunds2 = ({ route, navigation }) => {
    const {
        emergingStock,
        sukuk,
        commodities,
        greenSukuk,
        globalStock,
        greenProduct,
        portName,
        income,
        invested,
        purpose,
        age,
        pack,
        port,
        u_id,
        fund,
        commoditiesPercent,
        greenSukukPercent,
        sukukPercent,
        emergingStockPercent,
        globalStockPercent,
    } = route.params;

    const pushingData = () => {
        navigation.navigate('Payment', {
            emergingStock: emergingStock,
            sukuk: sukuk,
            commodities: commodities,
            greenSukuk: greenSukuk,
            globalStock: globalStock,
            greenProduct: greenProduct,
            portName: portName,
            income: income,
            invested: invested,
            purpose: purpose,
            age: age,
            pack: pack,
            port: port,
            u_id: u_id,
            fund: fund,
            commoditiesPercent: commoditiesPercent,
            greenSukukPercent: greenSukukPercent,
            sukukPercent: sukukPercent,
            emergingStockPercent: emergingStockPercent,
            globalStockPercent: globalStockPercent,
        });
    }

    // each value represents a goal ring in Progress chart
    const dataPie = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    return (
        <View style={styles.container} >
            <View style={{ width: '100%', height: 60, flexDirection: 'row' }} >
                <View style={{ width: '20%', height: '100%', justifyContent: 'center' }} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >

                        <AntDesign name={"left"} size={20} color={'#B38748'} style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ width: '60%', height: '100%', justifyContent: 'center' }} >
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'OpenSans-Bold', textAlign: 'center' }} >
                        Add Funds
                    </Text>
                </View> */}
            </View>

            <ScrollView>


                <View style={{
                    width: '90%',
                    // padding: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 30,
                    marginBottom: 20,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderColor: '#BC982A',
                    marginTop: 30, elevation: 3, borderWidth: 1
                }} >

                    <View style={styles.infoContainer} >
                        <Text style={styles.infoText} >
                            Name Portfolio:
                        </Text>
                        <TextInput
                            style={{ borderBottomWidth: 2, borderColor: '#2D2A6C', color: '#2D2A6C' }}
                            placeholderTextColor='grey'
                            value={portName}
                            editable={false}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.infoContainer} >
                        <Text style={styles.infoText} >
                            Your Amount:
                        </Text>
                        <TextInput
                            style={{ borderBottomWidth: 2, borderColor: '#2D2A6C', color: '#2D2A6C' }}
                            placeholderTextColor='grey'
                            editable={false}
                            value={fund}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>
                <View>
                    <View style={{ width: '90%', alignSelf: 'center' }} >
                        {/* <ScrollView> */}
                        <View style={{ width: '49%', borderRadius: 20, alignItems: 'center',justifyContent:'center' }} >
                            <ProgressChart
                                data={data}
                                width={screenWidth}
                                height={220}
                                strokeWidth={16}
                                radius={32}
                                chartConfig={{
                                    backgroundColor: 'white',
                                    backgroundGradientFrom: '#fff',
                                    backgroundGradientTo: '#fff',
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgb(45, 45, 98,${opacity})`,
                                    labelColor: (opacity = 1) => `rgb(45, 45, 98, ${opacity})`,
                                    style: {
                                      borderRadius: 16,
                                    },
                                    propsForDots: {
                                      r: '7',
                                      strokeWidth: '0',
                                      stroke: 'white',
                                    },
                                  }}
                                hideLegend={false}
                            />
                            {/* <Pie
                                radius={80}
                                innerRadius={60}
                                sections={[
                                    {
                                        percentage: globalStockPercent,
                                        color: '#EDB462',
                                    },
                                    {
                                        percentage: emergingStockPercent,
                                        color: '#CE7672',
                                    },
                                    {
                                        percentage: sukukPercent,
                                        color: '#544767',
                                    },
                                    {
                                        percentage: greenSukukPercent,
                                        color: '#DC8565',
                                    },
                                    {
                                        percentage: commoditiesPercent,
                                        color: '#138085',
                                    },
                                ]} dividerSize={4}
                                strokeCap={'round'}
                            /> */}
                        </View>

                        <View style={{ width: '100%', height: 250, marginTop: 30, flexDirection: 'column', alignSelf: 'center' }} >
                            <View style={styles.stocksContainer} >
                                <View style={styles.stockName} >
                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#EDB462' }} >
                                        Global Stocks
                                    </Text>
                                </View>
                                <View style={styles.stockPrice} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {globalStock} AED
                                    </Text>
                                </View>
                                <View style={styles.stockPercent} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {globalStockPercent}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stocksContainer} >
                                <View style={styles.stockName} >
                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#CE7672' }} >
                                        Emerging Market Stocks
                                    </Text>
                                </View>
                                <View style={styles.stockPrice} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {emergingStock} AED
                                    </Text>
                                </View>
                                <View style={styles.stockPercent} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {emergingStockPercent}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stocksContainer} >
                                <View style={styles.stockName} >
                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#544767' }} >
                                        Sukuk
                                    </Text>
                                </View>
                                <View style={styles.stockPrice} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {sukuk} AED
                                    </Text>
                                </View>
                                <View style={styles.stockPercent} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {sukukPercent}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stocksContainer} >
                                <View style={styles.stockName} >
                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#138085' }} >
                                        Commodities
                                    </Text>
                                </View>
                                <View style={styles.stockPrice} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {commodities} AED
                                    </Text>
                                </View>
                                <View style={styles.stockPercent} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {commoditiesPercent}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stocksContainer}>
                                <View style={styles.stockName} >
                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#DC8565' }} >
                                        Green Sukuk
                                    </Text>
                                </View>
                                <View style={styles.stockPrice} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {greenSukuk} AED
                                    </Text>
                                </View>
                                <View style={styles.stockPercent} >
                                    <Text numberOfLines={1} style={styles.stockText}>
                                        {greenSukukPercent}%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ width: '100%', height: 40, position: 'absolute', bottom: 0, justifyContent: 'center' }} >
                <TouchableOpacity
                    onPress={() =>
                        pushingData()}
                >
                    <Image source={require('../Assets/buttom.png')} style={{ width: 113, height: 36, alignSelf: 'center' }} />
                    {/* <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', color: '#fff', textAlign: 'center' }} >
                        Continue
                    </Text> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddFunds2


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    containerInner: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    stocksContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row'
    },
    stockName: {
        width: '55%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: "column"
    },
    stockPrice: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: "column"
    },
    stockPercent: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: "column"
    },
    stockText: {
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        color: 'black',
        textAlign: 'right'
    },
    infoContainer: {
        width: '100%',
        alignSelf: 'center',
        paddingBottom: 20,
        elevation: 20,
    },
    infoText: {
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
        color: '#BC982A'
    }
})