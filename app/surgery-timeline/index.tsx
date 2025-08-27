import { CustomForm, Field } from '@/components/ui/CustomForm';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { Typography } from '@/components/ui/Typography';
import { router } from 'expo-router';
import { View } from 'react-native';

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
        label: "Total Knee Replacement",
        value: "Total Knee Replacement",
      }],
    }
  ]

  const handleSubmit = (data: any) => {
    router.push({
      pathname: "/surgery-timeline/[slug]",
      params: {
        slug: data["surgery-type"],
      },
    })
  }
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
      <CustomForm title="Surgery Details" fields={formFields} onSubmit={handleSubmit} />
    </View>
  );
}
