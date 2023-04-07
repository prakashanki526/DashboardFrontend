import React from 'react';
import Modal from 'react-modal'

const LoadingModal = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff'
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
    };

    return (
        <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={()=>props.setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex h-full w-full items-center justify-center'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
      </Modal>
    );
};

export default LoadingModal;