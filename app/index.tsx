import { ModuleCard } from '@/components/ui/ModuleCard';
import { UserButton } from '@/components/ui/userButton';
import { ScrollView, View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      {/* Header - Fixed at top */}
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
      }}>
        <Typography variant="h1">👋 Hi User!</Typography>
        <UserButton />
      </View>

      {/* Modules - Scrollable */}
      <ScrollView 
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
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
            modulePath="/appointment-and-orders"
          />
          <ModuleCard 
            moduleName="Ask the Expert" 
            imageSource={require("@/assets/images/ask-the-expert.png")} 
            modulePath="/ask-expert"
          />
        </View>
      </ScrollView>
    </View>
  );
}
