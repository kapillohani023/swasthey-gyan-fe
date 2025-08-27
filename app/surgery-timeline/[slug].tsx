import { ModuleCard } from '@/components/ui/ModuleCard';
import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Typography } from '../../components/ui/Typography';

export default function SurgeryTimelineDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '100%' }}>
        <Typography 
          variant="h1" 
          onPress={() => router.back()}
          style={{ marginRight: 10 }}
        >
          ←
        </Typography>
      </View>
      <ModuleCard moduleName="Surgery Timeline" imageSource={require("@/assets/images/surgery-timeline.png")} modulePath="surgery-timeline" subtitle={slug} disabled={true} />    </View>
  );
}
