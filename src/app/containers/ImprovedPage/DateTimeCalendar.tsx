import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';

import 'rc-calendar/assets/index.css';

interface Props {
  onChange: (any) => any;
  closeCalendar: () => any;
  onLogging: (any) => any;
}

export default function DateTimeCalendar(props: Props) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={evt => {
            evt.stopPropagation();
            props.closeCalendar();
            props.onLogging({
              eventname: 'click',
              target: 'Calendar - outside',
              info: 'Click outside the calendar to close it',
            });
          }}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          onClick={evt => evt.stopPropagation()}
        >
          <RangeCalendar
            mode={['date', 'date']}
            onChange={date => props.onChange(date)}
          />
        </div>
      </div>
    </div>
  );
}
