import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const App = (): React.JSX.Element => {
	return (
		<SafeAreaView>
			<StatusBar />
			<View>
				<Text>App</Text>
			</View>
		</SafeAreaView>
	)
}

export default App;