const initlaState = {
  GET_MARVEL_HERO: false,
};

export default function loadingReducer(state = initlaState, action) {
  const {type} = action;

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
}
