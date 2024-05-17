import {Text, View} from 'react-native'
import {FC, useState} from 'react'
import {SegmentedButtons} from 'react-native-paper'

interface SettingsSegmentProps {
  buttons: {value: string; label: string}[]
  onValueChange: (value: string) => void
}

const SettingsSegment: FC<SettingsSegmentProps> = ({buttons, onValueChange}) => {
  const [value, setValue] = useState('')

  const handleValueChange = (value: string) => {
    setValue(value)
    onValueChange(value)
  }

  return (
    <View>
      <SegmentedButtons value={value} buttons={buttons} onValueChange={handleValueChange} />
      <Text></Text>
    </View>
  )
}

export default SettingsSegment
