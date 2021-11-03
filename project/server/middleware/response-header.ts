import type { IncomingMessage, ServerResponse } from "http";
export default (
  _req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => {
  res.setHeader("Cache-Control", "public, max-age=600, s-maxage=3000");
  next();
};
