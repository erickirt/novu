/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotificationsControllerGetNotificationRequest = {
  notificationId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type NotificationsControllerGetNotificationResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ActivityNotificationResponseDto;
};

/** @internal */
export const NotificationsControllerGetNotificationRequest$inboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    notificationId: z.string(),
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type NotificationsControllerGetNotificationRequest$Outbound = {
  notificationId: string;
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const NotificationsControllerGetNotificationRequest$outboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationRequest$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetNotificationRequest
  > = z.object({
    notificationId: z.string(),
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
export namespace NotificationsControllerGetNotificationRequest$ {
  /** @deprecated use `NotificationsControllerGetNotificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetNotificationRequest$inboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetNotificationRequest$outboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationRequest$Outbound` instead. */
  export type Outbound = NotificationsControllerGetNotificationRequest$Outbound;
}

export function notificationsControllerGetNotificationRequestToJSON(
  notificationsControllerGetNotificationRequest:
    NotificationsControllerGetNotificationRequest,
): string {
  return JSON.stringify(
    NotificationsControllerGetNotificationRequest$outboundSchema.parse(
      notificationsControllerGetNotificationRequest,
    ),
  );
}

export function notificationsControllerGetNotificationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerGetNotificationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerGetNotificationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerGetNotificationRequest' from JSON`,
  );
}

/** @internal */
export const NotificationsControllerGetNotificationResponse$inboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.ActivityNotificationResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationsControllerGetNotificationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ActivityNotificationResponseDto$Outbound;
};

/** @internal */
export const NotificationsControllerGetNotificationResponse$outboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationResponse$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetNotificationResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.ActivityNotificationResponseDto$outboundSchema,
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
export namespace NotificationsControllerGetNotificationResponse$ {
  /** @deprecated use `NotificationsControllerGetNotificationResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetNotificationResponse$inboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetNotificationResponse$outboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationResponse$Outbound` instead. */
  export type Outbound =
    NotificationsControllerGetNotificationResponse$Outbound;
}

export function notificationsControllerGetNotificationResponseToJSON(
  notificationsControllerGetNotificationResponse:
    NotificationsControllerGetNotificationResponse,
): string {
  return JSON.stringify(
    NotificationsControllerGetNotificationResponse$outboundSchema.parse(
      notificationsControllerGetNotificationResponse,
    ),
  );
}

export function notificationsControllerGetNotificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerGetNotificationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerGetNotificationResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerGetNotificationResponse' from JSON`,
  );
}
