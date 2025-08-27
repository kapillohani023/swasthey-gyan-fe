import BackButtonHeader from '@/components/ui/BackButtonHeader';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function AppointmentOrders() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Appointment and Orders" imageSource={require("@/assets/images/appointment-and-orders.png")} modulePath="appointment-and-orders" />
      <Typography variant="caption">Coming soon...</Typography>
    </View>
  );
}
