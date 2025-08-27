import { router } from "expo-router";
import { View } from "react-native";
import { Typography } from "./Typography";

export default function BackButtonHeader({ backPath }: { backPath: string }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <Typography 
          variant="h1" 
          onPress={() => router.push(backPath as any)}
          style={{ marginRight: 10 }}
        >
          ←
        </Typography>
      </View>
    )
}