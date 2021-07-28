import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyAjxdpVL5GjinpSjPW63jsQAFOV70fVX94",
  authDomain: "mrdonalds-6a3b2.firebaseapp.com",
  databaseURL: "https://mrdonalds-6a3b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-6a3b2",
  storageBucket: "mrdonalds-6a3b2.appspot.com",
  messagingSenderId: "9488150565",
  appId: "1:9488150565:web:c9a566ad596c518add0fcc"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders(); 

  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Order {...orders} {...openItem} />
    <Menu {...openItem}/>
    {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
