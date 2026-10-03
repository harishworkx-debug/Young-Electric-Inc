import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <AppContent />
      </MemoryRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet };
}
