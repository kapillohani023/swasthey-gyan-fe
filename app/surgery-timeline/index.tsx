import BackButtonHeader from '@/components/core/BackButtonHeader';
import { ModuleCard } from '@/components/core/ModuleCard';
import { SGField, SGForm } from '@/components/ui/SGForm';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function SurgeryTimeline() {

  const formFields: SGField[] = [
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
        date: data["date-of-admission"],
      },
    })
  }
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <BackButtonHeader backPath="/" />
      <ModuleCard moduleName="Surgery Timeline" imageSource={require("@/assets/images/surgery-timeline.png")} modulePath="surgery-timeline" />
      <SGForm title="Surgery Details" fields={formFields} onSubmit={handleSubmit} />
    </View>
  );
}
