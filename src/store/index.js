/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  chatThread: [],
  introFinished: false,
  loading: false,
  pageTransitioning: true,
});

export const mutations = {
  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
  setIntroFinished: (state) => {
    state.introFinished = true;
  },
  updatePageTransitioning: (state, status) => {
    state.pageTransitioning = status;
  },
  updateLoading: (state, status) => {
    state.loading = status;
  },
};
