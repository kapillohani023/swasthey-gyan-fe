import { SG_COLORS } from "@/constants/theme";
import { router } from "expo-router";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native";
import { SGTypography } from "../ui/SGTypography";

interface ModuleCardProps {
    moduleName: string;
    subtitle?: string;
    imageSource: ImageSourcePropType;
    modulePath: string;
    disabled?: boolean;
}

export function ModuleCard({ moduleName, imageSource, modulePath, subtitle, disabled }: ModuleCardProps) {
    const handlePress = () => {
        // @ts-ignore - modulePath is dynamic and router.push accepts string
        if (disabled) {
            return;
        }
        router.push(modulePath as any);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.moduleCard}
            activeOpacity={0.7}
        >   
            <View style={styles.moduleCardText}>
                <SGTypography variant="h3">{moduleName}</SGTypography>
                {subtitle && <SGTypography variant="subtitle">{subtitle}</SGTypography>}
            </View>
            <Image 
                source={imageSource} 
                style={styles.moduleCardImage} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    moduleCard: {
        width: '100%',
        backgroundColor: SG_COLORS.backgroundGray,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    moduleCardText: {
        flex: 1,
    },
    moduleCardImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
})