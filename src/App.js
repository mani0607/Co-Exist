// routes
import RouteTeller from './routes';
// theme
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';
import 'semantic-ui-css/semantic.min.css'

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <RouteTeller />
    </ThemeConfig>
  );
}
