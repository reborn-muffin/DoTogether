import {StyleSheet} from 'react-native'

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    paddingVertical: 32,
    paddingHorizontal: 8,
  },
  cardContent: {
    rowGap: 8,
    marginTop: 8,
  },
  cardActions: {
    flexDirection: 'column',
    alignItems: 'baseline',
  },
  actionsView: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 2,
    marginTop: 2,
  },
  actionButton: {
    alignSelf: 'flex-start',
    width: '95%',
  },
})
