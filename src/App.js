import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./GlobalStyles";

import { NotFound, Spinner } from "./components/UI/";
import ScrollToTop from "./components/ScrollToTop";
const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFound} />
				</Switch>
				{/* <Footer /> */}
			</Router>
		</Suspense>
	);
}

export default App;
