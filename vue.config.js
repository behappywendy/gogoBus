module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/gogoBus/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @use "@/assets/scss/_theme.scss";
        @use "@/assets/scss/_reset.scss";
        @use "@/assets/scss/_loading.scss";  
        `,
      },
    },
  },
};
