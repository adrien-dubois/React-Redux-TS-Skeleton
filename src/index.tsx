import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider, TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducer/rootReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const middleware = [thunk];

function setupStore(preloadedState?: PreloadedState<RootState>)
{
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: middleware,
    preloadedState
  });
};

const store = setupStore();

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;