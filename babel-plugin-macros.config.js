const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = !isDevelopment;

module.exports = {
    styledComponents: {
      ssr: true,
      pure: true,
      displayName: isDevelopment,
      minify: isProduction,
      namespace: isDevelopment ? "🐟" : null
    }
}
