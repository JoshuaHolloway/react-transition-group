import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

import './styles.css';

// ==============================================

export default function App() {
  // --------------------------------------------

  const [open, setOpen] = useState(false);

  // --------------------------------------------

  return (
    <div className='App'>
      <p>Modal: {open ? 'opened' : 'closed'}</p>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal show={open} setShow={setOpen} />
      <Backdrop show={open} />
      <div>branch-1--css-animation</div>
    </div>
  );

  // --------------------------------------------
}
