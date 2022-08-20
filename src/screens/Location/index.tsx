import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

/**
 * this screen pops up on the initial app load  
 * the user will have 2 options
 *   - use their location (will require the user to accept the location permissions)
 *   - the user can input their postcode manually
 */

/**
 * both options will require 2 additional screens
 * 1 - the postcode search listing (postcode will get automatically featched if users location is used)
 * 2 - the addresses for the selected postcode
 */

// once the user has went through either option then they will be able to see the stores as a location at this point would be set
// whether it was done manually or automatically

const UseLocationScreen = () => {
    return (
        <View>
            <Text>
                Where are you?
            </Text>

            <Text>
                Let us use your location to show you the most stores near you.
            </Text>

            <TouchableOpacity>
                <Text> Use my location </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>No thanks, use a postcode</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseLocationScreen;