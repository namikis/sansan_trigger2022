import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import TopPage from './pages/TopPage';
import BookDetails from './pages/BookDetails';
import ReviewPage from './pages/ReviewPage';
import PostPage from './pages/PostPage';

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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
