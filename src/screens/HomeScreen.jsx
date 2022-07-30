import { View, Image, SafeAreaView } from "react-native";
import { NavFavourites, NavOptions } from "../components";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "../utils/api";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ height: 50, width: 180, marginLeft: -10, marginBottom: 30 }}
          source={{
            uri: "https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
          placeholder="Where from?"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
