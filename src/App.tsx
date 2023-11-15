import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import HomePage from '@src/modules/home/ui';
import AuthPage from '@src/modules/auth/ui';
import authStore from '@src/modules/auth/store';
import UDText from '@src/modules/ud-ui/ud-text';

const errTitle = 'ЗАПРАШИВАЕМОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ';

function App() {
  const { auth } = authStore;

  useEffect(() => {
    reloadPage();
  }, []);

  const reloadPage = async () => {
    const token = await localStorage.getItem('token');
    if (token) {
      await auth();
    }
  };

  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="*"
            element={
              <UDText
                title={errTitle}
                size={32}
                weight={700}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
