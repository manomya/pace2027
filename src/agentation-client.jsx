import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

(function initAgentation() {
  if (typeof window === 'undefined') return;

  function mount() {
    if (document.getElementById('agentation-root')) return;

    const container = document.createElement('div');
    container.id = 'agentation-root';
    document.body.appendChild(container);

    try {
      const root = createRoot(container);
      root.render(
        React.createElement(Agentation, {
          appName: 'PACE-2027 Conference',
          endpoint: 'http://localhost:4747',
          copyFormat: 'markdown',
          identifyingAttributes: [
            'id',
            'data-track',
            'data-action',
            'aria-label',
            'role',
            'class'
          ]
        })
      );
      console.log('🎯 Agentation visual feedback toolbar mounted successfully.');
    } catch (err) {
      console.error('Failed to initialize Agentation:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
