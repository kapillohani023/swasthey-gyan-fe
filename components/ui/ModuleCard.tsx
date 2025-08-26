import { router } from "expo-router";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Typography } from "./Typography";

interface ModuleCardProps {
    moduleName: string;
    imageSource: ImageSourcePropType;
    modulePath: string;
}

export function ModuleCard({ moduleName, imageSource, modulePath }: ModuleCardProps) {
    const handlePress = () => {
        // @ts-ignore - modulePath is dynamic and router.push accepts string
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
            <Typography variant="h3">{moduleName}</Typography>
            <Image 
                source={imageSource} 
                style={{ 
                    width: 80, 
                    height: 80,
                    resizeMode: 'contain'
                }} 
            />
        </TouchableOpacity>
    )
}