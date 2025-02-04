/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * the preferences level to be retrieved (template / global)
 */
export const Parameter = {
  Global: "global",
  Template: "template",
} as const;
/**
 * the preferences level to be retrieved (template / global)
 */
export type Parameter = ClosedEnum<typeof Parameter>;

export type SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest = {
  /**
   * A flag which specifies if the inactive workflow channels should be included in the retrieved preferences. Default is true
   */
  includeInactiveChannels?: boolean | undefined;
  /**
   * the preferences level to be retrieved (template / global)
   */
  preferenceLevel: Parameter;
  subscriberId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.GetSubscriberPreferencesResponseDto>;
};

/** @internal */
export const Parameter$inboundSchema: z.ZodNativeEnum<typeof Parameter> = z
  .nativeEnum(Parameter);

/** @internal */
export const Parameter$outboundSchema: z.ZodNativeEnum<typeof Parameter> =
  Parameter$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Parameter$ {
  /** @deprecated use `Parameter$inboundSchema` instead. */
  export const inboundSchema = Parameter$inboundSchema;
  /** @deprecated use `Parameter$outboundSchema` instead. */
  export const outboundSchema = Parameter$outboundSchema;
}

/** @internal */
export const SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    includeInactiveChannels: z.boolean().optional(),
    preferenceLevel: Parameter$inboundSchema,
    subscriberId: z.string(),
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$Outbound =
  {
    includeInactiveChannels?: boolean | undefined;
    preferenceLevel: string;
    subscriberId: string;
    "idempotency-key"?: string | undefined;
  };

/** @internal */
export const SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest
  > = z.object({
    includeInactiveChannels: z.boolean().optional(),
    preferenceLevel: Parameter$outboundSchema,
    subscriberId: z.string(),
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
export namespace SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$ {
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$Outbound` instead. */
  export type Outbound =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$Outbound;
}

export function subscribersV1ControllerGetSubscriberPreferenceByLevelRequestToJSON(
  subscribersV1ControllerGetSubscriberPreferenceByLevelRequest:
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest,
): string {
  return JSON.stringify(
    SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$outboundSchema
      .parse(subscribersV1ControllerGetSubscriberPreferenceByLevelRequest),
  );
}

export function subscribersV1ControllerGetSubscriberPreferenceByLevelRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'SubscribersV1ControllerGetSubscriberPreferenceByLevelRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.array(
      components.GetSubscriberPreferencesResponseDto$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$Outbound =
  {
    Headers: { [k: string]: Array<string> };
    Result: Array<components.GetSubscriberPreferencesResponseDto$Outbound>;
  };

/** @internal */
export const SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.array(
      components.GetSubscriberPreferencesResponseDto$outboundSchema,
    ),
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
export namespace SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$ {
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$Outbound` instead. */
  export type Outbound =
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$Outbound;
}

export function subscribersV1ControllerGetSubscriberPreferenceByLevelResponseToJSON(
  subscribersV1ControllerGetSubscriberPreferenceByLevelResponse:
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse,
): string {
  return JSON.stringify(
    SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$outboundSchema
      .parse(subscribersV1ControllerGetSubscriberPreferenceByLevelResponse),
  );
}

export function subscribersV1ControllerGetSubscriberPreferenceByLevelResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'SubscribersV1ControllerGetSubscriberPreferenceByLevelResponse' from JSON`,
  );
}
