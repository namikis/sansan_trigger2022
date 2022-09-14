import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store/store';
import TopPage from './pages/TopPage/TopPage';
import BookDetails from './pages/BookDetails/BookDetails';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import PostPage from './pages/PostPage/PostPage';

import StoreStep1 from './pages/BookStore/StoreStep1';
import StoreStep2 from './pages/BookStore/StoreStep2';
import StoreStep3 from './pages/BookStore/StoreStep3';
import StoreStep4 from './pages/BookStore/StoreStep4';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path="/book" element={<BookDetails />}>
            <Route path=":postId" element={<BookDetails />} />
          </Route>
          <Route path="/review" element={<ReviewPage />}>
            <Route path=":postId" element={<ReviewPage />} />
          </Route>
          <Route path="/post" element={<PostPage />}>
            <Route path=":postId" element={<PostPage />} />
          </Route>
          <Route path="/step1" element={<StoreStep1 />} />
          <Route path="/step2" element={<StoreStep2 />} />
          <Route path="/step3" element={<StoreStep3 />} />
          <Route path="/step4" element={<StoreStep4 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
