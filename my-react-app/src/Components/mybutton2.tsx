import React from 'react';

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

export const MyButton2: React.FC<MyButtonProps> = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
};