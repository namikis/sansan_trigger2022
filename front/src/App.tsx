import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store/store';
import TopPage from './pages/TopPage/TopPage';
import BookDetails from './pages/BookDetails/BookDetails';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import PostPage from './pages/PostPage/PostPage';
import BookStore from './pages/BookStore/BookStore';

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
          <Route path="/store" element={<BookStore/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
