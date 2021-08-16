import React from 'react';
import { GlobalStyle, Container } from './styles/global';
import { MainContent } from './components/Main/Index';
import { Sidebar } from './components/Sidebar/Index';


function App() {
  return (
    <>
    <Container>
        <Sidebar/>
        <MainContent/>
        <GlobalStyle/>
    </Container>
    </>
  );
}

export default App;
