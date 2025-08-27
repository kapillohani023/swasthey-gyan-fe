import { CustomForm, Field } from '@/components/ui/CustomForm';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Typography } from '../components/ui/Typography';

export default function SurgeryTimeline() {

  const formFields: Field[] = [
    {
      label: "Date of Admission",
      type: "date",
      key: "date-of-admission",
    },
    {
      label: "Surgery Type",
      type: "select",
      key: "surgery-type",
      options: [{
        label: "Surgery 1",
        value: "surgery-1",
      }, {
        label: "Surgery 2",
        value: "surgery-2",
      }, {
        label: "Surgery 3",
        value: "surgery-3",
      }],
    }
  ]
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '100%' }}>
        <Typography 
          variant="h1" 
          onPress={() => router.back()}
          style={{ marginRight: 10 }}
        >
          ←
        </Typography>
      </View>
      <ModuleCard moduleName="Surgery Timeline" imageSource={require("@/assets/images/surgery-timeline.png")} modulePath="surgery-timeline" />
      <CustomForm title="Surgery Details" fields={formFields} />
    </View>
  );
}
