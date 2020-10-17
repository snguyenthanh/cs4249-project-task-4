/**
 *
 * ImprovedPage
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectImprovedPage } from './selectors';
import { improvedPageSaga } from './saga';

import Dropdown from './Dropdown';
import DateTimeCalendar from './DateTimeCalendar';
import { facilities } from './locations';

interface Props {}

// Old UI: https://utownfbs.nus.edu.sg/utown/apptop.aspx

export const ImprovedPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: improvedPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const improvedPage = useSelector(selectImprovedPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const [facility, setFacility] = useState<any>(
    'Please select a facility type',
  );
  const [location, setLocation] = useState<any>('');
  const [dates, setDates] = useState<any>([]);
  const [capacity, setCapacity] = useState<any>(null);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const chosenFacility: any =
    facility !== null ? facilities.find(item => item.value === facility) : {};

  const onLogging = payload => {
    const { eventname, target, info } = payload;
    dispatch(
      actions.sendToGoogleForm({
        eventname,
        target,
        info,
      }),
    );
  };

  return (
    <div className="bg-gray-100 p-6 h-screen font-sans">
      <Helmet>
        <title>ImprovedPage</title>
        <meta name="description" content="Description of ImprovedPage" />
      </Helmet>

      <div className="max-w-6xl h-56 min-h-full p-6 rounded overflow-hidden shadow-md">
        <h1 className="flex-1 text-3xl font-medium">New Booking</h1>
        <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">
          Facility / Resource Type*
        </h2>
        <Dropdown
          value={facility}
          options={facilities}
          component="Facility"
          onClick={value => {
            setFacility(value);
            setLocation('');
          }}
          onLogging={onLogging}
        />

        <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Location*</h2>
        <Dropdown
          value={location}
          options={chosenFacility ? chosenFacility.locations : []}
          component="Location"
          onClick={value => setLocation(value)}
          onLogging={onLogging}
        />

        <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Capacity</h2>
        <Dropdown
          value={capacity}
          options={[
            { value: 5 },
            { value: 10 },
            { value: 20 },
            { value: 50 },
            { value: 100 },
            { value: 200 },
          ]}
          component="Capacity"
          onClick={value => setCapacity(value)}
          onLogging={onLogging}
        />
        <br />
        <div>
          <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Date</h2>
          <div>
            <input
              className="inline-block form-input block w-56 sm:text-sm sm:leading-5 rounded-md shadow-sm"
              onClick={() => {
                setOpenCalendar(true);
                onLogging({
                  eventname: 'click',
                  target: 'Start Date',
                  info: 'Show calendar modal',
                });
              }}
              value={dates.length > 0 ? dates[0].format('DD-MMM-YYYY') : ''}
            />
            <span className="inline-block mx-4">to</span>
            <input
              className="inline-block form-input block w-56 sm:text-sm sm:leading-5 rounded-md shadow-sm"
              onClick={() => {
                setOpenCalendar(true);
                onLogging({
                  eventname: 'click',
                  target: 'End Date',
                  info: 'Show calendar modal',
                });
              }}
              value={dates.length > 1 ? dates[1].format('DD-MMM-YYYY') : ''}
            />
          </div>
        </div>
        {openCalendar ? (
          <DateTimeCalendar
            onChange={date => {
              setDates(date);
              if (date.length === 1)
                onLogging({
                  eventname: 'click',
                  target: 'Calendar',
                  info: `Choose the Start date: ${date[0].format(
                    'DD-MMM-YYYY',
                  )}`,
                });
              else if (date.length === 2)
                onLogging({
                  eventname: 'click',
                  target: 'Calendar',
                  info: `Choose the End date: ${date[1].format('DD-MMM-YYYY')}`,
                });

              if (date.length > 1) setOpenCalendar(false);
            }}
            closeCalendar={() => setOpenCalendar(false)}
            onLogging={onLogging}
          />
        ) : (
          <div />
        )}

        <span className="inline-flex rounded-md shadow-sm mt-32">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 text-base leading-6 font-medium rounded-md text-white
            bg-gradient-to-r from-green-400 to-green-700 hover:from-green-300 hover:to-green-600 focus:outline-none focus:shadow-outline-green
            transition ease-in-out duration-150"
            onClick={() => {
              onLogging({
                eventname: 'click',
                target: 'Search Button',
                info: 'Search button clicked',
              });
            }}
          >
            Search Availability
          </button>
        </span>
      </div>
    </div>
  );
});
