import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { Map, NavigateCard, RideOptionsCard } from "../components";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-10 left-2 z-50 bg-white p-2 rounded-full shadow-lg`}
      >
        <Icon name="home" />
      </TouchableOpacity>

      <View style={tw`h-2/5`}>
        <Map />
      </View>
      <View style={tw`h-3/5`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
