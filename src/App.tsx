import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Logo from './Logo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View
        style={{
          backgroundColor: '#282c34',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View pointerEvents="none">
          <Logo size={200} />
        </View>
        <Text style={styles.text}>Hello Vite + React!</Text>
        <Text style={styles.text}>
          <Button
            onPress={() => setCount((count) => count + 1)}
            title={`count is: ${count}`}
          />
        </Text>
        <Text style={styles.text}>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
        <Text style={styles.text}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    marginBottom: 16,
  },
});
