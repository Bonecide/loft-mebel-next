import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.min.css';
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { store } from '../store/index'
export default function MyApp({ Component, pageProps}) {

    return (
        <Provider store={store}>
        <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        />

        <Component {...pageProps}/>
        </Provider>
    )
}