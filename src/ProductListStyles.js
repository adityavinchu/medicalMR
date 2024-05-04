import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    marginRight: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#555',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'green',
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
  },
  productInfo: {
    flex: 1,
  },
});

export default styles;
