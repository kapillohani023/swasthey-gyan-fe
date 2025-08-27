import BackButtonHeader from '@/components/ui/BackButtonHeader';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function HospitalSearch() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Hospital Search" imageSource={require("@/assets/images/hospital-search.png")} modulePath="hospital-search" />
      <Typography variant="caption">Coming soon...</Typography>
    </View>
  );
}
