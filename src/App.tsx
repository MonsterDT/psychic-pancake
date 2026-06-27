import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import SearchPage from '@/pages/SearchPage';
import RecipeDetailPage from '@/pages/RecipeDetailPage';
import AIChatPage from '@/pages/AIChatPage';
import FavoritesPage from '@/pages/FavoritesPage';
import ProfilePage from '@/pages/ProfilePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/ai-chat" element={<AIChatPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
