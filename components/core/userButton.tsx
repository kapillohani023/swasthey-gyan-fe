import { SG_COLORS } from "@/constants/theme";
import { Image, StyleSheet, View } from "react-native";

export function UserButton() {
    return (
        <View style={styles.userButton}>
            <Image source={require("@/assets/images/user.png")} style={styles.userButtonImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    userButton: {
        width: 60,
        height: 60,
        backgroundColor: SG_COLORS.backgroundGray,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    userButtonImage: {
        width: 40,
        height: 40,
    }
})