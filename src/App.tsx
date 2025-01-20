import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './styles/styles';

const App = (): React.JSX.Element => {
	return (
		<SafeAreaView>
			<StatusBar />
			<View style={[styles.appContainer]}>
				<View style={[styles.headerContainer]}>
					<Text style={[styles.headerText]}>App</Text>
				</View>
				<View style={[styles.bodyContainer]}>
					<Text style={[styles.headerText]}>App</Text>
				</View>
				<View style={[styles.footerContainer]}>
					<Text style={[styles.headerText]}>App</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default App;