import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles/styles';
import { musicPlayerService } from '../musicPlayerService';

const App = (): React.JSX.Element => {
	
	useEffect(() => {
		musicPlayerService();
	}, []);

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
	);
}

export default App;