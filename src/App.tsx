import { AuthProvider } from './context/AuthContext/AuthProvider'
import { CartProvider } from "./context/CartContext";
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <RoutesApp />
        <GlobalStyle />
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
