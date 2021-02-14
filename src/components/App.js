import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
import Header from './ui/Header';

function App() {
	return(
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={()=><div>Home</div>} />
					<Route exact path="/services" component={()=><div>Services</div>} />
					<Route exact path="/custom-software" component={()=><div>Custom Sift</div>} />
					<Route exact path="/mobile-apps" component={()=><div>Mobile Apps</div>} />
					<Route exact path="/websites" component={()=><div>Websites</div>} />
					<Route exact path="/revolution" component={()=><div>Revolution</div>} />
					<Route exact path="/about" component={()=><div>About Us</div>} />
					<Route exact path="/contact" component={()=><div>Contact</div>} />
					<Route exact path="/estimate" component={()=><div>Estimate</div>} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App;
