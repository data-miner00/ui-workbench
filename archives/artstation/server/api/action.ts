export default defineEventHandler((event) => {
  const query = getQuery(event);
  const body = readBody(event);

  return {
    action: "simple get request",
  };
});
