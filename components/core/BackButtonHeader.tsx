import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SGTypography } from "../ui/SGTypography";

export default function BackButtonHeader({ backPath }: { backPath: string }) {
    return (
        <View style={styles.backButtonHeader}>
        <SGTypography 
          variant="h2" 
          onPress={() => router.push(backPath as any)}
          style={styles.backButtonText}
        >
          ←
        </SGTypography>
      </View>
    )
}

const styles = StyleSheet.create({
    backButtonHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    backButtonText: {
        marginRight: 10,
    }
})