import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Modal, Tooltip } from 'flowbite-react';

const Profile = () => {
  const { user } = useAuthContext();

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <div>
      <Tooltip content='Profile' placement='bottom'>
        <img
          src={user.photoURL}
          alt='profile'
          onClick={() => props.setOpenModal('dismissible')}
          className='w-9 h-9 rounded-[10px] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'
        />
      </Tooltip>
      <Modal
        dismissible
        show={props.openModal === 'dismissible'}
        onClose={() => props.setOpenModal(undefined)}
        className='flex items-center justify-center h-screen'>
        <Modal.Header>Profile</Modal.Header>
        <Modal.Body>
          <div className='text-center space-y-6'>
            <img
              src={user.photoURL}
              alt='profile'
              className='w-28 h-28 rounded-full mx-auto mb-2'
            />
            <p className='text-lg leading-relaxed text-gray-500'>
              {user.displayName}
            </p>
            <p className='text-lg leading-relaxed text-gray-500'>
              {user.email}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
