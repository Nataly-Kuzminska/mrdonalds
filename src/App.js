import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModalItem';



function App() {

  const [openItem, setOpenItem] = React.useState('');

  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Menu setOpenItem={setOpenItem}/>
    <ModalItem openItem={openItem}/>
    </>
  );
}

export default App;
