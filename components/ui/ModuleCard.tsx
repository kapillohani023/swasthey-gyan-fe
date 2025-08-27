import { router } from "expo-router";
import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";

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
            style={{
                width: '100%',
                backgroundColor: "#EDECF4",
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
            }}
            activeOpacity={0.7}
        >   
            <View style={{ flex: 1 }}>
                <Typography variant="h3">{moduleName}</Typography>
                {subtitle && <Typography variant="subtitle">{subtitle}</Typography>}
            </View>
            <Image 
                source={imageSource} 
                style={{ 
                    width: 80, 
                    height: 80,
                    resizeMode: 'contain',
                }} 
            />
        </TouchableOpacity>
    )
}