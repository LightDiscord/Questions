import { register } from 'register-service-worker';

const ready = () => {
  console.info('App is being served from cache by a service worker.',
    'For more details, visit https://goo.gl/AFskqB');
};

const cached = () => {
  console.debug('Content has been cached for offline use.');
};

const updated = () => {
  console.warn('New content is available; please refresh.');
};

const offline = () => {
  console.info('No internet connection found. App is running in offline mode.');
};

const error = (error) => {
  console.error('Error during service worker registration:', error);
};

export const Register = () => {
  if (process.env.NODE_ENV === 'production') {
    return register(`${process.env.BASE_URL}service-worker.js`, {
      ready,
      cached,
      updated,
      offline,
      error
    });
  }
};
