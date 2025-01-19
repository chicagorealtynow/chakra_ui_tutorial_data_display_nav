import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import BadgePage from './pages/BadgePage';
    import CardPage from './pages/CardPage';
    import CodePage from './pages/CodePage';
    import DividerPage from './pages/DividerPage';
    import KeyboardPage from './pages/KeyboardPage';
    import ListPage from './pages/ListPage';
    import StatisticsPage from './pages/StatisticsPage';
    import TablePage from './pages/TablePage';
    import TagPage from './pages/TagPage';
    import BreadcrumbPage from './pages/BreadcrumbPage';
    import LinkPage from './pages/LinkPage';
    import LinkOverlayPage from './pages/LinkOverlayPage';
    import SkipNavPage from './pages/SkipNavPage';
    import StepperPage from './pages/StepperPage';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/divider" element={<DividerPage />} />
          <Route path="/keyboard" element={<KeyboardPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/breadcrumb" element={<BreadcrumbPage />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/linkoverlay" element={<LinkOverlayPage />} />
          <Route path="/skipnav" element={<SkipNavPage />} />
          <Route path="/stepper" element={<StepperPage />} />
        </Routes>
      );
    }

    export default App;
