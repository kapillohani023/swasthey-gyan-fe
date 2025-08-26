import { ModuleCard } from '@/components/ui/ModuleCard';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function AskExpert() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '100%' }}>
        <Typography 
          variant="h1" 
          onPress={() => router.back()}
          style={{ marginRight: 10 }}
        >
          ←
        </Typography>
      </View>
      <ModuleCard moduleName="Ask the Expert" imageSource={require("@/assets/images/ask-the-expert.png")} modulePath="ask-expert" />
      <Typography variant="caption">Coming soon...</Typography>
    </View>
  );
}
