import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemContainer: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fafafa',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#222',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
    trashButton: {
    marginLeft: 10,
    padding: 5,
  },
  trashIcon: {
    color: 'red',
    fontSize: 18,
  },

});
