import { WIFI_DOWN, WIFI_UP, INTERNET_DOWN, INTERNET_UP } from '../actions/home';
import { fromJS } from 'immutable';

const notify = (msg) => {
  const notification = new Notification(msg, {
    silent: true
  });

  window.setTimeout(notification.close, 1000);
}

const initialState = fromJS({
    wifi: false,
    internet: false
});

export default function counter(state = initialState, action) {
  switch (action.type) {
    case WIFI_DOWN:
      return state.set('wifi', false);
    case WIFI_UP:
      return state.set('wifi', true);
    case INTERNET_DOWN:
      notify('Internet is DOWN');

      return state.set('internet', false);
    case INTERNET_UP:
      notify('Internet is up');

      return state.set('internet', true);
    default:
      return state;
  }
}