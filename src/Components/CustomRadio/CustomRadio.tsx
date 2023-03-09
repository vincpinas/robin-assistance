import React, { useRef } from 'react';
import './CustomRadio.scss';

interface CRProps {
  text: string;
  onChange: Function;
  selected: any;
  value: string | number;
  id: string;
}

function CustomRadio({ text, onChange, selected, value, id }: CRProps) {
  const innerCircle = useRef<HTMLDivElement>(null);
  const ex = () => {
    onChange(value);
    if (innerCircle.current) {
      innerCircle.current.style.animationName = 'randomFakeAnimation'
      setTimeout(() => {
        if (innerCircle.current) {
          innerCircle.current.style.animation = 'none';
          innerCircle.current.style.animation = '';
        }
      }, 10);
    }
  };

  return (
    <span
      className="modern-radio-component"
      onClick={ex}
      id={id}
    >
      <div className={`radio-outer-circle ${value !== selected && "unselected"}`}>
        <div className={`radio-inner-circle ${value !== selected && "unselected-circle"}`} ref={innerCircle} />
      </div>
      <div className={`helper-text ${value !== selected && "unselected"}`}>
        {text}
      </div>
    </span>
  );
}

export default CustomRadio