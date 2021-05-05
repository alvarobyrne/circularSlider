import React, { ComponentProps } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Vector } from "react-native-redash";
import Svg, { Circle } from "react-native-svg";
// import { FontAwesome as Icon } from "@expo/vector-icons";

import { STROKE } from "./Constants";

interface CursorOverlayProps {
  position: Animated.SharedValue<Vector>;
  // icon: ComponentProps<typeof Icon>["name"];
}

const CursorOverlay = ({ position }: CursorOverlayProps) => {
  const style = useAnimatedStyle(() => {
    const { x, y } = position.value;
    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: STROKE,
      height: STROKE,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      transform: [
        { translateX: x - STROKE / 2 },
        { translateY: y - STROKE / 2 },
      ],
    };
  });
  return (
    <Animated.View style={style}>
      {/* <Icon name={icon} color="#E58406" size={24} /> */}
      <Svg>
        <Circle
          cx={0}
          cy={0}
          r={STROKE / 2}
          fill="#E58406"
        />
      </Svg>
    </Animated.View>
  );
};

export default CursorOverlay;
