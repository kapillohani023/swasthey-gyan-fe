import BackButtonHeader from '@/components/core/BackButtonHeader';
import { ModuleCard } from '@/components/core/ModuleCard';
import { SGTypography } from '@/components/ui/SGTypography';
import { View } from 'react-native';

export default function AskExpert() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Ask the Expert" imageSource={require("@/assets/images/ask-the-expert.png")} modulePath="ask-expert" />
      <SGTypography variant="caption">Coming soon...</SGTypography>
    </View>
  );
}
