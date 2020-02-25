import React , { useEffect,Suspense } from 'react';
import { Route, Switch , Redirect , BrowserRouter as Router } from 'react-router-dom';
import Nav from './App/Main/Nav';
import Footer from './App/Main/Footer';
import UserData from './App/Components/UserData';
import PageNotFound from './App/Components/PageNotFound';
import LazyLoading from './App/Components/LazyLoading';

const App = () =>  {
	
	const base_url = 'Website';
	const domain = 'domain';

	const NoMatchPage = () => {
	  return (
	    <PageNotFound />
	  );
	};

 	// Grabs all of the inital data
 	
	useEffect(() => {
		
	},[]);

	return (
		<Router>
			<header>
				<Nav domain={domain} base_url={base_url}/>
			</header>

			<div className="body">

				<UserData.Provider value={{domain,base_url}}>
					<Suspense fallback={ <LazyLoading/> }>
						<Switch>

							<Route exact path={`/home`} />

							<Route component={NoMatchPage} />
							
						</Switch>

					</Suspense>
				</UserData.Provider>
			</div>
				
			<Footer />

		</Router>
	);
  
}

export default App;
