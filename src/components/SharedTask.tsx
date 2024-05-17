import {FC} from 'react'
import {Card, Text} from 'react-native-paper'
import {View} from 'react-native'

interface SharedTaskProps {
  id: number
  title: string
  content: string
  isCompleted: boolean
}

const SharedTask: FC<SharedTaskProps> = ({id, title, content, isCompleted}) => {
  return (
    <Card style={{width: '100%'}}>
      <Card.Title title={title} />
      <Card.Content>
        <Text>{content}</Text>
      </Card.Content>
    </Card>
  )
}

export default SharedTask
