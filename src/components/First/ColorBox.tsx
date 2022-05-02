import './first.scss';
import {
  FC, useState, useEffect, useRef,
} from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('red');
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const createBoxFunction = () => {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.className = 'box';
    wrapperRef.current?.appendChild(box);
  };

  return (
    <div className="col-xs-6">
      <div className="color-box__container">
        <div className="color-box__menu">
          <button
            className="button"
            onClick={() => {
              createBoxFunction();
            }}
          >
            +
          </button>

          <select
            onChange={(e) => (
              setColor(e.target.value)
            )}
            value={color}
            name="color dropdown"
            id="color dropdown"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>

          </select>
        </div>
        <div
          className="box__wrapper"
          ref={wrapperRef}
        />

      </div>
    </div>
  );
};

export default ColorBox;
