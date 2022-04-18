import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Category {
  COMMERCIALLEGACY = "COMMERCIALLEGACY",
  COMMERCIALMODERN = "COMMERCIALMODERN",
  INDUSTRIALLEGACY = "INDUSTRIALLEGACY",
  INDUSTRIALMODERN = "INDUSTRIALMODERN",
  MULTIFAMILYLEGACY = "MULTIFAMILYLEGACY",
  MULTIFAMILYMODERN = "MULTIFAMILYMODERN",
  SINGLEFAMILYLEGACY = "SINGLEFAMILYLEGACY",
  SINGLEFAMILYMODERN = "SINGLEFAMILYMODERN"
}

export enum Construction {
  LEGACY = "LEGACY",
  MODERN = "MODERN",
  BLOCK = "BLOCK",
  METALCLAD = "METALCLAD",
  ORDINARY = "ORDINARY",
  WOODFRAME = "WOODFRAME",
  CONCRETETILTUP = "CONCRETETILTUP",
  CONVENTIONAL = "CONVENTIONAL",
  LIGHTWEIGHT = "LIGHTWEIGHT"
}

export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  EXTRALARGE = "EXTRALARGE"
}

export enum Location {
  ALPHA = "ALPHA",
  BRAVO = "BRAVO",
  CHARLIE = "CHARLIE",
  DELTA = "DELTA",
  ROOF = "ROOF",
  FULLYINVOLVED = "FULLYINVOLVED"
}

export enum Survivability {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
  MARGINAL = "MARGINAL"
}

export enum Flow {
  UNIDIRECTIONAL = "UNIDIRECTIONAL",
  BIDIRECTIONAL = "BIDIRECTIONAL"
}

export enum Fire {
  ROOMCONTENTS = "ROOMCONTENTS",
  STRUCTURE = "STRUCTURE"
}

export enum Smoke {
  GRAYLAMINAR = "GRAYLAMINAR",
  GRAYTURBULENT = "GRAYTURBULENT",
  BROWNLAMINAR = "BROWNLAMINAR",
  BROWNTURBULENT = "BROWNTURBULENT",
  BLACKLAMINAR = "BLACKLAMINAR",
  BLACKTURBULENT = "BLACKTURBULENT"
}

export enum IcsNims {
  COMMAND = "COMMAND",
  WATER = "WATER",
  FIREATTACK = "FIREATTACK",
  VENTILATION = "VENTILATION",
  EXPOSURE = "EXPOSURE",
  RIC = "RIC",
  MEDICAL = "MEDICAL",
  SALVAGE = "SALVAGE"
}



export declare class Option {
  readonly id: string;
  readonly name: string;
  readonly value?: string | null;
  constructor(init: ModelInit<Option>);
  static copyOf(source: Option, mutator: (draft: MutableModel<Option>) => MutableModel<Option> | void): Option;
}

export declare class Review {
  readonly id: string;
  readonly autoScore?: number | null;
  readonly selfScore?: number | null;
  readonly transcript?: string | null;
  readonly Evolution?: Evolution | null;
  constructor(init: ModelInit<Review>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

export declare class Evolution {
  readonly id: string;
  readonly number?: number | null;
  readonly category?: Category | keyof typeof Category | null;
  readonly construction?: (Construction | null)[] | keyof typeof Construction | null;
  readonly street?: string | null;
  readonly size?: Size | keyof typeof Size | null;
  readonly stories?: number | null;
  readonly occupancy?: string | null;
  readonly conditions?: Location | keyof typeof Location | null;
  readonly entryEgress?: (Location | null)[] | keyof typeof Location | null;
  readonly survivability?: Survivability | keyof typeof Survivability | null;
  readonly placement?: Location | keyof typeof Location | null;
  readonly side?: Location | keyof typeof Location | null;
  readonly flow?: Flow | keyof typeof Flow | null;
  readonly fire?: Fire | keyof typeof Fire | null;
  readonly exhaust?: Location | keyof typeof Location | null;
  readonly smoke?: Smoke | keyof typeof Smoke | null;
  readonly withstanding?: boolean | null;
  readonly attack?: boolean | null;
  readonly ventilation?: boolean | null;
  readonly exposure?: boolean | null;
  readonly ric?: boolean | null;
  readonly medical?: boolean | null;
  readonly salvage?: boolean | null;
  constructor(init: ModelInit<Evolution>);
  static copyOf(source: Evolution, mutator: (draft: MutableModel<Evolution>) => MutableModel<Evolution> | void): Evolution;
}

export declare class Incident {
  readonly id: string;
  readonly title: string;
  readonly icsNims: IcsNims | keyof typeof IcsNims;
  readonly command: string;
  constructor(init: ModelInit<Incident>);
  static copyOf(source: Incident, mutator: (draft: MutableModel<Incident>) => MutableModel<Incident> | void): Incident;
}