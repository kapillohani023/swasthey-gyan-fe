import BackButtonHeader from '@/components/core/BackButtonHeader';
import { ModuleCard } from '@/components/core/ModuleCard';
import { SGTypography } from '@/components/ui/SGTypography';
import { View } from 'react-native';

export default function AppointmentOrders() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Appointment and Orders" imageSource={require("@/assets/images/appointment-and-orders.png")} modulePath="appointment-and-orders" />
      <SGTypography variant="caption">Coming soon...</SGTypography>
    </View>
  );
}
