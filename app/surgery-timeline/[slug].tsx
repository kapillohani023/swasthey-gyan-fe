import totalKneeReplacement from '@/assets/data/total-knee-replacement.json';
import BackButtonHeader from '@/components/core/BackButtonHeader';
import { ModuleCard } from '@/components/core/ModuleCard';
import SGAccordion, { SGAccordionItem } from '@/components/ui/SGAccordion';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

export default function SurgeryTimelineDetail() {
  const { slug, date } = useLocalSearchParams<{ slug: string, date: string }>();
  const formattedData : SGAccordionItem[] = totalKneeReplacement.timeline.map((item) => ({
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
      <BackButtonHeader backPath="/surgery-timeline" />
      <ModuleCard moduleName="Surgery Timeline" imageSource={require("@/assets/images/surgery-timeline.png")} modulePath="surgery-timeline" subtitle={slug} disabled={true} />
      <View style={{ width: '100%', flex: 1 }}>
        <SGAccordion 
          items={formattedData}
        />
      </View>
    </View>
  );
}
