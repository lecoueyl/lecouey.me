/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  loading: false,
  theme: 'light',
  chatThread: [],
});

export const mutations = {
  updateLoading: (state, status) => {
    state.loading = status;
  },

  updateTheme: (state, theme) => {
    state.theme = theme;
  },

  updateChatThread: (state, message) => {
    state.chatThread.push(message);
  },
};
