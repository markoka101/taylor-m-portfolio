import { type RouteObject, RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { PortfolioLayout } from './components/layouts/PortfolioLayout';
import { ProjectLayout } from './components/layouts/ProjectLayout';
import { RootLayout } from './components/layouts/RootLayout';
import { About } from './pages/About'; //There is no problem here, no matter what the linter is saying
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import { Other } from './pages/Other';
import { Portfolio } from './pages/Portfolio';
import { Projects } from './pages/Projects';

/*
   As there are a lot of dynamic pages and routes 
   it is cleaner making this object to handle routes.
   We instead are using layouts for reusability 
   currently have 3 main layouts that will handle the pages
   I am not getting paid enough for this :( 
*/
const routes: RouteObject[] = [
	{
		path: '/',
		element: <RootLayout />,

		children: [
			{ index: true, element: <About /> },
			{
				path: 'portfolio',
				element: <PortfolioLayout />,
				children: [
					{ index: true, element: <Portfolio /> },
					{ path: 'courses', element: <Courses /> },
					{
						path: 'projects',
						element: <Projects />
					},
					{
						path: 'projects/:projectId',
						element: <ProjectLayout />
					},
					{
						path: 'projects/other',
						element: <Other />
					}
				]
			},
			{ path: 'contact', element: <Contact /> },
			// Netlify forms thanks redirect after submit
			{
				path: 'success',
				loader: () => redirect('/contact?status=thanks')
			}
		]
	}
];

function App() {
	return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
