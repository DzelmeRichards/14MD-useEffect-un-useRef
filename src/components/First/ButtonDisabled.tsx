import './first.scss';
import {
  FC, useState, useEffect, useRef,
} from 'react';

const ButtonDisabled = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
      setTimeout(() => {
        buttonRef.current!.disabled = false;
      }, 5000);
    }
  }, []);

  return (
    <div className="col-xs-6">
      <div className="disabled-button__container">
        <button
          className="button"
          ref={buttonRef}
        >
          Poga
        </button>
      </div>
    </div>
  );
};

export default ButtonDisabled;
