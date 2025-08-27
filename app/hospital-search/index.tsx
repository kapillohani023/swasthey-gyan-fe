import BackButtonHeader from '@/components/core/BackButtonHeader';
import { ModuleCard } from '@/components/core/ModuleCard';
import { SGTypography } from '@/components/ui/SGTypography';
import { View } from 'react-native';

export default function HospitalSearch() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Hospital Search" imageSource={require("@/assets/images/hospital-search.png")} modulePath="hospital-search" />
      <SGTypography variant="caption">Coming soon...</SGTypography>
    </View>
  );
}
