import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listItem: {
    backgroundColor: '#e6e6fa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 18,
    color: '#333',
  },
    trashButton: {
    marginLeft: 10,
    padding: 5,
  },
  trashIcon: {
    color: 'red',
    fontSize: 18,
  },
    rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});