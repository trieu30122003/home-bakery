import '../styles/bootstrap-4-3-min-index.css'
import '../styles/main.scss.css'
import '../styles/index.scss.css'
import '../styles/swiper.scss.css'
import { Provider } from 'react-redux';
import store from './redux/store';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
