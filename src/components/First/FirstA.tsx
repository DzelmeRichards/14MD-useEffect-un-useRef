import './first.scss';
import {
  FC, useState, useEffect, useRef,
} from 'react';

const FirstA = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Changing Count');
  }, [count]);

  useEffect(() => {
    console.log('Input Change');
  }, [inputValue]);

  useEffect(() => {
    console.log('First Render');
  }, []);

  useEffect(() => {
    console.log('Render');
  });

  return (
    <div className="col-xs-6">
      <div className="first__container">
        <div className="row">
          <div className="col-xs-12">
            <button
              className="button"
              type="button"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +

            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span>
              Count:
              {count}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <input
              className="input"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span
              className="text"
            >
              {inputValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstA;
