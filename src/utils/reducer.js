import { OPTIONS } from 'constants';

export function reducer(state, action) {
  switch (action.type) {
    case OPTIONS.good: {
      return { ...state, good: state.good + 1 };
    }
    case OPTIONS.neutral: {
      return { ...state, neutral: state.neutral + 1 };
    }
    case OPTIONS.bad: {
      return { ...state, bad: state.bad + 1 };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}
