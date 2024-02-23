import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CaseContentDynamicZoneInput: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Banner = {
  readonly __typename?: 'Banner';
  readonly button: Maybe<ComponentUiLink>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly imgDesktop: UploadFileEntityResponse;
  readonly imgMobile: UploadFileEntityResponse;
  readonly label: Maybe<Scalars['String']['output']>;
  readonly offerBannerDesktop: UploadFileEntityResponse;
  readonly offerBannerMobile: UploadFileEntityResponse;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly widthDescription: Maybe<Scalars['Int']['output']>;
  readonly widthTitle: Maybe<Scalars['Int']['output']>;
};

export type BannerEntity = {
  readonly __typename?: 'BannerEntity';
  readonly attributes: Maybe<Banner>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type BannerEntityResponse = {
  readonly __typename?: 'BannerEntityResponse';
  readonly data: Maybe<BannerEntity>;
};

export type BannerEntityResponseCollection = {
  readonly __typename?: 'BannerEntityResponseCollection';
  readonly data: ReadonlyArray<BannerEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type BannerFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<BannerFiltersInput>>>;
  readonly button: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<BannerFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<BannerFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly widthDescription: InputMaybe<IntFilterInput>;
  readonly widthTitle: InputMaybe<IntFilterInput>;
};

export type BannerInput = {
  readonly button: InputMaybe<ComponentUiLinkInput>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly imgDesktop: InputMaybe<Scalars['ID']['input']>;
  readonly imgMobile: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly offerBannerDesktop: InputMaybe<Scalars['ID']['input']>;
  readonly offerBannerMobile: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly widthDescription: InputMaybe<Scalars['Int']['input']>;
  readonly widthTitle: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type Case = {
  readonly __typename?: 'Case';
  readonly Footer: Maybe<ComponentComponentsFooter>;
  readonly backround: Scalars['JSON']['output'];
  readonly case_names: Maybe<CaseNameRelationResponseCollection>;
  readonly content: ReadonlyArray<Maybe<CaseContentDynamicZone>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly imageBig: UploadFileEntityResponse;
  readonly imageMain: UploadFileEntityResponse;
  readonly info: Scalars['String']['output'];
  readonly mobileName: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CaseCase_NamesArgs = {
  filters: InputMaybe<CaseNameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseContentDynamicZone = ComponentImageBlocksDoubleImage | ComponentImageBlocksDoubleTextBlocks | ComponentImageBlocksGridImage | ComponentImageBlocksOneImage | ComponentImageBlocksTextBlock | Error;

export type CaseEntity = {
  readonly __typename?: 'CaseEntity';
  readonly attributes: Maybe<Case>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type CaseEntityResponse = {
  readonly __typename?: 'CaseEntityResponse';
  readonly data: Maybe<CaseEntity>;
};

export type CaseEntityResponseCollection = {
  readonly __typename?: 'CaseEntityResponseCollection';
  readonly data: ReadonlyArray<CaseEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CaseFiltersInput = {
  readonly Footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CaseFiltersInput>>>;
  readonly backround: InputMaybe<JsonFilterInput>;
  readonly case_names: InputMaybe<CaseNameFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly info: InputMaybe<StringFilterInput>;
  readonly mobileName: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<CaseFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CaseFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CaseInput = {
  readonly Footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly backround: InputMaybe<Scalars['JSON']['input']>;
  readonly case_names: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly content: InputMaybe<ReadonlyArray<Scalars['CaseContentDynamicZoneInput']['input']>>;
  readonly imageBig: InputMaybe<Scalars['ID']['input']>;
  readonly imageMain: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly mobileName: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type CaseName = {
  readonly __typename?: 'CaseName';
  readonly cases: Maybe<CaseRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly nameID: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CaseNameCasesArgs = {
  filters: InputMaybe<CaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseNameEntity = {
  readonly __typename?: 'CaseNameEntity';
  readonly attributes: Maybe<CaseName>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type CaseNameEntityResponse = {
  readonly __typename?: 'CaseNameEntityResponse';
  readonly data: Maybe<CaseNameEntity>;
};

export type CaseNameEntityResponseCollection = {
  readonly __typename?: 'CaseNameEntityResponseCollection';
  readonly data: ReadonlyArray<CaseNameEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CaseNameFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CaseNameFiltersInput>>>;
  readonly cases: InputMaybe<CaseFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly nameID: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<CaseNameFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CaseNameFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CaseNameInput = {
  readonly cases: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly nameID: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseNameRelationResponseCollection = {
  readonly __typename?: 'CaseNameRelationResponseCollection';
  readonly data: ReadonlyArray<CaseNameEntity>;
};

export type CaseRelationResponseCollection = {
  readonly __typename?: 'CaseRelationResponseCollection';
  readonly data: ReadonlyArray<CaseEntity>;
};

export type Complex = {
  readonly __typename?: 'Complex';
  readonly banner: Maybe<UploadFileEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly deadlines: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly footer: Maybe<ComponentComponentsFooter>;
  readonly includes_blocks: Maybe<IncludesBlockRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly offer: Maybe<ComponentElementsOffer>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly totalHours: Maybe<Scalars['Int']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly videoMobile: Maybe<UploadFileEntityResponse>;
};


export type ComplexIncludes_BlocksArgs = {
  filters: InputMaybe<IncludesBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComplexAccompany = {
  readonly __typename?: 'ComplexAccompany';
  readonly banner: Maybe<UploadFileEntityResponse>;
  readonly complexBlocks: Maybe<ReadonlyArray<Maybe<ComponentComponentsComplexComponent>>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly footer: Maybe<ComponentComponentsFooter>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ComplexAccompanyComplexBlocksArgs = {
  filters: InputMaybe<ComponentComponentsComplexComponentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComplexAccompanyEntity = {
  readonly __typename?: 'ComplexAccompanyEntity';
  readonly attributes: Maybe<ComplexAccompany>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ComplexAccompanyEntityResponse = {
  readonly __typename?: 'ComplexAccompanyEntityResponse';
  readonly data: Maybe<ComplexAccompanyEntity>;
};

export type ComplexAccompanyInput = {
  readonly banner: InputMaybe<Scalars['ID']['input']>;
  readonly complexBlocks: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsComplexComponentInput>>>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComplexEntity = {
  readonly __typename?: 'ComplexEntity';
  readonly attributes: Maybe<Complex>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ComplexEntityResponse = {
  readonly __typename?: 'ComplexEntityResponse';
  readonly data: Maybe<ComplexEntity>;
};

export type ComplexEntityResponseCollection = {
  readonly __typename?: 'ComplexEntityResponseCollection';
  readonly data: ReadonlyArray<ComplexEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ComplexFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComplexFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly deadlines: InputMaybe<StringFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly includes_blocks: InputMaybe<IncludesBlockFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComplexFiltersInput>;
  readonly offer: InputMaybe<ComponentElementsOfferFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComplexFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly totalHours: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ComplexInput = {
  readonly banner: InputMaybe<Scalars['ID']['input']>;
  readonly deadlines: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly includes_blocks: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly offer: InputMaybe<ComponentElementsOfferInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly totalHours: InputMaybe<Scalars['Int']['input']>;
  readonly videoMobile: InputMaybe<Scalars['ID']['input']>;
};

export type ComplexRelationResponseCollection = {
  readonly __typename?: 'ComplexRelationResponseCollection';
  readonly data: ReadonlyArray<ComplexEntity>;
};

export type ComponentBlocksIncludesHover = {
  readonly __typename?: 'ComponentBlocksIncludesHover';
  readonly id: Scalars['ID']['output'];
  readonly list: Maybe<Scalars['String']['output']>;
  readonly subTitle: Maybe<Scalars['String']['output']>;
  readonly text: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksIncludesHoverFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentBlocksIncludesHoverFiltersInput>>>;
  readonly list: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentBlocksIncludesHoverFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentBlocksIncludesHoverFiltersInput>>>;
  readonly subTitle: InputMaybe<StringFilterInput>;
  readonly text: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksIncludesHoverInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly list: InputMaybe<Scalars['String']['input']>;
  readonly subTitle: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsComplexComponent = {
  readonly __typename?: 'ComponentComponentsComplexComponent';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly offers: Maybe<ComplexRelationResponseCollection>;
};


export type ComponentComponentsComplexComponentOffersArgs = {
  filters: InputMaybe<ComplexFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsComplexComponentFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsComplexComponentFiltersInput>>>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentComponentsComplexComponentFiltersInput>;
  readonly offers: InputMaybe<ComplexFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsComplexComponentFiltersInput>>>;
};

export type ComponentComponentsComplexComponentInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly offers: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentComponentsFooter = {
  readonly __typename?: 'ComponentComponentsFooter';
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<UploadFileEntityResponse>;
  readonly title: Scalars['String']['output'];
};

export type ComponentComponentsFooterFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsFooterFiltersInput>>>;
  readonly not: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsFooterFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsFooterInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly img: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsHomeBanner = {
  readonly __typename?: 'ComponentComponentsHomeBanner';
  readonly IntroCard: Maybe<ReadonlyArray<Maybe<ComponentElementsIntroCard>>>;
  readonly banner: Maybe<UploadFileEntityResponse>;
  readonly bannerMasks: Maybe<UploadFileRelationResponseCollection>;
  readonly bannerMobile: Maybe<UploadFileEntityResponse>;
  readonly id: Scalars['ID']['output'];
};


export type ComponentComponentsHomeBannerIntroCardArgs = {
  filters: InputMaybe<ComponentElementsIntroCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentComponentsHomeBannerBannerMasksArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsHomeBannerInput = {
  readonly IntroCard: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardInput>>>;
  readonly banner: InputMaybe<Scalars['ID']['input']>;
  readonly bannerMasks: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly bannerMobile: InputMaybe<Scalars['ID']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentComponentsOfferComponent = {
  readonly __typename?: 'ComponentComponentsOfferComponent';
  readonly id: Scalars['ID']['output'];
  readonly name: Maybe<Scalars['String']['output']>;
  readonly offers: Maybe<OfferRelationResponseCollection>;
};


export type ComponentComponentsOfferComponentOffersArgs = {
  filters: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsOfferComponentFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsOfferComponentFiltersInput>>>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentComponentsOfferComponentFiltersInput>;
  readonly offers: InputMaybe<OfferFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsOfferComponentFiltersInput>>>;
};

export type ComponentComponentsOfferComponentInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly offers: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentComponentsSliderCase = {
  readonly __typename?: 'ComponentComponentsSliderCase';
  readonly cases: Maybe<CaseRelationResponseCollection>;
  readonly id: Scalars['ID']['output'];
};


export type ComponentComponentsSliderCaseCasesArgs = {
  filters: InputMaybe<CaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsSliderCaseFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsSliderCaseFiltersInput>>>;
  readonly cases: InputMaybe<CaseFiltersInput>;
  readonly not: InputMaybe<ComponentComponentsSliderCaseFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsSliderCaseFiltersInput>>>;
};

export type ComponentComponentsSliderCaseInput = {
  readonly cases: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentComponentsTextBlock = {
  readonly __typename?: 'ComponentComponentsTextBlock';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly titlle: Scalars['String']['output'];
};

export type ComponentComponentsTextBlockFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockFiltersInput>>>;
  readonly titlle: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsTextBlockInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly titlle: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsVacancies = {
  readonly __typename?: 'ComponentComponentsVacancies';
  readonly date: Maybe<Scalars['String']['output']>;
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<UploadFileEntityResponse>;
  readonly info: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly vacancies: Maybe<VacancyRelationResponseCollection>;
};


export type ComponentComponentsVacanciesVacanciesArgs = {
  filters: InputMaybe<VacancyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsVacanciesInput = {
  readonly date: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly vacancies: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentElementsIncludesContent = {
  readonly __typename?: 'ComponentElementsIncludesContent';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentElementsIncludesContentFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIncludesContentFiltersInput>>>;
  readonly content: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentElementsIncludesContentFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIncludesContentFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsIncludesContentInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsIntroCard = {
  readonly __typename?: 'ComponentElementsIntroCard';
  readonly id: Scalars['ID']['output'];
  readonly info: Maybe<Scalars['String']['output']>;
  readonly selectClass: Scalars['JSON']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentElementsIntroCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardFiltersInput>>>;
  readonly info: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentElementsIntroCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardFiltersInput>>>;
  readonly selectClass: InputMaybe<JsonFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsIntroCardInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly selectClass: InputMaybe<Scalars['JSON']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsOffer = {
  readonly __typename?: 'ComponentElementsOffer';
  readonly about: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: UploadFileEntityResponse;
  readonly info: Maybe<Scalars['String']['output']>;
  readonly list: Maybe<Scalars['String']['output']>;
  readonly number: Scalars['String']['output'];
  readonly price: Scalars['Int']['output'];
  readonly tag: Maybe<Scalars['String']['output']>;
  readonly titleList: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsOfferFiltersInput = {
  readonly about: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsOfferFiltersInput>>>;
  readonly info: InputMaybe<StringFilterInput>;
  readonly list: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentElementsOfferFiltersInput>;
  readonly number: InputMaybe<StringFilterInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsOfferFiltersInput>>>;
  readonly price: InputMaybe<IntFilterInput>;
  readonly tag: InputMaybe<StringFilterInput>;
  readonly titleList: InputMaybe<StringFilterInput>;
};

export type ComponentElementsOfferInput = {
  readonly about: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly img: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly list: InputMaybe<Scalars['String']['input']>;
  readonly number: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Int']['input']>;
  readonly tag: InputMaybe<Scalars['String']['input']>;
  readonly titleList: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsTitle = {
  readonly __typename?: 'ComponentElementsTitle';
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentElementsTitleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsTitleFiltersInput>>>;
  readonly not: InputMaybe<ComponentElementsTitleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsTitleFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsTitleInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsVacancy = {
  readonly __typename?: 'ComponentElementsVacancy';
  readonly btnLink: Maybe<Scalars['String']['output']>;
  readonly descriptionVacancy: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly selectLevel: Scalars['JSON']['output'];
  readonly telegrammLink: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ComponentElementsVacancyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsVacancyFiltersInput>>>;
  readonly btnLink: InputMaybe<StringFilterInput>;
  readonly descriptionVacancy: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentElementsVacancyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsVacancyFiltersInput>>>;
  readonly selectLevel: InputMaybe<JsonFilterInput>;
  readonly telegrammLink: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsVacancyInput = {
  readonly btnLink: InputMaybe<Scalars['String']['input']>;
  readonly descriptionVacancy: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly selectLevel: InputMaybe<Scalars['JSON']['input']>;
  readonly telegrammLink: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentImageBlocksDoubleImage = {
  readonly __typename?: 'ComponentImageBlocksDoubleImage';
  readonly id: Scalars['ID']['output'];
  readonly idBlock: Scalars['String']['output'];
  readonly imageOne: UploadFileEntityResponse;
  readonly imageTwo: UploadFileEntityResponse;
};

export type ComponentImageBlocksDoubleTextBlocks = {
  readonly __typename?: 'ComponentImageBlocksDoubleTextBlocks';
  readonly id: Scalars['ID']['output'];
  readonly idBlock: Scalars['String']['output'];
  readonly newDescription: Scalars['String']['output'];
  readonly newLogo: Maybe<UploadFileEntityResponse>;
  readonly newTitle: Scalars['String']['output'];
  readonly oldDescription: Scalars['String']['output'];
  readonly oldLogo: Maybe<UploadFileEntityResponse>;
  readonly oldTitle: Scalars['String']['output'];
};

export type ComponentImageBlocksGridImage = {
  readonly __typename?: 'ComponentImageBlocksGridImage';
  readonly id: Scalars['ID']['output'];
  readonly idBlock: Scalars['String']['output'];
  readonly oneImage: UploadFileEntityResponse;
  readonly selectStreech: Scalars['JSON']['output'];
  readonly threeImage: UploadFileEntityResponse;
  readonly twoImage: UploadFileEntityResponse;
};

export type ComponentImageBlocksOneImage = {
  readonly __typename?: 'ComponentImageBlocksOneImage';
  readonly id: Scalars['ID']['output'];
  readonly idBlock: Scalars['String']['output'];
  readonly image: UploadFileEntityResponse;
};

export type ComponentImageBlocksTextBlock = {
  readonly __typename?: 'ComponentImageBlocksTextBlock';
  readonly description: Scalars['String']['output'];
  readonly desctopMaxWidth: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly idBlock: Scalars['String']['output'];
  readonly selectType: Scalars['JSON']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentSectionsAboutSection = {
  readonly __typename?: 'ComponentSectionsAboutSection';
  readonly aboutDescription: Scalars['String']['output'];
  readonly aboutTitle: Scalars['String']['output'];
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly mainTitle: Scalars['String']['output'];
};

export type ComponentSectionsAboutSectionInput = {
  readonly aboutDescription: InputMaybe<Scalars['String']['input']>;
  readonly aboutTitle: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly mainTitle: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsFormSend = {
  readonly __typename?: 'ComponentSectionsFormSend';
  readonly address: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly number: Maybe<Scalars['Long']['output']>;
};

export type ComponentSectionsFormSendInput = {
  readonly address: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly number: InputMaybe<Scalars['Long']['input']>;
};

export type ComponentSectionsPartners = {
  readonly __typename?: 'ComponentSectionsPartners';
  readonly description: Scalars['String']['output'];
  readonly icons: UploadFileRelationResponseCollection;
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};


export type ComponentSectionsPartnersIconsArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsPartnersInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly icons: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsSectionTitles = {
  readonly __typename?: 'ComponentSectionsSectionTitles';
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
  readonly titles: Maybe<ReadonlyArray<Maybe<ComponentElementsTitle>>>;
};


export type ComponentSectionsSectionTitlesTitlesArgs = {
  filters: InputMaybe<ComponentElementsTitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsSectionTitlesFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSectionsSectionTitlesFiltersInput>>>;
  readonly not: InputMaybe<ComponentSectionsSectionTitlesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSectionsSectionTitlesFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly titles: InputMaybe<ComponentElementsTitleFiltersInput>;
};

export type ComponentSectionsSectionTitlesInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly titles: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsTitleInput>>>;
};

export type ComponentSectionsServices = {
  readonly __typename?: 'ComponentSectionsServices';
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly service_collections: Maybe<ServiceCollectionRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
};


export type ComponentSectionsServicesService_CollectionsArgs = {
  filters: InputMaybe<ServiceCollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsServicesFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSectionsServicesFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSectionsServicesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSectionsServicesFiltersInput>>>;
  readonly service_collections: InputMaybe<ServiceCollectionFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsServicesInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly service_collections: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  readonly __typename?: 'ComponentSharedMetaSocial';
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<UploadFileEntityResponse>;
  readonly socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  readonly title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  readonly socialNetwork: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly socialNetwork: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  readonly __typename?: 'ComponentSharedSeo';
  readonly canonicalURL: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly keywords: Maybe<Scalars['String']['output']>;
  readonly metaDescription: Scalars['String']['output'];
  readonly metaImage: Maybe<UploadFileEntityResponse>;
  readonly metaRobots: Maybe<Scalars['String']['output']>;
  readonly metaSocial: Maybe<ReadonlyArray<Maybe<ComponentSharedMetaSocial>>>;
  readonly metaTitle: Scalars['String']['output'];
  readonly metaViewport: Maybe<Scalars['String']['output']>;
  readonly structuredData: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  readonly canonicalURL: InputMaybe<StringFilterInput>;
  readonly keywords: InputMaybe<StringFilterInput>;
  readonly metaDescription: InputMaybe<StringFilterInput>;
  readonly metaRobots: InputMaybe<StringFilterInput>;
  readonly metaSocial: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  readonly metaTitle: InputMaybe<StringFilterInput>;
  readonly metaViewport: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  readonly structuredData: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  readonly canonicalURL: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly keywords: InputMaybe<Scalars['String']['input']>;
  readonly metaDescription: InputMaybe<Scalars['String']['input']>;
  readonly metaImage: InputMaybe<Scalars['ID']['input']>;
  readonly metaRobots: InputMaybe<Scalars['String']['input']>;
  readonly metaSocial: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialInput>>>;
  readonly metaTitle: InputMaybe<Scalars['String']['input']>;
  readonly metaViewport: InputMaybe<Scalars['String']['input']>;
  readonly structuredData: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentUiLink = {
  readonly __typename?: 'ComponentUiLink';
  readonly href: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiMobileLink = {
  readonly __typename?: 'ComponentUiMobileLink';
  readonly href: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Maybe<Scalars['String']['output']>;
};

export type ComponentUiMobileLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMobileLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiMobileLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMobileLinkFiltersInput>>>;
};

export type ComponentUiMobileLinkInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export type Error = {
  readonly __typename?: 'Error';
  readonly code: Scalars['String']['output'];
  readonly message: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type FormFeedback = {
  readonly __typename?: 'FormFeedback';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly formFeedback: Maybe<ComponentSectionsFormSend>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FormFeedbackEntity = {
  readonly __typename?: 'FormFeedbackEntity';
  readonly attributes: Maybe<FormFeedback>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type FormFeedbackEntityResponse = {
  readonly __typename?: 'FormFeedbackEntityResponse';
  readonly data: Maybe<FormFeedbackEntity>;
};

export type FormFeedbackInput = {
  readonly formFeedback: InputMaybe<ComponentSectionsFormSendInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type GenericMorph = Banner | Case | CaseName | Complex | ComplexAccompany | ComponentBlocksIncludesHover | ComponentComponentsComplexComponent | ComponentComponentsFooter | ComponentComponentsHomeBanner | ComponentComponentsOfferComponent | ComponentComponentsSliderCase | ComponentComponentsTextBlock | ComponentComponentsVacancies | ComponentElementsIncludesContent | ComponentElementsIntroCard | ComponentElementsOffer | ComponentElementsTitle | ComponentElementsVacancy | ComponentImageBlocksDoubleImage | ComponentImageBlocksDoubleTextBlocks | ComponentImageBlocksGridImage | ComponentImageBlocksOneImage | ComponentImageBlocksTextBlock | ComponentSectionsAboutSection | ComponentSectionsFormSend | ComponentSectionsPartners | ComponentSectionsSectionTitles | ComponentSectionsServices | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentUiLink | ComponentUiMobileLink | FormFeedback | Header | HomePage | I18NLocale | IncludesBlock | MobileNavigation | Offer | OffersPage | Partner | PortfolioPage | SeoCollectionService | SeoComplexPage | SeoOffersPage | Service | ServiceCollection | ServiceName | ServicesPage | Studio | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Vacancy;

export type Header = {
  readonly __typename?: 'Header';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderLinksArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderEntity = {
  readonly __typename?: 'HeaderEntity';
  readonly attributes: Maybe<Header>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  readonly __typename?: 'HeaderEntityResponse';
  readonly data: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePage = {
  readonly __typename?: 'HomePage';
  readonly HomeBanner: Maybe<ComponentComponentsHomeBanner>;
  readonly cases: Maybe<CaseRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageCasesArgs = {
  filters: InputMaybe<CaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  readonly __typename?: 'HomePageEntity';
  readonly attributes: Maybe<HomePage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  readonly __typename?: 'HomePageEntityResponse';
  readonly data: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  readonly HomeBanner: InputMaybe<ComponentComponentsHomeBannerInput>;
  readonly cases: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IncludesBlock = {
  readonly __typename?: 'IncludesBlock';
  readonly blockHover: Maybe<ComponentBlocksIncludesHover>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly includesContent: Maybe<ReadonlyArray<Maybe<ComponentElementsIncludesContent>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IncludesBlockIncludesContentArgs = {
  filters: InputMaybe<ComponentElementsIncludesContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type IncludesBlockEntity = {
  readonly __typename?: 'IncludesBlockEntity';
  readonly attributes: Maybe<IncludesBlock>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type IncludesBlockEntityResponse = {
  readonly __typename?: 'IncludesBlockEntityResponse';
  readonly data: Maybe<IncludesBlockEntity>;
};

export type IncludesBlockEntityResponseCollection = {
  readonly __typename?: 'IncludesBlockEntityResponseCollection';
  readonly data: ReadonlyArray<IncludesBlockEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type IncludesBlockFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<IncludesBlockFiltersInput>>>;
  readonly blockHover: InputMaybe<ComponentBlocksIncludesHoverFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly includesContent: InputMaybe<ComponentElementsIncludesContentFiltersInput>;
  readonly not: InputMaybe<IncludesBlockFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<IncludesBlockFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IncludesBlockInput = {
  readonly blockHover: InputMaybe<ComponentBlocksIncludesHoverInput>;
  readonly includesContent: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIncludesContentInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type IncludesBlockRelationResponseCollection = {
  readonly __typename?: 'IncludesBlockRelationResponseCollection';
  readonly data: ReadonlyArray<IncludesBlockEntity>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Long']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Long']['input']>>>;
  readonly contains: InputMaybe<Scalars['Long']['input']>;
  readonly containsi: InputMaybe<Scalars['Long']['input']>;
  readonly endsWith: InputMaybe<Scalars['Long']['input']>;
  readonly eq: InputMaybe<Scalars['Long']['input']>;
  readonly eqi: InputMaybe<Scalars['Long']['input']>;
  readonly gt: InputMaybe<Scalars['Long']['input']>;
  readonly gte: InputMaybe<Scalars['Long']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Long']['input']>>>;
  readonly lt: InputMaybe<Scalars['Long']['input']>;
  readonly lte: InputMaybe<Scalars['Long']['input']>;
  readonly ne: InputMaybe<Scalars['Long']['input']>;
  readonly nei: InputMaybe<Scalars['Long']['input']>;
  readonly not: InputMaybe<LongFilterInput>;
  readonly notContains: InputMaybe<Scalars['Long']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Long']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Long']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Long']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Long']['input']>;
};

export type MobileNavigation = {
  readonly __typename?: 'MobileNavigation';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly mobileLink: Maybe<ReadonlyArray<Maybe<ComponentUiMobileLink>>>;
  readonly offersImg: Maybe<UploadFileEntityResponse>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type MobileNavigationMobileLinkArgs = {
  filters: InputMaybe<ComponentUiMobileLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type MobileNavigationEntity = {
  readonly __typename?: 'MobileNavigationEntity';
  readonly attributes: Maybe<MobileNavigation>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type MobileNavigationEntityResponse = {
  readonly __typename?: 'MobileNavigationEntityResponse';
  readonly data: Maybe<MobileNavigationEntity>;
};

export type MobileNavigationInput = {
  readonly mobileLink: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMobileLinkInput>>>;
  readonly offersImg: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createBanner: Maybe<BannerEntityResponse>;
  readonly createCase: Maybe<CaseEntityResponse>;
  readonly createCaseName: Maybe<CaseNameEntityResponse>;
  readonly createComplex: Maybe<ComplexEntityResponse>;
  readonly createIncludesBlock: Maybe<IncludesBlockEntityResponse>;
  readonly createOffer: Maybe<OfferEntityResponse>;
  readonly createService: Maybe<ServiceEntityResponse>;
  readonly createServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly createServiceName: Maybe<ServiceNameEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly createVacancy: Maybe<VacancyEntityResponse>;
  readonly deleteBanner: Maybe<BannerEntityResponse>;
  readonly deleteCase: Maybe<CaseEntityResponse>;
  readonly deleteCaseName: Maybe<CaseNameEntityResponse>;
  readonly deleteComplex: Maybe<ComplexEntityResponse>;
  readonly deleteComplexAccompany: Maybe<ComplexAccompanyEntityResponse>;
  readonly deleteFormFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly deleteHeader: Maybe<HeaderEntityResponse>;
  readonly deleteHomePage: Maybe<HomePageEntityResponse>;
  readonly deleteIncludesBlock: Maybe<IncludesBlockEntityResponse>;
  readonly deleteMobileNavigation: Maybe<MobileNavigationEntityResponse>;
  readonly deleteOffer: Maybe<OfferEntityResponse>;
  readonly deleteOffersPage: Maybe<OffersPageEntityResponse>;
  readonly deletePartner: Maybe<PartnerEntityResponse>;
  readonly deletePortfolioPage: Maybe<PortfolioPageEntityResponse>;
  readonly deleteSeoCollectionService: Maybe<SeoCollectionServiceEntityResponse>;
  readonly deleteSeoComplexPage: Maybe<SeoComplexPageEntityResponse>;
  readonly deleteSeoOffersPage: Maybe<SeoOffersPageEntityResponse>;
  readonly deleteService: Maybe<ServiceEntityResponse>;
  readonly deleteServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly deleteServiceName: Maybe<ServiceNameEntityResponse>;
  readonly deleteServicesPage: Maybe<ServicesPageEntityResponse>;
  readonly deleteStudio: Maybe<StudioEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteVacancy: Maybe<VacancyEntityResponse>;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateBanner: Maybe<BannerEntityResponse>;
  readonly updateCase: Maybe<CaseEntityResponse>;
  readonly updateCaseName: Maybe<CaseNameEntityResponse>;
  readonly updateComplex: Maybe<ComplexEntityResponse>;
  readonly updateComplexAccompany: Maybe<ComplexAccompanyEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateFormFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly updateHeader: Maybe<HeaderEntityResponse>;
  readonly updateHomePage: Maybe<HomePageEntityResponse>;
  readonly updateIncludesBlock: Maybe<IncludesBlockEntityResponse>;
  readonly updateMobileNavigation: Maybe<MobileNavigationEntityResponse>;
  readonly updateOffer: Maybe<OfferEntityResponse>;
  readonly updateOffersPage: Maybe<OffersPageEntityResponse>;
  readonly updatePartner: Maybe<PartnerEntityResponse>;
  readonly updatePortfolioPage: Maybe<PortfolioPageEntityResponse>;
  readonly updateSeoCollectionService: Maybe<SeoCollectionServiceEntityResponse>;
  readonly updateSeoComplexPage: Maybe<SeoComplexPageEntityResponse>;
  readonly updateSeoOffersPage: Maybe<SeoOffersPageEntityResponse>;
  readonly updateService: Maybe<ServiceEntityResponse>;
  readonly updateServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly updateServiceName: Maybe<ServiceNameEntityResponse>;
  readonly updateServicesPage: Maybe<ServicesPageEntityResponse>;
  readonly updateStudio: Maybe<StudioEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly updateVacancy: Maybe<VacancyEntityResponse>;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBannerArgs = {
  data: BannerInput;
};


export type MutationCreateCaseArgs = {
  data: CaseInput;
};


export type MutationCreateCaseNameArgs = {
  data: CaseNameInput;
};


export type MutationCreateComplexArgs = {
  data: ComplexInput;
};


export type MutationCreateIncludesBlockArgs = {
  data: IncludesBlockInput;
};


export type MutationCreateOfferArgs = {
  data: OfferInput;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
};


export type MutationCreateServiceCollectionArgs = {
  data: ServiceCollectionInput;
};


export type MutationCreateServiceNameArgs = {
  data: ServiceNameInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVacancyArgs = {
  data: VacancyInput;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCaseNameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteComplexArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteIncludesBlockArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceNameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVacancyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBannerArgs = {
  data: BannerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCaseArgs = {
  data: CaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCaseNameArgs = {
  data: CaseNameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateComplexArgs = {
  data: ComplexInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateComplexAccompanyArgs = {
  data: ComplexAccompanyInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFormFeedbackArgs = {
  data: FormFeedbackInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateIncludesBlockArgs = {
  data: IncludesBlockInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMobileNavigationArgs = {
  data: MobileNavigationInput;
};


export type MutationUpdateOfferArgs = {
  data: OfferInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOffersPageArgs = {
  data: OffersPageInput;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
};


export type MutationUpdatePortfolioPageArgs = {
  data: PortfolioPageInput;
};


export type MutationUpdateSeoCollectionServiceArgs = {
  data: SeoCollectionServiceInput;
};


export type MutationUpdateSeoComplexPageArgs = {
  data: SeoComplexPageInput;
};


export type MutationUpdateSeoOffersPageArgs = {
  data: SeoOffersPageInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceCollectionArgs = {
  data: ServiceCollectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceNameArgs = {
  data: ServiceNameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServicesPageArgs = {
  data: ServicesPageInput;
};


export type MutationUpdateStudioArgs = {
  data: StudioInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVacancyArgs = {
  data: VacancyInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Offer = {
  readonly __typename?: 'Offer';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly footer: Maybe<ComponentComponentsFooter>;
  readonly headingBanner: Maybe<UploadFileEntityResponse>;
  readonly highlighted: Maybe<Scalars['String']['output']>;
  readonly img: UploadFileEntityResponse;
  readonly includes_blocks: Maybe<IncludesBlockRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly offerBanner: Maybe<BannerEntityResponse>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly service_name: Maybe<ServiceNameEntityResponse>;
  readonly sliderCase: Maybe<ComponentComponentsSliderCase>;
  readonly textBlocks: Maybe<ReadonlyArray<Maybe<ComponentComponentsTextBlock>>>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type OfferIncludes_BlocksArgs = {
  filters: InputMaybe<IncludesBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type OfferTextBlocksArgs = {
  filters: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type OfferEntity = {
  readonly __typename?: 'OfferEntity';
  readonly attributes: Maybe<Offer>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type OfferEntityResponse = {
  readonly __typename?: 'OfferEntityResponse';
  readonly data: Maybe<OfferEntity>;
};

export type OfferEntityResponseCollection = {
  readonly __typename?: 'OfferEntityResponseCollection';
  readonly data: ReadonlyArray<OfferEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type OfferFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<OfferFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly highlighted: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly includes_blocks: InputMaybe<IncludesBlockFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<OfferFiltersInput>;
  readonly offerBanner: InputMaybe<BannerFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<OfferFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly service_name: InputMaybe<ServiceNameFiltersInput>;
  readonly sliderCase: InputMaybe<ComponentComponentsSliderCaseFiltersInput>;
  readonly textBlocks: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type OfferInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly headingBanner: InputMaybe<Scalars['ID']['input']>;
  readonly highlighted: InputMaybe<Scalars['String']['input']>;
  readonly img: InputMaybe<Scalars['ID']['input']>;
  readonly includes_blocks: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly offerBanner: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly service_name: InputMaybe<Scalars['ID']['input']>;
  readonly sliderCase: InputMaybe<ComponentComponentsSliderCaseInput>;
  readonly textBlocks: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockInput>>>;
};

export type OfferRelationResponseCollection = {
  readonly __typename?: 'OfferRelationResponseCollection';
  readonly data: ReadonlyArray<OfferEntity>;
};

export type OffersPage = {
  readonly __typename?: 'OffersPage';
  readonly banner: Maybe<UploadFileEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly footer: Maybe<ComponentComponentsFooter>;
  readonly img: Maybe<UploadFileEntityResponse>;
  readonly offersBlock: Maybe<ReadonlyArray<Maybe<ComponentComponentsOfferComponent>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type OffersPageOffersBlockArgs = {
  filters: InputMaybe<ComponentComponentsOfferComponentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type OffersPageEntity = {
  readonly __typename?: 'OffersPageEntity';
  readonly attributes: Maybe<OffersPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type OffersPageEntityResponse = {
  readonly __typename?: 'OffersPageEntityResponse';
  readonly data: Maybe<OffersPageEntity>;
};

export type OffersPageInput = {
  readonly banner: InputMaybe<Scalars['ID']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly img: InputMaybe<Scalars['ID']['input']>;
  readonly offersBlock: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsOfferComponentInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export type Partner = {
  readonly __typename?: 'Partner';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly partners: Maybe<ComponentSectionsPartners>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PartnerEntity = {
  readonly __typename?: 'PartnerEntity';
  readonly attributes: Maybe<Partner>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PartnerEntityResponse = {
  readonly __typename?: 'PartnerEntityResponse';
  readonly data: Maybe<PartnerEntity>;
};

export type PartnerInput = {
  readonly partners: InputMaybe<ComponentSectionsPartnersInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type PortfolioPage = {
  readonly __typename?: 'PortfolioPage';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PortfolioPageEntity = {
  readonly __typename?: 'PortfolioPageEntity';
  readonly attributes: Maybe<PortfolioPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PortfolioPageEntityResponse = {
  readonly __typename?: 'PortfolioPageEntityResponse';
  readonly data: Maybe<PortfolioPageEntity>;
};

export type PortfolioPageInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly banner: Maybe<BannerEntityResponse>;
  readonly banners: Maybe<BannerEntityResponseCollection>;
  readonly case: Maybe<CaseEntityResponse>;
  readonly caseName: Maybe<CaseNameEntityResponse>;
  readonly caseNames: Maybe<CaseNameEntityResponseCollection>;
  readonly cases: Maybe<CaseEntityResponseCollection>;
  readonly complex: Maybe<ComplexEntityResponse>;
  readonly complexAccompany: Maybe<ComplexAccompanyEntityResponse>;
  readonly complexes: Maybe<ComplexEntityResponseCollection>;
  readonly formFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly header: Maybe<HeaderEntityResponse>;
  readonly homePage: Maybe<HomePageEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly includesBlock: Maybe<IncludesBlockEntityResponse>;
  readonly includesBlocks: Maybe<IncludesBlockEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly mobileNavigation: Maybe<MobileNavigationEntityResponse>;
  readonly offer: Maybe<OfferEntityResponse>;
  readonly offers: Maybe<OfferEntityResponseCollection>;
  readonly offersPage: Maybe<OffersPageEntityResponse>;
  readonly partner: Maybe<PartnerEntityResponse>;
  readonly portfolioPage: Maybe<PortfolioPageEntityResponse>;
  readonly seoCollectionService: Maybe<SeoCollectionServiceEntityResponse>;
  readonly seoComplexPage: Maybe<SeoComplexPageEntityResponse>;
  readonly seoOffersPage: Maybe<SeoOffersPageEntityResponse>;
  readonly service: Maybe<ServiceEntityResponse>;
  readonly serviceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly serviceCollections: Maybe<ServiceCollectionEntityResponseCollection>;
  readonly serviceName: Maybe<ServiceNameEntityResponse>;
  readonly serviceNames: Maybe<ServiceNameEntityResponseCollection>;
  readonly services: Maybe<ServiceEntityResponseCollection>;
  readonly servicesPage: Maybe<ServicesPageEntityResponse>;
  readonly studio: Maybe<StudioEntityResponse>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
  readonly vacancies: Maybe<VacancyEntityResponseCollection>;
  readonly vacancy: Maybe<VacancyEntityResponse>;
};


export type QueryBannerArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBannersArgs = {
  filters: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCaseArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCaseNameArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCaseNamesArgs = {
  filters: InputMaybe<CaseNameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCasesArgs = {
  filters: InputMaybe<CaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryComplexArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryComplexAccompanyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryComplexesArgs = {
  filters: InputMaybe<ComplexFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFormFeedbackArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIncludesBlockArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIncludesBlocksArgs = {
  filters: InputMaybe<IncludesBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMobileNavigationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOfferArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOffersArgs = {
  filters: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOffersPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPartnerArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPortfolioPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySeoCollectionServiceArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySeoComplexPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySeoOffersPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryServiceArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceCollectionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceCollectionsArgs = {
  filters: InputMaybe<ServiceCollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceNameArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceNamesArgs = {
  filters: InputMaybe<ServiceNameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesArgs = {
  filters: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryStudioArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVacanciesArgs = {
  filters: InputMaybe<VacancyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVacancyArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SeoCollectionService = {
  readonly __typename?: 'SeoCollectionService';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SeoCollectionServiceEntity = {
  readonly __typename?: 'SeoCollectionServiceEntity';
  readonly attributes: Maybe<SeoCollectionService>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SeoCollectionServiceEntityResponse = {
  readonly __typename?: 'SeoCollectionServiceEntityResponse';
  readonly data: Maybe<SeoCollectionServiceEntity>;
};

export type SeoCollectionServiceInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type SeoComplexPage = {
  readonly __typename?: 'SeoComplexPage';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SeoComplexPageEntity = {
  readonly __typename?: 'SeoComplexPageEntity';
  readonly attributes: Maybe<SeoComplexPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SeoComplexPageEntityResponse = {
  readonly __typename?: 'SeoComplexPageEntityResponse';
  readonly data: Maybe<SeoComplexPageEntity>;
};

export type SeoComplexPageInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type SeoOffersPage = {
  readonly __typename?: 'SeoOffersPage';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SeoOffersPageEntity = {
  readonly __typename?: 'SeoOffersPageEntity';
  readonly attributes: Maybe<SeoOffersPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SeoOffersPageEntityResponse = {
  readonly __typename?: 'SeoOffersPageEntityResponse';
  readonly data: Maybe<SeoOffersPageEntity>;
};

export type SeoOffersPageInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type Service = {
  readonly __typename?: 'Service';
  readonly Services: Maybe<ComponentSectionsServices>;
  readonly SliderCase: Maybe<ComponentComponentsSliderCase>;
  readonly contentBanner: Maybe<BannerEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly serviceName: Maybe<ServiceNameEntityResponse>;
  readonly textBlocks: Maybe<ReadonlyArray<Maybe<ComponentComponentsTextBlock>>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video: Maybe<UploadFileEntityResponse>;
};


export type ServiceTextBlocksArgs = {
  filters: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceCollection = {
  readonly __typename?: 'ServiceCollection';
  readonly Footer: Maybe<ComponentComponentsFooter>;
  readonly Title: Maybe<ComponentSectionsSectionTitles>;
  readonly contentBanner: Maybe<BannerEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly deadlines: Maybe<Scalars['String']['output']>;
  readonly description: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['Long']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sliderCase: Maybe<ComponentComponentsSliderCase>;
  readonly textBlocks: Maybe<ReadonlyArray<Maybe<ComponentComponentsTextBlock>>>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video: Maybe<UploadFileEntityResponse>;
};


export type ServiceCollectionTextBlocksArgs = {
  filters: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceCollectionEntity = {
  readonly __typename?: 'ServiceCollectionEntity';
  readonly attributes: Maybe<ServiceCollection>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ServiceCollectionEntityResponse = {
  readonly __typename?: 'ServiceCollectionEntityResponse';
  readonly data: Maybe<ServiceCollectionEntity>;
};

export type ServiceCollectionEntityResponseCollection = {
  readonly __typename?: 'ServiceCollectionEntityResponseCollection';
  readonly data: ReadonlyArray<ServiceCollectionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ServiceCollectionFiltersInput = {
  readonly Footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly Title: InputMaybe<ComponentSectionsSectionTitlesFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ServiceCollectionFiltersInput>>>;
  readonly contentBanner: InputMaybe<BannerFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly deadlines: InputMaybe<StringFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ServiceCollectionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ServiceCollectionFiltersInput>>>;
  readonly price: InputMaybe<LongFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sliderCase: InputMaybe<ComponentComponentsSliderCaseFiltersInput>;
  readonly textBlocks: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ServiceCollectionInput = {
  readonly Footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly Title: InputMaybe<ComponentSectionsSectionTitlesInput>;
  readonly contentBanner: InputMaybe<Scalars['ID']['input']>;
  readonly deadlines: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Long']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sliderCase: InputMaybe<ComponentComponentsSliderCaseInput>;
  readonly textBlocks: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockInput>>>;
  readonly video: InputMaybe<Scalars['ID']['input']>;
};

export type ServiceCollectionRelationResponseCollection = {
  readonly __typename?: 'ServiceCollectionRelationResponseCollection';
  readonly data: ReadonlyArray<ServiceCollectionEntity>;
};

export type ServiceEntity = {
  readonly __typename?: 'ServiceEntity';
  readonly attributes: Maybe<Service>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  readonly __typename?: 'ServiceEntityResponse';
  readonly data: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  readonly __typename?: 'ServiceEntityResponseCollection';
  readonly data: ReadonlyArray<ServiceEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  readonly Services: InputMaybe<ComponentSectionsServicesFiltersInput>;
  readonly SliderCase: InputMaybe<ComponentComponentsSliderCaseFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ServiceFiltersInput>>>;
  readonly contentBanner: InputMaybe<BannerFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<ServiceFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ServiceFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly serviceName: InputMaybe<ServiceNameFiltersInput>;
  readonly textBlocks: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  readonly Services: InputMaybe<ComponentSectionsServicesInput>;
  readonly SliderCase: InputMaybe<ComponentComponentsSliderCaseInput>;
  readonly contentBanner: InputMaybe<Scalars['ID']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly serviceName: InputMaybe<Scalars['ID']['input']>;
  readonly textBlocks: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video: InputMaybe<Scalars['ID']['input']>;
};

export type ServiceName = {
  readonly __typename?: 'ServiceName';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly footer: Maybe<ComponentComponentsFooter>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nameID: Maybe<Scalars['String']['output']>;
  readonly offers: Maybe<OfferRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly service: Maybe<ServiceEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceNameOffersArgs = {
  filters: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceNameEntity = {
  readonly __typename?: 'ServiceNameEntity';
  readonly attributes: Maybe<ServiceName>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ServiceNameEntityResponse = {
  readonly __typename?: 'ServiceNameEntityResponse';
  readonly data: Maybe<ServiceNameEntity>;
};

export type ServiceNameEntityResponseCollection = {
  readonly __typename?: 'ServiceNameEntityResponseCollection';
  readonly data: ReadonlyArray<ServiceNameEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ServiceNameFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ServiceNameFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly nameID: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ServiceNameFiltersInput>;
  readonly offers: InputMaybe<OfferFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ServiceNameFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly service: InputMaybe<ServiceFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ServiceNameInput = {
  readonly footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly nameID: InputMaybe<Scalars['String']['input']>;
  readonly offers: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly service: InputMaybe<Scalars['ID']['input']>;
};

export type ServicesPage = {
  readonly __typename?: 'ServicesPage';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ServicesPageEntity = {
  readonly __typename?: 'ServicesPageEntity';
  readonly attributes: Maybe<ServicesPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ServicesPageEntityResponse = {
  readonly __typename?: 'ServicesPageEntityResponse';
  readonly data: Maybe<ServicesPageEntity>;
};

export type ServicesPageInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Studio = {
  readonly __typename?: 'Studio';
  readonly aboutSection: Maybe<ComponentSectionsAboutSection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly introCards: Maybe<ReadonlyArray<Maybe<ComponentElementsIntroCard>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly vacancies: Maybe<ComponentComponentsVacancies>;
  readonly video: Maybe<UploadFileEntityResponse>;
};


export type StudioIntroCardsArgs = {
  filters: InputMaybe<ComponentElementsIntroCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type StudioEntity = {
  readonly __typename?: 'StudioEntity';
  readonly attributes: Maybe<Studio>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type StudioEntityResponse = {
  readonly __typename?: 'StudioEntityResponse';
  readonly data: Maybe<StudioEntity>;
};

export type StudioInput = {
  readonly aboutSection: InputMaybe<ComponentSectionsAboutSectionInput>;
  readonly introCards: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly vacancies: InputMaybe<ComponentComponentsVacanciesInput>;
  readonly video: InputMaybe<Scalars['ID']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type Vacancy = {
  readonly __typename?: 'Vacancy';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly vacancy: Maybe<ComponentElementsVacancy>;
};

export type VacancyEntity = {
  readonly __typename?: 'VacancyEntity';
  readonly attributes: Maybe<Vacancy>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type VacancyEntityResponse = {
  readonly __typename?: 'VacancyEntityResponse';
  readonly data: Maybe<VacancyEntity>;
};

export type VacancyEntityResponseCollection = {
  readonly __typename?: 'VacancyEntityResponseCollection';
  readonly data: ReadonlyArray<VacancyEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type VacancyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<VacancyFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<VacancyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<VacancyFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly vacancy: InputMaybe<ComponentElementsVacancyFiltersInput>;
};

export type VacancyInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly vacancy: InputMaybe<ComponentElementsVacancyInput>;
};

export type VacancyRelationResponseCollection = {
  readonly __typename?: 'VacancyRelationResponseCollection';
  readonly data: ReadonlyArray<VacancyEntity>;
};

export type GetCasesByNameIdsQueryVariables = Exact<{
  ids: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
}>;


export type GetCasesByNameIdsQuery = { readonly __typename?: 'Query', readonly cases: { readonly __typename?: 'CaseEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly case_names: { readonly __typename?: 'CaseNameRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseNameEntity', readonly attributes: { readonly __typename?: 'CaseName', readonly name: string } }> }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } };

export type GetComplexNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComplexNamesQuery = { readonly __typename?: 'Query', readonly complexes: { readonly __typename?: 'ComplexEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ComplexEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Complex', readonly name: string } }> } };

export type GetOffersNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOffersNameQuery = { readonly __typename?: 'Query', readonly offers: { readonly __typename?: 'OfferEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'OfferEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Offer', readonly name: string } }> } };

export type GetServiceByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetServiceByIdQuery = { readonly __typename?: 'Query', readonly services: { readonly __typename?: 'ServiceEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceEntity', readonly attributes: { readonly __typename?: 'Service', readonly title: string, readonly description: string, readonly SliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly Services: { readonly __typename?: 'ComponentSectionsServices', readonly id: string, readonly title: string, readonly description: string, readonly service_collections: { readonly __typename?: 'ServiceCollectionRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string, readonly description: string, readonly price: any, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly serviceName: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly contentBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } } }> } };

export type GetServiceCollectionByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetServiceCollectionByIdQuery = { readonly __typename?: 'Query', readonly serviceCollection: { readonly __typename?: 'ServiceCollectionEntityResponse', readonly data: { readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string, readonly description: string, readonly deadlines: string, readonly price: any, readonly Title: { readonly __typename?: 'ComponentSectionsSectionTitles', readonly id: string, readonly title: string, readonly titles: ReadonlyArray<{ readonly __typename?: 'ComponentElementsTitle', readonly id: string, readonly title: string }> }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly contentBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } } } } };

export type CaseFragmentFragment = { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly case_names: { readonly __typename?: 'CaseNameRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseNameEntity', readonly attributes: { readonly __typename?: 'CaseName', readonly name: string } }> }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } };

export type LinkFragmentFragment = { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly href: string, readonly name: string };

export type MediaFragmentFragment = { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number };

export type OfferFragmentFragment = { readonly __typename?: 'Offer', readonly name: string, readonly description: string, readonly highlighted: string, readonly headingBanner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly service_name: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly offerBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }> };

export type SeoFragmentFragment = { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string };

export type BannerFragmentFragment = { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type ComplexBlockFragment = { readonly __typename?: 'ComponentComponentsComplexComponent', readonly id: string, readonly name: string, readonly offers: { readonly __typename?: 'ComplexRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ComplexEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Complex', readonly offer: { readonly __typename?: 'ComponentElementsOffer', readonly id: string, readonly price: number, readonly info: string, readonly tag: string, readonly number: string, readonly about: string, readonly titleList: string, readonly list: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } };

export type FooterFragmentFragment = { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type FormSendFragmentFragment = { readonly __typename?: 'ComponentSectionsFormSend', readonly description: string, readonly address: string, readonly email: string, readonly number: any };

export type IntroCardFragmentFragment = { readonly __typename?: 'ComponentElementsIntroCard', readonly id: string, readonly title: string, readonly info: string, readonly selectClass: any };

export type OffersBlockFragment = { readonly __typename?: 'ComponentComponentsOfferComponent', readonly id: string, readonly name: string, readonly offers: { readonly __typename?: 'OfferRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'OfferEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Offer', readonly name: string, readonly description: string, readonly highlighted: string, readonly service_name: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly offerBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } };

export type OffersFragmentFragment = { readonly __typename?: 'ComponentElementsOffer', readonly id: string, readonly price: number, readonly info: string, readonly tag: string, readonly number: string, readonly about: string, readonly titleList: string, readonly list: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type SliderFragmentFragment = { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } };

export type TextBlocksFragmentFragment = { readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string };

export type ServicesNamesAttributesFragmentFragment = { readonly __typename?: 'ServiceName', readonly name: string, readonly service: { readonly __typename?: 'ServiceEntityResponse', readonly data: { readonly __typename?: 'ServiceEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Service', readonly title: string } } } };

export type GetHomeBannerFragment = { readonly __typename?: 'ComponentComponentsHomeBanner', readonly IntroCard: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly id: string, readonly title: string, readonly info: string, readonly selectClass: any }>, readonly bannerMasks: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> }, readonly bannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type GetHomeCasesFragment = { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> };

export type GetHomePartnersFragment = { readonly __typename?: 'ComponentSectionsPartners', readonly title: string, readonly description: string, readonly icons: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> } };

export type GetBurgerLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBurgerLinksQuery = { readonly __typename?: 'Query', readonly mobileNavigation: { readonly __typename?: 'MobileNavigationEntityResponse', readonly data: { readonly __typename?: 'MobileNavigationEntity', readonly attributes: { readonly __typename?: 'MobileNavigation', readonly mobileLink: ReadonlyArray<{ readonly __typename?: 'ComponentUiMobileLink', readonly id: string, readonly name: string, readonly href: string }>, readonly offersImg: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

export type GetCaseByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCaseByIdQuery = { readonly __typename?: 'Query', readonly case: { readonly __typename?: 'CaseEntityResponse', readonly data: { readonly __typename?: 'CaseEntity', readonly attributes: { readonly __typename?: 'Case', readonly mobileName: string, readonly backround: any, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly content: ReadonlyArray<{ readonly __typename?: 'ComponentImageBlocksDoubleImage', readonly id: string, readonly idBlock: string, readonly imageTwo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageOne: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentImageBlocksDoubleTextBlocks', readonly id: string, readonly idBlock: string, readonly oldTitle: string, readonly oldDescription: string, readonly newTitle: string, readonly newDescription: string, readonly oldLogo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly newLogo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentImageBlocksGridImage', readonly idBlock: string, readonly id: string, readonly selectStreech: any, readonly threeImage: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly twoImage: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly oneImage: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentImageBlocksOneImage', readonly idBlock: string, readonly id: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentImageBlocksTextBlock', readonly id: string, readonly idBlock: string, readonly title: string, readonly description: string, readonly desctopMaxWidth: number, readonly selectType: any } | { readonly __typename?: 'Error' }> } } } };

export type GetCasesIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCasesIdsQuery = { readonly __typename?: 'Query', readonly cases: { readonly __typename?: 'CaseEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string }> } };

export type GetCasesNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCasesNamesQuery = { readonly __typename?: 'Query', readonly caseNames: { readonly __typename?: 'CaseNameEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'CaseName', readonly name: string, readonly nameID: string } }> } };

export type GetComplexByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetComplexByIdQuery = { readonly __typename?: 'Query', readonly complex: { readonly __typename?: 'ComplexEntityResponse', readonly data: { readonly __typename?: 'ComplexEntity', readonly attributes: { readonly __typename?: 'Complex', readonly name: string, readonly totalHours: number, readonly description: string, readonly deadlines: string, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly videoMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly offer: { readonly __typename?: 'ComponentElementsOffer', readonly id: string, readonly price: number }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

export type GetComplexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComplexPageQuery = { readonly __typename?: 'Query', readonly complexAccompany: { readonly __typename?: 'ComplexAccompanyEntityResponse', readonly data: { readonly __typename?: 'ComplexAccompanyEntity', readonly attributes: { readonly __typename?: 'ComplexAccompany', readonly title: string, readonly description: string, readonly complexBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsComplexComponent', readonly id: string, readonly name: string, readonly offers: { readonly __typename?: 'ComplexRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ComplexEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Complex', readonly offer: { readonly __typename?: 'ComponentElementsOffer', readonly id: string, readonly price: number, readonly info: string, readonly tag: string, readonly number: string, readonly about: string, readonly titleList: string, readonly list: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } }>, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } } };

export type GetFormFeedbackQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormFeedbackQuery = { readonly __typename?: 'Query', readonly formFeedback: { readonly __typename?: 'FormFeedbackEntityResponse', readonly data: { readonly __typename?: 'FormFeedbackEntity', readonly attributes: { readonly __typename?: 'FormFeedback', readonly formFeedback: { readonly __typename?: 'ComponentSectionsFormSend', readonly description: string, readonly address: string, readonly email: string, readonly number: any } } } } };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly href: string, readonly name: string }> } } } };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly homePage: { readonly __typename?: 'HomePageEntityResponse', readonly data: { readonly __typename?: 'HomePageEntity', readonly attributes: { readonly __typename?: 'HomePage', readonly HomeBanner: { readonly __typename?: 'ComponentComponentsHomeBanner', readonly IntroCard: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly id: string, readonly title: string, readonly info: string, readonly selectClass: any }>, readonly bannerMasks: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> }, readonly bannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } } } } };

export type GetOfferByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetOfferByIdQuery = { readonly __typename?: 'Query', readonly offer: { readonly __typename?: 'OfferEntityResponse', readonly data: { readonly __typename?: 'OfferEntity', readonly attributes: { readonly __typename?: 'Offer', readonly name: string, readonly description: string, readonly highlighted: string, readonly headingBanner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly service_name: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly offerBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }> } } } };

export type GetOffersPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOffersPageQuery = { readonly __typename?: 'Query', readonly offersPage: { readonly __typename?: 'OffersPageEntityResponse', readonly data: { readonly __typename?: 'OffersPageEntity', readonly attributes: { readonly __typename?: 'OffersPage', readonly title: string, readonly description: string, readonly offersBlock: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsOfferComponent', readonly id: string, readonly name: string, readonly offers: { readonly __typename?: 'OfferRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'OfferEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Offer', readonly name: string, readonly description: string, readonly highlighted: string, readonly service_name: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly offerBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } }>, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } } };

export type GetPartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPartnersQuery = { readonly __typename?: 'Query', readonly partner: { readonly __typename?: 'PartnerEntityResponse', readonly data: { readonly __typename?: 'PartnerEntity', readonly attributes: { readonly __typename?: 'Partner', readonly partners: { readonly __typename?: 'ComponentSectionsPartners', readonly title: string, readonly description: string, readonly icons: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> } } } } } };

export type GetServicesTitleByIdQueryVariables = Exact<{
  title: InputMaybe<Scalars['String']['input']>;
}>;


export type GetServicesTitleByIdQuery = { readonly __typename?: 'Query', readonly services: { readonly __typename?: 'ServiceEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Service', readonly Services: { readonly __typename?: 'ComponentSectionsServices', readonly id: string, readonly service_collections: { readonly __typename?: 'ServiceCollectionRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string } }> } } } }> } };

export type GetServicesNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesNamesQuery = { readonly __typename?: 'Query', readonly serviceNames: { readonly __typename?: 'ServiceNameEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string, readonly nameID: string, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } };

export type GetServicesNamesOfferQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesNamesOfferQuery = { readonly __typename?: 'Query', readonly serviceNames: { readonly __typename?: 'ServiceNameEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string, readonly nameID: string, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly offers: { readonly __typename?: 'OfferRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'OfferEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Offer', readonly name: string, readonly description: string, readonly highlighted: string, readonly headingBanner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly service_name: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly includes_blocks: { readonly __typename?: 'IncludesBlockRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'IncludesBlockEntity', readonly id: string, readonly attributes: { readonly __typename?: 'IncludesBlock', readonly title: string, readonly blockHover: { readonly __typename?: 'ComponentBlocksIncludesHover', readonly id: string, readonly title: string, readonly text: string, readonly subTitle: string, readonly list: string }, readonly includesContent: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIncludesContent', readonly id: string, readonly title: string, readonly content: string }> } }> }, readonly footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly offerBanner: { readonly __typename?: 'BannerEntityResponse', readonly data: { readonly __typename?: 'BannerEntity', readonly attributes: { readonly __typename?: 'Banner', readonly title: string, readonly description: string, readonly label: string, readonly widthTitle: number, readonly widthDescription: number, readonly imgDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imgMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly button: { readonly __typename?: 'ComponentUiLink', readonly href: string, readonly name: string }, readonly offerBannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly offerBannerDesktop: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }> } }> } } }> } };

export type GetStudioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudioQuery = { readonly __typename?: 'Query', readonly studio: { readonly __typename?: 'StudioEntityResponse', readonly data: { readonly __typename?: 'StudioEntity', readonly attributes: { readonly __typename?: 'Studio', readonly title: string, readonly introCards: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly id: string, readonly title: string, readonly info: string, readonly selectClass: any }>, readonly vacancies: { readonly __typename?: 'ComponentComponentsVacancies', readonly title: string, readonly description: string, readonly date: string, readonly info: string, readonly vacancies: { readonly __typename?: 'VacancyRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'VacancyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Vacancy', readonly vacancy: { readonly __typename?: 'ComponentElementsVacancy', readonly title: string, readonly descriptionVacancy: string, readonly selectLevel: any, readonly btnLink: string, readonly telegrammLink: string } } }> }, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly aboutSection: { readonly __typename?: 'ComponentSectionsAboutSection', readonly id: string, readonly mainTitle: string, readonly description: string, readonly aboutTitle: string, readonly aboutDescription: string }, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

export type GetSeoAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoAboutPageQuery = { readonly __typename?: 'Query', readonly studio: { readonly __typename?: 'StudioEntityResponse', readonly data: { readonly __typename?: 'StudioEntity', readonly attributes: { readonly __typename?: 'Studio', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoCaseIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetSeoCaseIdQuery = { readonly __typename?: 'Query', readonly case: { readonly __typename?: 'CaseEntityResponse', readonly data: { readonly __typename?: 'CaseEntity', readonly attributes: { readonly __typename?: 'Case', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoComplexQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoComplexQuery = { readonly __typename?: 'Query', readonly seoComplexPage: { readonly __typename?: 'SeoComplexPageEntityResponse', readonly data: { readonly __typename?: 'SeoComplexPageEntity', readonly attributes: { readonly __typename?: 'SeoComplexPage', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoHomePageQuery = { readonly __typename?: 'Query', readonly homePage: { readonly __typename?: 'HomePageEntityResponse', readonly data: { readonly __typename?: 'HomePageEntity', readonly attributes: { readonly __typename?: 'HomePage', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoOffersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoOffersQuery = { readonly __typename?: 'Query', readonly seoOffersPage: { readonly __typename?: 'SeoOffersPageEntityResponse', readonly data: { readonly __typename?: 'SeoOffersPageEntity', readonly attributes: { readonly __typename?: 'SeoOffersPage', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoPortfolioPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoPortfolioPageQuery = { readonly __typename?: 'Query', readonly portfolioPage: { readonly __typename?: 'PortfolioPageEntityResponse', readonly data: { readonly __typename?: 'PortfolioPageEntity', readonly attributes: { readonly __typename?: 'PortfolioPage', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoServiceCollectionPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoServiceCollectionPageQuery = { readonly __typename?: 'Query', readonly seoCollectionService: { readonly __typename?: 'SeoCollectionServiceEntityResponse', readonly data: { readonly __typename?: 'SeoCollectionServiceEntity', readonly attributes: { readonly __typename?: 'SeoCollectionService', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export type GetSeoServicesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoServicesPageQuery = { readonly __typename?: 'Query', readonly servicesPage: { readonly __typename?: 'ServicesPageEntityResponse', readonly data: { readonly __typename?: 'ServicesPageEntity', readonly attributes: { readonly __typename?: 'ServicesPage', readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string, readonly metaRobots: string, readonly structuredData: any, readonly metaViewport: string, readonly canonicalURL: string } } } } };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on UploadFile {
  name
  url
  width
  height
}
    `;
export const FooterFragmentFragmentDoc = gql`
    fragment FooterFragment on ComponentComponentsFooter {
  title
  img {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const CaseFragmentFragmentDoc = gql`
    fragment CaseFragment on Case {
  title
  info
  imageMain {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  imageBig {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  case_names {
    data {
      attributes {
        name
      }
    }
  }
  Footer {
    ...FooterFragment
  }
}
    ${MediaFragmentFragmentDoc}
${FooterFragmentFragmentDoc}`;
export const LinkFragmentFragmentDoc = gql`
    fragment LinkFragment on ComponentUiLink {
  id
  href
  name
}
    `;
export const BannerFragmentFragmentDoc = gql`
    fragment BannerFragment on Banner {
  title
  description
  label
  imgDesktop {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  imgMobile {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  button {
    href
    name
  }
  widthTitle
  widthDescription
  offerBannerMobile {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  offerBannerDesktop {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const SliderFragmentFragmentDoc = gql`
    fragment SliderFragment on ComponentComponentsSliderCase {
  id
  cases {
    data {
      id
      attributes {
        title
        info
        imageMain {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        imageBig {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const TextBlocksFragmentFragmentDoc = gql`
    fragment TextBlocksFragment on ComponentComponentsTextBlock {
  id
  titlle
  description
}
    `;
export const OfferFragmentFragmentDoc = gql`
    fragment OfferFragment on Offer {
  name
  headingBanner {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  service_name {
    data {
      id
      attributes {
        name
      }
    }
  }
  img {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  includes_blocks {
    data {
      id
      attributes {
        title
        blockHover {
          id
          title
          text
          subTitle
          list
        }
        includesContent {
          id
          title
          content
        }
      }
    }
  }
  footer {
    ...FooterFragment
  }
  offerBanner {
    data {
      attributes {
        ...BannerFragment
      }
    }
  }
  description
  highlighted
  sliderCase {
    ...SliderFragment
  }
  textBlocks {
    ...TextBlocksFragment
  }
}
    ${MediaFragmentFragmentDoc}
${FooterFragmentFragmentDoc}
${BannerFragmentFragmentDoc}
${SliderFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}`;
export const SeoFragmentFragmentDoc = gql`
    fragment SeoFragment on ComponentSharedSeo {
  metaTitle
  metaDescription
  keywords
  metaRobots
  structuredData
  metaViewport
  canonicalURL
}
    `;
export const OffersFragmentFragmentDoc = gql`
    fragment OffersFragment on ComponentElementsOffer {
  id
  price
  info
  tag
  number
  about
  titleList
  list
  img {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const ComplexBlockFragmentDoc = gql`
    fragment ComplexBlock on ComponentComponentsComplexComponent {
  id
  name
  offers {
    data {
      id
      attributes {
        offer {
          ...OffersFragment
        }
      }
    }
  }
}
    ${OffersFragmentFragmentDoc}`;
export const FormSendFragmentFragmentDoc = gql`
    fragment FormSendFragment on ComponentSectionsFormSend {
  description
  address
  email
  number
}
    `;
export const OffersBlockFragmentDoc = gql`
    fragment OffersBlock on ComponentComponentsOfferComponent {
  id
  name
  offers {
    data {
      id
      attributes {
        name
        service_name {
          data {
            id
            attributes {
              name
            }
          }
        }
        description
        img {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        sliderCase {
          ...SliderFragment
        }
        textBlocks {
          ...TextBlocksFragment
        }
        includes_blocks {
          data {
            id
            attributes {
              title
              blockHover {
                id
                title
                text
                subTitle
                list
              }
              includesContent {
                id
                title
                content
              }
            }
          }
        }
        highlighted
        offerBanner {
          data {
            attributes {
              ...BannerFragment
            }
          }
        }
        footer {
          ...FooterFragment
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}
${SliderFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}
${BannerFragmentFragmentDoc}
${FooterFragmentFragmentDoc}`;
export const ServicesNamesAttributesFragmentFragmentDoc = gql`
    fragment ServicesNamesAttributesFragment on ServiceName {
  name
  service {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export const IntroCardFragmentFragmentDoc = gql`
    fragment IntroCardFragment on ComponentElementsIntroCard {
  id
  title
  info
  selectClass
}
    `;
export const GetHomeBannerFragmentDoc = gql`
    fragment GetHomeBanner on ComponentComponentsHomeBanner {
  IntroCard {
    ...IntroCardFragment
  }
  bannerMasks {
    data {
      id
      attributes {
        ...MediaFragment
      }
    }
  }
  bannerMobile {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
  banner {
    data {
      attributes {
        ...MediaFragment
      }
    }
  }
}
    ${IntroCardFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetHomeCasesFragmentDoc = gql`
    fragment GetHomeCases on CaseRelationResponseCollection {
  data {
    id
    attributes {
      title
      info
      imageBig {
        data {
          attributes {
            ...MediaFragment
          }
        }
      }
      imageMain {
        data {
          attributes {
            ...MediaFragment
          }
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetHomePartnersFragmentDoc = gql`
    fragment GetHomePartners on ComponentSectionsPartners {
  title
  description
  icons(pagination: {limit: 25}) {
    data {
      id
      attributes {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetCasesByNameIdsDocument = gql`
    query GetCasesByNameIds($ids: [ID]) {
  cases(filters: {case_names: {id: {in: $ids}}}, pagination: {limit: 70}) {
    data {
      id
      attributes {
        ...CaseFragment
      }
    }
  }
}
    ${CaseFragmentFragmentDoc}`;
export const GetComplexNamesDocument = gql`
    query GetComplexNames {
  complexes(sort: "id:asc") {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;
export const GetOffersNameDocument = gql`
    query GetOffersName {
  offers(sort: "id:asc") {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;
export const GetServiceByIdDocument = gql`
    query GetServiceById($id: ID) {
  services(filters: {serviceName: {id: {eq: $id}}}) {
    data {
      attributes {
        SliderCase {
          ...SliderFragment
        }
        Services {
          id
          title
          description
          service_collections {
            data {
              id
              attributes {
                name
                description
                price
                textBlocks {
                  ...TextBlocksFragment
                }
                sliderCase {
                  ...SliderFragment
                }
                video {
                  data {
                    attributes {
                      ...MediaFragment
                    }
                  }
                }
              }
            }
          }
        }
        title
        textBlocks {
          ...TextBlocksFragment
        }
        description
        serviceName {
          data {
            id
            attributes {
              name
            }
          }
        }
        video {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        contentBanner {
          data {
            attributes {
              ...BannerFragment
            }
          }
        }
      }
    }
  }
}
    ${SliderFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}
${MediaFragmentFragmentDoc}
${BannerFragmentFragmentDoc}`;
export const GetServiceCollectionByIdDocument = gql`
    query GetServiceCollectionById($id: ID) {
  serviceCollection(id: $id) {
    data {
      id
      attributes {
        name
        description
        deadlines
        price
        Title {
          id
          title
          titles {
            id
            title
          }
        }
        Footer {
          ...FooterFragment
        }
        sliderCase {
          ...SliderFragment
        }
        textBlocks {
          ...TextBlocksFragment
        }
        video {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        contentBanner {
          data {
            attributes {
              ...BannerFragment
            }
          }
        }
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}
${SliderFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}
${MediaFragmentFragmentDoc}
${BannerFragmentFragmentDoc}`;
export const GetBurgerLinksDocument = gql`
    query GetBurgerLinks {
  mobileNavigation {
    data {
      attributes {
        mobileLink {
          id
          name
          href
        }
        offersImg {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetCaseByIdDocument = gql`
    query GetCaseById($id: ID) {
  case(id: $id) {
    data {
      attributes {
        Footer {
          ...FooterFragment
        }
        mobileName
        backround
        content {
          ... on ComponentImageBlocksOneImage {
            idBlock
            id
            image {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
          }
          ... on ComponentImageBlocksGridImage {
            idBlock
            id
            selectStreech
            threeImage {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
            twoImage {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
            oneImage {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
          }
          ... on ComponentImageBlocksDoubleImage {
            id
            idBlock
            imageTwo {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
            imageOne {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
          }
          ... on ComponentImageBlocksTextBlock {
            id
            idBlock
            title
            description
            desctopMaxWidth
            selectType
          }
          ... on ComponentImageBlocksDoubleTextBlocks {
            id
            idBlock
            oldTitle
            oldDescription
            newTitle
            newDescription
            oldLogo {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
            newLogo {
              data {
                attributes {
                  ...MediaFragment
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetCasesIdsDocument = gql`
    query GetCasesIds {
  cases(sort: "id:asc", pagination: {limit: 100}) {
    data {
      id
    }
  }
}
    `;
export const GetCasesNamesDocument = gql`
    query GetCasesNames {
  caseNames(sort: "id:asc") {
    data {
      id
      attributes {
        name
        nameID
      }
    }
  }
}
    `;
export const GetComplexByIdDocument = gql`
    query GetComplexById($id: ID) {
  complex(id: $id) {
    data {
      attributes {
        name
        footer {
          ...FooterFragment
        }
        totalHours
        videoMobile {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        includes_blocks {
          data {
            id
            attributes {
              title
              blockHover {
                id
                title
                text
                subTitle
                list
              }
              includesContent {
                id
                title
                content
              }
            }
          }
        }
        offer {
          id
          price
        }
        description
        deadlines
        banner {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetComplexPageDocument = gql`
    query GetComplexPage {
  complexAccompany {
    data {
      attributes {
        title
        description
        complexBlocks {
          ...ComplexBlock
        }
        banner {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        footer {
          ...FooterFragment
        }
      }
    }
  }
}
    ${ComplexBlockFragmentDoc}
${MediaFragmentFragmentDoc}
${FooterFragmentFragmentDoc}`;
export const GetFormFeedbackDocument = gql`
    query GetFormFeedback {
  formFeedback {
    data {
      attributes {
        formFeedback {
          ...FormSendFragment
        }
      }
    }
  }
}
    ${FormSendFragmentFragmentDoc}`;
export const GetHeaderDocument = gql`
    query GetHeader {
  header {
    data {
      attributes {
        links {
          ...LinkFragment
        }
      }
    }
  }
}
    ${LinkFragmentFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  homePage {
    data {
      attributes {
        HomeBanner {
          ...GetHomeBanner
        }
        cases {
          ...GetHomeCases
        }
      }
    }
  }
}
    ${GetHomeBannerFragmentDoc}
${GetHomeCasesFragmentDoc}`;
export const GetOfferByIdDocument = gql`
    query GetOfferById($id: ID) {
  offer(id: $id) {
    data {
      attributes {
        ...OfferFragment
      }
    }
  }
}
    ${OfferFragmentFragmentDoc}`;
export const GetOffersPageDocument = gql`
    query GetOffersPage {
  offersPage {
    data {
      attributes {
        title
        description
        offersBlock {
          ...OffersBlock
        }
        img {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        banner {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        footer {
          ...FooterFragment
        }
      }
    }
  }
}
    ${OffersBlockFragmentDoc}
${MediaFragmentFragmentDoc}
${FooterFragmentFragmentDoc}`;
export const GetPartnersDocument = gql`
    query GetPartners {
  partner {
    data {
      attributes {
        partners {
          ...GetHomePartners
        }
      }
    }
  }
}
    ${GetHomePartnersFragmentDoc}`;
export const GetServicesTitleByIdDocument = gql`
    query GetServicesTitleById($title: String) {
  services(filters: {serviceName: {name: {eq: $title}}}) {
    data {
      id
      attributes {
        Services {
          id
          service_collections {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetServicesNamesDocument = gql`
    query GetServicesNames {
  serviceNames(sort: "id:asc") {
    data {
      id
      attributes {
        name
        nameID
        footer {
          ...FooterFragment
        }
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}`;
export const GetServicesNamesOfferDocument = gql`
    query GetServicesNamesOffer {
  serviceNames(sort: "id:asc") {
    data {
      id
      attributes {
        name
        nameID
        footer {
          ...FooterFragment
        }
        offers {
          data {
            id
            attributes {
              ...OfferFragment
            }
          }
        }
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}
${OfferFragmentFragmentDoc}`;
export const GetStudioDocument = gql`
    query GetStudio {
  studio {
    data {
      attributes {
        title
        introCards {
          ...IntroCardFragment
        }
        vacancies {
          title
          description
          date
          info
          vacancies {
            data {
              id
              attributes {
                vacancy {
                  title
                  descriptionVacancy
                  selectLevel
                  btnLink
                  telegrammLink
                }
              }
            }
          }
          image {
            data {
              attributes {
                ...MediaFragment
              }
            }
          }
        }
        aboutSection {
          id
          mainTitle
          description
          aboutTitle
          aboutDescription
        }
        video {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
      }
    }
  }
}
    ${IntroCardFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetSeoAboutPageDocument = gql`
    query GetSeoAboutPage {
  studio {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoCaseIdDocument = gql`
    query GetSeoCaseId($id: ID) {
  case(id: $id) {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoComplexDocument = gql`
    query GetSeoComplex {
  seoComplexPage {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoHomePageDocument = gql`
    query GetSeoHomePage {
  homePage {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoOffersDocument = gql`
    query GetSeoOffers {
  seoOffersPage {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoPortfolioPageDocument = gql`
    query GetSeoPortfolioPage {
  portfolioPage {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoServiceCollectionPageDocument = gql`
    query GetSeoServiceCollectionPage {
  seoCollectionService {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSeoServicesPageDocument = gql`
    query GetSeoServicesPage {
  servicesPage {
    data {
      attributes {
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
    ${SeoFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCasesByNameIds(variables?: GetCasesByNameIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCasesByNameIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCasesByNameIdsQuery>(GetCasesByNameIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCasesByNameIds', 'query', variables);
    },
    GetComplexNames(variables?: GetComplexNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetComplexNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetComplexNamesQuery>(GetComplexNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetComplexNames', 'query', variables);
    },
    GetOffersName(variables?: GetOffersNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOffersNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOffersNameQuery>(GetOffersNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOffersName', 'query', variables);
    },
    GetServiceById(variables?: GetServiceByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceByIdQuery>(GetServiceByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceById', 'query', variables);
    },
    GetServiceCollectionById(variables?: GetServiceCollectionByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceCollectionByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceCollectionByIdQuery>(GetServiceCollectionByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceCollectionById', 'query', variables);
    },
    GetBurgerLinks(variables?: GetBurgerLinksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBurgerLinksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBurgerLinksQuery>(GetBurgerLinksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBurgerLinks', 'query', variables);
    },
    GetCaseById(variables?: GetCaseByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCaseByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCaseByIdQuery>(GetCaseByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCaseById', 'query', variables);
    },
    GetCasesIds(variables?: GetCasesIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCasesIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCasesIdsQuery>(GetCasesIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCasesIds', 'query', variables);
    },
    GetCasesNames(variables?: GetCasesNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCasesNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCasesNamesQuery>(GetCasesNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCasesNames', 'query', variables);
    },
    GetComplexById(variables?: GetComplexByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetComplexByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetComplexByIdQuery>(GetComplexByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetComplexById', 'query', variables);
    },
    GetComplexPage(variables?: GetComplexPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetComplexPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetComplexPageQuery>(GetComplexPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetComplexPage', 'query', variables);
    },
    GetFormFeedback(variables?: GetFormFeedbackQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFormFeedbackQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFormFeedbackQuery>(GetFormFeedbackDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFormFeedback', 'query', variables);
    },
    GetHeader(variables?: GetHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderQuery>(GetHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHeader', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePage', 'query', variables);
    },
    GetOfferById(variables?: GetOfferByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOfferByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOfferByIdQuery>(GetOfferByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOfferById', 'query', variables);
    },
    GetOffersPage(variables?: GetOffersPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOffersPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOffersPageQuery>(GetOffersPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOffersPage', 'query', variables);
    },
    GetPartners(variables?: GetPartnersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPartnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPartnersQuery>(GetPartnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPartners', 'query', variables);
    },
    GetServicesTitleById(variables?: GetServicesTitleByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesTitleByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesTitleByIdQuery>(GetServicesTitleByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesTitleById', 'query', variables);
    },
    GetServicesNames(variables?: GetServicesNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesNamesQuery>(GetServicesNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesNames', 'query', variables);
    },
    GetServicesNamesOffer(variables?: GetServicesNamesOfferQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesNamesOfferQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesNamesOfferQuery>(GetServicesNamesOfferDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesNamesOffer', 'query', variables);
    },
    GetStudio(variables?: GetStudioQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStudioQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStudioQuery>(GetStudioDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetStudio', 'query', variables);
    },
    GetSeoAboutPage(variables?: GetSeoAboutPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoAboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoAboutPageQuery>(GetSeoAboutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoAboutPage', 'query', variables);
    },
    GetSeoCaseId(variables?: GetSeoCaseIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoCaseIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoCaseIdQuery>(GetSeoCaseIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoCaseId', 'query', variables);
    },
    GetSeoComplex(variables?: GetSeoComplexQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoComplexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoComplexQuery>(GetSeoComplexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoComplex', 'query', variables);
    },
    GetSeoHomePage(variables?: GetSeoHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoHomePageQuery>(GetSeoHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoHomePage', 'query', variables);
    },
    GetSeoOffers(variables?: GetSeoOffersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoOffersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoOffersQuery>(GetSeoOffersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoOffers', 'query', variables);
    },
    GetSeoPortfolioPage(variables?: GetSeoPortfolioPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoPortfolioPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoPortfolioPageQuery>(GetSeoPortfolioPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoPortfolioPage', 'query', variables);
    },
    GetSeoServiceCollectionPage(variables?: GetSeoServiceCollectionPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoServiceCollectionPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoServiceCollectionPageQuery>(GetSeoServiceCollectionPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoServiceCollectionPage', 'query', variables);
    },
    GetSeoServicesPage(variables?: GetSeoServicesPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoServicesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoServicesPageQuery>(GetSeoServicesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSeoServicesPage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;