import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Hero from './Component/Hero';
import Card from './Component/Card';
import GridCard from './Component/GridCard';
import Grid_com from './Component/Grid_com';
import Footer from './Component/Footer';

import { useState } from 'react';

function App() {
  const [mode, setMode]= useState('dark')
  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light')
      console.log('light');
    }else{
      setMode('dark')
      console.log('dark');
    }
  }
  return (
    <>
    <Nav mode ={mode} toggle ={toggle}></Nav>
    <Hero mode ={mode}></Hero>
    <Card mode = {mode}></Card>
    <Grid_com mode ={mode}></Grid_com>
    <Footer mode ={mode}></Footer>
    </>
  );
}

export default App;