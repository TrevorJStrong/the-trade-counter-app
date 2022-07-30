import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native";
import { colours, fontSizes } from "../../../styleConstants";
import data from '../../json/stores.json';
import { RootStackParams } from "../../navigation";
import StoreCard from "./storeCard";

type Props = NativeStackScreenProps<RootStackParams, "Store">

const Stores = ({ navigation }: Props) => {
    return (
        <>
            <Text style={styles.title}>{data.stores.length} Open Stores</Text>
            <FlatList
                data={stores}
                renderItem={({item}: { item: { id: number }}) => {
                    return (
                        <StoreCard
                            key={item.id}
                            item={item}
                            onPress={() => {
                                navigation.navigate("StoreCategories", { store_categories, store_logo })
                            }}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    paddingBottom: Platform.OS === 'ios' ? 50 : 100
                }}
                style={{ marginTop: 10 }}
            />
        </>
    );
}

export default Stores;

const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        color: colours.primaryText,
        fontSize: fontSizes.xs,
        fontFamily: 'montserrat'
    }
});

const stores = [
    {
        "id": 1,
        "name": "Screw Fix",
        "imageURL": require("../../../assets/logos/screw_fix.png"),
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 4,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            },
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "B&Q",
        "imageURL": require("../../../assets/logos/b-q-logo.png"),
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 5,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "20",
                "delivery_end": "35",
                "delivery_fee": 2.99
            },
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "ToolStation",
        "imageURL": require("../../../assets/logos/toolstation-logo.png"),
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 3,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "Wickes",
        "imageURL": require("../../../assets/logos/wickes_logo.png"),
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 3,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "TradePoint Wigan",
        "imageURL": null,
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 4,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Savoy Timber",
        "imageURL": null,
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 4,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Wilkos",
        "imageURL": null,
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 4,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Homebase",
        "imageURL": null,
        "distance": "3.6",
        "unit_measure": "miles",
        "type": "Hardware - Building Materials",
        "rating": 4,
        "has_rated": null,
        "address": {
            "line_1": "Gower Street",
            "line_2": "Wigan",
            "county": "Greater Manchester",
            "postcode": "WN5 9AD",
            "coordinates": {
                "longitude": "-2.650060",
                "latitude": "53.540030"
            },
            "delivery": {
                "delivery_start": "30",
                "delivery_end": "50",
                "delivery_fee": 2.99
            }
        },
        // property be fetched from a seperate endpoint
        "categories": [
            {
                "id": 1,
                "name": "Central Heating",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Taps & Sinks"
                    },
                    {
                        "id": 2,
                        "name": "Electrical Heating"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Radiators",
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Horizontal Radiators"
                    },
                    {
                        "id": 2,
                        "name": "Column Radiators"
                    }
                ]
            }
        ]
    }
]