import { createStackNavigator,
        createAppContainer } from 'react-navigation';

import Main from './pages/main';

const blenQ = createStackNavigator({
    Home: { 
        screen: Main
    }
});

const App = createAppContainer(blenQ);

export default App;