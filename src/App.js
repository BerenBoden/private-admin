import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";

import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";


class App extends Component {

	
	render() {
		console.log(this.props)
		return (
			<React.Fragment>
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={VerticalLayout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout
	};
};


export default connect(mapStateToProps, null)(App);
