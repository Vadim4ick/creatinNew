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
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
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
  readonly case_name: Maybe<CaseNameEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly imageBig: UploadFileEntityResponse;
  readonly imageMain: UploadFileEntityResponse;
  readonly info: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

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
  readonly case_name: InputMaybe<CaseNameFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly info: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<CaseFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CaseFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CaseInput = {
  readonly Footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly case_name: InputMaybe<Scalars['ID']['input']>;
  readonly imageBig: InputMaybe<Scalars['ID']['input']>;
  readonly imageMain: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type CaseName = {
  readonly __typename?: 'CaseName';
  readonly cases: Maybe<CaseRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
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
  readonly not: InputMaybe<CaseNameFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CaseNameFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CaseNameInput = {
  readonly cases: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseRelationResponseCollection = {
  readonly __typename?: 'CaseRelationResponseCollection';
  readonly data: ReadonlyArray<CaseEntity>;
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

export type ComponentElementsIntroCard = {
  readonly __typename?: 'ComponentElementsIntroCard';
  readonly class: Maybe<Enum_Componentelementsintrocard_Class>;
  readonly id: Scalars['ID']['output'];
  readonly info: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ComponentElementsIntroCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardFiltersInput>>>;
  readonly class: InputMaybe<StringFilterInput>;
  readonly info: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentElementsIntroCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsIntroCardFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsIntroCardInput = {
  readonly class: InputMaybe<Enum_Componentelementsintrocard_Class>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly info: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
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

export type ContentReleasesRelease = {
  readonly __typename?: 'ContentReleasesRelease';
  readonly actions: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly releasedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  readonly __typename?: 'ContentReleasesReleaseAction';
  readonly contentType: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly entry: Maybe<GenericMorph>;
  readonly release: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly type: Enum_Contentreleasesreleaseaction_Type;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  readonly __typename?: 'ContentReleasesReleaseActionEntity';
  readonly attributes: Maybe<ContentReleasesReleaseAction>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  readonly __typename?: 'ContentReleasesReleaseActionEntityResponse';
  readonly data: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseActionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  readonly contentType: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  readonly release: InputMaybe<ContentReleasesReleaseFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  readonly contentType: InputMaybe<Scalars['String']['input']>;
  readonly release: InputMaybe<Scalars['ID']['input']>;
  readonly type: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  readonly __typename?: 'ContentReleasesReleaseEntity';
  readonly attributes: Maybe<ContentReleasesRelease>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  readonly __typename?: 'ContentReleasesReleaseEntityResponse';
  readonly data: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  readonly actions: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ContentReleasesReleaseFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  readonly releasedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  readonly actions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly releasedAt: InputMaybe<Scalars['DateTime']['input']>;
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

export enum Enum_Componentelementsintrocard_Class {
  Achievement = 'achievement',
  Folders = 'folders',
  Graph = 'graph',
  ImageGroup = 'image_group',
  Spiral = 'spiral',
  Trust = 'trust'
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

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

export type GenericMorph = Case | CaseName | ComponentComponentsFooter | ComponentComponentsHomeBanner | ComponentComponentsSliderCase | ComponentComponentsTextBlock | ComponentElementsIntroCard | ComponentElementsTitle | ComponentSectionsAboutSection | ComponentSectionsFormSend | ComponentSectionsPartners | ComponentSectionsSectionTitles | ComponentSectionsServices | ComponentUiLink | ContentReleasesRelease | ContentReleasesReleaseAction | FormFeedback | Header | HomePage | I18NLocale | Partner | Service | ServiceCollection | ServiceName | Studio | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  readonly __typename?: 'Header';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
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
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = {
  readonly __typename?: 'HomePage';
  readonly HomeBanner: Maybe<ComponentComponentsHomeBanner>;
  readonly cases: Maybe<CaseRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly formSend: Maybe<ComponentSectionsFormSend>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
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
  readonly formSend: InputMaybe<ComponentSectionsFormSendInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
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

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createCase: Maybe<CaseEntityResponse>;
  readonly createCaseName: Maybe<CaseNameEntityResponse>;
  readonly createContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly createContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly createService: Maybe<ServiceEntityResponse>;
  readonly createServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly createServiceName: Maybe<ServiceNameEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteCase: Maybe<CaseEntityResponse>;
  readonly deleteCaseName: Maybe<CaseNameEntityResponse>;
  readonly deleteContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly deleteContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly deleteFormFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly deleteHeader: Maybe<HeaderEntityResponse>;
  readonly deleteHomePage: Maybe<HomePageEntityResponse>;
  readonly deletePartner: Maybe<PartnerEntityResponse>;
  readonly deleteService: Maybe<ServiceEntityResponse>;
  readonly deleteServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly deleteServiceName: Maybe<ServiceNameEntityResponse>;
  readonly deleteStudio: Maybe<StudioEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
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
  readonly updateCase: Maybe<CaseEntityResponse>;
  readonly updateCaseName: Maybe<CaseNameEntityResponse>;
  readonly updateContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly updateContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateFormFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly updateHeader: Maybe<HeaderEntityResponse>;
  readonly updateHomePage: Maybe<HomePageEntityResponse>;
  readonly updatePartner: Maybe<PartnerEntityResponse>;
  readonly updateService: Maybe<ServiceEntityResponse>;
  readonly updateServiceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly updateServiceName: Maybe<ServiceNameEntityResponse>;
  readonly updateStudio: Maybe<StudioEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCaseArgs = {
  data: CaseInput;
};


export type MutationCreateCaseNameArgs = {
  data: CaseNameInput;
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
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


export type MutationDeleteCaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCaseNameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
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


export type MutationUpdateCaseArgs = {
  data: CaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCaseNameArgs = {
  data: CaseNameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
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


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
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


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly case: Maybe<CaseEntityResponse>;
  readonly caseName: Maybe<CaseNameEntityResponse>;
  readonly caseNames: Maybe<CaseNameEntityResponseCollection>;
  readonly cases: Maybe<CaseEntityResponseCollection>;
  readonly contentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly contentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly contentReleasesReleaseActions: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  readonly contentReleasesReleases: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  readonly formFeedback: Maybe<FormFeedbackEntityResponse>;
  readonly header: Maybe<HeaderEntityResponse>;
  readonly homePage: Maybe<HomePageEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly partner: Maybe<PartnerEntityResponse>;
  readonly service: Maybe<ServiceEntityResponse>;
  readonly serviceCollection: Maybe<ServiceCollectionEntityResponse>;
  readonly serviceCollections: Maybe<ServiceCollectionEntityResponseCollection>;
  readonly serviceName: Maybe<ServiceNameEntityResponse>;
  readonly serviceNames: Maybe<ServiceNameEntityResponseCollection>;
  readonly services: Maybe<ServiceEntityResponseCollection>;
  readonly studio: Maybe<StudioEntityResponse>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
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


export type QueryContentReleasesReleaseArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryPartnerArgs = {
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

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type Service = {
  readonly __typename?: 'Service';
  readonly Footer: Maybe<ComponentComponentsFooter>;
  readonly Services: Maybe<ComponentSectionsServices>;
  readonly SliderCase: Maybe<ComponentComponentsSliderCase>;
  readonly banner: Maybe<UploadFileRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly serviceName: Maybe<ServiceNameEntityResponse>;
  readonly textBlocks: Maybe<ReadonlyArray<Maybe<ComponentComponentsTextBlock>>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video: Maybe<UploadFileRelationResponseCollection>;
};


export type ServiceBannerArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServiceTextBlocksArgs = {
  filters: InputMaybe<ComponentComponentsTextBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServiceVideoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceCollection = {
  readonly __typename?: 'ServiceCollection';
  readonly Footer: Maybe<ComponentComponentsFooter>;
  readonly Title: Maybe<ComponentSectionsSectionTitles>;
  readonly banner: Maybe<UploadFileEntityResponse>;
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
  readonly banner: InputMaybe<Scalars['ID']['input']>;
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
  readonly Footer: InputMaybe<ComponentComponentsFooterFiltersInput>;
  readonly Services: InputMaybe<ComponentSectionsServicesFiltersInput>;
  readonly SliderCase: InputMaybe<ComponentComponentsSliderCaseFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ServiceFiltersInput>>>;
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
  readonly Footer: InputMaybe<ComponentComponentsFooterInput>;
  readonly Services: InputMaybe<ComponentSectionsServicesInput>;
  readonly SliderCase: InputMaybe<ComponentComponentsSliderCaseInput>;
  readonly banner: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly serviceName: InputMaybe<Scalars['ID']['input']>;
  readonly textBlocks: InputMaybe<ReadonlyArray<InputMaybe<ComponentComponentsTextBlockInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ServiceName = {
  readonly __typename?: 'ServiceName';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly service: Maybe<ServiceEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
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
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ServiceNameFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ServiceNameFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly service: InputMaybe<ServiceFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ServiceNameInput = {
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly service: InputMaybe<Scalars['ID']['input']>;
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
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
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
  readonly title: InputMaybe<Scalars['String']['input']>;
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

export type GetCasesByNameIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCasesByNameIdQuery = { readonly __typename?: 'Query', readonly cases: { readonly __typename?: 'CaseEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly case_name: { readonly __typename?: 'CaseNameEntityResponse', readonly data: { readonly __typename?: 'CaseNameEntity', readonly attributes: { readonly __typename?: 'CaseName', readonly name: string } } }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }> } };

export type GetServiceByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetServiceByIdQuery = { readonly __typename?: 'Query', readonly services: { readonly __typename?: 'ServiceEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceEntity', readonly attributes: { readonly __typename?: 'Service', readonly title: string, readonly description: string, readonly SliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly Services: { readonly __typename?: 'ComponentSectionsServices', readonly id: string, readonly title: string, readonly description: string, readonly service_collections: { readonly __typename?: 'ServiceCollectionRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string, readonly description: string, readonly price: any, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly serviceName: { readonly __typename?: 'ServiceNameEntityResponse', readonly data: { readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } } }, readonly banner: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> }, readonly video: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> } } }> } };

export type GetServiceCollectionByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetServiceCollectionByIdQuery = { readonly __typename?: 'Query', readonly serviceCollection: { readonly __typename?: 'ServiceCollectionEntityResponse', readonly data: { readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string, readonly description: string, readonly deadlines: string, readonly price: any, readonly Title: { readonly __typename?: 'ComponentSectionsSectionTitles', readonly id: string, readonly title: string, readonly titles: ReadonlyArray<{ readonly __typename?: 'ComponentElementsTitle', readonly id: string, readonly title: string }> }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly sliderCase: { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly textBlocks: ReadonlyArray<{ readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string }>, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

export type CaseFragmentFragment = { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly case_name: { readonly __typename?: 'CaseNameEntityResponse', readonly data: { readonly __typename?: 'CaseNameEntity', readonly attributes: { readonly __typename?: 'CaseName', readonly name: string } } }, readonly Footer: { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } };

export type LinkFragmentFragment = { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly href: string, readonly name: string };

export type MediaFragmentFragment = { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number };

export type FooterFragmentFragment = { readonly __typename?: 'ComponentComponentsFooter', readonly title: string, readonly img: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type FormSendFragmentFragment = { readonly __typename?: 'ComponentSectionsFormSend', readonly description: string, readonly address: string, readonly email: string, readonly number: any };

export type IntroCardFragmentFragment = { readonly __typename?: 'ComponentElementsIntroCard', readonly class: Enum_Componentelementsintrocard_Class, readonly id: string, readonly title: string, readonly info: string };

export type SliderFragmentFragment = { readonly __typename?: 'ComponentComponentsSliderCase', readonly id: string, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } };

export type TextBlocksFragmentFragment = { readonly __typename?: 'ComponentComponentsTextBlock', readonly id: string, readonly titlle: string, readonly description: string };

export type ServicesNamesAttributesFragmentFragment = { readonly __typename?: 'ServiceName', readonly name: string, readonly service: { readonly __typename?: 'ServiceEntityResponse', readonly data: { readonly __typename?: 'ServiceEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Service', readonly title: string } } } };

export type GetHomeBannerFragment = { readonly __typename?: 'ComponentComponentsHomeBanner', readonly IntroCard: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly class: Enum_Componentelementsintrocard_Class, readonly id: string, readonly title: string, readonly info: string }>, readonly bannerMasks: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> }, readonly bannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } };

export type GetHomeCasesFragment = { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> };

export type GetHomePartnersFragment = { readonly __typename?: 'ComponentSectionsPartners', readonly title: string, readonly description: string, readonly icons: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> } };

export type GetCasesNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCasesNamesQuery = { readonly __typename?: 'Query', readonly caseNames: { readonly __typename?: 'CaseNameEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'CaseName', readonly name: string } }> } };

export type GetFormFeedbackQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormFeedbackQuery = { readonly __typename?: 'Query', readonly formFeedback: { readonly __typename?: 'FormFeedbackEntityResponse', readonly data: { readonly __typename?: 'FormFeedbackEntity', readonly attributes: { readonly __typename?: 'FormFeedback', readonly formFeedback: { readonly __typename?: 'ComponentSectionsFormSend', readonly description: string, readonly address: string, readonly email: string, readonly number: any } } } } };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly href: string, readonly name: string }> } } } };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly homePage: { readonly __typename?: 'HomePageEntityResponse', readonly data: { readonly __typename?: 'HomePageEntity', readonly attributes: { readonly __typename?: 'HomePage', readonly title: string, readonly HomeBanner: { readonly __typename?: 'ComponentComponentsHomeBanner', readonly IntroCard: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly class: Enum_Componentelementsintrocard_Class, readonly id: string, readonly title: string, readonly info: string }>, readonly bannerMasks: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> }, readonly bannerMobile: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly banner: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }, readonly formSend: { readonly __typename?: 'ComponentSectionsFormSend', readonly description: string, readonly address: string, readonly email: string, readonly number: any }, readonly cases: { readonly __typename?: 'CaseRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CaseEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Case', readonly title: string, readonly info: string, readonly imageBig: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly imageMain: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } } } } };

export type GetPartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPartnersQuery = { readonly __typename?: 'Query', readonly partner: { readonly __typename?: 'PartnerEntityResponse', readonly data: { readonly __typename?: 'PartnerEntity', readonly attributes: { readonly __typename?: 'Partner', readonly partners: { readonly __typename?: 'ComponentSectionsPartners', readonly title: string, readonly description: string, readonly icons: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } }> } } } } } };

export type GetServicesTitleByIdQueryVariables = Exact<{
  title: InputMaybe<Scalars['String']['input']>;
}>;


export type GetServicesTitleByIdQuery = { readonly __typename?: 'Query', readonly services: { readonly __typename?: 'ServiceEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Service', readonly Services: { readonly __typename?: 'ComponentSectionsServices', readonly id: string, readonly service_collections: { readonly __typename?: 'ServiceCollectionRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceCollectionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceCollection', readonly name: string } }> } } } }> } };

export type GetServicesNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesNamesQuery = { readonly __typename?: 'Query', readonly serviceNames: { readonly __typename?: 'ServiceNameEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ServiceNameEntity', readonly id: string, readonly attributes: { readonly __typename?: 'ServiceName', readonly name: string } }> } };

export type GetStudioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudioQuery = { readonly __typename?: 'Query', readonly studio: { readonly __typename?: 'StudioEntityResponse', readonly data: { readonly __typename?: 'StudioEntity', readonly attributes: { readonly __typename?: 'Studio', readonly title: string, readonly introCards: ReadonlyArray<{ readonly __typename?: 'ComponentElementsIntroCard', readonly class: Enum_Componentelementsintrocard_Class, readonly id: string, readonly title: string, readonly info: string }>, readonly aboutSection: { readonly __typename?: 'ComponentSectionsAboutSection', readonly id: string, readonly mainTitle: string, readonly description: string, readonly aboutTitle: string, readonly aboutDescription: string }, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

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
  case_name {
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
export const FormSendFragmentFragmentDoc = gql`
    fragment FormSendFragment on ComponentSectionsFormSend {
  description
  address
  email
  number
}
    `;
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
  class
  id
  title
  info
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
export const GetCasesByNameIdDocument = gql`
    query GetCasesByNameId($id: ID) {
  cases(filters: {case_name: {id: {eq: $id}}}) {
    data {
      id
      attributes {
        ...CaseFragment
      }
    }
  }
}
    ${CaseFragmentFragmentDoc}`;
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
                banner {
                  data {
                    attributes {
                      ...MediaFragment
                    }
                  }
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
        Footer {
          ...FooterFragment
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
        banner {
          data {
            attributes {
              ...MediaFragment
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
      }
    }
  }
}
    ${SliderFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}
${MediaFragmentFragmentDoc}
${FooterFragmentFragmentDoc}`;
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
        banner {
          data {
            attributes {
              ...MediaFragment
            }
          }
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
      }
    }
  }
}
    ${FooterFragmentFragmentDoc}
${SliderFragmentFragmentDoc}
${MediaFragmentFragmentDoc}
${TextBlocksFragmentFragmentDoc}`;
export const GetCasesNamesDocument = gql`
    query GetCasesNames {
  caseNames {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;
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
        title
        HomeBanner {
          ...GetHomeBanner
        }
        formSend {
          ...FormSendFragment
        }
        cases {
          ...GetHomeCases
        }
      }
    }
  }
}
    ${GetHomeBannerFragmentDoc}
${FormSendFragmentFragmentDoc}
${GetHomeCasesFragmentDoc}`;
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
  serviceNames {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;
export const GetStudioDocument = gql`
    query GetStudio {
  studio {
    data {
      attributes {
        title
        introCards {
          ...IntroCardFragment
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCasesByNameId(variables?: GetCasesByNameIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCasesByNameIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCasesByNameIdQuery>(GetCasesByNameIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCasesByNameId', 'query', variables);
    },
    GetServiceById(variables?: GetServiceByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceByIdQuery>(GetServiceByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceById', 'query', variables);
    },
    GetServiceCollectionById(variables?: GetServiceCollectionByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceCollectionByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceCollectionByIdQuery>(GetServiceCollectionByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceCollectionById', 'query', variables);
    },
    GetCasesNames(variables?: GetCasesNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCasesNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCasesNamesQuery>(GetCasesNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCasesNames', 'query', variables);
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
    GetPartners(variables?: GetPartnersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPartnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPartnersQuery>(GetPartnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPartners', 'query', variables);
    },
    GetServicesTitleById(variables?: GetServicesTitleByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesTitleByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesTitleByIdQuery>(GetServicesTitleByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesTitleById', 'query', variables);
    },
    GetServicesNames(variables?: GetServicesNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesNamesQuery>(GetServicesNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesNames', 'query', variables);
    },
    GetStudio(variables?: GetStudioQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStudioQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStudioQuery>(GetStudioDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetStudio', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;