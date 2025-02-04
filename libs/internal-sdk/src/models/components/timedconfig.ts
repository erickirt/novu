/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const TimedConfigWeekDays = {
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
  Sunday: "sunday",
} as const;
export type TimedConfigWeekDays = ClosedEnum<typeof TimedConfigWeekDays>;

export const Ordinal = {
  One: "1",
  Two: "2",
  Three: "3",
  Four: "4",
  Five: "5",
  Last: "last",
} as const;
export type Ordinal = ClosedEnum<typeof Ordinal>;

export const OrdinalValue = {
  Day: "day",
  Weekday: "weekday",
  Weekend: "weekend",
  Sunday: "sunday",
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
} as const;
export type OrdinalValue = ClosedEnum<typeof OrdinalValue>;

export const MonthlyType = {
  Each: "each",
  On: "on",
} as const;
export type MonthlyType = ClosedEnum<typeof MonthlyType>;

export type TimedConfig = {
  atTime?: string | undefined;
  weekDays?: Array<TimedConfigWeekDays> | undefined;
  monthDays?: Array<string> | undefined;
  ordinal?: Ordinal | undefined;
  ordinalValue?: OrdinalValue | undefined;
  monthlyType?: MonthlyType | undefined;
};

/** @internal */
export const TimedConfigWeekDays$inboundSchema: z.ZodNativeEnum<
  typeof TimedConfigWeekDays
> = z.nativeEnum(TimedConfigWeekDays);

/** @internal */
export const TimedConfigWeekDays$outboundSchema: z.ZodNativeEnum<
  typeof TimedConfigWeekDays
> = TimedConfigWeekDays$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimedConfigWeekDays$ {
  /** @deprecated use `TimedConfigWeekDays$inboundSchema` instead. */
  export const inboundSchema = TimedConfigWeekDays$inboundSchema;
  /** @deprecated use `TimedConfigWeekDays$outboundSchema` instead. */
  export const outboundSchema = TimedConfigWeekDays$outboundSchema;
}

/** @internal */
export const Ordinal$inboundSchema: z.ZodNativeEnum<typeof Ordinal> = z
  .nativeEnum(Ordinal);

/** @internal */
export const Ordinal$outboundSchema: z.ZodNativeEnum<typeof Ordinal> =
  Ordinal$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Ordinal$ {
  /** @deprecated use `Ordinal$inboundSchema` instead. */
  export const inboundSchema = Ordinal$inboundSchema;
  /** @deprecated use `Ordinal$outboundSchema` instead. */
  export const outboundSchema = Ordinal$outboundSchema;
}

/** @internal */
export const OrdinalValue$inboundSchema: z.ZodNativeEnum<typeof OrdinalValue> =
  z.nativeEnum(OrdinalValue);

/** @internal */
export const OrdinalValue$outboundSchema: z.ZodNativeEnum<typeof OrdinalValue> =
  OrdinalValue$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdinalValue$ {
  /** @deprecated use `OrdinalValue$inboundSchema` instead. */
  export const inboundSchema = OrdinalValue$inboundSchema;
  /** @deprecated use `OrdinalValue$outboundSchema` instead. */
  export const outboundSchema = OrdinalValue$outboundSchema;
}

/** @internal */
export const MonthlyType$inboundSchema: z.ZodNativeEnum<typeof MonthlyType> = z
  .nativeEnum(MonthlyType);

/** @internal */
export const MonthlyType$outboundSchema: z.ZodNativeEnum<typeof MonthlyType> =
  MonthlyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MonthlyType$ {
  /** @deprecated use `MonthlyType$inboundSchema` instead. */
  export const inboundSchema = MonthlyType$inboundSchema;
  /** @deprecated use `MonthlyType$outboundSchema` instead. */
  export const outboundSchema = MonthlyType$outboundSchema;
}

/** @internal */
export const TimedConfig$inboundSchema: z.ZodType<
  TimedConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  atTime: z.string().optional(),
  weekDays: z.array(TimedConfigWeekDays$inboundSchema).optional(),
  monthDays: z.array(z.string()).optional(),
  ordinal: Ordinal$inboundSchema.optional(),
  ordinalValue: OrdinalValue$inboundSchema.optional(),
  monthlyType: MonthlyType$inboundSchema.optional(),
});

/** @internal */
export type TimedConfig$Outbound = {
  atTime?: string | undefined;
  weekDays?: Array<string> | undefined;
  monthDays?: Array<string> | undefined;
  ordinal?: string | undefined;
  ordinalValue?: string | undefined;
  monthlyType?: string | undefined;
};

/** @internal */
export const TimedConfig$outboundSchema: z.ZodType<
  TimedConfig$Outbound,
  z.ZodTypeDef,
  TimedConfig
> = z.object({
  atTime: z.string().optional(),
  weekDays: z.array(TimedConfigWeekDays$outboundSchema).optional(),
  monthDays: z.array(z.string()).optional(),
  ordinal: Ordinal$outboundSchema.optional(),
  ordinalValue: OrdinalValue$outboundSchema.optional(),
  monthlyType: MonthlyType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimedConfig$ {
  /** @deprecated use `TimedConfig$inboundSchema` instead. */
  export const inboundSchema = TimedConfig$inboundSchema;
  /** @deprecated use `TimedConfig$outboundSchema` instead. */
  export const outboundSchema = TimedConfig$outboundSchema;
  /** @deprecated use `TimedConfig$Outbound` instead. */
  export type Outbound = TimedConfig$Outbound;
}

export function timedConfigToJSON(timedConfig: TimedConfig): string {
  return JSON.stringify(TimedConfig$outboundSchema.parse(timedConfig));
}

export function timedConfigFromJSON(
  jsonString: string,
): SafeParseResult<TimedConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TimedConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TimedConfig' from JSON`,
  );
}
