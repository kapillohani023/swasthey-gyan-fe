import { ModuleCard } from '@/components/core/ModuleCard';
import { UserButton } from '@/components/core/userButton';
import { SG_ROUTES } from '@/constants/route';
import { ScrollView, View } from 'react-native';
import { SGTypography } from '../components/ui/SGTypography';

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
        <SGTypography variant="h1">👋 Hi User!</SGTypography>
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
            modulePath={SG_ROUTES.HOSPITAL_SEARCH}
          />
          <ModuleCard 
            moduleName="Surgery Timeline" 
            imageSource={require("@/assets/images/surgery-timeline.png")} 
            modulePath={SG_ROUTES.SURGERY_TIMELINE}
          />
          <ModuleCard 
            moduleName="Appointment and Orders" 
            imageSource={require("@/assets/images/appointment-and-orders.png")} 
            modulePath={SG_ROUTES.APPOINTMENTS_AND_ORDERS}
          />
          <ModuleCard 
            moduleName="Ask the Expert" 
            imageSource={require("@/assets/images/ask-the-expert.png")} 
            modulePath={SG_ROUTES.ASK_THE_EXPERT}
          />
        </View>
      </ScrollView>
    </View>
  );
}
