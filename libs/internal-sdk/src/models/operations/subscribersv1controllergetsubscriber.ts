/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersV1ControllerGetSubscriberRequest = {
  subscriberId: string;
  /**
   * Includes the topics associated with the subscriber
   */
  includeTopics?: boolean | undefined;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type SubscribersV1ControllerGetSubscriberResponse = {
  headers: { [k: string]: Array<string> };
  result: components.SubscriberResponseDto;
};

/** @internal */
export const SubscribersV1ControllerGetSubscriberRequest$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    includeTopics: z.boolean().optional(),
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type SubscribersV1ControllerGetSubscriberRequest$Outbound = {
  subscriberId: string;
  includeTopics?: boolean | undefined;
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const SubscribersV1ControllerGetSubscriberRequest$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberRequest$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerGetSubscriberRequest
  > = z.object({
    subscriberId: z.string(),
    includeTopics: z.boolean().optional(),
    idempotencyKey: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersV1ControllerGetSubscriberRequest$ {
  /** @deprecated use `SubscribersV1ControllerGetSubscriberRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerGetSubscriberRequest$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerGetSubscriberRequest$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberRequest$Outbound` instead. */
  export type Outbound = SubscribersV1ControllerGetSubscriberRequest$Outbound;
}

export function subscribersV1ControllerGetSubscriberRequestToJSON(
  subscribersV1ControllerGetSubscriberRequest:
    SubscribersV1ControllerGetSubscriberRequest,
): string {
  return JSON.stringify(
    SubscribersV1ControllerGetSubscriberRequest$outboundSchema.parse(
      subscribersV1ControllerGetSubscriberRequest,
    ),
  );
}

export function subscribersV1ControllerGetSubscriberRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerGetSubscriberRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerGetSubscriberRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersV1ControllerGetSubscriberRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersV1ControllerGetSubscriberResponse$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.SubscriberResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersV1ControllerGetSubscriberResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.SubscriberResponseDto$Outbound;
};

/** @internal */
export const SubscribersV1ControllerGetSubscriberResponse$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberResponse$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerGetSubscriberResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.SubscriberResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersV1ControllerGetSubscriberResponse$ {
  /** @deprecated use `SubscribersV1ControllerGetSubscriberResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerGetSubscriberResponse$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerGetSubscriberResponse$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberResponse$Outbound` instead. */
  export type Outbound = SubscribersV1ControllerGetSubscriberResponse$Outbound;
}

export function subscribersV1ControllerGetSubscriberResponseToJSON(
  subscribersV1ControllerGetSubscriberResponse:
    SubscribersV1ControllerGetSubscriberResponse,
): string {
  return JSON.stringify(
    SubscribersV1ControllerGetSubscriberResponse$outboundSchema.parse(
      subscribersV1ControllerGetSubscriberResponse,
    ),
  );
}

export function subscribersV1ControllerGetSubscriberResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerGetSubscriberResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerGetSubscriberResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersV1ControllerGetSubscriberResponse' from JSON`,
  );
}
