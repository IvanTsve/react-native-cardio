
import { StyleSheet } from 'react-native';


export const commonStyles = StyleSheet.create({
  title : {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#1d4ed8',
    textAlign:'center'
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',        // center children horizontally
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',  

  },
  inputWrapper: {
    width: '90%',
    marginTop: 16,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#60a5fa',      // light blue
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#eff6ff',  // very light blue background
    fontSize: 16,
    color: '#0f172a',            // dark text
  },
  inputLabel: {
    marginBottom: 6,
    fontSize: 14,
    color: '#1d4ed8',            // main blue
    fontWeight: '600',
  },
});