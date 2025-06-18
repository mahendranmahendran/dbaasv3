import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Routes, Route } from 'react-router-dom';
import { mockDataProvider } from './mocks/dataProvider';
import { MarketingLayout } from './layouts/MarketingLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { MagicLinkSent } from './pages/MagicLinkSent';
import { SqlPlayground } from './pages/SqlPlayground';
import { Login } from './pages/Login';
import { MetricsDashboard } from './resources/MetricsDashboard';
import { ActiveQueriesList } from './resources/ActiveQueriesList';
import { ProfileEdit } from './resources/ProfileEdit';
import { SettingsEdit } from './resources/SettingsEdit';
import { AuthGuard } from './components/AuthGuard';

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/magic-link-sent" element={<MagicLinkSent />} />
      </Route>

      {/* Admin Routes */}
      <Route 
        path="/admin/*" 
        element={
          <AuthGuard>
            <Admin
              basename="/admin"
              dataProvider={mockDataProvider}
              dashboard={MetricsDashboard}
              layout={AdminLayout}
            >
              <Resource name="queries" list={ActiveQueriesList} />
              <Resource name="profile" edit={ProfileEdit} />
              <Resource name="settings" edit={SettingsEdit} />
              <CustomRoutes>
                <Route path="sql" element={<SqlPlayground />} />
              </CustomRoutes>
            </Admin>
          </AuthGuard>
        }
      />
    </Routes>
  );
}