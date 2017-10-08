import Colors from './colors';
import Dimensions from './dimensions';

export default {
  title: {
    color: Colors.title,
    marginBottom: 48,
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.tintColor,
    marginVertical: 10,
    width: Dimensions.window.width * 0.8,
  },
  input: {
    width: Dimensions.window.width * 0.8,
  }
};