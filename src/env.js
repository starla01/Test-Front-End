const location = window.location.href;
const isLocal = location.includes("localhost");

const localConfig = {
  MAIN_ENDPOINT: "http://endpoint.com",
};

const productionConfig = {
  MAIN_ENDPOINT: "http://endpoint-production.com",
};
const env = isLocal ? localConfig : productionConfig;

export default env;
