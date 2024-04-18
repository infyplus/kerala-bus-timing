export default defineEventHandler(({ res, context }) => {
  const db = context.cloudflare.env.DB;
  let query = db.prepare("SELECT * FROM test LIMIT 5").run();
  console.log(query);
  return res.end(
    JSON.stringify({
      message: "hello world",
    })
  );
});
