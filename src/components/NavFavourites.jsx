import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import { favouritesData } from "../utils/data";

import tw from "tailwind-react-native-classnames";

const NavFavourites = () => {
  return (
    <FlatList
      data={favouritesData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-0.5`} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
