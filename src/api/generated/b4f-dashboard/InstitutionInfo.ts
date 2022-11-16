/**
 * Do not edit this file it is auto-generated by io-utils / gen-api-models.
 * See https://github.com/pagopa/io-utils
 */
/* eslint-disable  */

import { DpoData } from "./DpoData";
import { PspData } from "./PspData";
import * as t from "io-ts";
import { EmailString } from "@pagopa/ts-commons/lib/strings";
import { enumType } from "@pagopa/ts-commons/lib/types";

export enum InstitutionTypeEnum {
  "GSP" = "GSP",

  "PA" = "PA",

  "PSP" = "PSP",

  "PT" = "PT",

  "SCP" = "SCP"
}

// required attributes
const InstitutionInfoR = t.interface({
  address: t.string,

  fiscalCode: t.string,

  id: t.string,

  mailAddress: EmailString,

  name: t.string,

  recipientCode: t.string,

  vatNumber: t.string,

  zipCode: t.string
});

// optional attributes
const InstitutionInfoO = t.partial({
  dpoData: DpoData,

  institutionType: enumType<InstitutionTypeEnum>(
    InstitutionTypeEnum,
    "institutionType"
  ),

  pspData: PspData
});

export const InstitutionInfo = t.intersection(
  [InstitutionInfoR, InstitutionInfoO],
  "InstitutionInfo"
);

export type InstitutionInfo = t.TypeOf<typeof InstitutionInfo>;
