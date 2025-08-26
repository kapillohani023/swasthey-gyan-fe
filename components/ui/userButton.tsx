import { Image, View } from "react-native";

export function UserButton() {
    return (
        <View
            style={{
                width: 60,
                height: 60,
                backgroundColor: "#EDECF4",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image source={require("@/assets/images/user.png")} style={{ width: 40, height: 40 }} />
        </View>
    )
}
