import React from 'react';
import { BrowserRouter, Routes as RouterList, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterList>
        <Route path="/" element={<Home />} />
      </RouterList>
    </BrowserRouter>
  );
}
