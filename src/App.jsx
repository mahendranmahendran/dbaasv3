import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Routes, Route } from 'react-router-dom';
import { mockDataProvider } from './mocks/dataProvider';

// Layouts
import { MarketingLayout } from './layouts/MarketingLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Pages
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { MagicLinkSent } from './pages/MagicLinkSent';
import { SqlPlayground } from './pages/SqlPlayground';

// Resources
import { MetricsDashboard } from './resources/MetricsDashboard';
import { ActiveQueriesList } from './resources/ActiveQueriesList';
import { ProfileEdit } from './resources/ProfileEdit';
import { SettingsEdit } from './resources/SettingsEdit';

export default function App() {
  return (
    <Routes>
      {/* Marketing Routes - Uses MarketingLayout */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      {/* Admin Routes - Uses AdminLayout */}
      <Route
        path="/admin/*"
        element={
          <Admin
            dataProvider={mockDataProvider}
            dashboard={MetricsDashboard}
            layout={AdminLayout}
          >
            {/* Resources */}
            <Resource name="queries" list={ActiveQueriesList} />
            <Resource name="profile" edit={ProfileEdit} />
            <Resource name="settings" edit={SettingsEdit} />

            {/* Custom Admin Routes */}
            <CustomRoutes>
              <Route path="/sql" element={<SqlPlayground />} />
              <Route path="/link-sent" element={<MagicLinkSent />} />
            </CustomRoutes>
          </Admin>
        }
      />
    </Routes>
  );
}