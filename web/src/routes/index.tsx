import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Faq } from '../pages/Faq';
import { Adoption } from '../pages/Adoption';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

import { Dashboard } from '../pages/Dashboard';
import { CreatePet } from '../pages/CreatePet';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/pet/new"
          element={
            <PrivateRoute>
              <CreatePet />
            </PrivateRoute>
          }
        />
        <Route
          path="/pet/:id/edit"
          element={
            <PrivateRoute>
              <CreatePet />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
}
