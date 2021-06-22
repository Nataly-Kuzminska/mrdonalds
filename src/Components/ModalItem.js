import React from 'react';
import styled from 'styled-components';

const Overlay= styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
z-index: 20; 
`;
const Modal = styled.div`
background-color: #fff;
width: 600px;
height: 600px;
`;

export const ModalItem= () => (
<Overlay>
<Modal>ТЕСТ</Modal>
</Overlay>
)