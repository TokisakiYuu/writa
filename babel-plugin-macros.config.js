const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

module.exports = {
    styledComponents: {
      ssr: true,
      pure: true,
      displayName: isDevelopment,
      minify: isProduction,
      namespace: isDevelopment ? "🐟" : null
    }
}
