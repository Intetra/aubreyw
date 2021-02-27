import React, { useState, useLayoutEffect } from "react";
import { Dimensions } from "react-native";

//mock the necessary browser environment variables, since react native doesnt provide them
window.addEventListener = (x) => x;
window.removeEventListener = (x) => x;

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([
        Dimensions.get("window").width,
        Dimensions.get("window").height,
      ]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return (
    <Text style={{ marginTop: 20 }}>
      Window size: {width} x {height}
    </Text>
  );
}
