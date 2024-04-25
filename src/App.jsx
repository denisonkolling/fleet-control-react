import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import Loadable from './components/Loadable';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const DashboardDefault = Loadable(lazy(() => import('./pages/dashboard')));
const SamplePage = Loadable(lazy(() => import('./pages/demos/SamplePage')));
const ReactQueryDemo = Loadable(lazy(() => import('./pages/demos/ReactQueryDemo')));
const AuthLogin = Loadable(lazy(() => import('./pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('./pages/authentication/Register')));
const CreateDriver = Loadable(lazy(() => import('./pages/driver/CreateDriver')));
const DrivingHours = Loadable(lazy(() => import('./pages/driver/DrivingHours')));
const CreateTyre = Loadable(lazy(() => import('./pages/tyre/CreateTyre')));
const TyreReading = Loadable(lazy(() => import('./pages/tyre/TyreReading')));
const ListTyreReading = Loadable(lazy(() => import('./pages/tyre/ListTyreReading')));
const CreateVehicle = Loadable(lazy(() => import('./pages/vehicle/CreateVehicle')));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ThemeCustomization>
			<ScrollTop>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<MainLayout />}>
						<Route path="/" element={<DashboardDefault />} />
						<Route path="sample-page" element={<SamplePage />} />
						<Route path="react-query" element={<ReactQueryDemo />} />
						<Route path="create-driver" element={<CreateDriver />} />
						<Route path="driving-hours" element={<DrivingHours />} />
						<Route path="create-tyre" element={<CreateTyre />} />
						<Route path="tyre-reading" element={<TyreReading />} />
						<Route path="list-tyre-reading" element={<ListTyreReading />} />
						<Route path="create-Vehicle" element={<CreateVehicle />} />
					</Route>
					<Route path="/" element={<MinimalLayout />}>
						<Route path="login" element={<AuthLogin />} />
						<Route path="register" element={<AuthRegister />} />
					</Route>
				</Routes>
			</ScrollTop>
			<ToastContainer />
		</ThemeCustomization>
	);
}

export default App;
