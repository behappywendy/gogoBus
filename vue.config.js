module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @use "@/assets/scss/_theme.scss";
        @use "@/assets/scss/_reset.scss";
        `,
      },
    },
  },
};
