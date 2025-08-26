import { ModuleCard } from '@/components/ui/ModuleCard';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function AppointmentOrders() {
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
      <ModuleCard moduleName="Appointment and Orders" imageSource={require("@/assets/images/appointment-and-orders.png")} modulePath="appointment-and-orders" />
      <Typography variant="caption">Coming soon...</Typography>
    </View>
  );
}
