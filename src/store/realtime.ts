import { Realtime, type InferRealtimeEvents } from "@upstash/realtime";
import { custom, number, object } from "zod/v4";

import { redis } from "./redis";

const realtime = new Realtime({
  redis,
  schema: {
    exampleNotification: object({
      createdAt: number(),
      id: number(),
      order: custom<object>(),
      updatedAt: number(),
    }),
  },
});

export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;
export { realtime };
