/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  loading: false,
  chatThread: [],
});

export const mutations = {
  updateLoading: (state, status) => {
    state.loading = status;
  },

  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
};
