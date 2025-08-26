import { ModuleCard } from '@/components/ui/ModuleCard';
import { UserButton } from '@/components/ui/userButton';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Header */}
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%',
        }}>
          <Typography variant="h1">👋 Hi User!</Typography>
          <UserButton />
        </View>

        {/* Modules */}
        <View style={{
          width: '100%',
          gap: 20,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <ModuleCard 
            moduleName="Hospital Search" 
            imageSource={require("@/assets/images/hospital-search.png")} 
            modulePath="/hospital-search"
          />
          <ModuleCard 
            moduleName="Surgery Timeline" 
            imageSource={require("@/assets/images/surgery-timeline.png")} 
            modulePath="/surgery-timeline"
          />
          <ModuleCard 
            moduleName="Appointment and Orders" 
            imageSource={require("@/assets/images/appointment-and-orders.png")} 
            modulePath="/appointment-orders"
          />
          <ModuleCard 
            moduleName="Ask the Expert" 
            imageSource={require("@/assets/images/ask-the-expert.png")} 
            modulePath="/ask-expert"
          />
        </View>
      </View>

    </View>
  );
}
