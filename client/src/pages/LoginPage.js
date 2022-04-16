import React, { useState } from 'react';
import {  Nav, Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SignUpForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <div className='background'>
          <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
        </div>
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
        
    </>

  )
}

export default LoginPage