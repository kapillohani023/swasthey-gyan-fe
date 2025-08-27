import totalKneeReplacement from '@/assets/data/total-knee-replacement.json';
import CustomAccordion, { AccordionItem } from '@/components/ui/CustomAccordion';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Typography } from '../../components/ui/Typography';

export default function SurgeryTimelineDetail() {
  const { slug, date } = useLocalSearchParams<{ slug: string, date: string }>();
  const formattedData : AccordionItem[] = totalKneeReplacement.timeline.map((item) => ({
    title: item.title,
    content: item.content,
    items: item.steps.map((step) => ({
      title: step.title,
      content: step.content,
      items: step.terms.map((term) => ({
        title: term.title,
        content: term.content,
      })),
    })),
  }));
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <Typography 
          variant="h1" 
          onPress={() => router.back()}
          style={{ marginRight: 10 }}
        >
          ←
        </Typography>
      </View>
      <ModuleCard moduleName="Surgery Timeline" imageSource={require("@/assets/images/surgery-timeline.png")} modulePath="surgery-timeline" subtitle={slug} disabled={true} />
      <View style={{ width: '100%', flex: 1 }}>
        <CustomAccordion 
          items={formattedData}
        />
      </View>
    </View>
  );
}
