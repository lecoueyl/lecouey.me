/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  chatThread: [],
  loading: false,
  transitionPage: false,
});

export const mutations = {
  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
  updateTransitionPage: (state, status) => {
    state.transitionPage = status;
  },
  updateLoading: (state, status) => {
    state.loading = status;
  },
};
