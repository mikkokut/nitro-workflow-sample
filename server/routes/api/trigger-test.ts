import { eventHandler, setHeader } from "h3";
import { start } from "workflow/api";
import { test } from "../../../workflows/test";

export default eventHandler(async (event) => {
  // Start the workflow
  const run = await start(test);

  // Get the readable stream
  const stream = run.getReadable();

  // Set headers for streaming
  setHeader(event, "Content-Type", "text/event-stream");
  setHeader(event, "Cache-Control", "no-cache");
  setHeader(event, "Connection", "keep-alive");

  // Return the stream as the response
  return stream;
});
