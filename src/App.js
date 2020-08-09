import React from 'react';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.css';
import TableBuild from './Components/TableBuild';
import Header from './Components/Header';
import './App.css';
export default function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <TableBuild />
      </Container>
    </div>
  );
}
