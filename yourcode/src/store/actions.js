export function MOVIES_FETCH_REQUESTED_ACTION(text) {
  return {
    type: 'MOVIES_FETCH_REQUESTED',
    payload: {
      text,
    },
  };
}
