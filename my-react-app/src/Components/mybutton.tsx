import React from 'react';
interface MyButtonProps {
    count: number;
    onClick: () => void;
  }
export const MyButton: React.FC<MyButtonProps> = ({ count, onClick }) => {
    function handleClick() {
        alert('Hey , You  clicked me');
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times
            Dare to click
        </button>
    );
}