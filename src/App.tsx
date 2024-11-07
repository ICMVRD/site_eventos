import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EventLayout } from './components/EventLayout';
import { EventsPage } from './pages/EventsPage';
import { SelectChurchPage } from './pages/SelectChurchPage';
import { ChildrenSeminarPage } from './pages/ChildrenSeminarPage';
import { ChurchProvider } from './context/ChurchContext';

function App() {
  return (
    <ChurchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectChurchPage />} />
          <Route path="/eventos" element={<EventLayout />}>
            <Route index element={<EventsPage />} />
            <Route path="seminario-criancas" element={<ChildrenSeminarPage />} />
            <Route path="batismos" element={<div>Batismos</div>} />
            <Route path="cultos-especiais" element={<div>Cultos Especiais</div>} />
            <Route path="cantatas" element={<div>Cantatas</div>} />
            <Route path="ceias" element={<div>Ceias</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ChurchProvider>
  );
}

export default App;