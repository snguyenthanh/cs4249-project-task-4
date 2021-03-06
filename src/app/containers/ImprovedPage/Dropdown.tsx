import React, { useState } from 'react';
import DropdownOption from './DropdownOption';
import './Dropdown.css';
import DropdownOptionMenuA from './DropdownOptionMenuA';

interface Props {
  value: string;
  options: Array<any>;
  component: string;
  ignoreSubOptions?: boolean;
  large?: boolean;
  isScrollable?: boolean;
  listLength: string;
  onClick: (any) => any;
  onLogging: (any) => any;
  useMenuA: boolean;
}

export default function Dropdown(props: Props) {
  const [hidden, setHidden] = useState<boolean>(false);
  let maxSize;
  if (props.listLength === 'short') maxSize = 3;
  else if (props.listLength === 'long') maxSize = 12;
  else maxSize = 6;

  const options = props.options.slice(0, maxSize);
  return (
    <div
      className={`group inline-block shadow-sm ${
        hidden ? 'pointer-events-none' : ''
      }`}
    >
      <button
        className={`outline-none focus:outline-none border px-3 py-1 bg-white rounded-lg flex items-center min-w-32 ${
          props.large ? 'h-12 text-xl' : ''
        }`}
        onClick={evt => evt.stopPropagation()}
      >
        <span className="pr-1 flex-1">{props.value}</span>
        <span>
          <svg
            className={`fill-current h-4 w-4
            transition duration-150 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className={`shadow-sm bg-white mt-2 border rounded-lg transform scale-0 group-hover:scale-100 absolute
      transition duration-150 ease-in-out origin-top min-w-32 ${
        props.isScrollable ? 'h-24 overflow-y-scroll' : ''
      }`}
      >
        {options.map(option => {
          if (props.useMenuA)
            return (
              <DropdownOptionMenuA
                onClick={value => {
                  props.onClick(value);
                  props.onLogging({
                    eventname: 'click',
                    target: props.component,
                    info: `[${props.component}] Choose the option: ${value}`,
                  });
                  setHidden(true);
                  setTimeout(() => {
                    setHidden(false);
                  }, 100);
                }}
                listLength={props.listLength}
                ignoreSubOptions={props.ignoreSubOptions}
                large={props.large}
                {...option}
              />
            );

          return (
            <DropdownOption
              onClick={value => {
                props.onClick(value);
                props.onLogging({
                  eventname: 'click',
                  target: props.component,
                  info: `[${props.component}] Choose the option: ${value}`,
                });
                setHidden(true);
                setTimeout(() => {
                  setHidden(false);
                }, 100);
              }}
              listLength={props.listLength}
              ignoreSubOptions={props.ignoreSubOptions}
              large={props.large}
              {...option}
            />
          );
        })}
      </ul>
    </div>
  );
}
