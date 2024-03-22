import React from "react";
import { View, Text, Image } from "react-native";

const TouristLocation = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{props.name}</Text>
      <Text style={{ fontSize: 25, color: "#add8e6" }}>{props.address}</Text>
      <Image style={{ height:500, width:500, alignItems:'left' }} source={props.NeoQuimica} />
        

      <Text style={{ fontSize: 20, color: "#a9a9a9" }}>{props.description}</Text>
    </View>
  );
};

export default TouristLocation;
