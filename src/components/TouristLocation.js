import React from "react";
import { View, Text, Image } from "react-native";

const TouristLocation = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{props.name}</Text>
      <Text style={{ fontSize: 25, color: "darkgray" }}>{props.address}</Text>
      <Image style={{height:50, width:50}} source={props.imageUri} />
        

      <Text>{props.description}</Text>
    </View>
  );
};

export default TouristLocation;
