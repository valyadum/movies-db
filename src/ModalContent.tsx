import React from 'react';

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
    console.log('(() => (true) ')
    
  return (
    <div >
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalContent;