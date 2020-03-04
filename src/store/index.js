/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  chatThread: [],
  introFinished: false,
  loading: false,
  transitionPage: false,
});

export const mutations = {
  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
  updateIntroFinished: (state, status) => {
    state.introFinished = status;
  },
  updateTransitionPage: (state, status) => {
    state.transitionPage = status;
  },
  updateLoading: (state, status) => {
    state.loading = status;
  },
};
