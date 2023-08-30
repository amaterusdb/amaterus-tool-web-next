import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "amongus_maps" */
export type Amongus_Maps = {
  __typename?: 'amongus_maps';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_vanilla: Scalars['Boolean']['output'];
  /** An object relationship */
  mod?: Maybe<Amongus_Mods>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "amongus_maps" */
export type Amongus_Maps_Aggregate = {
  __typename?: 'amongus_maps_aggregate';
  aggregate?: Maybe<Amongus_Maps_Aggregate_Fields>;
  nodes: Array<Amongus_Maps>;
};

export type Amongus_Maps_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Amongus_Maps_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Amongus_Maps_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Amongus_Maps_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Maps_Aggregate_Bool_Exp_Bool_And = {
  arguments: Amongus_Maps_Select_Column_Amongus_Maps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Maps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Maps_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Amongus_Maps_Select_Column_Amongus_Maps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Maps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Maps_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Maps_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_maps" */
export type Amongus_Maps_Aggregate_Fields = {
  __typename?: 'amongus_maps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Maps_Max_Fields>;
  min?: Maybe<Amongus_Maps_Min_Fields>;
};


/** aggregate fields of "amongus_maps" */
export type Amongus_Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_maps" */
export type Amongus_Maps_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Maps_Max_Order_By>;
  min?: InputMaybe<Amongus_Maps_Min_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_maps" */
export type Amongus_Maps_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Maps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Maps_On_Conflict>;
};

/** Boolean expression to filter rows from the table "amongus_maps". All fields are combined with a logical 'AND'. */
export type Amongus_Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Maps_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Maps_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_vanilla?: InputMaybe<Boolean_Comparison_Exp>;
  mod?: InputMaybe<Amongus_Mods_Bool_Exp>;
  mod_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_maps" */
export enum Amongus_Maps_Constraint {
  /** unique or primary key constraint on columns "id" */
  MapsPkey = 'maps_pkey'
}

/** input type for inserting data into table "amongus_maps" */
export type Amongus_Maps_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Amongus_Mods_Obj_Rel_Insert_Input>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Maps_Max_Fields = {
  __typename?: 'amongus_maps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "amongus_maps" */
export type Amongus_Maps_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Maps_Min_Fields = {
  __typename?: 'amongus_maps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "amongus_maps" */
export type Amongus_Maps_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_maps" */
export type Amongus_Maps_Mutation_Response = {
  __typename?: 'amongus_maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Maps>;
};

/** input type for inserting object relation for remote table "amongus_maps" */
export type Amongus_Maps_Obj_Rel_Insert_Input = {
  data: Amongus_Maps_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Maps_On_Conflict>;
};

/** on_conflict condition type for table "amongus_maps" */
export type Amongus_Maps_On_Conflict = {
  constraint: Amongus_Maps_Constraint;
  update_columns?: Array<Amongus_Maps_Update_Column>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_maps". */
export type Amongus_Maps_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_vanilla?: InputMaybe<Order_By>;
  mod?: InputMaybe<Amongus_Mods_Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_maps */
export type Amongus_Maps_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_maps" */
export enum Amongus_Maps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "amongus_maps_aggregate_bool_exp_bool_and_arguments_columns" columns of table "amongus_maps" */
export enum Amongus_Maps_Select_Column_Amongus_Maps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** select "amongus_maps_aggregate_bool_exp_bool_or_arguments_columns" columns of table "amongus_maps" */
export enum Amongus_Maps_Select_Column_Amongus_Maps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** input type for updating data in table "amongus_maps" */
export type Amongus_Maps_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "amongus_maps" */
export type Amongus_Maps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Maps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Maps_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "amongus_maps" */
export enum Amongus_Maps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Maps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Maps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Maps_Bool_Exp;
};

/** columns and relationships of "amongus_match_mods" */
export type Amongus_Match_Mods = {
  __typename?: 'amongus_match_mods';
  amongus_match_id: Scalars['uuid']['output'];
  amongus_mod_id: Scalars['uuid']['output'];
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "amongus_match_mods" */
export type Amongus_Match_Mods_Aggregate = {
  __typename?: 'amongus_match_mods_aggregate';
  aggregate?: Maybe<Amongus_Match_Mods_Aggregate_Fields>;
  nodes: Array<Amongus_Match_Mods>;
};

/** aggregate fields of "amongus_match_mods" */
export type Amongus_Match_Mods_Aggregate_Fields = {
  __typename?: 'amongus_match_mods_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Match_Mods_Max_Fields>;
  min?: Maybe<Amongus_Match_Mods_Min_Fields>;
};


/** aggregate fields of "amongus_match_mods" */
export type Amongus_Match_Mods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Match_Mods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "amongus_match_mods". All fields are combined with a logical 'AND'. */
export type Amongus_Match_Mods_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Match_Mods_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Match_Mods_Bool_Exp>>;
  amongus_match_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_mod_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_mod_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_match_mods" */
export enum Amongus_Match_Mods_Constraint {
  /** unique or primary key constraint on columns "amongus_mod_id", "amongus_match_id" */
  AmongusMatchModsAmongusMatchIdAmongusModIdKey = 'amongus_match_mods_amongus_match_id_amongus_mod_id_key',
  /** unique or primary key constraint on columns "id" */
  AmongusMatchModsPkey = 'amongus_match_mods_pkey'
}

/** input type for inserting data into table "amongus_match_mods" */
export type Amongus_Match_Mods_Insert_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Match_Mods_Max_Fields = {
  __typename?: 'amongus_match_mods_max_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Amongus_Match_Mods_Min_Fields = {
  __typename?: 'amongus_match_mods_min_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "amongus_match_mods" */
export type Amongus_Match_Mods_Mutation_Response = {
  __typename?: 'amongus_match_mods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Match_Mods>;
};

/** on_conflict condition type for table "amongus_match_mods" */
export type Amongus_Match_Mods_On_Conflict = {
  constraint: Amongus_Match_Mods_Constraint;
  update_columns?: Array<Amongus_Match_Mods_Update_Column>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_match_mods". */
export type Amongus_Match_Mods_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  amongus_mod_id?: InputMaybe<Order_By>;
  amongus_mod_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_match_mods */
export type Amongus_Match_Mods_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_match_mods" */
export enum Amongus_Match_Mods_Select_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  AmongusModId = 'amongus_mod_id',
  /** column name */
  AmongusModVersionId = 'amongus_mod_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "amongus_match_mods" */
export type Amongus_Match_Mods_Set_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "amongus_match_mods" */
export type Amongus_Match_Mods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Match_Mods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Match_Mods_Stream_Cursor_Value_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "amongus_match_mods" */
export enum Amongus_Match_Mods_Update_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  AmongusModId = 'amongus_mod_id',
  /** column name */
  AmongusModVersionId = 'amongus_mod_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Match_Mods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Match_Mods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Match_Mods_Bool_Exp;
};

/** リザルト画面でのプレイヤー役職 */
export type Amongus_Match_Player_Result_Roles = {
  __typename?: 'amongus_match_player_result_roles';
  amongus_match_id: Scalars['uuid']['output'];
  amongus_role_id: Scalars['uuid']['output'];
  amongus_role_index: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Aggregate = {
  __typename?: 'amongus_match_player_result_roles_aggregate';
  aggregate?: Maybe<Amongus_Match_Player_Result_Roles_Aggregate_Fields>;
  nodes: Array<Amongus_Match_Player_Result_Roles>;
};

export type Amongus_Match_Player_Result_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Amongus_Match_Player_Result_Roles_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Match_Player_Result_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Aggregate_Fields = {
  __typename?: 'amongus_match_player_result_roles_aggregate_fields';
  avg?: Maybe<Amongus_Match_Player_Result_Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Match_Player_Result_Roles_Max_Fields>;
  min?: Maybe<Amongus_Match_Player_Result_Roles_Min_Fields>;
  stddev?: Maybe<Amongus_Match_Player_Result_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Amongus_Match_Player_Result_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Amongus_Match_Player_Result_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Amongus_Match_Player_Result_Roles_Sum_Fields>;
  var_pop?: Maybe<Amongus_Match_Player_Result_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Amongus_Match_Player_Result_Roles_Var_Samp_Fields>;
  variance?: Maybe<Amongus_Match_Player_Result_Roles_Variance_Fields>;
};


/** aggregate fields of "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<Amongus_Match_Player_Result_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Match_Player_Result_Roles_Max_Order_By>;
  min?: InputMaybe<Amongus_Match_Player_Result_Roles_Min_Order_By>;
  stddev?: InputMaybe<Amongus_Match_Player_Result_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Amongus_Match_Player_Result_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Amongus_Match_Player_Result_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Amongus_Match_Player_Result_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<Amongus_Match_Player_Result_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Amongus_Match_Player_Result_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<Amongus_Match_Player_Result_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Match_Player_Result_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Match_Player_Result_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Amongus_Match_Player_Result_Roles_Avg_Fields = {
  __typename?: 'amongus_match_player_result_roles_avg_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Avg_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "amongus_match_player_result_roles". All fields are combined with a logical 'AND'. */
export type Amongus_Match_Player_Result_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Bool_Exp>>;
  amongus_match_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_role_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_role_index?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_match_player_result_roles" */
export enum Amongus_Match_Player_Result_Roles_Constraint {
  /** unique or primary key constraint on columns "amongus_role_id", "amongus_match_id", "person_id" */
  MatchResultPlayerRolesMatchIdPersonIdPlayerRoleIdKey = 'match_result_player_roles_match_id_person_id_player_role_id_key',
  /** unique or primary key constraint on columns "amongus_match_id", "amongus_role_index", "person_id" */
  MatchResultPlayerRolesMatchIdPersonIdPlayerRoleOrKey = 'match_result_player_roles_match_id_person_id_player_role_or_key',
  /** unique or primary key constraint on columns "id" */
  MatchResultPlayerRolesPkey = 'match_result_player_roles_pkey'
}

/** input type for incrementing numeric columns in table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Inc_Input = {
  amongus_role_index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Insert_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_index?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Match_Player_Result_Roles_Max_Fields = {
  __typename?: 'amongus_match_player_result_roles_max_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  amongus_role_id?: Maybe<Scalars['uuid']['output']>;
  amongus_role_index?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Max_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  amongus_role_id?: InputMaybe<Order_By>;
  amongus_role_index?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Match_Player_Result_Roles_Min_Fields = {
  __typename?: 'amongus_match_player_result_roles_min_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  amongus_role_id?: Maybe<Scalars['uuid']['output']>;
  amongus_role_index?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Min_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  amongus_role_id?: InputMaybe<Order_By>;
  amongus_role_index?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Mutation_Response = {
  __typename?: 'amongus_match_player_result_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Match_Player_Result_Roles>;
};

/** on_conflict condition type for table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_On_Conflict = {
  constraint: Amongus_Match_Player_Result_Roles_Constraint;
  update_columns?: Array<Amongus_Match_Player_Result_Roles_Update_Column>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_match_player_result_roles". */
export type Amongus_Match_Player_Result_Roles_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  amongus_role_id?: InputMaybe<Order_By>;
  amongus_role_index?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_match_player_result_roles */
export type Amongus_Match_Player_Result_Roles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_match_player_result_roles" */
export enum Amongus_Match_Player_Result_Roles_Select_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  AmongusRoleId = 'amongus_role_id',
  /** column name */
  AmongusRoleIndex = 'amongus_role_index',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Set_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_index?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Amongus_Match_Player_Result_Roles_Stddev_Fields = {
  __typename?: 'amongus_match_player_result_roles_stddev_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Stddev_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Amongus_Match_Player_Result_Roles_Stddev_Pop_Fields = {
  __typename?: 'amongus_match_player_result_roles_stddev_pop_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Stddev_Pop_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Amongus_Match_Player_Result_Roles_Stddev_Samp_Fields = {
  __typename?: 'amongus_match_player_result_roles_stddev_samp_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Stddev_Samp_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Match_Player_Result_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Match_Player_Result_Roles_Stream_Cursor_Value_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_role_index?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Amongus_Match_Player_Result_Roles_Sum_Fields = {
  __typename?: 'amongus_match_player_result_roles_sum_fields';
  amongus_role_index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Sum_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** update columns of table "amongus_match_player_result_roles" */
export enum Amongus_Match_Player_Result_Roles_Update_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  AmongusRoleId = 'amongus_role_id',
  /** column name */
  AmongusRoleIndex = 'amongus_role_index',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Match_Player_Result_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Amongus_Match_Player_Result_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Match_Player_Result_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Match_Player_Result_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Amongus_Match_Player_Result_Roles_Var_Pop_Fields = {
  __typename?: 'amongus_match_player_result_roles_var_pop_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Var_Pop_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Amongus_Match_Player_Result_Roles_Var_Samp_Fields = {
  __typename?: 'amongus_match_player_result_roles_var_samp_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Var_Samp_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Amongus_Match_Player_Result_Roles_Variance_Fields = {
  __typename?: 'amongus_match_player_result_roles_variance_fields';
  amongus_role_index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "amongus_match_player_result_roles" */
export type Amongus_Match_Player_Result_Roles_Variance_Order_By = {
  amongus_role_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "amongus_match_players" */
export type Amongus_Match_Players = {
  __typename?: 'amongus_match_players';
  /** An object relationship */
  amongus_match: Amongus_Matches;
  amongus_match_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  nickname: Scalars['String']['output'];
  /** An object relationship */
  person?: Maybe<Persons>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "amongus_match_players" */
export type Amongus_Match_Players_Aggregate = {
  __typename?: 'amongus_match_players_aggregate';
  aggregate?: Maybe<Amongus_Match_Players_Aggregate_Fields>;
  nodes: Array<Amongus_Match_Players>;
};

export type Amongus_Match_Players_Aggregate_Bool_Exp = {
  count?: InputMaybe<Amongus_Match_Players_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Match_Players_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_match_players" */
export type Amongus_Match_Players_Aggregate_Fields = {
  __typename?: 'amongus_match_players_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Match_Players_Max_Fields>;
  min?: Maybe<Amongus_Match_Players_Min_Fields>;
};


/** aggregate fields of "amongus_match_players" */
export type Amongus_Match_Players_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_match_players" */
export type Amongus_Match_Players_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Match_Players_Max_Order_By>;
  min?: InputMaybe<Amongus_Match_Players_Min_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_match_players" */
export type Amongus_Match_Players_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Match_Players_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Match_Players_On_Conflict>;
};

/** Boolean expression to filter rows from the table "amongus_match_players". All fields are combined with a logical 'AND'. */
export type Amongus_Match_Players_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Match_Players_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Match_Players_Bool_Exp>>;
  amongus_match?: InputMaybe<Amongus_Matches_Bool_Exp>;
  amongus_match_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_match_players" */
export enum Amongus_Match_Players_Constraint {
  /** unique or primary key constraint on columns "amongus_match_id", "nickname" */
  AmongusMatchPlayersMatchIdNicknameKey = 'amongus_match_players_match_id_nickname_key',
  /** unique or primary key constraint on columns "amongus_match_id", "person_id" */
  AmongusMatchPlayersMatchIdPersonIdKey = 'amongus_match_players_match_id_person_id_key',
  /** unique or primary key constraint on columns "id" */
  AmongusMatchPlayersPkey = 'amongus_match_players_pkey'
}

/** input type for inserting data into table "amongus_match_players" */
export type Amongus_Match_Players_Insert_Input = {
  amongus_match?: InputMaybe<Amongus_Matches_Obj_Rel_Insert_Input>;
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Match_Players_Max_Fields = {
  __typename?: 'amongus_match_players_max_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "amongus_match_players" */
export type Amongus_Match_Players_Max_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Match_Players_Min_Fields = {
  __typename?: 'amongus_match_players_min_fields';
  amongus_match_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "amongus_match_players" */
export type Amongus_Match_Players_Min_Order_By = {
  amongus_match_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_match_players" */
export type Amongus_Match_Players_Mutation_Response = {
  __typename?: 'amongus_match_players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Match_Players>;
};

/** on_conflict condition type for table "amongus_match_players" */
export type Amongus_Match_Players_On_Conflict = {
  constraint: Amongus_Match_Players_Constraint;
  update_columns?: Array<Amongus_Match_Players_Update_Column>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_match_players". */
export type Amongus_Match_Players_Order_By = {
  amongus_match?: InputMaybe<Amongus_Matches_Order_By>;
  amongus_match_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_match_players */
export type Amongus_Match_Players_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_match_players" */
export enum Amongus_Match_Players_Select_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "amongus_match_players" */
export type Amongus_Match_Players_Set_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "amongus_match_players" */
export type Amongus_Match_Players_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Match_Players_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Match_Players_Stream_Cursor_Value_Input = {
  amongus_match_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "amongus_match_players" */
export enum Amongus_Match_Players_Update_Column {
  /** column name */
  AmongusMatchId = 'amongus_match_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Match_Players_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Match_Players_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Match_Players_Bool_Exp;
};

/** columns and relationships of "amongus_matches" */
export type Amongus_Matches = {
  __typename?: 'amongus_matches';
  /** An object relationship */
  amongus_map?: Maybe<Amongus_Maps>;
  amongus_map_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  amongus_match_players: Array<Amongus_Match_Players>;
  /** An aggregate relationship */
  amongus_match_players_aggregate: Amongus_Match_Players_Aggregate;
  /** An object relationship */
  amongus_vanilla_version?: Maybe<Amongus_Vanilla_Versions>;
  amongus_vanilla_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  is_aborted?: Maybe<Scalars['Boolean']['output']>;
  is_vanilla?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  start_time: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "amongus_matches" */
export type Amongus_MatchesAmongus_Match_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


/** columns and relationships of "amongus_matches" */
export type Amongus_MatchesAmongus_Match_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};

/** aggregated selection of "amongus_matches" */
export type Amongus_Matches_Aggregate = {
  __typename?: 'amongus_matches_aggregate';
  aggregate?: Maybe<Amongus_Matches_Aggregate_Fields>;
  nodes: Array<Amongus_Matches>;
};

export type Amongus_Matches_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Amongus_Matches_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Amongus_Matches_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Amongus_Matches_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Matches_Aggregate_Bool_Exp_Bool_And = {
  arguments: Amongus_Matches_Select_Column_Amongus_Matches_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Matches_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Matches_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Amongus_Matches_Select_Column_Amongus_Matches_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Matches_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Matches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Matches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_matches" */
export type Amongus_Matches_Aggregate_Fields = {
  __typename?: 'amongus_matches_aggregate_fields';
  avg?: Maybe<Amongus_Matches_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Matches_Max_Fields>;
  min?: Maybe<Amongus_Matches_Min_Fields>;
  stddev?: Maybe<Amongus_Matches_Stddev_Fields>;
  stddev_pop?: Maybe<Amongus_Matches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Amongus_Matches_Stddev_Samp_Fields>;
  sum?: Maybe<Amongus_Matches_Sum_Fields>;
  var_pop?: Maybe<Amongus_Matches_Var_Pop_Fields>;
  var_samp?: Maybe<Amongus_Matches_Var_Samp_Fields>;
  variance?: Maybe<Amongus_Matches_Variance_Fields>;
};


/** aggregate fields of "amongus_matches" */
export type Amongus_Matches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_matches" */
export type Amongus_Matches_Aggregate_Order_By = {
  avg?: InputMaybe<Amongus_Matches_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Matches_Max_Order_By>;
  min?: InputMaybe<Amongus_Matches_Min_Order_By>;
  stddev?: InputMaybe<Amongus_Matches_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Amongus_Matches_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Amongus_Matches_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Amongus_Matches_Sum_Order_By>;
  var_pop?: InputMaybe<Amongus_Matches_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Amongus_Matches_Var_Samp_Order_By>;
  variance?: InputMaybe<Amongus_Matches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_matches" */
export type Amongus_Matches_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Matches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Matches_On_Conflict>;
};

/** aggregate avg on columns */
export type Amongus_Matches_Avg_Fields = {
  __typename?: 'amongus_matches_avg_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "amongus_matches" */
export type Amongus_Matches_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "amongus_matches". All fields are combined with a logical 'AND'. */
export type Amongus_Matches_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Matches_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Matches_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Matches_Bool_Exp>>;
  amongus_map?: InputMaybe<Amongus_Maps_Bool_Exp>;
  amongus_map_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_match_players?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
  amongus_match_players_aggregate?: InputMaybe<Amongus_Match_Players_Aggregate_Bool_Exp>;
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
  amongus_vanilla_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  is_aborted?: InputMaybe<Boolean_Comparison_Exp>;
  is_vanilla?: InputMaybe<Boolean_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_matches" */
export enum Amongus_Matches_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomAmongusMatchesPkey = 'room_amongus_matches_pkey',
  /** unique or primary key constraint on columns "index", "program_id" */
  RoomAmongusMatchesRoomIdIndexKey = 'room_amongus_matches_room_id_index_key'
}

/** input type for incrementing numeric columns in table "amongus_matches" */
export type Amongus_Matches_Inc_Input = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "amongus_matches" */
export type Amongus_Matches_Insert_Input = {
  amongus_map?: InputMaybe<Amongus_Maps_Obj_Rel_Insert_Input>;
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_match_players?: InputMaybe<Amongus_Match_Players_Arr_Rel_Insert_Input>;
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Obj_Rel_Insert_Input>;
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Matches_Max_Fields = {
  __typename?: 'amongus_matches_max_fields';
  amongus_map_id?: Maybe<Scalars['uuid']['output']>;
  amongus_vanilla_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "amongus_matches" */
export type Amongus_Matches_Max_Order_By = {
  amongus_map_id?: InputMaybe<Order_By>;
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Matches_Min_Fields = {
  __typename?: 'amongus_matches_min_fields';
  amongus_map_id?: Maybe<Scalars['uuid']['output']>;
  amongus_vanilla_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "amongus_matches" */
export type Amongus_Matches_Min_Order_By = {
  amongus_map_id?: InputMaybe<Order_By>;
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_matches" */
export type Amongus_Matches_Mutation_Response = {
  __typename?: 'amongus_matches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Matches>;
};

/** input type for inserting object relation for remote table "amongus_matches" */
export type Amongus_Matches_Obj_Rel_Insert_Input = {
  data: Amongus_Matches_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Matches_On_Conflict>;
};

/** on_conflict condition type for table "amongus_matches" */
export type Amongus_Matches_On_Conflict = {
  constraint: Amongus_Matches_Constraint;
  update_columns?: Array<Amongus_Matches_Update_Column>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_matches". */
export type Amongus_Matches_Order_By = {
  amongus_map?: InputMaybe<Amongus_Maps_Order_By>;
  amongus_map_id?: InputMaybe<Order_By>;
  amongus_match_players_aggregate?: InputMaybe<Amongus_Match_Players_Aggregate_Order_By>;
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Order_By>;
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  is_aborted?: InputMaybe<Order_By>;
  is_vanilla?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_matches */
export type Amongus_Matches_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_matches" */
export enum Amongus_Matches_Select_Column {
  /** column name */
  AmongusMapId = 'amongus_map_id',
  /** column name */
  AmongusVanillaVersionId = 'amongus_vanilla_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "amongus_matches_aggregate_bool_exp_bool_and_arguments_columns" columns of table "amongus_matches" */
export enum Amongus_Matches_Select_Column_Amongus_Matches_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** select "amongus_matches_aggregate_bool_exp_bool_or_arguments_columns" columns of table "amongus_matches" */
export enum Amongus_Matches_Select_Column_Amongus_Matches_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** input type for updating data in table "amongus_matches" */
export type Amongus_Matches_Set_Input = {
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Amongus_Matches_Stddev_Fields = {
  __typename?: 'amongus_matches_stddev_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "amongus_matches" */
export type Amongus_Matches_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Amongus_Matches_Stddev_Pop_Fields = {
  __typename?: 'amongus_matches_stddev_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "amongus_matches" */
export type Amongus_Matches_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Amongus_Matches_Stddev_Samp_Fields = {
  __typename?: 'amongus_matches_stddev_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "amongus_matches" */
export type Amongus_Matches_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "amongus_matches" */
export type Amongus_Matches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Matches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Matches_Stream_Cursor_Value_Input = {
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Amongus_Matches_Sum_Fields = {
  __typename?: 'amongus_matches_sum_fields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "amongus_matches" */
export type Amongus_Matches_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** update columns of table "amongus_matches" */
export enum Amongus_Matches_Update_Column {
  /** column name */
  AmongusMapId = 'amongus_map_id',
  /** column name */
  AmongusVanillaVersionId = 'amongus_vanilla_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Matches_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Amongus_Matches_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Matches_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Matches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Amongus_Matches_Var_Pop_Fields = {
  __typename?: 'amongus_matches_var_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "amongus_matches" */
export type Amongus_Matches_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Amongus_Matches_Var_Samp_Fields = {
  __typename?: 'amongus_matches_var_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "amongus_matches" */
export type Amongus_Matches_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Amongus_Matches_Variance_Fields = {
  __typename?: 'amongus_matches_variance_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "amongus_matches" */
export type Amongus_Matches_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "amongus_mod_versions" */
export type Amongus_Mod_Versions = {
  __typename?: 'amongus_mod_versions';
  created_at: Scalars['timestamptz']['output'];
  github_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  mod: Amongus_Mods;
  mod_id: Scalars['uuid']['output'];
  release_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  version: Scalars['String']['output'];
};

/** aggregated selection of "amongus_mod_versions" */
export type Amongus_Mod_Versions_Aggregate = {
  __typename?: 'amongus_mod_versions_aggregate';
  aggregate?: Maybe<Amongus_Mod_Versions_Aggregate_Fields>;
  nodes: Array<Amongus_Mod_Versions>;
};

export type Amongus_Mod_Versions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Amongus_Mod_Versions_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Mod_Versions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_mod_versions" */
export type Amongus_Mod_Versions_Aggregate_Fields = {
  __typename?: 'amongus_mod_versions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Mod_Versions_Max_Fields>;
  min?: Maybe<Amongus_Mod_Versions_Min_Fields>;
};


/** aggregate fields of "amongus_mod_versions" */
export type Amongus_Mod_Versions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Mod_Versions_Max_Order_By>;
  min?: InputMaybe<Amongus_Mod_Versions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Mod_Versions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Mod_Versions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "amongus_mod_versions". All fields are combined with a logical 'AND'. */
export type Amongus_Mod_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Mod_Versions_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Mod_Versions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  github_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mod?: InputMaybe<Amongus_Mods_Bool_Exp>;
  mod_id?: InputMaybe<Uuid_Comparison_Exp>;
  release_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_mod_versions" */
export enum Amongus_Mod_Versions_Constraint {
  /** unique or primary key constraint on columns "mod_id", "version" */
  ModVersionsModIdVersionKey = 'mod_versions_mod_id_version_key',
  /** unique or primary key constraint on columns "id" */
  ModVersionsPkey = 'mod_versions_pkey'
}

/** input type for inserting data into table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mod?: InputMaybe<Amongus_Mods_Obj_Rel_Insert_Input>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  release_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Amongus_Mod_Versions_Max_Fields = {
  __typename?: 'amongus_mod_versions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  release_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  release_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Mod_Versions_Min_Fields = {
  __typename?: 'amongus_mod_versions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  release_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  release_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Mutation_Response = {
  __typename?: 'amongus_mod_versions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Mod_Versions>;
};

/** input type for inserting object relation for remote table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Obj_Rel_Insert_Input = {
  data: Amongus_Mod_Versions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Mod_Versions_On_Conflict>;
};

/** on_conflict condition type for table "amongus_mod_versions" */
export type Amongus_Mod_Versions_On_Conflict = {
  constraint: Amongus_Mod_Versions_Constraint;
  update_columns?: Array<Amongus_Mod_Versions_Update_Column>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_mod_versions". */
export type Amongus_Mod_Versions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod?: InputMaybe<Amongus_Mods_Order_By>;
  mod_id?: InputMaybe<Order_By>;
  release_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_mod_versions */
export type Amongus_Mod_Versions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_mod_versions" */
export enum Amongus_Mod_Versions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  ReleaseTime = 'release_time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  release_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "amongus_mod_versions" */
export type Amongus_Mod_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Mod_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Mod_Versions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  release_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "amongus_mod_versions" */
export enum Amongus_Mod_Versions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  ReleaseTime = 'release_time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

export type Amongus_Mod_Versions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Mod_Versions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Mod_Versions_Bool_Exp;
};

/** columns and relationships of "amongus_mods" */
export type Amongus_Mods = {
  __typename?: 'amongus_mods';
  created_at: Scalars['timestamptz']['output'];
  github_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  maps: Array<Amongus_Maps>;
  /** An aggregate relationship */
  maps_aggregate: Amongus_Maps_Aggregate;
  /** An array relationship */
  mod_versions: Array<Amongus_Mod_Versions>;
  /** An aggregate relationship */
  mod_versions_aggregate: Amongus_Mod_Versions_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  player_roles: Array<Amongus_Roles>;
  /** An aggregate relationship */
  player_roles_aggregate: Amongus_Roles_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsMapsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsMod_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsMod_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsPlayer_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


/** columns and relationships of "amongus_mods" */
export type Amongus_ModsPlayer_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};

/** aggregated selection of "amongus_mods" */
export type Amongus_Mods_Aggregate = {
  __typename?: 'amongus_mods_aggregate';
  aggregate?: Maybe<Amongus_Mods_Aggregate_Fields>;
  nodes: Array<Amongus_Mods>;
};

/** aggregate fields of "amongus_mods" */
export type Amongus_Mods_Aggregate_Fields = {
  __typename?: 'amongus_mods_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Mods_Max_Fields>;
  min?: Maybe<Amongus_Mods_Min_Fields>;
};


/** aggregate fields of "amongus_mods" */
export type Amongus_Mods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Mods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "amongus_mods". All fields are combined with a logical 'AND'. */
export type Amongus_Mods_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Mods_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Mods_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Mods_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  github_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  maps?: InputMaybe<Amongus_Maps_Bool_Exp>;
  maps_aggregate?: InputMaybe<Amongus_Maps_Aggregate_Bool_Exp>;
  mod_versions?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
  mod_versions_aggregate?: InputMaybe<Amongus_Mod_Versions_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_roles?: InputMaybe<Amongus_Roles_Bool_Exp>;
  player_roles_aggregate?: InputMaybe<Amongus_Roles_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_mods" */
export enum Amongus_Mods_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModsPkey = 'mods_pkey'
}

/** input type for inserting data into table "amongus_mods" */
export type Amongus_Mods_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  maps?: InputMaybe<Amongus_Maps_Arr_Rel_Insert_Input>;
  mod_versions?: InputMaybe<Amongus_Mod_Versions_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  player_roles?: InputMaybe<Amongus_Roles_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Mods_Max_Fields = {
  __typename?: 'amongus_mods_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Amongus_Mods_Min_Fields = {
  __typename?: 'amongus_mods_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "amongus_mods" */
export type Amongus_Mods_Mutation_Response = {
  __typename?: 'amongus_mods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Mods>;
};

/** input type for inserting object relation for remote table "amongus_mods" */
export type Amongus_Mods_Obj_Rel_Insert_Input = {
  data: Amongus_Mods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Mods_On_Conflict>;
};

/** on_conflict condition type for table "amongus_mods" */
export type Amongus_Mods_On_Conflict = {
  constraint: Amongus_Mods_Constraint;
  update_columns?: Array<Amongus_Mods_Update_Column>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_mods". */
export type Amongus_Mods_Order_By = {
  created_at?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maps_aggregate?: InputMaybe<Amongus_Maps_Aggregate_Order_By>;
  mod_versions_aggregate?: InputMaybe<Amongus_Mod_Versions_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  player_roles_aggregate?: InputMaybe<Amongus_Roles_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_mods */
export type Amongus_Mods_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_mods" */
export enum Amongus_Mods_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "amongus_mods" */
export type Amongus_Mods_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "amongus_mods" */
export type Amongus_Mods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Mods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Mods_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "amongus_mods" */
export enum Amongus_Mods_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Mods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Mods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Mods_Bool_Exp;
};

/** columns and relationships of "amongus_roles" */
export type Amongus_Roles = {
  __typename?: 'amongus_roles';
  color_rgb?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  document_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  is_vanilla: Scalars['Boolean']['output'];
  /** An array relationship */
  match_result_player_roles: Array<Amongus_Match_Player_Result_Roles>;
  /** An aggregate relationship */
  match_result_player_roles_aggregate: Amongus_Match_Player_Result_Roles_Aggregate;
  /** An object relationship */
  mod?: Maybe<Amongus_Mods>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "amongus_roles" */
export type Amongus_RolesMatch_Result_Player_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


/** columns and relationships of "amongus_roles" */
export type Amongus_RolesMatch_Result_Player_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};

/** aggregated selection of "amongus_roles" */
export type Amongus_Roles_Aggregate = {
  __typename?: 'amongus_roles_aggregate';
  aggregate?: Maybe<Amongus_Roles_Aggregate_Fields>;
  nodes: Array<Amongus_Roles>;
};

export type Amongus_Roles_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Amongus_Roles_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Amongus_Roles_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Amongus_Roles_Aggregate_Bool_Exp_Count>;
};

export type Amongus_Roles_Aggregate_Bool_Exp_Bool_And = {
  arguments: Amongus_Roles_Select_Column_Amongus_Roles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Roles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Roles_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Amongus_Roles_Select_Column_Amongus_Roles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Roles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Amongus_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Amongus_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "amongus_roles" */
export type Amongus_Roles_Aggregate_Fields = {
  __typename?: 'amongus_roles_aggregate_fields';
  avg?: Maybe<Amongus_Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Roles_Max_Fields>;
  min?: Maybe<Amongus_Roles_Min_Fields>;
  stddev?: Maybe<Amongus_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Amongus_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Amongus_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Amongus_Roles_Sum_Fields>;
  var_pop?: Maybe<Amongus_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Amongus_Roles_Var_Samp_Fields>;
  variance?: Maybe<Amongus_Roles_Variance_Fields>;
};


/** aggregate fields of "amongus_roles" */
export type Amongus_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "amongus_roles" */
export type Amongus_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<Amongus_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Amongus_Roles_Max_Order_By>;
  min?: InputMaybe<Amongus_Roles_Min_Order_By>;
  stddev?: InputMaybe<Amongus_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Amongus_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Amongus_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Amongus_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<Amongus_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Amongus_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<Amongus_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "amongus_roles" */
export type Amongus_Roles_Arr_Rel_Insert_Input = {
  data: Array<Amongus_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Amongus_Roles_Avg_Fields = {
  __typename?: 'amongus_roles_avg_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "amongus_roles" */
export type Amongus_Roles_Avg_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "amongus_roles". All fields are combined with a logical 'AND'. */
export type Amongus_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Roles_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Roles_Bool_Exp>>;
  color_rgb?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  document_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_vanilla?: InputMaybe<Boolean_Comparison_Exp>;
  match_result_player_roles?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
  match_result_player_roles_aggregate?: InputMaybe<Amongus_Match_Player_Result_Roles_Aggregate_Bool_Exp>;
  mod?: InputMaybe<Amongus_Mods_Bool_Exp>;
  mod_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_roles" */
export enum Amongus_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayerRolesPkey = 'player_roles_pkey'
}

/** input type for incrementing numeric columns in table "amongus_roles" */
export type Amongus_Roles_Inc_Input = {
  color_rgb?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "amongus_roles" */
export type Amongus_Roles_Insert_Input = {
  color_rgb?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  match_result_player_roles?: InputMaybe<Amongus_Match_Player_Result_Roles_Arr_Rel_Insert_Input>;
  mod?: InputMaybe<Amongus_Mods_Obj_Rel_Insert_Input>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Amongus_Roles_Max_Fields = {
  __typename?: 'amongus_roles_max_fields';
  color_rgb?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  document_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "amongus_roles" */
export type Amongus_Roles_Max_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Amongus_Roles_Min_Fields = {
  __typename?: 'amongus_roles_min_fields';
  color_rgb?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  document_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mod_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "amongus_roles" */
export type Amongus_Roles_Min_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "amongus_roles" */
export type Amongus_Roles_Mutation_Response = {
  __typename?: 'amongus_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Roles>;
};

/** on_conflict condition type for table "amongus_roles" */
export type Amongus_Roles_On_Conflict = {
  constraint: Amongus_Roles_Constraint;
  update_columns?: Array<Amongus_Roles_Update_Column>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_roles". */
export type Amongus_Roles_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_vanilla?: InputMaybe<Order_By>;
  match_result_player_roles_aggregate?: InputMaybe<Amongus_Match_Player_Result_Roles_Aggregate_Order_By>;
  mod?: InputMaybe<Amongus_Mods_Order_By>;
  mod_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_roles */
export type Amongus_Roles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_roles" */
export enum Amongus_Roles_Select_Column {
  /** column name */
  ColorRgb = 'color_rgb',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentUrl = 'document_url',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "amongus_roles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "amongus_roles" */
export enum Amongus_Roles_Select_Column_Amongus_Roles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** select "amongus_roles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "amongus_roles" */
export enum Amongus_Roles_Select_Column_Amongus_Roles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsVanilla = 'is_vanilla'
}

/** input type for updating data in table "amongus_roles" */
export type Amongus_Roles_Set_Input = {
  color_rgb?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Amongus_Roles_Stddev_Fields = {
  __typename?: 'amongus_roles_stddev_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "amongus_roles" */
export type Amongus_Roles_Stddev_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Amongus_Roles_Stddev_Pop_Fields = {
  __typename?: 'amongus_roles_stddev_pop_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "amongus_roles" */
export type Amongus_Roles_Stddev_Pop_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Amongus_Roles_Stddev_Samp_Fields = {
  __typename?: 'amongus_roles_stddev_samp_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "amongus_roles" */
export type Amongus_Roles_Stddev_Samp_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "amongus_roles" */
export type Amongus_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Roles_Stream_Cursor_Value_Input = {
  color_rgb?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_vanilla?: InputMaybe<Scalars['Boolean']['input']>;
  mod_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Amongus_Roles_Sum_Fields = {
  __typename?: 'amongus_roles_sum_fields';
  color_rgb?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "amongus_roles" */
export type Amongus_Roles_Sum_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** update columns of table "amongus_roles" */
export enum Amongus_Roles_Update_Column {
  /** column name */
  ColorRgb = 'color_rgb',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentUrl = 'document_url',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanilla = 'is_vanilla',
  /** column name */
  ModId = 'mod_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Amongus_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Amongus_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Amongus_Roles_Var_Pop_Fields = {
  __typename?: 'amongus_roles_var_pop_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "amongus_roles" */
export type Amongus_Roles_Var_Pop_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Amongus_Roles_Var_Samp_Fields = {
  __typename?: 'amongus_roles_var_samp_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "amongus_roles" */
export type Amongus_Roles_Var_Samp_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Amongus_Roles_Variance_Fields = {
  __typename?: 'amongus_roles_variance_fields';
  color_rgb?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "amongus_roles" */
export type Amongus_Roles_Variance_Order_By = {
  color_rgb?: InputMaybe<Order_By>;
};

/** columns and relationships of "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions = {
  __typename?: 'amongus_vanilla_versions';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  version: Scalars['String']['output'];
};

/** aggregated selection of "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Aggregate = {
  __typename?: 'amongus_vanilla_versions_aggregate';
  aggregate?: Maybe<Amongus_Vanilla_Versions_Aggregate_Fields>;
  nodes: Array<Amongus_Vanilla_Versions>;
};

/** aggregate fields of "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Aggregate_Fields = {
  __typename?: 'amongus_vanilla_versions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Amongus_Vanilla_Versions_Max_Fields>;
  min?: Maybe<Amongus_Vanilla_Versions_Min_Fields>;
};


/** aggregate fields of "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Amongus_Vanilla_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "amongus_vanilla_versions". All fields are combined with a logical 'AND'. */
export type Amongus_Vanilla_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Amongus_Vanilla_Versions_Bool_Exp>>;
  _not?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Amongus_Vanilla_Versions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "amongus_vanilla_versions" */
export enum Amongus_Vanilla_Versions_Constraint {
  /** unique or primary key constraint on columns "id" */
  VanillaVersionsPkey = 'vanilla_versions_pkey',
  /** unique or primary key constraint on columns "version" */
  VanillaVersionsVersionKey = 'vanilla_versions_version_key'
}

/** input type for inserting data into table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Amongus_Vanilla_Versions_Max_Fields = {
  __typename?: 'amongus_vanilla_versions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Amongus_Vanilla_Versions_Min_Fields = {
  __typename?: 'amongus_vanilla_versions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Mutation_Response = {
  __typename?: 'amongus_vanilla_versions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Amongus_Vanilla_Versions>;
};

/** input type for inserting object relation for remote table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Obj_Rel_Insert_Input = {
  data: Amongus_Vanilla_Versions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Amongus_Vanilla_Versions_On_Conflict>;
};

/** on_conflict condition type for table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_On_Conflict = {
  constraint: Amongus_Vanilla_Versions_Constraint;
  update_columns?: Array<Amongus_Vanilla_Versions_Update_Column>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "amongus_vanilla_versions". */
export type Amongus_Vanilla_Versions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: amongus_vanilla_versions */
export type Amongus_Vanilla_Versions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "amongus_vanilla_versions" */
export enum Amongus_Vanilla_Versions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "amongus_vanilla_versions" */
export type Amongus_Vanilla_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Amongus_Vanilla_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Amongus_Vanilla_Versions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "amongus_vanilla_versions" */
export enum Amongus_Vanilla_Versions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

export type Amongus_Vanilla_Versions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Amongus_Vanilla_Versions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Amongus_Vanilla_Versions_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "fediverse_accounts" */
export type Fediverse_Accounts = {
  __typename?: 'fediverse_accounts';
  created_at: Scalars['timestamptz']['output'];
  fediverse_acct: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "fediverse_accounts" */
export type Fediverse_Accounts_Aggregate = {
  __typename?: 'fediverse_accounts_aggregate';
  aggregate?: Maybe<Fediverse_Accounts_Aggregate_Fields>;
  nodes: Array<Fediverse_Accounts>;
};

/** aggregate fields of "fediverse_accounts" */
export type Fediverse_Accounts_Aggregate_Fields = {
  __typename?: 'fediverse_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Fediverse_Accounts_Max_Fields>;
  min?: Maybe<Fediverse_Accounts_Min_Fields>;
};


/** aggregate fields of "fediverse_accounts" */
export type Fediverse_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fediverse_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "fediverse_accounts". All fields are combined with a logical 'AND'. */
export type Fediverse_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Fediverse_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Fediverse_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fediverse_acct?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "fediverse_accounts" */
export enum Fediverse_Accounts_Constraint {
  /** unique or primary key constraint on columns "fediverse_acct" */
  FediverseAccountsFediverseAcctKey = 'fediverse_accounts_fediverse_acct_key',
  /** unique or primary key constraint on columns "id" */
  FediverseAccountsPkey = 'fediverse_accounts_pkey'
}

/** input type for inserting data into table "fediverse_accounts" */
export type Fediverse_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_acct?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Fediverse_Accounts_Max_Fields = {
  __typename?: 'fediverse_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fediverse_acct?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Fediverse_Accounts_Min_Fields = {
  __typename?: 'fediverse_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fediverse_acct?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "fediverse_accounts" */
export type Fediverse_Accounts_Mutation_Response = {
  __typename?: 'fediverse_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fediverse_Accounts>;
};

/** input type for inserting object relation for remote table "fediverse_accounts" */
export type Fediverse_Accounts_Obj_Rel_Insert_Input = {
  data: Fediverse_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fediverse_Accounts_On_Conflict>;
};

/** on_conflict condition type for table "fediverse_accounts" */
export type Fediverse_Accounts_On_Conflict = {
  constraint: Fediverse_Accounts_Constraint;
  update_columns?: Array<Fediverse_Accounts_Update_Column>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "fediverse_accounts". */
export type Fediverse_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fediverse_acct?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fediverse_accounts */
export type Fediverse_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "fediverse_accounts" */
export enum Fediverse_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FediverseAcct = 'fediverse_acct',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "fediverse_accounts" */
export type Fediverse_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_acct?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "fediverse_accounts" */
export type Fediverse_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fediverse_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fediverse_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_acct?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "fediverse_accounts" */
export enum Fediverse_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FediverseAcct = 'fediverse_acct',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Fediverse_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fediverse_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fediverse_Accounts_Bool_Exp;
};

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  apple_app_store_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  epic_games_url?: Maybe<Scalars['String']['output']>;
  google_play_store_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  nintendo_switch_url?: Maybe<Scalars['String']['output']>;
  playstation_url?: Maybe<Scalars['String']['output']>;
  steam_url?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  apple_app_store_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  epic_games_url?: InputMaybe<String_Comparison_Exp>;
  google_play_store_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nintendo_switch_url?: InputMaybe<String_Comparison_Exp>;
  playstation_url?: InputMaybe<String_Comparison_Exp>;
  steam_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamesPkey = 'games_pkey'
}

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  apple_app_store_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  epic_games_url?: InputMaybe<Scalars['String']['input']>;
  google_play_store_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nintendo_switch_url?: InputMaybe<Scalars['String']['input']>;
  playstation_url?: InputMaybe<Scalars['String']['input']>;
  steam_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  apple_app_store_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  epic_games_url?: Maybe<Scalars['String']['output']>;
  google_play_store_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nintendo_switch_url?: Maybe<Scalars['String']['output']>;
  playstation_url?: Maybe<Scalars['String']['output']>;
  steam_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  apple_app_store_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  epic_games_url?: Maybe<Scalars['String']['output']>;
  google_play_store_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nintendo_switch_url?: Maybe<Scalars['String']['output']>;
  playstation_url?: Maybe<Scalars['String']['output']>;
  steam_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  apple_app_store_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  epic_games_url?: InputMaybe<Order_By>;
  google_play_store_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nintendo_switch_url?: InputMaybe<Order_By>;
  playstation_url?: InputMaybe<Order_By>;
  steam_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  AppleAppStoreUrl = 'apple_app_store_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpicGamesUrl = 'epic_games_url',
  /** column name */
  GooglePlayStoreUrl = 'google_play_store_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NintendoSwitchUrl = 'nintendo_switch_url',
  /** column name */
  PlaystationUrl = 'playstation_url',
  /** column name */
  SteamUrl = 'steam_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  apple_app_store_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  epic_games_url?: InputMaybe<Scalars['String']['input']>;
  google_play_store_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nintendo_switch_url?: InputMaybe<Scalars['String']['input']>;
  playstation_url?: InputMaybe<Scalars['String']['input']>;
  steam_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "games" */
export type Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Games_Stream_Cursor_Value_Input = {
  apple_app_store_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  epic_games_url?: InputMaybe<Scalars['String']['input']>;
  google_play_store_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nintendo_switch_url?: InputMaybe<Scalars['String']['input']>;
  playstation_url?: InputMaybe<Scalars['String']['input']>;
  steam_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  AppleAppStoreUrl = 'apple_app_store_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpicGamesUrl = 'epic_games_url',
  /** column name */
  GooglePlayStoreUrl = 'google_play_store_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NintendoSwitchUrl = 'nintendo_switch_url',
  /** column name */
  PlaystationUrl = 'playstation_url',
  /** column name */
  SteamUrl = 'steam_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Games_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Games_Set_Input>;
  /** filter the rows which have to be updated */
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "amongus_maps" */
  delete_amongus_maps?: Maybe<Amongus_Maps_Mutation_Response>;
  /** delete single row from the table: "amongus_maps" */
  delete_amongus_maps_by_pk?: Maybe<Amongus_Maps>;
  /** delete data from the table: "amongus_match_mods" */
  delete_amongus_match_mods?: Maybe<Amongus_Match_Mods_Mutation_Response>;
  /** delete single row from the table: "amongus_match_mods" */
  delete_amongus_match_mods_by_pk?: Maybe<Amongus_Match_Mods>;
  /** delete data from the table: "amongus_match_player_result_roles" */
  delete_amongus_match_player_result_roles?: Maybe<Amongus_Match_Player_Result_Roles_Mutation_Response>;
  /** delete single row from the table: "amongus_match_player_result_roles" */
  delete_amongus_match_player_result_roles_by_pk?: Maybe<Amongus_Match_Player_Result_Roles>;
  /** delete data from the table: "amongus_match_players" */
  delete_amongus_match_players?: Maybe<Amongus_Match_Players_Mutation_Response>;
  /** delete single row from the table: "amongus_match_players" */
  delete_amongus_match_players_by_pk?: Maybe<Amongus_Match_Players>;
  /** delete data from the table: "amongus_matches" */
  delete_amongus_matches?: Maybe<Amongus_Matches_Mutation_Response>;
  /** delete single row from the table: "amongus_matches" */
  delete_amongus_matches_by_pk?: Maybe<Amongus_Matches>;
  /** delete data from the table: "amongus_mod_versions" */
  delete_amongus_mod_versions?: Maybe<Amongus_Mod_Versions_Mutation_Response>;
  /** delete single row from the table: "amongus_mod_versions" */
  delete_amongus_mod_versions_by_pk?: Maybe<Amongus_Mod_Versions>;
  /** delete data from the table: "amongus_mods" */
  delete_amongus_mods?: Maybe<Amongus_Mods_Mutation_Response>;
  /** delete single row from the table: "amongus_mods" */
  delete_amongus_mods_by_pk?: Maybe<Amongus_Mods>;
  /** delete data from the table: "amongus_roles" */
  delete_amongus_roles?: Maybe<Amongus_Roles_Mutation_Response>;
  /** delete single row from the table: "amongus_roles" */
  delete_amongus_roles_by_pk?: Maybe<Amongus_Roles>;
  /** delete data from the table: "amongus_vanilla_versions" */
  delete_amongus_vanilla_versions?: Maybe<Amongus_Vanilla_Versions_Mutation_Response>;
  /** delete single row from the table: "amongus_vanilla_versions" */
  delete_amongus_vanilla_versions_by_pk?: Maybe<Amongus_Vanilla_Versions>;
  /** delete data from the table: "fediverse_accounts" */
  delete_fediverse_accounts?: Maybe<Fediverse_Accounts_Mutation_Response>;
  /** delete single row from the table: "fediverse_accounts" */
  delete_fediverse_accounts_by_pk?: Maybe<Fediverse_Accounts>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "niconico_accounts" */
  delete_niconico_accounts?: Maybe<Niconico_Accounts_Mutation_Response>;
  /** delete single row from the table: "niconico_accounts" */
  delete_niconico_accounts_by_pk?: Maybe<Niconico_Accounts>;
  /** delete data from the table: "niconico_communities" */
  delete_niconico_communities?: Maybe<Niconico_Communities_Mutation_Response>;
  /** delete single row from the table: "niconico_communities" */
  delete_niconico_communities_by_pk?: Maybe<Niconico_Communities>;
  /** delete data from the table: "person_fediverse_accounts" */
  delete_person_fediverse_accounts?: Maybe<Person_Fediverse_Accounts_Mutation_Response>;
  /** delete single row from the table: "person_fediverse_accounts" */
  delete_person_fediverse_accounts_by_pk?: Maybe<Person_Fediverse_Accounts>;
  /** delete data from the table: "person_niconico_accounts" */
  delete_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** delete single row from the table: "person_niconico_accounts" */
  delete_person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** delete data from the table: "person_niconico_communities" */
  delete_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** delete single row from the table: "person_niconico_communities" */
  delete_person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** delete data from the table: "person_twitter_accounts" */
  delete_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** delete single row from the table: "person_twitter_accounts" */
  delete_person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** delete data from the table: "person_youtube_channels" */
  delete_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** delete single row from the table: "person_youtube_channels" */
  delete_person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** delete data from the table: "persons" */
  delete_persons?: Maybe<Persons_Mutation_Response>;
  /** delete single row from the table: "persons" */
  delete_persons_by_pk?: Maybe<Persons>;
  /** delete data from the table: "program_amongus_maps" */
  delete_program_amongus_maps?: Maybe<Program_Amongus_Maps_Mutation_Response>;
  /** delete single row from the table: "program_amongus_maps" */
  delete_program_amongus_maps_by_pk?: Maybe<Program_Amongus_Maps>;
  /** delete data from the table: "program_amongus_mods" */
  delete_program_amongus_mods?: Maybe<Program_Amongus_Mods_Mutation_Response>;
  /** delete single row from the table: "program_amongus_mods" */
  delete_program_amongus_mods_by_pk?: Maybe<Program_Amongus_Mods>;
  /** delete data from the table: "program_amongus_vanilla_versions" */
  delete_program_amongus_vanilla_versions?: Maybe<Program_Amongus_Vanilla_Versions_Mutation_Response>;
  /** delete single row from the table: "program_amongus_vanilla_versions" */
  delete_program_amongus_vanilla_versions_by_pk?: Maybe<Program_Amongus_Vanilla_Versions>;
  /** delete data from the table: "program_persons" */
  delete_program_persons?: Maybe<Program_Persons_Mutation_Response>;
  /** delete single row from the table: "program_persons" */
  delete_program_persons_by_pk?: Maybe<Program_Persons>;
  /** delete data from the table: "program_projects" */
  delete_program_projects?: Maybe<Program_Projects_Mutation_Response>;
  /** delete single row from the table: "program_projects" */
  delete_program_projects_by_pk?: Maybe<Program_Projects>;
  /** delete data from the table: "program_twitter_announcements" */
  delete_program_twitter_announcements?: Maybe<Program_Twitter_Announcements_Mutation_Response>;
  /** delete single row from the table: "program_twitter_announcements" */
  delete_program_twitter_announcements_by_pk?: Maybe<Program_Twitter_Announcements>;
  /** delete data from the table: "program_youtube_lives" */
  delete_program_youtube_lives?: Maybe<Program_Youtube_Lives_Mutation_Response>;
  /** delete single row from the table: "program_youtube_lives" */
  delete_program_youtube_lives_by_pk?: Maybe<Program_Youtube_Lives>;
  /** delete data from the table: "programs" */
  delete_programs?: Maybe<Programs_Mutation_Response>;
  /** delete single row from the table: "programs" */
  delete_programs_by_pk?: Maybe<Programs>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "twitter_accounts" */
  delete_twitter_accounts?: Maybe<Twitter_Accounts_Mutation_Response>;
  /** delete single row from the table: "twitter_accounts" */
  delete_twitter_accounts_by_pk?: Maybe<Twitter_Accounts>;
  /** delete data from the table: "twitter_tweet_images" */
  delete_twitter_tweet_images?: Maybe<Twitter_Tweet_Images_Mutation_Response>;
  /** delete single row from the table: "twitter_tweet_images" */
  delete_twitter_tweet_images_by_pk?: Maybe<Twitter_Tweet_Images>;
  /** delete data from the table: "twitter_tweets" */
  delete_twitter_tweets?: Maybe<Twitter_Tweets_Mutation_Response>;
  /** delete single row from the table: "twitter_tweets" */
  delete_twitter_tweets_by_pk?: Maybe<Twitter_Tweets>;
  /** delete data from the table: "youtube_channels" */
  delete_youtube_channels?: Maybe<Youtube_Channels_Mutation_Response>;
  /** delete single row from the table: "youtube_channels" */
  delete_youtube_channels_by_pk?: Maybe<Youtube_Channels>;
  /** delete data from the table: "youtube_lives" */
  delete_youtube_lives?: Maybe<Youtube_Lives_Mutation_Response>;
  /** delete single row from the table: "youtube_lives" */
  delete_youtube_lives_by_pk?: Maybe<Youtube_Lives>;
  /** insert data into the table: "amongus_maps" */
  insert_amongus_maps?: Maybe<Amongus_Maps_Mutation_Response>;
  /** insert a single row into the table: "amongus_maps" */
  insert_amongus_maps_one?: Maybe<Amongus_Maps>;
  /** insert data into the table: "amongus_match_mods" */
  insert_amongus_match_mods?: Maybe<Amongus_Match_Mods_Mutation_Response>;
  /** insert a single row into the table: "amongus_match_mods" */
  insert_amongus_match_mods_one?: Maybe<Amongus_Match_Mods>;
  /** insert data into the table: "amongus_match_player_result_roles" */
  insert_amongus_match_player_result_roles?: Maybe<Amongus_Match_Player_Result_Roles_Mutation_Response>;
  /** insert a single row into the table: "amongus_match_player_result_roles" */
  insert_amongus_match_player_result_roles_one?: Maybe<Amongus_Match_Player_Result_Roles>;
  /** insert data into the table: "amongus_match_players" */
  insert_amongus_match_players?: Maybe<Amongus_Match_Players_Mutation_Response>;
  /** insert a single row into the table: "amongus_match_players" */
  insert_amongus_match_players_one?: Maybe<Amongus_Match_Players>;
  /** insert data into the table: "amongus_matches" */
  insert_amongus_matches?: Maybe<Amongus_Matches_Mutation_Response>;
  /** insert a single row into the table: "amongus_matches" */
  insert_amongus_matches_one?: Maybe<Amongus_Matches>;
  /** insert data into the table: "amongus_mod_versions" */
  insert_amongus_mod_versions?: Maybe<Amongus_Mod_Versions_Mutation_Response>;
  /** insert a single row into the table: "amongus_mod_versions" */
  insert_amongus_mod_versions_one?: Maybe<Amongus_Mod_Versions>;
  /** insert data into the table: "amongus_mods" */
  insert_amongus_mods?: Maybe<Amongus_Mods_Mutation_Response>;
  /** insert a single row into the table: "amongus_mods" */
  insert_amongus_mods_one?: Maybe<Amongus_Mods>;
  /** insert data into the table: "amongus_roles" */
  insert_amongus_roles?: Maybe<Amongus_Roles_Mutation_Response>;
  /** insert a single row into the table: "amongus_roles" */
  insert_amongus_roles_one?: Maybe<Amongus_Roles>;
  /** insert data into the table: "amongus_vanilla_versions" */
  insert_amongus_vanilla_versions?: Maybe<Amongus_Vanilla_Versions_Mutation_Response>;
  /** insert a single row into the table: "amongus_vanilla_versions" */
  insert_amongus_vanilla_versions_one?: Maybe<Amongus_Vanilla_Versions>;
  /** insert data into the table: "fediverse_accounts" */
  insert_fediverse_accounts?: Maybe<Fediverse_Accounts_Mutation_Response>;
  /** insert a single row into the table: "fediverse_accounts" */
  insert_fediverse_accounts_one?: Maybe<Fediverse_Accounts>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "niconico_accounts" */
  insert_niconico_accounts?: Maybe<Niconico_Accounts_Mutation_Response>;
  /** insert a single row into the table: "niconico_accounts" */
  insert_niconico_accounts_one?: Maybe<Niconico_Accounts>;
  /** insert data into the table: "niconico_communities" */
  insert_niconico_communities?: Maybe<Niconico_Communities_Mutation_Response>;
  /** insert a single row into the table: "niconico_communities" */
  insert_niconico_communities_one?: Maybe<Niconico_Communities>;
  /** insert data into the table: "person_fediverse_accounts" */
  insert_person_fediverse_accounts?: Maybe<Person_Fediverse_Accounts_Mutation_Response>;
  /** insert a single row into the table: "person_fediverse_accounts" */
  insert_person_fediverse_accounts_one?: Maybe<Person_Fediverse_Accounts>;
  /** insert data into the table: "person_niconico_accounts" */
  insert_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** insert a single row into the table: "person_niconico_accounts" */
  insert_person_niconico_accounts_one?: Maybe<Person_Niconico_Accounts>;
  /** insert data into the table: "person_niconico_communities" */
  insert_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** insert a single row into the table: "person_niconico_communities" */
  insert_person_niconico_communities_one?: Maybe<Person_Niconico_Communities>;
  /** insert data into the table: "person_twitter_accounts" */
  insert_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** insert a single row into the table: "person_twitter_accounts" */
  insert_person_twitter_accounts_one?: Maybe<Person_Twitter_Accounts>;
  /** insert data into the table: "person_youtube_channels" */
  insert_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** insert a single row into the table: "person_youtube_channels" */
  insert_person_youtube_channels_one?: Maybe<Person_Youtube_Channels>;
  /** insert data into the table: "persons" */
  insert_persons?: Maybe<Persons_Mutation_Response>;
  /** insert a single row into the table: "persons" */
  insert_persons_one?: Maybe<Persons>;
  /** insert data into the table: "program_amongus_maps" */
  insert_program_amongus_maps?: Maybe<Program_Amongus_Maps_Mutation_Response>;
  /** insert a single row into the table: "program_amongus_maps" */
  insert_program_amongus_maps_one?: Maybe<Program_Amongus_Maps>;
  /** insert data into the table: "program_amongus_mods" */
  insert_program_amongus_mods?: Maybe<Program_Amongus_Mods_Mutation_Response>;
  /** insert a single row into the table: "program_amongus_mods" */
  insert_program_amongus_mods_one?: Maybe<Program_Amongus_Mods>;
  /** insert data into the table: "program_amongus_vanilla_versions" */
  insert_program_amongus_vanilla_versions?: Maybe<Program_Amongus_Vanilla_Versions_Mutation_Response>;
  /** insert a single row into the table: "program_amongus_vanilla_versions" */
  insert_program_amongus_vanilla_versions_one?: Maybe<Program_Amongus_Vanilla_Versions>;
  /** insert data into the table: "program_persons" */
  insert_program_persons?: Maybe<Program_Persons_Mutation_Response>;
  /** insert a single row into the table: "program_persons" */
  insert_program_persons_one?: Maybe<Program_Persons>;
  /** insert data into the table: "program_projects" */
  insert_program_projects?: Maybe<Program_Projects_Mutation_Response>;
  /** insert a single row into the table: "program_projects" */
  insert_program_projects_one?: Maybe<Program_Projects>;
  /** insert data into the table: "program_twitter_announcements" */
  insert_program_twitter_announcements?: Maybe<Program_Twitter_Announcements_Mutation_Response>;
  /** insert a single row into the table: "program_twitter_announcements" */
  insert_program_twitter_announcements_one?: Maybe<Program_Twitter_Announcements>;
  /** insert data into the table: "program_youtube_lives" */
  insert_program_youtube_lives?: Maybe<Program_Youtube_Lives_Mutation_Response>;
  /** insert a single row into the table: "program_youtube_lives" */
  insert_program_youtube_lives_one?: Maybe<Program_Youtube_Lives>;
  /** insert data into the table: "programs" */
  insert_programs?: Maybe<Programs_Mutation_Response>;
  /** insert a single row into the table: "programs" */
  insert_programs_one?: Maybe<Programs>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "twitter_accounts" */
  insert_twitter_accounts?: Maybe<Twitter_Accounts_Mutation_Response>;
  /** insert a single row into the table: "twitter_accounts" */
  insert_twitter_accounts_one?: Maybe<Twitter_Accounts>;
  /** insert data into the table: "twitter_tweet_images" */
  insert_twitter_tweet_images?: Maybe<Twitter_Tweet_Images_Mutation_Response>;
  /** insert a single row into the table: "twitter_tweet_images" */
  insert_twitter_tweet_images_one?: Maybe<Twitter_Tweet_Images>;
  /** insert data into the table: "twitter_tweets" */
  insert_twitter_tweets?: Maybe<Twitter_Tweets_Mutation_Response>;
  /** insert a single row into the table: "twitter_tweets" */
  insert_twitter_tweets_one?: Maybe<Twitter_Tweets>;
  /** insert data into the table: "youtube_channels" */
  insert_youtube_channels?: Maybe<Youtube_Channels_Mutation_Response>;
  /** insert a single row into the table: "youtube_channels" */
  insert_youtube_channels_one?: Maybe<Youtube_Channels>;
  /** insert data into the table: "youtube_lives" */
  insert_youtube_lives?: Maybe<Youtube_Lives_Mutation_Response>;
  /** insert a single row into the table: "youtube_lives" */
  insert_youtube_lives_one?: Maybe<Youtube_Lives>;
  /** update data of the table: "amongus_maps" */
  update_amongus_maps?: Maybe<Amongus_Maps_Mutation_Response>;
  /** update single row of the table: "amongus_maps" */
  update_amongus_maps_by_pk?: Maybe<Amongus_Maps>;
  /** update multiples rows of table: "amongus_maps" */
  update_amongus_maps_many?: Maybe<Array<Maybe<Amongus_Maps_Mutation_Response>>>;
  /** update data of the table: "amongus_match_mods" */
  update_amongus_match_mods?: Maybe<Amongus_Match_Mods_Mutation_Response>;
  /** update single row of the table: "amongus_match_mods" */
  update_amongus_match_mods_by_pk?: Maybe<Amongus_Match_Mods>;
  /** update multiples rows of table: "amongus_match_mods" */
  update_amongus_match_mods_many?: Maybe<Array<Maybe<Amongus_Match_Mods_Mutation_Response>>>;
  /** update data of the table: "amongus_match_player_result_roles" */
  update_amongus_match_player_result_roles?: Maybe<Amongus_Match_Player_Result_Roles_Mutation_Response>;
  /** update single row of the table: "amongus_match_player_result_roles" */
  update_amongus_match_player_result_roles_by_pk?: Maybe<Amongus_Match_Player_Result_Roles>;
  /** update multiples rows of table: "amongus_match_player_result_roles" */
  update_amongus_match_player_result_roles_many?: Maybe<Array<Maybe<Amongus_Match_Player_Result_Roles_Mutation_Response>>>;
  /** update data of the table: "amongus_match_players" */
  update_amongus_match_players?: Maybe<Amongus_Match_Players_Mutation_Response>;
  /** update single row of the table: "amongus_match_players" */
  update_amongus_match_players_by_pk?: Maybe<Amongus_Match_Players>;
  /** update multiples rows of table: "amongus_match_players" */
  update_amongus_match_players_many?: Maybe<Array<Maybe<Amongus_Match_Players_Mutation_Response>>>;
  /** update data of the table: "amongus_matches" */
  update_amongus_matches?: Maybe<Amongus_Matches_Mutation_Response>;
  /** update single row of the table: "amongus_matches" */
  update_amongus_matches_by_pk?: Maybe<Amongus_Matches>;
  /** update multiples rows of table: "amongus_matches" */
  update_amongus_matches_many?: Maybe<Array<Maybe<Amongus_Matches_Mutation_Response>>>;
  /** update data of the table: "amongus_mod_versions" */
  update_amongus_mod_versions?: Maybe<Amongus_Mod_Versions_Mutation_Response>;
  /** update single row of the table: "amongus_mod_versions" */
  update_amongus_mod_versions_by_pk?: Maybe<Amongus_Mod_Versions>;
  /** update multiples rows of table: "amongus_mod_versions" */
  update_amongus_mod_versions_many?: Maybe<Array<Maybe<Amongus_Mod_Versions_Mutation_Response>>>;
  /** update data of the table: "amongus_mods" */
  update_amongus_mods?: Maybe<Amongus_Mods_Mutation_Response>;
  /** update single row of the table: "amongus_mods" */
  update_amongus_mods_by_pk?: Maybe<Amongus_Mods>;
  /** update multiples rows of table: "amongus_mods" */
  update_amongus_mods_many?: Maybe<Array<Maybe<Amongus_Mods_Mutation_Response>>>;
  /** update data of the table: "amongus_roles" */
  update_amongus_roles?: Maybe<Amongus_Roles_Mutation_Response>;
  /** update single row of the table: "amongus_roles" */
  update_amongus_roles_by_pk?: Maybe<Amongus_Roles>;
  /** update multiples rows of table: "amongus_roles" */
  update_amongus_roles_many?: Maybe<Array<Maybe<Amongus_Roles_Mutation_Response>>>;
  /** update data of the table: "amongus_vanilla_versions" */
  update_amongus_vanilla_versions?: Maybe<Amongus_Vanilla_Versions_Mutation_Response>;
  /** update single row of the table: "amongus_vanilla_versions" */
  update_amongus_vanilla_versions_by_pk?: Maybe<Amongus_Vanilla_Versions>;
  /** update multiples rows of table: "amongus_vanilla_versions" */
  update_amongus_vanilla_versions_many?: Maybe<Array<Maybe<Amongus_Vanilla_Versions_Mutation_Response>>>;
  /** update data of the table: "fediverse_accounts" */
  update_fediverse_accounts?: Maybe<Fediverse_Accounts_Mutation_Response>;
  /** update single row of the table: "fediverse_accounts" */
  update_fediverse_accounts_by_pk?: Maybe<Fediverse_Accounts>;
  /** update multiples rows of table: "fediverse_accounts" */
  update_fediverse_accounts_many?: Maybe<Array<Maybe<Fediverse_Accounts_Mutation_Response>>>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update multiples rows of table: "games" */
  update_games_many?: Maybe<Array<Maybe<Games_Mutation_Response>>>;
  /** update data of the table: "niconico_accounts" */
  update_niconico_accounts?: Maybe<Niconico_Accounts_Mutation_Response>;
  /** update single row of the table: "niconico_accounts" */
  update_niconico_accounts_by_pk?: Maybe<Niconico_Accounts>;
  /** update multiples rows of table: "niconico_accounts" */
  update_niconico_accounts_many?: Maybe<Array<Maybe<Niconico_Accounts_Mutation_Response>>>;
  /** update data of the table: "niconico_communities" */
  update_niconico_communities?: Maybe<Niconico_Communities_Mutation_Response>;
  /** update single row of the table: "niconico_communities" */
  update_niconico_communities_by_pk?: Maybe<Niconico_Communities>;
  /** update multiples rows of table: "niconico_communities" */
  update_niconico_communities_many?: Maybe<Array<Maybe<Niconico_Communities_Mutation_Response>>>;
  /** update data of the table: "person_fediverse_accounts" */
  update_person_fediverse_accounts?: Maybe<Person_Fediverse_Accounts_Mutation_Response>;
  /** update single row of the table: "person_fediverse_accounts" */
  update_person_fediverse_accounts_by_pk?: Maybe<Person_Fediverse_Accounts>;
  /** update multiples rows of table: "person_fediverse_accounts" */
  update_person_fediverse_accounts_many?: Maybe<Array<Maybe<Person_Fediverse_Accounts_Mutation_Response>>>;
  /** update data of the table: "person_niconico_accounts" */
  update_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** update single row of the table: "person_niconico_accounts" */
  update_person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** update multiples rows of table: "person_niconico_accounts" */
  update_person_niconico_accounts_many?: Maybe<Array<Maybe<Person_Niconico_Accounts_Mutation_Response>>>;
  /** update data of the table: "person_niconico_communities" */
  update_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** update single row of the table: "person_niconico_communities" */
  update_person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** update multiples rows of table: "person_niconico_communities" */
  update_person_niconico_communities_many?: Maybe<Array<Maybe<Person_Niconico_Communities_Mutation_Response>>>;
  /** update data of the table: "person_twitter_accounts" */
  update_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** update single row of the table: "person_twitter_accounts" */
  update_person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** update multiples rows of table: "person_twitter_accounts" */
  update_person_twitter_accounts_many?: Maybe<Array<Maybe<Person_Twitter_Accounts_Mutation_Response>>>;
  /** update data of the table: "person_youtube_channels" */
  update_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** update single row of the table: "person_youtube_channels" */
  update_person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** update multiples rows of table: "person_youtube_channels" */
  update_person_youtube_channels_many?: Maybe<Array<Maybe<Person_Youtube_Channels_Mutation_Response>>>;
  /** update data of the table: "persons" */
  update_persons?: Maybe<Persons_Mutation_Response>;
  /** update single row of the table: "persons" */
  update_persons_by_pk?: Maybe<Persons>;
  /** update multiples rows of table: "persons" */
  update_persons_many?: Maybe<Array<Maybe<Persons_Mutation_Response>>>;
  /** update data of the table: "program_amongus_maps" */
  update_program_amongus_maps?: Maybe<Program_Amongus_Maps_Mutation_Response>;
  /** update single row of the table: "program_amongus_maps" */
  update_program_amongus_maps_by_pk?: Maybe<Program_Amongus_Maps>;
  /** update multiples rows of table: "program_amongus_maps" */
  update_program_amongus_maps_many?: Maybe<Array<Maybe<Program_Amongus_Maps_Mutation_Response>>>;
  /** update data of the table: "program_amongus_mods" */
  update_program_amongus_mods?: Maybe<Program_Amongus_Mods_Mutation_Response>;
  /** update single row of the table: "program_amongus_mods" */
  update_program_amongus_mods_by_pk?: Maybe<Program_Amongus_Mods>;
  /** update multiples rows of table: "program_amongus_mods" */
  update_program_amongus_mods_many?: Maybe<Array<Maybe<Program_Amongus_Mods_Mutation_Response>>>;
  /** update data of the table: "program_amongus_vanilla_versions" */
  update_program_amongus_vanilla_versions?: Maybe<Program_Amongus_Vanilla_Versions_Mutation_Response>;
  /** update single row of the table: "program_amongus_vanilla_versions" */
  update_program_amongus_vanilla_versions_by_pk?: Maybe<Program_Amongus_Vanilla_Versions>;
  /** update multiples rows of table: "program_amongus_vanilla_versions" */
  update_program_amongus_vanilla_versions_many?: Maybe<Array<Maybe<Program_Amongus_Vanilla_Versions_Mutation_Response>>>;
  /** update data of the table: "program_persons" */
  update_program_persons?: Maybe<Program_Persons_Mutation_Response>;
  /** update single row of the table: "program_persons" */
  update_program_persons_by_pk?: Maybe<Program_Persons>;
  /** update multiples rows of table: "program_persons" */
  update_program_persons_many?: Maybe<Array<Maybe<Program_Persons_Mutation_Response>>>;
  /** update data of the table: "program_projects" */
  update_program_projects?: Maybe<Program_Projects_Mutation_Response>;
  /** update single row of the table: "program_projects" */
  update_program_projects_by_pk?: Maybe<Program_Projects>;
  /** update multiples rows of table: "program_projects" */
  update_program_projects_many?: Maybe<Array<Maybe<Program_Projects_Mutation_Response>>>;
  /** update data of the table: "program_twitter_announcements" */
  update_program_twitter_announcements?: Maybe<Program_Twitter_Announcements_Mutation_Response>;
  /** update single row of the table: "program_twitter_announcements" */
  update_program_twitter_announcements_by_pk?: Maybe<Program_Twitter_Announcements>;
  /** update multiples rows of table: "program_twitter_announcements" */
  update_program_twitter_announcements_many?: Maybe<Array<Maybe<Program_Twitter_Announcements_Mutation_Response>>>;
  /** update data of the table: "program_youtube_lives" */
  update_program_youtube_lives?: Maybe<Program_Youtube_Lives_Mutation_Response>;
  /** update single row of the table: "program_youtube_lives" */
  update_program_youtube_lives_by_pk?: Maybe<Program_Youtube_Lives>;
  /** update multiples rows of table: "program_youtube_lives" */
  update_program_youtube_lives_many?: Maybe<Array<Maybe<Program_Youtube_Lives_Mutation_Response>>>;
  /** update data of the table: "programs" */
  update_programs?: Maybe<Programs_Mutation_Response>;
  /** update single row of the table: "programs" */
  update_programs_by_pk?: Maybe<Programs>;
  /** update multiples rows of table: "programs" */
  update_programs_many?: Maybe<Array<Maybe<Programs_Mutation_Response>>>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  update_projects_many?: Maybe<Array<Maybe<Projects_Mutation_Response>>>;
  /** update data of the table: "twitter_accounts" */
  update_twitter_accounts?: Maybe<Twitter_Accounts_Mutation_Response>;
  /** update single row of the table: "twitter_accounts" */
  update_twitter_accounts_by_pk?: Maybe<Twitter_Accounts>;
  /** update multiples rows of table: "twitter_accounts" */
  update_twitter_accounts_many?: Maybe<Array<Maybe<Twitter_Accounts_Mutation_Response>>>;
  /** update data of the table: "twitter_tweet_images" */
  update_twitter_tweet_images?: Maybe<Twitter_Tweet_Images_Mutation_Response>;
  /** update single row of the table: "twitter_tweet_images" */
  update_twitter_tweet_images_by_pk?: Maybe<Twitter_Tweet_Images>;
  /** update multiples rows of table: "twitter_tweet_images" */
  update_twitter_tweet_images_many?: Maybe<Array<Maybe<Twitter_Tweet_Images_Mutation_Response>>>;
  /** update data of the table: "twitter_tweets" */
  update_twitter_tweets?: Maybe<Twitter_Tweets_Mutation_Response>;
  /** update single row of the table: "twitter_tweets" */
  update_twitter_tweets_by_pk?: Maybe<Twitter_Tweets>;
  /** update multiples rows of table: "twitter_tweets" */
  update_twitter_tweets_many?: Maybe<Array<Maybe<Twitter_Tweets_Mutation_Response>>>;
  /** update data of the table: "youtube_channels" */
  update_youtube_channels?: Maybe<Youtube_Channels_Mutation_Response>;
  /** update single row of the table: "youtube_channels" */
  update_youtube_channels_by_pk?: Maybe<Youtube_Channels>;
  /** update multiples rows of table: "youtube_channels" */
  update_youtube_channels_many?: Maybe<Array<Maybe<Youtube_Channels_Mutation_Response>>>;
  /** update data of the table: "youtube_lives" */
  update_youtube_lives?: Maybe<Youtube_Lives_Mutation_Response>;
  /** update single row of the table: "youtube_lives" */
  update_youtube_lives_by_pk?: Maybe<Youtube_Lives>;
  /** update multiples rows of table: "youtube_lives" */
  update_youtube_lives_many?: Maybe<Array<Maybe<Youtube_Lives_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_MapsArgs = {
  where: Amongus_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_ModsArgs = {
  where: Amongus_Match_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_Player_Result_RolesArgs = {
  where: Amongus_Match_Player_Result_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_Player_Result_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_PlayersArgs = {
  where: Amongus_Match_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Match_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_MatchesArgs = {
  where: Amongus_Matches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Matches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Mod_VersionsArgs = {
  where: Amongus_Mod_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Mod_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_ModsArgs = {
  where: Amongus_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_RolesArgs = {
  where: Amongus_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Vanilla_VersionsArgs = {
  where: Amongus_Vanilla_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Amongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fediverse_AccountsArgs = {
  where: Fediverse_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Niconico_AccountsArgs = {
  where: Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Niconico_CommunitiesArgs = {
  where: Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Fediverse_AccountsArgs = {
  where: Person_Fediverse_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Fediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_AccountsArgs = {
  where: Person_Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_CommunitiesArgs = {
  where: Person_Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Twitter_AccountsArgs = {
  where: Person_Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Youtube_ChannelsArgs = {
  where: Person_Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonsArgs = {
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_MapsArgs = {
  where: Program_Amongus_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_ModsArgs = {
  where: Program_Amongus_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_Vanilla_VersionsArgs = {
  where: Program_Amongus_Vanilla_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Amongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_PersonsArgs = {
  where: Program_Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_ProjectsArgs = {
  where: Program_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Projects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_Twitter_AnnouncementsArgs = {
  where: Program_Twitter_Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Program_Youtube_LivesArgs = {
  where: Program_Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProgramsArgs = {
  where: Programs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Programs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Twitter_AccountsArgs = {
  where: Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Twitter_Tweet_ImagesArgs = {
  where: Twitter_Tweet_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Twitter_Tweet_Images_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Twitter_TweetsArgs = {
  where: Twitter_Tweets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Twitter_Tweets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Youtube_ChannelsArgs = {
  where: Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Youtube_LivesArgs = {
  where: Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Amongus_MapsArgs = {
  objects: Array<Amongus_Maps_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Maps_OneArgs = {
  object: Amongus_Maps_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_ModsArgs = {
  objects: Array<Amongus_Match_Mods_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Match_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_Mods_OneArgs = {
  object: Amongus_Match_Mods_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Match_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_Player_Result_RolesArgs = {
  objects: Array<Amongus_Match_Player_Result_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Match_Player_Result_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_Player_Result_Roles_OneArgs = {
  object: Amongus_Match_Player_Result_Roles_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Match_Player_Result_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_PlayersArgs = {
  objects: Array<Amongus_Match_Players_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Match_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Match_Players_OneArgs = {
  object: Amongus_Match_Players_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Match_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_MatchesArgs = {
  objects: Array<Amongus_Matches_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Matches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Matches_OneArgs = {
  object: Amongus_Matches_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Matches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Mod_VersionsArgs = {
  objects: Array<Amongus_Mod_Versions_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Mod_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Mod_Versions_OneArgs = {
  object: Amongus_Mod_Versions_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Mod_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_ModsArgs = {
  objects: Array<Amongus_Mods_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Mods_OneArgs = {
  object: Amongus_Mods_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_RolesArgs = {
  objects: Array<Amongus_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Roles_OneArgs = {
  object: Amongus_Roles_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Vanilla_VersionsArgs = {
  objects: Array<Amongus_Vanilla_Versions_Insert_Input>;
  on_conflict?: InputMaybe<Amongus_Vanilla_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Amongus_Vanilla_Versions_OneArgs = {
  object: Amongus_Vanilla_Versions_Insert_Input;
  on_conflict?: InputMaybe<Amongus_Vanilla_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fediverse_AccountsArgs = {
  objects: Array<Fediverse_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Fediverse_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fediverse_Accounts_OneArgs = {
  object: Fediverse_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Fediverse_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Niconico_AccountsArgs = {
  objects: Array<Niconico_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Niconico_Accounts_OneArgs = {
  object: Niconico_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Niconico_CommunitiesArgs = {
  objects: Array<Niconico_Communities_Insert_Input>;
  on_conflict?: InputMaybe<Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Niconico_Communities_OneArgs = {
  object: Niconico_Communities_Insert_Input;
  on_conflict?: InputMaybe<Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Fediverse_AccountsArgs = {
  objects: Array<Person_Fediverse_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Person_Fediverse_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Fediverse_Accounts_OneArgs = {
  object: Person_Fediverse_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Person_Fediverse_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_AccountsArgs = {
  objects: Array<Person_Niconico_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_Accounts_OneArgs = {
  object: Person_Niconico_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_CommunitiesArgs = {
  objects: Array<Person_Niconico_Communities_Insert_Input>;
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_Communities_OneArgs = {
  object: Person_Niconico_Communities_Insert_Input;
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Twitter_AccountsArgs = {
  objects: Array<Person_Twitter_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Twitter_Accounts_OneArgs = {
  object: Person_Twitter_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Youtube_ChannelsArgs = {
  objects: Array<Person_Youtube_Channels_Insert_Input>;
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Youtube_Channels_OneArgs = {
  object: Person_Youtube_Channels_Insert_Input;
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonsArgs = {
  objects: Array<Persons_Insert_Input>;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Persons_OneArgs = {
  object: Persons_Insert_Input;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_MapsArgs = {
  objects: Array<Program_Amongus_Maps_Insert_Input>;
  on_conflict?: InputMaybe<Program_Amongus_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_Maps_OneArgs = {
  object: Program_Amongus_Maps_Insert_Input;
  on_conflict?: InputMaybe<Program_Amongus_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_ModsArgs = {
  objects: Array<Program_Amongus_Mods_Insert_Input>;
  on_conflict?: InputMaybe<Program_Amongus_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_Mods_OneArgs = {
  object: Program_Amongus_Mods_Insert_Input;
  on_conflict?: InputMaybe<Program_Amongus_Mods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_Vanilla_VersionsArgs = {
  objects: Array<Program_Amongus_Vanilla_Versions_Insert_Input>;
  on_conflict?: InputMaybe<Program_Amongus_Vanilla_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Amongus_Vanilla_Versions_OneArgs = {
  object: Program_Amongus_Vanilla_Versions_Insert_Input;
  on_conflict?: InputMaybe<Program_Amongus_Vanilla_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_PersonsArgs = {
  objects: Array<Program_Persons_Insert_Input>;
  on_conflict?: InputMaybe<Program_Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Persons_OneArgs = {
  object: Program_Persons_Insert_Input;
  on_conflict?: InputMaybe<Program_Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_ProjectsArgs = {
  objects: Array<Program_Projects_Insert_Input>;
  on_conflict?: InputMaybe<Program_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Projects_OneArgs = {
  object: Program_Projects_Insert_Input;
  on_conflict?: InputMaybe<Program_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Twitter_AnnouncementsArgs = {
  objects: Array<Program_Twitter_Announcements_Insert_Input>;
  on_conflict?: InputMaybe<Program_Twitter_Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Twitter_Announcements_OneArgs = {
  object: Program_Twitter_Announcements_Insert_Input;
  on_conflict?: InputMaybe<Program_Twitter_Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Youtube_LivesArgs = {
  objects: Array<Program_Youtube_Lives_Insert_Input>;
  on_conflict?: InputMaybe<Program_Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_Youtube_Lives_OneArgs = {
  object: Program_Youtube_Lives_Insert_Input;
  on_conflict?: InputMaybe<Program_Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProgramsArgs = {
  objects: Array<Programs_Insert_Input>;
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Programs_OneArgs = {
  object: Programs_Insert_Input;
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_AccountsArgs = {
  objects: Array<Twitter_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_Accounts_OneArgs = {
  object: Twitter_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_Tweet_ImagesArgs = {
  objects: Array<Twitter_Tweet_Images_Insert_Input>;
  on_conflict?: InputMaybe<Twitter_Tweet_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_Tweet_Images_OneArgs = {
  object: Twitter_Tweet_Images_Insert_Input;
  on_conflict?: InputMaybe<Twitter_Tweet_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_TweetsArgs = {
  objects: Array<Twitter_Tweets_Insert_Input>;
  on_conflict?: InputMaybe<Twitter_Tweets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Twitter_Tweets_OneArgs = {
  object: Twitter_Tweets_Insert_Input;
  on_conflict?: InputMaybe<Twitter_Tweets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Youtube_ChannelsArgs = {
  objects: Array<Youtube_Channels_Insert_Input>;
  on_conflict?: InputMaybe<Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Youtube_Channels_OneArgs = {
  object: Youtube_Channels_Insert_Input;
  on_conflict?: InputMaybe<Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Youtube_LivesArgs = {
  objects: Array<Youtube_Lives_Insert_Input>;
  on_conflict?: InputMaybe<Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Youtube_Lives_OneArgs = {
  object: Youtube_Lives_Insert_Input;
  on_conflict?: InputMaybe<Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_MapsArgs = {
  _set?: InputMaybe<Amongus_Maps_Set_Input>;
  where: Amongus_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Maps_By_PkArgs = {
  _set?: InputMaybe<Amongus_Maps_Set_Input>;
  pk_columns: Amongus_Maps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Maps_ManyArgs = {
  updates: Array<Amongus_Maps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_ModsArgs = {
  _set?: InputMaybe<Amongus_Match_Mods_Set_Input>;
  where: Amongus_Match_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Mods_By_PkArgs = {
  _set?: InputMaybe<Amongus_Match_Mods_Set_Input>;
  pk_columns: Amongus_Match_Mods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Mods_ManyArgs = {
  updates: Array<Amongus_Match_Mods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Player_Result_RolesArgs = {
  _inc?: InputMaybe<Amongus_Match_Player_Result_Roles_Inc_Input>;
  _set?: InputMaybe<Amongus_Match_Player_Result_Roles_Set_Input>;
  where: Amongus_Match_Player_Result_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Player_Result_Roles_By_PkArgs = {
  _inc?: InputMaybe<Amongus_Match_Player_Result_Roles_Inc_Input>;
  _set?: InputMaybe<Amongus_Match_Player_Result_Roles_Set_Input>;
  pk_columns: Amongus_Match_Player_Result_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Player_Result_Roles_ManyArgs = {
  updates: Array<Amongus_Match_Player_Result_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_PlayersArgs = {
  _set?: InputMaybe<Amongus_Match_Players_Set_Input>;
  where: Amongus_Match_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Players_By_PkArgs = {
  _set?: InputMaybe<Amongus_Match_Players_Set_Input>;
  pk_columns: Amongus_Match_Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Match_Players_ManyArgs = {
  updates: Array<Amongus_Match_Players_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_MatchesArgs = {
  _inc?: InputMaybe<Amongus_Matches_Inc_Input>;
  _set?: InputMaybe<Amongus_Matches_Set_Input>;
  where: Amongus_Matches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Matches_By_PkArgs = {
  _inc?: InputMaybe<Amongus_Matches_Inc_Input>;
  _set?: InputMaybe<Amongus_Matches_Set_Input>;
  pk_columns: Amongus_Matches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Matches_ManyArgs = {
  updates: Array<Amongus_Matches_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Mod_VersionsArgs = {
  _set?: InputMaybe<Amongus_Mod_Versions_Set_Input>;
  where: Amongus_Mod_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Mod_Versions_By_PkArgs = {
  _set?: InputMaybe<Amongus_Mod_Versions_Set_Input>;
  pk_columns: Amongus_Mod_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Mod_Versions_ManyArgs = {
  updates: Array<Amongus_Mod_Versions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_ModsArgs = {
  _set?: InputMaybe<Amongus_Mods_Set_Input>;
  where: Amongus_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Mods_By_PkArgs = {
  _set?: InputMaybe<Amongus_Mods_Set_Input>;
  pk_columns: Amongus_Mods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Mods_ManyArgs = {
  updates: Array<Amongus_Mods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_RolesArgs = {
  _inc?: InputMaybe<Amongus_Roles_Inc_Input>;
  _set?: InputMaybe<Amongus_Roles_Set_Input>;
  where: Amongus_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Roles_By_PkArgs = {
  _inc?: InputMaybe<Amongus_Roles_Inc_Input>;
  _set?: InputMaybe<Amongus_Roles_Set_Input>;
  pk_columns: Amongus_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Roles_ManyArgs = {
  updates: Array<Amongus_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Vanilla_VersionsArgs = {
  _set?: InputMaybe<Amongus_Vanilla_Versions_Set_Input>;
  where: Amongus_Vanilla_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Vanilla_Versions_By_PkArgs = {
  _set?: InputMaybe<Amongus_Vanilla_Versions_Set_Input>;
  pk_columns: Amongus_Vanilla_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Amongus_Vanilla_Versions_ManyArgs = {
  updates: Array<Amongus_Vanilla_Versions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fediverse_AccountsArgs = {
  _set?: InputMaybe<Fediverse_Accounts_Set_Input>;
  where: Fediverse_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fediverse_Accounts_By_PkArgs = {
  _set?: InputMaybe<Fediverse_Accounts_Set_Input>;
  pk_columns: Fediverse_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fediverse_Accounts_ManyArgs = {
  updates: Array<Fediverse_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Games_ManyArgs = {
  updates: Array<Games_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_AccountsArgs = {
  _set?: InputMaybe<Niconico_Accounts_Set_Input>;
  where: Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_Accounts_By_PkArgs = {
  _set?: InputMaybe<Niconico_Accounts_Set_Input>;
  pk_columns: Niconico_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_Accounts_ManyArgs = {
  updates: Array<Niconico_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_CommunitiesArgs = {
  _set?: InputMaybe<Niconico_Communities_Set_Input>;
  where: Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_Communities_By_PkArgs = {
  _set?: InputMaybe<Niconico_Communities_Set_Input>;
  pk_columns: Niconico_Communities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Niconico_Communities_ManyArgs = {
  updates: Array<Niconico_Communities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Fediverse_AccountsArgs = {
  _set?: InputMaybe<Person_Fediverse_Accounts_Set_Input>;
  where: Person_Fediverse_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Fediverse_Accounts_By_PkArgs = {
  _set?: InputMaybe<Person_Fediverse_Accounts_Set_Input>;
  pk_columns: Person_Fediverse_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Fediverse_Accounts_ManyArgs = {
  updates: Array<Person_Fediverse_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_AccountsArgs = {
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  where: Person_Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Accounts_By_PkArgs = {
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  pk_columns: Person_Niconico_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Accounts_ManyArgs = {
  updates: Array<Person_Niconico_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_CommunitiesArgs = {
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  where: Person_Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Communities_By_PkArgs = {
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  pk_columns: Person_Niconico_Communities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Communities_ManyArgs = {
  updates: Array<Person_Niconico_Communities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_AccountsArgs = {
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  where: Person_Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_Accounts_By_PkArgs = {
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  pk_columns: Person_Twitter_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_Accounts_ManyArgs = {
  updates: Array<Person_Twitter_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_ChannelsArgs = {
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  where: Person_Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_Channels_By_PkArgs = {
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  pk_columns: Person_Youtube_Channels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_Channels_ManyArgs = {
  updates: Array<Person_Youtube_Channels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonsArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_By_PkArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  pk_columns: Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_ManyArgs = {
  updates: Array<Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_MapsArgs = {
  _set?: InputMaybe<Program_Amongus_Maps_Set_Input>;
  where: Program_Amongus_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Maps_By_PkArgs = {
  _set?: InputMaybe<Program_Amongus_Maps_Set_Input>;
  pk_columns: Program_Amongus_Maps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Maps_ManyArgs = {
  updates: Array<Program_Amongus_Maps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_ModsArgs = {
  _set?: InputMaybe<Program_Amongus_Mods_Set_Input>;
  where: Program_Amongus_Mods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Mods_By_PkArgs = {
  _set?: InputMaybe<Program_Amongus_Mods_Set_Input>;
  pk_columns: Program_Amongus_Mods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Mods_ManyArgs = {
  updates: Array<Program_Amongus_Mods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Vanilla_VersionsArgs = {
  _set?: InputMaybe<Program_Amongus_Vanilla_Versions_Set_Input>;
  where: Program_Amongus_Vanilla_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Vanilla_Versions_By_PkArgs = {
  _set?: InputMaybe<Program_Amongus_Vanilla_Versions_Set_Input>;
  pk_columns: Program_Amongus_Vanilla_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Amongus_Vanilla_Versions_ManyArgs = {
  updates: Array<Program_Amongus_Vanilla_Versions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_PersonsArgs = {
  _set?: InputMaybe<Program_Persons_Set_Input>;
  where: Program_Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Persons_By_PkArgs = {
  _set?: InputMaybe<Program_Persons_Set_Input>;
  pk_columns: Program_Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Persons_ManyArgs = {
  updates: Array<Program_Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_ProjectsArgs = {
  _set?: InputMaybe<Program_Projects_Set_Input>;
  where: Program_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Projects_By_PkArgs = {
  _set?: InputMaybe<Program_Projects_Set_Input>;
  pk_columns: Program_Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Projects_ManyArgs = {
  updates: Array<Program_Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Twitter_AnnouncementsArgs = {
  _set?: InputMaybe<Program_Twitter_Announcements_Set_Input>;
  where: Program_Twitter_Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Twitter_Announcements_By_PkArgs = {
  _set?: InputMaybe<Program_Twitter_Announcements_Set_Input>;
  pk_columns: Program_Twitter_Announcements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Twitter_Announcements_ManyArgs = {
  updates: Array<Program_Twitter_Announcements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Youtube_LivesArgs = {
  _set?: InputMaybe<Program_Youtube_Lives_Set_Input>;
  where: Program_Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Youtube_Lives_By_PkArgs = {
  _set?: InputMaybe<Program_Youtube_Lives_Set_Input>;
  pk_columns: Program_Youtube_Lives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_Youtube_Lives_ManyArgs = {
  updates: Array<Program_Youtube_Lives_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProgramsArgs = {
  _set?: InputMaybe<Programs_Set_Input>;
  where: Programs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Programs_By_PkArgs = {
  _set?: InputMaybe<Programs_Set_Input>;
  pk_columns: Programs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Programs_ManyArgs = {
  updates: Array<Programs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_ManyArgs = {
  updates: Array<Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_AccountsArgs = {
  _set?: InputMaybe<Twitter_Accounts_Set_Input>;
  where: Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Accounts_By_PkArgs = {
  _set?: InputMaybe<Twitter_Accounts_Set_Input>;
  pk_columns: Twitter_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Accounts_ManyArgs = {
  updates: Array<Twitter_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Tweet_ImagesArgs = {
  _inc?: InputMaybe<Twitter_Tweet_Images_Inc_Input>;
  _set?: InputMaybe<Twitter_Tweet_Images_Set_Input>;
  where: Twitter_Tweet_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Tweet_Images_By_PkArgs = {
  _inc?: InputMaybe<Twitter_Tweet_Images_Inc_Input>;
  _set?: InputMaybe<Twitter_Tweet_Images_Set_Input>;
  pk_columns: Twitter_Tweet_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Tweet_Images_ManyArgs = {
  updates: Array<Twitter_Tweet_Images_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_TweetsArgs = {
  _set?: InputMaybe<Twitter_Tweets_Set_Input>;
  where: Twitter_Tweets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Tweets_By_PkArgs = {
  _set?: InputMaybe<Twitter_Tweets_Set_Input>;
  pk_columns: Twitter_Tweets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Twitter_Tweets_ManyArgs = {
  updates: Array<Twitter_Tweets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_ChannelsArgs = {
  _set?: InputMaybe<Youtube_Channels_Set_Input>;
  where: Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_Channels_By_PkArgs = {
  _set?: InputMaybe<Youtube_Channels_Set_Input>;
  pk_columns: Youtube_Channels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_Channels_ManyArgs = {
  updates: Array<Youtube_Channels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_LivesArgs = {
  _set?: InputMaybe<Youtube_Lives_Set_Input>;
  where: Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_Lives_By_PkArgs = {
  _set?: InputMaybe<Youtube_Lives_Set_Input>;
  pk_columns: Youtube_Lives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Youtube_Lives_ManyArgs = {
  updates: Array<Youtube_Lives_Updates>;
};

/** columns and relationships of "niconico_accounts" */
export type Niconico_Accounts = {
  __typename?: 'niconico_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  remote_niconico_account_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "niconico_accounts" */
export type Niconico_Accounts_Aggregate = {
  __typename?: 'niconico_accounts_aggregate';
  aggregate?: Maybe<Niconico_Accounts_Aggregate_Fields>;
  nodes: Array<Niconico_Accounts>;
};

/** aggregate fields of "niconico_accounts" */
export type Niconico_Accounts_Aggregate_Fields = {
  __typename?: 'niconico_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Niconico_Accounts_Max_Fields>;
  min?: Maybe<Niconico_Accounts_Min_Fields>;
};


/** aggregate fields of "niconico_accounts" */
export type Niconico_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Niconico_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "niconico_accounts". All fields are combined with a logical 'AND'. */
export type Niconico_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Niconico_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Niconico_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Niconico_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  remote_niconico_account_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "niconico_accounts" */
export enum Niconico_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  NiconicoAccountsPkey = 'niconico_accounts_pkey',
  /** unique or primary key constraint on columns "remote_niconico_account_id" */
  NiconicoAccountsRemoteNiconicoAccountIdKey = 'niconico_accounts_remote_niconico_account_id_key'
}

/** input type for inserting data into table "niconico_accounts" */
export type Niconico_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_account_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Niconico_Accounts_Max_Fields = {
  __typename?: 'niconico_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_niconico_account_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Niconico_Accounts_Min_Fields = {
  __typename?: 'niconico_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_niconico_account_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "niconico_accounts" */
export type Niconico_Accounts_Mutation_Response = {
  __typename?: 'niconico_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Niconico_Accounts>;
};

/** input type for inserting object relation for remote table "niconico_accounts" */
export type Niconico_Accounts_Obj_Rel_Insert_Input = {
  data: Niconico_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Niconico_Accounts_On_Conflict>;
};

/** on_conflict condition type for table "niconico_accounts" */
export type Niconico_Accounts_On_Conflict = {
  constraint: Niconico_Accounts_Constraint;
  update_columns?: Array<Niconico_Accounts_Update_Column>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "niconico_accounts". */
export type Niconico_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remote_niconico_account_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: niconico_accounts */
export type Niconico_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "niconico_accounts" */
export enum Niconico_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteNiconicoAccountId = 'remote_niconico_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "niconico_accounts" */
export type Niconico_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_account_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "niconico_accounts" */
export type Niconico_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Niconico_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Niconico_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_account_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "niconico_accounts" */
export enum Niconico_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteNiconicoAccountId = 'remote_niconico_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Niconico_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Niconico_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Niconico_Accounts_Bool_Exp;
};

/** columns and relationships of "niconico_communities" */
export type Niconico_Communities = {
  __typename?: 'niconico_communities';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  remote_niconico_community_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "niconico_communities" */
export type Niconico_Communities_Aggregate = {
  __typename?: 'niconico_communities_aggregate';
  aggregate?: Maybe<Niconico_Communities_Aggregate_Fields>;
  nodes: Array<Niconico_Communities>;
};

/** aggregate fields of "niconico_communities" */
export type Niconico_Communities_Aggregate_Fields = {
  __typename?: 'niconico_communities_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Niconico_Communities_Max_Fields>;
  min?: Maybe<Niconico_Communities_Min_Fields>;
};


/** aggregate fields of "niconico_communities" */
export type Niconico_Communities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Niconico_Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "niconico_communities". All fields are combined with a logical 'AND'. */
export type Niconico_Communities_Bool_Exp = {
  _and?: InputMaybe<Array<Niconico_Communities_Bool_Exp>>;
  _not?: InputMaybe<Niconico_Communities_Bool_Exp>;
  _or?: InputMaybe<Array<Niconico_Communities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  remote_niconico_community_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "niconico_communities" */
export enum Niconico_Communities_Constraint {
  /** unique or primary key constraint on columns "id" */
  NiconicoCommunitiesPkey = 'niconico_communities_pkey',
  /** unique or primary key constraint on columns "remote_niconico_community_id" */
  NiconicoCommunitiesRemoteNiconicoCommunityIdKey = 'niconico_communities_remote_niconico_community_id_key'
}

/** input type for inserting data into table "niconico_communities" */
export type Niconico_Communities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_community_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Niconico_Communities_Max_Fields = {
  __typename?: 'niconico_communities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_niconico_community_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Niconico_Communities_Min_Fields = {
  __typename?: 'niconico_communities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_niconico_community_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "niconico_communities" */
export type Niconico_Communities_Mutation_Response = {
  __typename?: 'niconico_communities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Niconico_Communities>;
};

/** input type for inserting object relation for remote table "niconico_communities" */
export type Niconico_Communities_Obj_Rel_Insert_Input = {
  data: Niconico_Communities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Niconico_Communities_On_Conflict>;
};

/** on_conflict condition type for table "niconico_communities" */
export type Niconico_Communities_On_Conflict = {
  constraint: Niconico_Communities_Constraint;
  update_columns?: Array<Niconico_Communities_Update_Column>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};

/** Ordering options when selecting data from "niconico_communities". */
export type Niconico_Communities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remote_niconico_community_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: niconico_communities */
export type Niconico_Communities_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "niconico_communities" */
export enum Niconico_Communities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteNiconicoCommunityId = 'remote_niconico_community_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "niconico_communities" */
export type Niconico_Communities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_community_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "niconico_communities" */
export type Niconico_Communities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Niconico_Communities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Niconico_Communities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_niconico_community_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "niconico_communities" */
export enum Niconico_Communities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteNiconicoCommunityId = 'remote_niconico_community_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Niconico_Communities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Niconico_Communities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Niconico_Communities_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "person_fediverse_accounts" */
export type Person_Fediverse_Accounts = {
  __typename?: 'person_fediverse_accounts';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  fediverse_account: Fediverse_Accounts;
  fediverse_account_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Aggregate = {
  __typename?: 'person_fediverse_accounts_aggregate';
  aggregate?: Maybe<Person_Fediverse_Accounts_Aggregate_Fields>;
  nodes: Array<Person_Fediverse_Accounts>;
};

export type Person_Fediverse_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Fediverse_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Person_Fediverse_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Aggregate_Fields = {
  __typename?: 'person_fediverse_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Fediverse_Accounts_Max_Fields>;
  min?: Maybe<Person_Fediverse_Accounts_Min_Fields>;
};


/** aggregate fields of "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Fediverse_Accounts_Max_Order_By>;
  min?: InputMaybe<Person_Fediverse_Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Person_Fediverse_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Fediverse_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_fediverse_accounts". All fields are combined with a logical 'AND'. */
export type Person_Fediverse_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Fediverse_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Fediverse_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fediverse_account?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
  fediverse_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_fediverse_accounts" */
export enum Person_Fediverse_Accounts_Constraint {
  /** unique or primary key constraint on columns "fediverse_account_id", "person_id" */
  V2PersonFediverseAccountsPersonIdFediverseAccountIdKey = 'v2_person_fediverse_accounts_person_id_fediverse_account_id_key',
  /** unique or primary key constraint on columns "id" */
  V2PersonFediverseAccountsPkey = 'v2_person_fediverse_accounts_pkey'
}

/** input type for inserting data into table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_account?: InputMaybe<Fediverse_Accounts_Obj_Rel_Insert_Input>;
  fediverse_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Fediverse_Accounts_Max_Fields = {
  __typename?: 'person_fediverse_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fediverse_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fediverse_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Fediverse_Accounts_Min_Fields = {
  __typename?: 'person_fediverse_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fediverse_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fediverse_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Mutation_Response = {
  __typename?: 'person_fediverse_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Fediverse_Accounts>;
};

/** on_conflict condition type for table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_On_Conflict = {
  constraint: Person_Fediverse_Accounts_Constraint;
  update_columns?: Array<Person_Fediverse_Accounts_Update_Column>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "person_fediverse_accounts". */
export type Person_Fediverse_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fediverse_account?: InputMaybe<Fediverse_Accounts_Order_By>;
  fediverse_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_fediverse_accounts */
export type Person_Fediverse_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_fediverse_accounts" */
export enum Person_Fediverse_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FediverseAccountId = 'fediverse_account_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "person_fediverse_accounts" */
export type Person_Fediverse_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Fediverse_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Fediverse_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fediverse_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "person_fediverse_accounts" */
export enum Person_Fediverse_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FediverseAccountId = 'fediverse_account_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Fediverse_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Fediverse_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Fediverse_Accounts_Bool_Exp;
};

/** columns and relationships of "person_niconico_accounts" */
export type Person_Niconico_Accounts = {
  __typename?: 'person_niconico_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  niconico_account: Niconico_Accounts;
  niconico_account_id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate = {
  __typename?: 'person_niconico_accounts_aggregate';
  aggregate?: Maybe<Person_Niconico_Accounts_Aggregate_Fields>;
  nodes: Array<Person_Niconico_Accounts>;
};

export type Person_Niconico_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Niconico_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Person_Niconico_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_Fields = {
  __typename?: 'person_niconico_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Niconico_Accounts_Max_Fields>;
  min?: Maybe<Person_Niconico_Accounts_Min_Fields>;
};


/** aggregate fields of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Niconico_Accounts_Max_Order_By>;
  min?: InputMaybe<Person_Niconico_Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Person_Niconico_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_niconico_accounts". All fields are combined with a logical 'AND'. */
export type Person_Niconico_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Niconico_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Niconico_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  niconico_account?: InputMaybe<Niconico_Accounts_Bool_Exp>;
  niconico_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Constraint {
  /** unique or primary key constraint on columns "niconico_account_id", "person_id" */
  V2PersonNiconicoAccountsPersonIdNiconicoAccountIdKey = 'v2_person_niconico_accounts_person_id_niconico_account_id_key',
  /** unique or primary key constraint on columns "id" */
  V2PersonNiconicoAccountsPkey = 'v2_person_niconico_accounts_pkey'
}

/** input type for inserting data into table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_account?: InputMaybe<Niconico_Accounts_Obj_Rel_Insert_Input>;
  niconico_account_id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Niconico_Accounts_Max_Fields = {
  __typename?: 'person_niconico_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  niconico_account_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Niconico_Accounts_Min_Fields = {
  __typename?: 'person_niconico_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  niconico_account_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Mutation_Response = {
  __typename?: 'person_niconico_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Niconico_Accounts>;
};

/** on_conflict condition type for table "person_niconico_accounts" */
export type Person_Niconico_Accounts_On_Conflict = {
  constraint: Person_Niconico_Accounts_Constraint;
  update_columns?: Array<Person_Niconico_Accounts_Update_Column>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "person_niconico_accounts". */
export type Person_Niconico_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_account?: InputMaybe<Niconico_Accounts_Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_niconico_accounts */
export type Person_Niconico_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NiconicoAccountId = 'niconico_account_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_account_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Niconico_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Niconico_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_account_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NiconicoAccountId = 'niconico_account_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Niconico_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Niconico_Accounts_Bool_Exp;
};

/** columns and relationships of "person_niconico_communities" */
export type Person_Niconico_Communities = {
  __typename?: 'person_niconico_communities';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  niconico_community: Niconico_Communities;
  niconico_community_id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate = {
  __typename?: 'person_niconico_communities_aggregate';
  aggregate?: Maybe<Person_Niconico_Communities_Aggregate_Fields>;
  nodes: Array<Person_Niconico_Communities>;
};

export type Person_Niconico_Communities_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Niconico_Communities_Aggregate_Bool_Exp_Count>;
};

export type Person_Niconico_Communities_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_Fields = {
  __typename?: 'person_niconico_communities_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Niconico_Communities_Max_Fields>;
  min?: Maybe<Person_Niconico_Communities_Min_Fields>;
};


/** aggregate fields of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Niconico_Communities_Max_Order_By>;
  min?: InputMaybe<Person_Niconico_Communities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_niconico_communities" */
export type Person_Niconico_Communities_Arr_Rel_Insert_Input = {
  data: Array<Person_Niconico_Communities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_niconico_communities". All fields are combined with a logical 'AND'. */
export type Person_Niconico_Communities_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Niconico_Communities_Bool_Exp>>;
  _not?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Niconico_Communities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  niconico_community?: InputMaybe<Niconico_Communities_Bool_Exp>;
  niconico_community_id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_niconico_communities" */
export enum Person_Niconico_Communities_Constraint {
  /** unique or primary key constraint on columns "niconico_community_id", "person_id" */
  V2PersonNiconicoCommunitiePersonIdNiconicoCommunityKey = 'v2_person_niconico_communitie_person_id_niconico_community__key',
  /** unique or primary key constraint on columns "id" */
  V2PersonNiconicoCommunitiesPkey = 'v2_person_niconico_communities_pkey'
}

/** input type for inserting data into table "person_niconico_communities" */
export type Person_Niconico_Communities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_community?: InputMaybe<Niconico_Communities_Obj_Rel_Insert_Input>;
  niconico_community_id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Niconico_Communities_Max_Fields = {
  __typename?: 'person_niconico_communities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  niconico_community_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Niconico_Communities_Min_Fields = {
  __typename?: 'person_niconico_communities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  niconico_community_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_niconico_communities" */
export type Person_Niconico_Communities_Mutation_Response = {
  __typename?: 'person_niconico_communities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Niconico_Communities>;
};

/** on_conflict condition type for table "person_niconico_communities" */
export type Person_Niconico_Communities_On_Conflict = {
  constraint: Person_Niconico_Communities_Constraint;
  update_columns?: Array<Person_Niconico_Communities_Update_Column>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};

/** Ordering options when selecting data from "person_niconico_communities". */
export type Person_Niconico_Communities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  niconico_community?: InputMaybe<Niconico_Communities_Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_niconico_communities */
export type Person_Niconico_Communities_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_niconico_communities" */
export enum Person_Niconico_Communities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NiconicoCommunityId = 'niconico_community_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_niconico_communities" */
export type Person_Niconico_Communities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_community_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "person_niconico_communities" */
export type Person_Niconico_Communities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Niconico_Communities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Niconico_Communities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  niconico_community_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "person_niconico_communities" */
export enum Person_Niconico_Communities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NiconicoCommunityId = 'niconico_community_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Niconico_Communities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Niconico_Communities_Bool_Exp;
};

/** columns and relationships of "person_twitter_accounts" */
export type Person_Twitter_Accounts = {
  __typename?: 'person_twitter_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  /** An object relationship */
  twitter_account: Twitter_Accounts;
  twitter_account_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate = {
  __typename?: 'person_twitter_accounts_aggregate';
  aggregate?: Maybe<Person_Twitter_Accounts_Aggregate_Fields>;
  nodes: Array<Person_Twitter_Accounts>;
};

export type Person_Twitter_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Twitter_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Person_Twitter_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_Fields = {
  __typename?: 'person_twitter_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Twitter_Accounts_Max_Fields>;
  min?: Maybe<Person_Twitter_Accounts_Min_Fields>;
};


/** aggregate fields of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Twitter_Accounts_Max_Order_By>;
  min?: InputMaybe<Person_Twitter_Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Person_Twitter_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_twitter_accounts". All fields are combined with a logical 'AND'. */
export type Person_Twitter_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Twitter_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Twitter_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  twitter_account?: InputMaybe<Twitter_Accounts_Bool_Exp>;
  twitter_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Constraint {
  /** unique or primary key constraint on columns "twitter_account_id", "person_id" */
  V2PersonTwitterAccountsPersonIdTwitterAccountIdKey = 'v2_person_twitter_accounts_person_id_twitter_account_id_key',
  /** unique or primary key constraint on columns "id" */
  V2PersonTwitterAccountsPkey = 'v2_person_twitter_accounts_pkey'
}

/** input type for inserting data into table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_account?: InputMaybe<Twitter_Accounts_Obj_Rel_Insert_Input>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Twitter_Accounts_Max_Fields = {
  __typename?: 'person_twitter_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  twitter_account_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_account_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Twitter_Accounts_Min_Fields = {
  __typename?: 'person_twitter_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  twitter_account_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_account_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Mutation_Response = {
  __typename?: 'person_twitter_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Twitter_Accounts>;
};

/** on_conflict condition type for table "person_twitter_accounts" */
export type Person_Twitter_Accounts_On_Conflict = {
  constraint: Person_Twitter_Accounts_Constraint;
  update_columns?: Array<Person_Twitter_Accounts_Update_Column>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "person_twitter_accounts". */
export type Person_Twitter_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_account?: InputMaybe<Twitter_Accounts_Order_By>;
  twitter_account_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_twitter_accounts */
export type Person_Twitter_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  TwitterAccountId = 'twitter_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Twitter_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Twitter_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  TwitterAccountId = 'twitter_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Twitter_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Twitter_Accounts_Bool_Exp;
};

/** columns and relationships of "person_youtube_channels" */
export type Person_Youtube_Channels = {
  __typename?: 'person_youtube_channels';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  youtube_channel: Youtube_Channels;
  youtube_channel_id: Scalars['uuid']['output'];
};

/** aggregated selection of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate = {
  __typename?: 'person_youtube_channels_aggregate';
  aggregate?: Maybe<Person_Youtube_Channels_Aggregate_Fields>;
  nodes: Array<Person_Youtube_Channels>;
};

export type Person_Youtube_Channels_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Youtube_Channels_Aggregate_Bool_Exp_Count>;
};

export type Person_Youtube_Channels_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_Fields = {
  __typename?: 'person_youtube_channels_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Youtube_Channels_Max_Fields>;
  min?: Maybe<Person_Youtube_Channels_Min_Fields>;
};


/** aggregate fields of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Youtube_Channels_Max_Order_By>;
  min?: InputMaybe<Person_Youtube_Channels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_youtube_channels" */
export type Person_Youtube_Channels_Arr_Rel_Insert_Input = {
  data: Array<Person_Youtube_Channels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_youtube_channels". All fields are combined with a logical 'AND'. */
export type Person_Youtube_Channels_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Youtube_Channels_Bool_Exp>>;
  _not?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Youtube_Channels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_channel?: InputMaybe<Youtube_Channels_Bool_Exp>;
  youtube_channel_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_youtube_channels" */
export enum Person_Youtube_Channels_Constraint {
  /** unique or primary key constraint on columns "youtube_channel_id", "person_id" */
  V2PersonYoutubeChannelsPersonIdYoutubeChannelIdKey = 'v2_person_youtube_channels_person_id_youtube_channel_id_key',
  /** unique or primary key constraint on columns "id" */
  V2PersonYoutubeChannelsPkey = 'v2_person_youtube_channels_pkey'
}

/** input type for inserting data into table "person_youtube_channels" */
export type Person_Youtube_Channels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel?: InputMaybe<Youtube_Channels_Obj_Rel_Insert_Input>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Person_Youtube_Channels_Max_Fields = {
  __typename?: 'person_youtube_channels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "person_youtube_channels" */
export type Person_Youtube_Channels_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Youtube_Channels_Min_Fields = {
  __typename?: 'person_youtube_channels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "person_youtube_channels" */
export type Person_Youtube_Channels_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_youtube_channels" */
export type Person_Youtube_Channels_Mutation_Response = {
  __typename?: 'person_youtube_channels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Youtube_Channels>;
};

/** on_conflict condition type for table "person_youtube_channels" */
export type Person_Youtube_Channels_On_Conflict = {
  constraint: Person_Youtube_Channels_Constraint;
  update_columns?: Array<Person_Youtube_Channels_Update_Column>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};

/** Ordering options when selecting data from "person_youtube_channels". */
export type Person_Youtube_Channels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel?: InputMaybe<Youtube_Channels_Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_youtube_channels */
export type Person_Youtube_Channels_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_youtube_channels" */
export enum Person_Youtube_Channels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

/** input type for updating data in table "person_youtube_channels" */
export type Person_Youtube_Channels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "person_youtube_channels" */
export type Person_Youtube_Channels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Youtube_Channels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Youtube_Channels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "person_youtube_channels" */
export enum Person_Youtube_Channels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

export type Person_Youtube_Channels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Youtube_Channels_Bool_Exp;
};

/** columns and relationships of "persons" */
export type Persons = {
  __typename?: 'persons';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  person_fediverse_accounts: Array<Person_Fediverse_Accounts>;
  /** An aggregate relationship */
  person_fediverse_accounts_aggregate: Person_Fediverse_Accounts_Aggregate;
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** An array relationship */
  program_persons: Array<Program_Persons>;
  /** An aggregate relationship */
  program_persons_aggregate: Program_Persons_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "persons" */
export type PersonsPerson_Fediverse_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Fediverse_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsProgram_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsProgram_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};

/** aggregated selection of "persons" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate';
  aggregate?: Maybe<Persons_Aggregate_Fields>;
  nodes: Array<Persons>;
};

/** aggregate fields of "persons" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Persons_Max_Fields>;
  min?: Maybe<Persons_Min_Fields>;
};


/** aggregate fields of "persons" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "persons". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person_fediverse_accounts?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
  person_fediverse_accounts_aggregate?: InputMaybe<Person_Fediverse_Accounts_Aggregate_Bool_Exp>;
  person_niconico_accounts?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  person_niconico_accounts_aggregate?: InputMaybe<Person_Niconico_Accounts_Aggregate_Bool_Exp>;
  person_niconico_communities?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  person_niconico_communities_aggregate?: InputMaybe<Person_Niconico_Communities_Aggregate_Bool_Exp>;
  person_twitter_accounts?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  person_twitter_accounts_aggregate?: InputMaybe<Person_Twitter_Accounts_Aggregate_Bool_Exp>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Bool_Exp>;
  program_persons?: InputMaybe<Program_Persons_Bool_Exp>;
  program_persons_aggregate?: InputMaybe<Program_Persons_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "persons" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  MembersPkey = 'members_pkey'
}

/** input type for inserting data into table "persons" */
export type Persons_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_fediverse_accounts?: InputMaybe<Person_Fediverse_Accounts_Arr_Rel_Insert_Input>;
  person_niconico_accounts?: InputMaybe<Person_Niconico_Accounts_Arr_Rel_Insert_Input>;
  person_niconico_communities?: InputMaybe<Person_Niconico_Communities_Arr_Rel_Insert_Input>;
  person_twitter_accounts?: InputMaybe<Person_Twitter_Accounts_Arr_Rel_Insert_Input>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Arr_Rel_Insert_Input>;
  program_persons?: InputMaybe<Program_Persons_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "persons" */
export type Persons_Mutation_Response = {
  __typename?: 'persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Persons>;
};

/** input type for inserting object relation for remote table "persons" */
export type Persons_Obj_Rel_Insert_Input = {
  data: Persons_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};

/** on_conflict condition type for table "persons" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint;
  update_columns?: Array<Persons_Update_Column>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "persons". */
export type Persons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_fediverse_accounts_aggregate?: InputMaybe<Person_Fediverse_Accounts_Aggregate_Order_By>;
  person_niconico_accounts_aggregate?: InputMaybe<Person_Niconico_Accounts_Aggregate_Order_By>;
  person_niconico_communities_aggregate?: InputMaybe<Person_Niconico_Communities_Aggregate_Order_By>;
  person_twitter_accounts_aggregate?: InputMaybe<Person_Twitter_Accounts_Aggregate_Order_By>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Order_By>;
  program_persons_aggregate?: InputMaybe<Program_Persons_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: persons */
export type Persons_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "persons" */
export enum Persons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "persons" */
export type Persons_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "persons" */
export enum Persons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Persons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp;
};

/** columns and relationships of "program_amongus_maps" */
export type Program_Amongus_Maps = {
  __typename?: 'program_amongus_maps';
  /** An object relationship */
  amongus_map: Amongus_Maps;
  amongus_map_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_amongus_maps" */
export type Program_Amongus_Maps_Aggregate = {
  __typename?: 'program_amongus_maps_aggregate';
  aggregate?: Maybe<Program_Amongus_Maps_Aggregate_Fields>;
  nodes: Array<Program_Amongus_Maps>;
};

export type Program_Amongus_Maps_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Amongus_Maps_Aggregate_Bool_Exp_Count>;
};

export type Program_Amongus_Maps_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_amongus_maps" */
export type Program_Amongus_Maps_Aggregate_Fields = {
  __typename?: 'program_amongus_maps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Amongus_Maps_Max_Fields>;
  min?: Maybe<Program_Amongus_Maps_Min_Fields>;
};


/** aggregate fields of "program_amongus_maps" */
export type Program_Amongus_Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_amongus_maps" */
export type Program_Amongus_Maps_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Amongus_Maps_Max_Order_By>;
  min?: InputMaybe<Program_Amongus_Maps_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_amongus_maps" */
export type Program_Amongus_Maps_Arr_Rel_Insert_Input = {
  data: Array<Program_Amongus_Maps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Amongus_Maps_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_amongus_maps". All fields are combined with a logical 'AND'. */
export type Program_Amongus_Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Amongus_Maps_Bool_Exp>>;
  _not?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Amongus_Maps_Bool_Exp>>;
  amongus_map?: InputMaybe<Amongus_Maps_Bool_Exp>;
  amongus_map_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_amongus_maps" */
export enum Program_Amongus_Maps_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramAmongusMapsPkey = 'program_amongus_maps_pkey',
  /** unique or primary key constraint on columns "amongus_map_id", "program_id" */
  ProgramAmongusMapsProgramIdAmongusMapIdKey = 'program_amongus_maps_program_id_amongus_map_id_key'
}

/** input type for inserting data into table "program_amongus_maps" */
export type Program_Amongus_Maps_Insert_Input = {
  amongus_map?: InputMaybe<Amongus_Maps_Obj_Rel_Insert_Input>;
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Amongus_Maps_Max_Fields = {
  __typename?: 'program_amongus_maps_max_fields';
  amongus_map_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_amongus_maps" */
export type Program_Amongus_Maps_Max_Order_By = {
  amongus_map_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Amongus_Maps_Min_Fields = {
  __typename?: 'program_amongus_maps_min_fields';
  amongus_map_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_amongus_maps" */
export type Program_Amongus_Maps_Min_Order_By = {
  amongus_map_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_amongus_maps" */
export type Program_Amongus_Maps_Mutation_Response = {
  __typename?: 'program_amongus_maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Amongus_Maps>;
};

/** on_conflict condition type for table "program_amongus_maps" */
export type Program_Amongus_Maps_On_Conflict = {
  constraint: Program_Amongus_Maps_Constraint;
  update_columns?: Array<Program_Amongus_Maps_Update_Column>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "program_amongus_maps". */
export type Program_Amongus_Maps_Order_By = {
  amongus_map?: InputMaybe<Amongus_Maps_Order_By>;
  amongus_map_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_amongus_maps */
export type Program_Amongus_Maps_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_amongus_maps" */
export enum Program_Amongus_Maps_Select_Column {
  /** column name */
  AmongusMapId = 'amongus_map_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_amongus_maps" */
export type Program_Amongus_Maps_Set_Input = {
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_amongus_maps" */
export type Program_Amongus_Maps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Amongus_Maps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Amongus_Maps_Stream_Cursor_Value_Input = {
  amongus_map_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_amongus_maps" */
export enum Program_Amongus_Maps_Update_Column {
  /** column name */
  AmongusMapId = 'amongus_map_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Amongus_Maps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Amongus_Maps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Amongus_Maps_Bool_Exp;
};

/** columns and relationships of "program_amongus_mods" */
export type Program_Amongus_Mods = {
  __typename?: 'program_amongus_mods';
  /** An object relationship */
  amongus_mod: Amongus_Mods;
  amongus_mod_id: Scalars['uuid']['output'];
  /** An object relationship */
  amongus_mod_version?: Maybe<Amongus_Mod_Versions>;
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_amongus_mods" */
export type Program_Amongus_Mods_Aggregate = {
  __typename?: 'program_amongus_mods_aggregate';
  aggregate?: Maybe<Program_Amongus_Mods_Aggregate_Fields>;
  nodes: Array<Program_Amongus_Mods>;
};

export type Program_Amongus_Mods_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Amongus_Mods_Aggregate_Bool_Exp_Count>;
};

export type Program_Amongus_Mods_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_amongus_mods" */
export type Program_Amongus_Mods_Aggregate_Fields = {
  __typename?: 'program_amongus_mods_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Amongus_Mods_Max_Fields>;
  min?: Maybe<Program_Amongus_Mods_Min_Fields>;
};


/** aggregate fields of "program_amongus_mods" */
export type Program_Amongus_Mods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_amongus_mods" */
export type Program_Amongus_Mods_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Amongus_Mods_Max_Order_By>;
  min?: InputMaybe<Program_Amongus_Mods_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_amongus_mods" */
export type Program_Amongus_Mods_Arr_Rel_Insert_Input = {
  data: Array<Program_Amongus_Mods_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Amongus_Mods_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_amongus_mods". All fields are combined with a logical 'AND'. */
export type Program_Amongus_Mods_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Amongus_Mods_Bool_Exp>>;
  _not?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Amongus_Mods_Bool_Exp>>;
  amongus_mod?: InputMaybe<Amongus_Mods_Bool_Exp>;
  amongus_mod_id?: InputMaybe<Uuid_Comparison_Exp>;
  amongus_mod_version?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
  amongus_mod_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_amongus_mods" */
export enum Program_Amongus_Mods_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramAmongusModsPkey = 'program_amongus_mods_pkey',
  /** unique or primary key constraint on columns "amongus_mod_version_id", "amongus_mod_id", "program_id" */
  ProgramAmongusModsProgramIdAmongusModIdAmongusModKey = 'program_amongus_mods_program_id_amongus_mod_id_amongus_mod__key',
  /** unique or primary key constraint on columns "amongus_mod_id", "program_id" */
  ProgramAmongusModsProgramIdAmongusModIdKey = 'program_amongus_mods_program_id_amongus_mod_id_key'
}

/** input type for inserting data into table "program_amongus_mods" */
export type Program_Amongus_Mods_Insert_Input = {
  amongus_mod?: InputMaybe<Amongus_Mods_Obj_Rel_Insert_Input>;
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version?: InputMaybe<Amongus_Mod_Versions_Obj_Rel_Insert_Input>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Amongus_Mods_Max_Fields = {
  __typename?: 'program_amongus_mods_max_fields';
  amongus_mod_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_amongus_mods" */
export type Program_Amongus_Mods_Max_Order_By = {
  amongus_mod_id?: InputMaybe<Order_By>;
  amongus_mod_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Amongus_Mods_Min_Fields = {
  __typename?: 'program_amongus_mods_min_fields';
  amongus_mod_id?: Maybe<Scalars['uuid']['output']>;
  amongus_mod_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_amongus_mods" */
export type Program_Amongus_Mods_Min_Order_By = {
  amongus_mod_id?: InputMaybe<Order_By>;
  amongus_mod_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_amongus_mods" */
export type Program_Amongus_Mods_Mutation_Response = {
  __typename?: 'program_amongus_mods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Amongus_Mods>;
};

/** on_conflict condition type for table "program_amongus_mods" */
export type Program_Amongus_Mods_On_Conflict = {
  constraint: Program_Amongus_Mods_Constraint;
  update_columns?: Array<Program_Amongus_Mods_Update_Column>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};

/** Ordering options when selecting data from "program_amongus_mods". */
export type Program_Amongus_Mods_Order_By = {
  amongus_mod?: InputMaybe<Amongus_Mods_Order_By>;
  amongus_mod_id?: InputMaybe<Order_By>;
  amongus_mod_version?: InputMaybe<Amongus_Mod_Versions_Order_By>;
  amongus_mod_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_amongus_mods */
export type Program_Amongus_Mods_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_amongus_mods" */
export enum Program_Amongus_Mods_Select_Column {
  /** column name */
  AmongusModId = 'amongus_mod_id',
  /** column name */
  AmongusModVersionId = 'amongus_mod_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_amongus_mods" */
export type Program_Amongus_Mods_Set_Input = {
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_amongus_mods" */
export type Program_Amongus_Mods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Amongus_Mods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Amongus_Mods_Stream_Cursor_Value_Input = {
  amongus_mod_id?: InputMaybe<Scalars['uuid']['input']>;
  amongus_mod_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_amongus_mods" */
export enum Program_Amongus_Mods_Update_Column {
  /** column name */
  AmongusModId = 'amongus_mod_id',
  /** column name */
  AmongusModVersionId = 'amongus_mod_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Amongus_Mods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Amongus_Mods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Amongus_Mods_Bool_Exp;
};

/** columns and relationships of "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions = {
  __typename?: 'program_amongus_vanilla_versions';
  /** An object relationship */
  amongus_vanilla_version: Amongus_Vanilla_Versions;
  amongus_vanilla_version_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Aggregate = {
  __typename?: 'program_amongus_vanilla_versions_aggregate';
  aggregate?: Maybe<Program_Amongus_Vanilla_Versions_Aggregate_Fields>;
  nodes: Array<Program_Amongus_Vanilla_Versions>;
};

export type Program_Amongus_Vanilla_Versions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Amongus_Vanilla_Versions_Aggregate_Bool_Exp_Count>;
};

export type Program_Amongus_Vanilla_Versions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Aggregate_Fields = {
  __typename?: 'program_amongus_vanilla_versions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Amongus_Vanilla_Versions_Max_Fields>;
  min?: Maybe<Program_Amongus_Vanilla_Versions_Min_Fields>;
};


/** aggregate fields of "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Amongus_Vanilla_Versions_Max_Order_By>;
  min?: InputMaybe<Program_Amongus_Vanilla_Versions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Arr_Rel_Insert_Input = {
  data: Array<Program_Amongus_Vanilla_Versions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Amongus_Vanilla_Versions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_amongus_vanilla_versions". All fields are combined with a logical 'AND'. */
export type Program_Amongus_Vanilla_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Bool_Exp>>;
  _not?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Bool_Exp>>;
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
  amongus_vanilla_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_amongus_vanilla_versions" */
export enum Program_Amongus_Vanilla_Versions_Constraint {
  /** unique or primary key constraint on columns "program_id", "amongus_vanilla_version_id" */
  ProgramAmongusVanillaVersiProgramIdAmongusVanillaVeKey = 'program_amongus_vanilla_versi_program_id_amongus_vanilla_ve_key',
  /** unique or primary key constraint on columns "id" */
  ProgramAmongusVanillaVersionsPkey = 'program_amongus_vanilla_versions_pkey'
}

/** input type for inserting data into table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Insert_Input = {
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Obj_Rel_Insert_Input>;
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Amongus_Vanilla_Versions_Max_Fields = {
  __typename?: 'program_amongus_vanilla_versions_max_fields';
  amongus_vanilla_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Max_Order_By = {
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Amongus_Vanilla_Versions_Min_Fields = {
  __typename?: 'program_amongus_vanilla_versions_min_fields';
  amongus_vanilla_version_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Min_Order_By = {
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Mutation_Response = {
  __typename?: 'program_amongus_vanilla_versions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Amongus_Vanilla_Versions>;
};

/** on_conflict condition type for table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_On_Conflict = {
  constraint: Program_Amongus_Vanilla_Versions_Constraint;
  update_columns?: Array<Program_Amongus_Vanilla_Versions_Update_Column>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "program_amongus_vanilla_versions". */
export type Program_Amongus_Vanilla_Versions_Order_By = {
  amongus_vanilla_version?: InputMaybe<Amongus_Vanilla_Versions_Order_By>;
  amongus_vanilla_version_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_amongus_vanilla_versions */
export type Program_Amongus_Vanilla_Versions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_amongus_vanilla_versions" */
export enum Program_Amongus_Vanilla_Versions_Select_Column {
  /** column name */
  AmongusVanillaVersionId = 'amongus_vanilla_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Set_Input = {
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_amongus_vanilla_versions" */
export type Program_Amongus_Vanilla_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Amongus_Vanilla_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Amongus_Vanilla_Versions_Stream_Cursor_Value_Input = {
  amongus_vanilla_version_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_amongus_vanilla_versions" */
export enum Program_Amongus_Vanilla_Versions_Update_Column {
  /** column name */
  AmongusVanillaVersionId = 'amongus_vanilla_version_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Amongus_Vanilla_Versions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Amongus_Vanilla_Versions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Amongus_Vanilla_Versions_Bool_Exp;
};

/** columns and relationships of "program_persons" */
export type Program_Persons = {
  __typename?: 'program_persons';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_persons" */
export type Program_Persons_Aggregate = {
  __typename?: 'program_persons_aggregate';
  aggregate?: Maybe<Program_Persons_Aggregate_Fields>;
  nodes: Array<Program_Persons>;
};

export type Program_Persons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Persons_Aggregate_Bool_Exp_Count>;
};

export type Program_Persons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Persons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_persons" */
export type Program_Persons_Aggregate_Fields = {
  __typename?: 'program_persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Persons_Max_Fields>;
  min?: Maybe<Program_Persons_Min_Fields>;
};


/** aggregate fields of "program_persons" */
export type Program_Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_persons" */
export type Program_Persons_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Persons_Max_Order_By>;
  min?: InputMaybe<Program_Persons_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_persons" */
export type Program_Persons_Arr_Rel_Insert_Input = {
  data: Array<Program_Persons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Persons_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_persons". All fields are combined with a logical 'AND'. */
export type Program_Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Persons_Bool_Exp>>;
  _not?: InputMaybe<Program_Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Persons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_persons" */
export enum Program_Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramPersonsPkey = 'program_persons_pkey',
  /** unique or primary key constraint on columns "program_id", "person_id" */
  ProgramPersonsProgramIdPersonIdKey = 'program_persons_program_id_person_id_key'
}

/** input type for inserting data into table "program_persons" */
export type Program_Persons_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Persons_Max_Fields = {
  __typename?: 'program_persons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_persons" */
export type Program_Persons_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Persons_Min_Fields = {
  __typename?: 'program_persons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_persons" */
export type Program_Persons_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_persons" */
export type Program_Persons_Mutation_Response = {
  __typename?: 'program_persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Persons>;
};

/** on_conflict condition type for table "program_persons" */
export type Program_Persons_On_Conflict = {
  constraint: Program_Persons_Constraint;
  update_columns?: Array<Program_Persons_Update_Column>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "program_persons". */
export type Program_Persons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_persons */
export type Program_Persons_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_persons" */
export enum Program_Persons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_persons" */
export type Program_Persons_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_persons" */
export type Program_Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Persons_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_persons" */
export enum Program_Persons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Persons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Persons_Bool_Exp;
};

/** columns and relationships of "program_projects" */
export type Program_Projects = {
  __typename?: 'program_projects';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_projects" */
export type Program_Projects_Aggregate = {
  __typename?: 'program_projects_aggregate';
  aggregate?: Maybe<Program_Projects_Aggregate_Fields>;
  nodes: Array<Program_Projects>;
};

export type Program_Projects_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Projects_Aggregate_Bool_Exp_Count>;
};

export type Program_Projects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Projects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_projects" */
export type Program_Projects_Aggregate_Fields = {
  __typename?: 'program_projects_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Projects_Max_Fields>;
  min?: Maybe<Program_Projects_Min_Fields>;
};


/** aggregate fields of "program_projects" */
export type Program_Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_projects" */
export type Program_Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Projects_Max_Order_By>;
  min?: InputMaybe<Program_Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_projects" */
export type Program_Projects_Arr_Rel_Insert_Input = {
  data: Array<Program_Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_projects". All fields are combined with a logical 'AND'. */
export type Program_Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Projects_Bool_Exp>>;
  _not?: InputMaybe<Program_Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Projects_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_projects" */
export enum Program_Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramCommunitiesPkey = 'program_communities_pkey',
  /** unique or primary key constraint on columns "project_id", "program_id" */
  ProgramCommunitiesProgramIdCommunityIdKey = 'program_communities_program_id_community_id_key'
}

/** input type for inserting data into table "program_projects" */
export type Program_Projects_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Projects_Max_Fields = {
  __typename?: 'program_projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_projects" */
export type Program_Projects_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Projects_Min_Fields = {
  __typename?: 'program_projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_projects" */
export type Program_Projects_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_projects" */
export type Program_Projects_Mutation_Response = {
  __typename?: 'program_projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Projects>;
};

/** on_conflict condition type for table "program_projects" */
export type Program_Projects_On_Conflict = {
  constraint: Program_Projects_Constraint;
  update_columns?: Array<Program_Projects_Update_Column>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "program_projects". */
export type Program_Projects_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_projects */
export type Program_Projects_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_projects" */
export enum Program_Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_projects" */
export type Program_Projects_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_projects" */
export type Program_Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Projects_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_projects" */
export enum Program_Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Projects_Bool_Exp;
};

/** columns and relationships of "program_twitter_announcements" */
export type Program_Twitter_Announcements = {
  __typename?: 'program_twitter_announcements';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  /** An object relationship */
  twitter_tweet: Twitter_Tweets;
  twitter_tweet_id: Scalars['uuid']['output'];
  /** An object relationship */
  twitter_tweet_image?: Maybe<Twitter_Tweet_Images>;
  twitter_tweet_image_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "program_twitter_announcements" */
export type Program_Twitter_Announcements_Aggregate = {
  __typename?: 'program_twitter_announcements_aggregate';
  aggregate?: Maybe<Program_Twitter_Announcements_Aggregate_Fields>;
  nodes: Array<Program_Twitter_Announcements>;
};

export type Program_Twitter_Announcements_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Twitter_Announcements_Aggregate_Bool_Exp_Count>;
};

export type Program_Twitter_Announcements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_twitter_announcements" */
export type Program_Twitter_Announcements_Aggregate_Fields = {
  __typename?: 'program_twitter_announcements_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Twitter_Announcements_Max_Fields>;
  min?: Maybe<Program_Twitter_Announcements_Min_Fields>;
};


/** aggregate fields of "program_twitter_announcements" */
export type Program_Twitter_Announcements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Twitter_Announcements_Max_Order_By>;
  min?: InputMaybe<Program_Twitter_Announcements_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Arr_Rel_Insert_Input = {
  data: Array<Program_Twitter_Announcements_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Twitter_Announcements_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_twitter_announcements". All fields are combined with a logical 'AND'. */
export type Program_Twitter_Announcements_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Twitter_Announcements_Bool_Exp>>;
  _not?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Twitter_Announcements_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  twitter_tweet?: InputMaybe<Twitter_Tweets_Bool_Exp>;
  twitter_tweet_id?: InputMaybe<Uuid_Comparison_Exp>;
  twitter_tweet_image?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
  twitter_tweet_image_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_twitter_announcements" */
export enum Program_Twitter_Announcements_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramTwitterAnnouncementsPkey = 'program_twitter_announcements_pkey',
  /** unique or primary key constraint on columns "program_id", "twitter_tweet_image_id", "twitter_tweet_id" */
  ProgramTwitterAnnouncementsProgramIdTwitterTweetIdTwitt = 'program_twitter_announcements_program_id_twitter_tweet_id_twitt',
  /** unique or primary key constraint on columns "program_id", "twitter_tweet_image_id" */
  ProgramTwitterAnnouncementsProgramIdTwitterTweetImagKey = 'program_twitter_announcements_program_id_twitter_tweet_imag_key'
}

/** input type for inserting data into table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet?: InputMaybe<Twitter_Tweets_Obj_Rel_Insert_Input>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet_image?: InputMaybe<Twitter_Tweet_Images_Obj_Rel_Insert_Input>;
  twitter_tweet_image_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Program_Twitter_Announcements_Max_Fields = {
  __typename?: 'program_twitter_announcements_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  twitter_tweet_id?: Maybe<Scalars['uuid']['output']>;
  twitter_tweet_image_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  twitter_tweet_id?: InputMaybe<Order_By>;
  twitter_tweet_image_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Twitter_Announcements_Min_Fields = {
  __typename?: 'program_twitter_announcements_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  twitter_tweet_id?: Maybe<Scalars['uuid']['output']>;
  twitter_tweet_image_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  twitter_tweet_id?: InputMaybe<Order_By>;
  twitter_tweet_image_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Mutation_Response = {
  __typename?: 'program_twitter_announcements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Twitter_Announcements>;
};

/** on_conflict condition type for table "program_twitter_announcements" */
export type Program_Twitter_Announcements_On_Conflict = {
  constraint: Program_Twitter_Announcements_Constraint;
  update_columns?: Array<Program_Twitter_Announcements_Update_Column>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};

/** Ordering options when selecting data from "program_twitter_announcements". */
export type Program_Twitter_Announcements_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  twitter_tweet?: InputMaybe<Twitter_Tweets_Order_By>;
  twitter_tweet_id?: InputMaybe<Order_By>;
  twitter_tweet_image?: InputMaybe<Twitter_Tweet_Images_Order_By>;
  twitter_tweet_image_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_twitter_announcements */
export type Program_Twitter_Announcements_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_twitter_announcements" */
export enum Program_Twitter_Announcements_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  TwitterTweetId = 'twitter_tweet_id',
  /** column name */
  TwitterTweetImageId = 'twitter_tweet_image_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet_image_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "program_twitter_announcements" */
export type Program_Twitter_Announcements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Twitter_Announcements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Twitter_Announcements_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_tweet_image_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "program_twitter_announcements" */
export enum Program_Twitter_Announcements_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  TwitterTweetId = 'twitter_tweet_id',
  /** column name */
  TwitterTweetImageId = 'twitter_tweet_image_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Program_Twitter_Announcements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Twitter_Announcements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Twitter_Announcements_Bool_Exp;
};

/** columns and relationships of "program_youtube_lives" */
export type Program_Youtube_Lives = {
  __typename?: 'program_youtube_lives';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person?: Maybe<Persons>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  program: Programs;
  program_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  youtube_live: Youtube_Lives;
  youtube_live_id: Scalars['uuid']['output'];
};

/** aggregated selection of "program_youtube_lives" */
export type Program_Youtube_Lives_Aggregate = {
  __typename?: 'program_youtube_lives_aggregate';
  aggregate?: Maybe<Program_Youtube_Lives_Aggregate_Fields>;
  nodes: Array<Program_Youtube_Lives>;
};

export type Program_Youtube_Lives_Aggregate_Bool_Exp = {
  count?: InputMaybe<Program_Youtube_Lives_Aggregate_Bool_Exp_Count>;
};

export type Program_Youtube_Lives_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program_youtube_lives" */
export type Program_Youtube_Lives_Aggregate_Fields = {
  __typename?: 'program_youtube_lives_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Youtube_Lives_Max_Fields>;
  min?: Maybe<Program_Youtube_Lives_Min_Fields>;
};


/** aggregate fields of "program_youtube_lives" */
export type Program_Youtube_Lives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program_youtube_lives" */
export type Program_Youtube_Lives_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Youtube_Lives_Max_Order_By>;
  min?: InputMaybe<Program_Youtube_Lives_Min_Order_By>;
};

/** input type for inserting array relation for remote table "program_youtube_lives" */
export type Program_Youtube_Lives_Arr_Rel_Insert_Input = {
  data: Array<Program_Youtube_Lives_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_Youtube_Lives_On_Conflict>;
};

/** Boolean expression to filter rows from the table "program_youtube_lives". All fields are combined with a logical 'AND'. */
export type Program_Youtube_Lives_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Youtube_Lives_Bool_Exp>>;
  _not?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Youtube_Lives_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_live?: InputMaybe<Youtube_Lives_Bool_Exp>;
  youtube_live_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "program_youtube_lives" */
export enum Program_Youtube_Lives_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramYoutubeLivesPkey = 'program_youtube_lives_pkey',
  /** unique or primary key constraint on columns "program_id", "youtube_live_id" */
  ProgramYoutubeLivesProgramIdYoutubeLiveIdKey = 'program_youtube_lives_program_id_youtube_live_id_key'
}

/** input type for inserting data into table "program_youtube_lives" */
export type Program_Youtube_Lives_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_live?: InputMaybe<Youtube_Lives_Obj_Rel_Insert_Input>;
  youtube_live_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Program_Youtube_Lives_Max_Fields = {
  __typename?: 'program_youtube_lives_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_live_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "program_youtube_lives" */
export type Program_Youtube_Lives_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_live_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Youtube_Lives_Min_Fields = {
  __typename?: 'program_youtube_lives_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  program_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_live_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "program_youtube_lives" */
export type Program_Youtube_Lives_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_live_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program_youtube_lives" */
export type Program_Youtube_Lives_Mutation_Response = {
  __typename?: 'program_youtube_lives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program_Youtube_Lives>;
};

/** on_conflict condition type for table "program_youtube_lives" */
export type Program_Youtube_Lives_On_Conflict = {
  constraint: Program_Youtube_Lives_Constraint;
  update_columns?: Array<Program_Youtube_Lives_Update_Column>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};

/** Ordering options when selecting data from "program_youtube_lives". */
export type Program_Youtube_Lives_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_live?: InputMaybe<Youtube_Lives_Order_By>;
  youtube_live_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program_youtube_lives */
export type Program_Youtube_Lives_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "program_youtube_lives" */
export enum Program_Youtube_Lives_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeLiveId = 'youtube_live_id'
}

/** input type for updating data in table "program_youtube_lives" */
export type Program_Youtube_Lives_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_live_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "program_youtube_lives" */
export type Program_Youtube_Lives_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Youtube_Lives_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Youtube_Lives_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  program_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_live_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "program_youtube_lives" */
export enum Program_Youtube_Lives_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeLiveId = 'youtube_live_id'
}

export type Program_Youtube_Lives_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Youtube_Lives_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Youtube_Lives_Bool_Exp;
};

/** columns and relationships of "programs" */
export type Programs = {
  __typename?: 'programs';
  /** An array relationship */
  amongus_matches: Array<Amongus_Matches>;
  /** An aggregate relationship */
  amongus_matches_aggregate: Amongus_Matches_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  game?: Maybe<Games>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  program_amongus_maps: Array<Program_Amongus_Maps>;
  /** An aggregate relationship */
  program_amongus_maps_aggregate: Program_Amongus_Maps_Aggregate;
  /** An array relationship */
  program_amongus_mods: Array<Program_Amongus_Mods>;
  /** An aggregate relationship */
  program_amongus_mods_aggregate: Program_Amongus_Mods_Aggregate;
  /** An array relationship */
  program_amongus_vanilla_versions: Array<Program_Amongus_Vanilla_Versions>;
  /** An aggregate relationship */
  program_amongus_vanilla_versions_aggregate: Program_Amongus_Vanilla_Versions_Aggregate;
  /** An array relationship */
  program_persons: Array<Program_Persons>;
  /** An aggregate relationship */
  program_persons_aggregate: Program_Persons_Aggregate;
  /** An array relationship */
  program_projects: Array<Program_Projects>;
  /** An aggregate relationship */
  program_projects_aggregate: Program_Projects_Aggregate;
  /** An array relationship */
  program_twitter_announcements: Array<Program_Twitter_Announcements>;
  /** An aggregate relationship */
  program_twitter_announcements_aggregate: Program_Twitter_Announcements_Aggregate;
  /** An array relationship */
  program_youtube_lives: Array<Program_Youtube_Lives>;
  /** An aggregate relationship */
  program_youtube_lives_aggregate: Program_Youtube_Lives_Aggregate;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "programs" */
export type ProgramsAmongus_MatchesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsAmongus_Matches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_MapsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_ModsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_Vanilla_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Amongus_Vanilla_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_ProjectsArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Projects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsProgram_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};

/** aggregated selection of "programs" */
export type Programs_Aggregate = {
  __typename?: 'programs_aggregate';
  aggregate?: Maybe<Programs_Aggregate_Fields>;
  nodes: Array<Programs>;
};

/** aggregate fields of "programs" */
export type Programs_Aggregate_Fields = {
  __typename?: 'programs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Programs_Max_Fields>;
  min?: Maybe<Programs_Min_Fields>;
};


/** aggregate fields of "programs" */
export type Programs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Programs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "programs". All fields are combined with a logical 'AND'. */
export type Programs_Bool_Exp = {
  _and?: InputMaybe<Array<Programs_Bool_Exp>>;
  _not?: InputMaybe<Programs_Bool_Exp>;
  _or?: InputMaybe<Array<Programs_Bool_Exp>>;
  amongus_matches?: InputMaybe<Amongus_Matches_Bool_Exp>;
  amongus_matches_aggregate?: InputMaybe<Amongus_Matches_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  game?: InputMaybe<Games_Bool_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program_amongus_maps?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
  program_amongus_maps_aggregate?: InputMaybe<Program_Amongus_Maps_Aggregate_Bool_Exp>;
  program_amongus_mods?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
  program_amongus_mods_aggregate?: InputMaybe<Program_Amongus_Mods_Aggregate_Bool_Exp>;
  program_amongus_vanilla_versions?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
  program_amongus_vanilla_versions_aggregate?: InputMaybe<Program_Amongus_Vanilla_Versions_Aggregate_Bool_Exp>;
  program_persons?: InputMaybe<Program_Persons_Bool_Exp>;
  program_persons_aggregate?: InputMaybe<Program_Persons_Aggregate_Bool_Exp>;
  program_projects?: InputMaybe<Program_Projects_Bool_Exp>;
  program_projects_aggregate?: InputMaybe<Program_Projects_Aggregate_Bool_Exp>;
  program_twitter_announcements?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
  program_twitter_announcements_aggregate?: InputMaybe<Program_Twitter_Announcements_Aggregate_Bool_Exp>;
  program_youtube_lives?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
  program_youtube_lives_aggregate?: InputMaybe<Program_Youtube_Lives_Aggregate_Bool_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "programs" */
export enum Programs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramsPkey = 'programs_pkey'
}

/** input type for inserting data into table "programs" */
export type Programs_Insert_Input = {
  amongus_matches?: InputMaybe<Amongus_Matches_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  game?: InputMaybe<Games_Obj_Rel_Insert_Input>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_amongus_maps?: InputMaybe<Program_Amongus_Maps_Arr_Rel_Insert_Input>;
  program_amongus_mods?: InputMaybe<Program_Amongus_Mods_Arr_Rel_Insert_Input>;
  program_amongus_vanilla_versions?: InputMaybe<Program_Amongus_Vanilla_Versions_Arr_Rel_Insert_Input>;
  program_persons?: InputMaybe<Program_Persons_Arr_Rel_Insert_Input>;
  program_projects?: InputMaybe<Program_Projects_Arr_Rel_Insert_Input>;
  program_twitter_announcements?: InputMaybe<Program_Twitter_Announcements_Arr_Rel_Insert_Input>;
  program_youtube_lives?: InputMaybe<Program_Youtube_Lives_Arr_Rel_Insert_Input>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Programs_Max_Fields = {
  __typename?: 'programs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Programs_Min_Fields = {
  __typename?: 'programs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "programs" */
export type Programs_Mutation_Response = {
  __typename?: 'programs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Programs>;
};

/** input type for inserting object relation for remote table "programs" */
export type Programs_Obj_Rel_Insert_Input = {
  data: Programs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};

/** on_conflict condition type for table "programs" */
export type Programs_On_Conflict = {
  constraint: Programs_Constraint;
  update_columns?: Array<Programs_Update_Column>;
  where?: InputMaybe<Programs_Bool_Exp>;
};

/** Ordering options when selecting data from "programs". */
export type Programs_Order_By = {
  amongus_matches_aggregate?: InputMaybe<Amongus_Matches_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  game?: InputMaybe<Games_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_amongus_maps_aggregate?: InputMaybe<Program_Amongus_Maps_Aggregate_Order_By>;
  program_amongus_mods_aggregate?: InputMaybe<Program_Amongus_Mods_Aggregate_Order_By>;
  program_amongus_vanilla_versions_aggregate?: InputMaybe<Program_Amongus_Vanilla_Versions_Aggregate_Order_By>;
  program_persons_aggregate?: InputMaybe<Program_Persons_Aggregate_Order_By>;
  program_projects_aggregate?: InputMaybe<Program_Projects_Aggregate_Order_By>;
  program_twitter_announcements_aggregate?: InputMaybe<Program_Twitter_Announcements_Aggregate_Order_By>;
  program_youtube_lives_aggregate?: InputMaybe<Program_Youtube_Lives_Aggregate_Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: programs */
export type Programs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "programs" */
export enum Programs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "programs" */
export type Programs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "programs" */
export type Programs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Programs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Programs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "programs" */
export enum Programs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Programs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Programs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Programs_Bool_Exp;
};

/** ふにんがす、なのそん、などの企画 */
export type Projects = {
  __typename?: 'projects';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  program_projects: Array<Program_Projects>;
  /** An aggregate relationship */
  program_projects_aggregate: Program_Projects_Aggregate;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** ふにんがす、なのそん、などの企画 */
export type ProjectsProgram_ProjectsArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


/** ふにんがす、なのそん、などの企画 */
export type ProjectsProgram_Projects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  program_projects?: InputMaybe<Program_Projects_Bool_Exp>;
  program_projects_aggregate?: InputMaybe<Program_Projects_Aggregate_Bool_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommunitiesPkey = 'communities_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  program_projects?: InputMaybe<Program_Projects_Arr_Rel_Insert_Input>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  program_projects_aggregate?: InputMaybe<Program_Projects_Aggregate_Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Projects_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "amongus_maps" */
  amongus_maps: Array<Amongus_Maps>;
  /** fetch aggregated fields from the table: "amongus_maps" */
  amongus_maps_aggregate: Amongus_Maps_Aggregate;
  /** fetch data from the table: "amongus_maps" using primary key columns */
  amongus_maps_by_pk?: Maybe<Amongus_Maps>;
  /** fetch data from the table: "amongus_match_mods" */
  amongus_match_mods: Array<Amongus_Match_Mods>;
  /** fetch aggregated fields from the table: "amongus_match_mods" */
  amongus_match_mods_aggregate: Amongus_Match_Mods_Aggregate;
  /** fetch data from the table: "amongus_match_mods" using primary key columns */
  amongus_match_mods_by_pk?: Maybe<Amongus_Match_Mods>;
  /** fetch data from the table: "amongus_match_player_result_roles" */
  amongus_match_player_result_roles: Array<Amongus_Match_Player_Result_Roles>;
  /** fetch aggregated fields from the table: "amongus_match_player_result_roles" */
  amongus_match_player_result_roles_aggregate: Amongus_Match_Player_Result_Roles_Aggregate;
  /** fetch data from the table: "amongus_match_player_result_roles" using primary key columns */
  amongus_match_player_result_roles_by_pk?: Maybe<Amongus_Match_Player_Result_Roles>;
  /** An array relationship */
  amongus_match_players: Array<Amongus_Match_Players>;
  /** An aggregate relationship */
  amongus_match_players_aggregate: Amongus_Match_Players_Aggregate;
  /** fetch data from the table: "amongus_match_players" using primary key columns */
  amongus_match_players_by_pk?: Maybe<Amongus_Match_Players>;
  /** An array relationship */
  amongus_matches: Array<Amongus_Matches>;
  /** An aggregate relationship */
  amongus_matches_aggregate: Amongus_Matches_Aggregate;
  /** fetch data from the table: "amongus_matches" using primary key columns */
  amongus_matches_by_pk?: Maybe<Amongus_Matches>;
  /** fetch data from the table: "amongus_mod_versions" */
  amongus_mod_versions: Array<Amongus_Mod_Versions>;
  /** fetch aggregated fields from the table: "amongus_mod_versions" */
  amongus_mod_versions_aggregate: Amongus_Mod_Versions_Aggregate;
  /** fetch data from the table: "amongus_mod_versions" using primary key columns */
  amongus_mod_versions_by_pk?: Maybe<Amongus_Mod_Versions>;
  /** fetch data from the table: "amongus_mods" */
  amongus_mods: Array<Amongus_Mods>;
  /** fetch aggregated fields from the table: "amongus_mods" */
  amongus_mods_aggregate: Amongus_Mods_Aggregate;
  /** fetch data from the table: "amongus_mods" using primary key columns */
  amongus_mods_by_pk?: Maybe<Amongus_Mods>;
  /** fetch data from the table: "amongus_roles" */
  amongus_roles: Array<Amongus_Roles>;
  /** fetch aggregated fields from the table: "amongus_roles" */
  amongus_roles_aggregate: Amongus_Roles_Aggregate;
  /** fetch data from the table: "amongus_roles" using primary key columns */
  amongus_roles_by_pk?: Maybe<Amongus_Roles>;
  /** fetch data from the table: "amongus_vanilla_versions" */
  amongus_vanilla_versions: Array<Amongus_Vanilla_Versions>;
  /** fetch aggregated fields from the table: "amongus_vanilla_versions" */
  amongus_vanilla_versions_aggregate: Amongus_Vanilla_Versions_Aggregate;
  /** fetch data from the table: "amongus_vanilla_versions" using primary key columns */
  amongus_vanilla_versions_by_pk?: Maybe<Amongus_Vanilla_Versions>;
  /** fetch data from the table: "fediverse_accounts" */
  fediverse_accounts: Array<Fediverse_Accounts>;
  /** fetch aggregated fields from the table: "fediverse_accounts" */
  fediverse_accounts_aggregate: Fediverse_Accounts_Aggregate;
  /** fetch data from the table: "fediverse_accounts" using primary key columns */
  fediverse_accounts_by_pk?: Maybe<Fediverse_Accounts>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "niconico_accounts" */
  niconico_accounts: Array<Niconico_Accounts>;
  /** fetch aggregated fields from the table: "niconico_accounts" */
  niconico_accounts_aggregate: Niconico_Accounts_Aggregate;
  /** fetch data from the table: "niconico_accounts" using primary key columns */
  niconico_accounts_by_pk?: Maybe<Niconico_Accounts>;
  /** fetch data from the table: "niconico_communities" */
  niconico_communities: Array<Niconico_Communities>;
  /** fetch aggregated fields from the table: "niconico_communities" */
  niconico_communities_aggregate: Niconico_Communities_Aggregate;
  /** fetch data from the table: "niconico_communities" using primary key columns */
  niconico_communities_by_pk?: Maybe<Niconico_Communities>;
  /** An array relationship */
  person_fediverse_accounts: Array<Person_Fediverse_Accounts>;
  /** An aggregate relationship */
  person_fediverse_accounts_aggregate: Person_Fediverse_Accounts_Aggregate;
  /** fetch data from the table: "person_fediverse_accounts" using primary key columns */
  person_fediverse_accounts_by_pk?: Maybe<Person_Fediverse_Accounts>;
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** fetch data from the table: "person_niconico_accounts" using primary key columns */
  person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** fetch data from the table: "person_niconico_communities" using primary key columns */
  person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** fetch data from the table: "person_twitter_accounts" using primary key columns */
  person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** fetch data from the table: "person_youtube_channels" using primary key columns */
  person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** An array relationship */
  program_amongus_maps: Array<Program_Amongus_Maps>;
  /** An aggregate relationship */
  program_amongus_maps_aggregate: Program_Amongus_Maps_Aggregate;
  /** fetch data from the table: "program_amongus_maps" using primary key columns */
  program_amongus_maps_by_pk?: Maybe<Program_Amongus_Maps>;
  /** An array relationship */
  program_amongus_mods: Array<Program_Amongus_Mods>;
  /** An aggregate relationship */
  program_amongus_mods_aggregate: Program_Amongus_Mods_Aggregate;
  /** fetch data from the table: "program_amongus_mods" using primary key columns */
  program_amongus_mods_by_pk?: Maybe<Program_Amongus_Mods>;
  /** An array relationship */
  program_amongus_vanilla_versions: Array<Program_Amongus_Vanilla_Versions>;
  /** An aggregate relationship */
  program_amongus_vanilla_versions_aggregate: Program_Amongus_Vanilla_Versions_Aggregate;
  /** fetch data from the table: "program_amongus_vanilla_versions" using primary key columns */
  program_amongus_vanilla_versions_by_pk?: Maybe<Program_Amongus_Vanilla_Versions>;
  /** An array relationship */
  program_persons: Array<Program_Persons>;
  /** An aggregate relationship */
  program_persons_aggregate: Program_Persons_Aggregate;
  /** fetch data from the table: "program_persons" using primary key columns */
  program_persons_by_pk?: Maybe<Program_Persons>;
  /** An array relationship */
  program_projects: Array<Program_Projects>;
  /** An aggregate relationship */
  program_projects_aggregate: Program_Projects_Aggregate;
  /** fetch data from the table: "program_projects" using primary key columns */
  program_projects_by_pk?: Maybe<Program_Projects>;
  /** An array relationship */
  program_twitter_announcements: Array<Program_Twitter_Announcements>;
  /** An aggregate relationship */
  program_twitter_announcements_aggregate: Program_Twitter_Announcements_Aggregate;
  /** fetch data from the table: "program_twitter_announcements" using primary key columns */
  program_twitter_announcements_by_pk?: Maybe<Program_Twitter_Announcements>;
  /** An array relationship */
  program_youtube_lives: Array<Program_Youtube_Lives>;
  /** An aggregate relationship */
  program_youtube_lives_aggregate: Program_Youtube_Lives_Aggregate;
  /** fetch data from the table: "program_youtube_lives" using primary key columns */
  program_youtube_lives_by_pk?: Maybe<Program_Youtube_Lives>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: Programs_Aggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk?: Maybe<Programs>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "twitter_accounts" */
  twitter_accounts: Array<Twitter_Accounts>;
  /** fetch aggregated fields from the table: "twitter_accounts" */
  twitter_accounts_aggregate: Twitter_Accounts_Aggregate;
  /** fetch data from the table: "twitter_accounts" using primary key columns */
  twitter_accounts_by_pk?: Maybe<Twitter_Accounts>;
  /** fetch data from the table: "twitter_tweet_images" */
  twitter_tweet_images: Array<Twitter_Tweet_Images>;
  /** fetch aggregated fields from the table: "twitter_tweet_images" */
  twitter_tweet_images_aggregate: Twitter_Tweet_Images_Aggregate;
  /** fetch data from the table: "twitter_tweet_images" using primary key columns */
  twitter_tweet_images_by_pk?: Maybe<Twitter_Tweet_Images>;
  /** fetch data from the table: "twitter_tweets" */
  twitter_tweets: Array<Twitter_Tweets>;
  /** fetch aggregated fields from the table: "twitter_tweets" */
  twitter_tweets_aggregate: Twitter_Tweets_Aggregate;
  /** fetch data from the table: "twitter_tweets" using primary key columns */
  twitter_tweets_by_pk?: Maybe<Twitter_Tweets>;
  /** fetch data from the table: "youtube_channels" */
  youtube_channels: Array<Youtube_Channels>;
  /** fetch aggregated fields from the table: "youtube_channels" */
  youtube_channels_aggregate: Youtube_Channels_Aggregate;
  /** fetch data from the table: "youtube_channels" using primary key columns */
  youtube_channels_by_pk?: Maybe<Youtube_Channels>;
  /** An array relationship */
  youtube_lives: Array<Youtube_Lives>;
  /** An aggregate relationship */
  youtube_lives_aggregate: Youtube_Lives_Aggregate;
  /** fetch data from the table: "youtube_lives" using primary key columns */
  youtube_lives_by_pk?: Maybe<Youtube_Lives>;
};


export type Query_RootAmongus_MapsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


export type Query_RootAmongus_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


export type Query_RootAmongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_Match_ModsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};


export type Query_RootAmongus_Match_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};


export type Query_RootAmongus_Match_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_Match_Player_Result_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


export type Query_RootAmongus_Match_Player_Result_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


export type Query_RootAmongus_Match_Player_Result_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_Match_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


export type Query_RootAmongus_Match_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


export type Query_RootAmongus_Match_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_MatchesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


export type Query_RootAmongus_Matches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


export type Query_RootAmongus_Matches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_Mod_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


export type Query_RootAmongus_Mod_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


export type Query_RootAmongus_Mod_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_ModsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};


export type Query_RootAmongus_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};


export type Query_RootAmongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


export type Query_RootAmongus_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


export type Query_RootAmongus_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAmongus_Vanilla_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Query_RootAmongus_Vanilla_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Query_RootAmongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFediverse_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};


export type Query_RootFediverse_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};


export type Query_RootFediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNiconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};


export type Query_RootNiconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};


export type Query_RootNiconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNiconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Communities_Order_By>>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};


export type Query_RootNiconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Communities_Order_By>>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};


export type Query_RootNiconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Fediverse_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Fediverse_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Fediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Query_RootPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Query_RootPerson_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_Amongus_MapsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_Amongus_ModsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_Amongus_Vanilla_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Vanilla_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Query_RootProgram_Amongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


export type Query_RootProgram_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


export type Query_RootProgram_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_ProjectsArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


export type Query_RootProgram_Projects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


export type Query_RootProgram_Projects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


export type Query_RootProgram_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


export type Query_RootProgram_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgram_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


export type Query_RootProgram_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


export type Query_RootProgram_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProgramsArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Query_RootPrograms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Query_RootPrograms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTwitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};


export type Query_RootTwitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};


export type Query_RootTwitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTwitter_Tweet_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweet_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweet_Images_Order_By>>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};


export type Query_RootTwitter_Tweet_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweet_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweet_Images_Order_By>>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};


export type Query_RootTwitter_Tweet_Images_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTwitter_TweetsArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweets_Order_By>>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};


export type Query_RootTwitter_Tweets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweets_Order_By>>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};


export type Query_RootTwitter_Tweets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootYoutube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Channels_Order_By>>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};


export type Query_RootYoutube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Channels_Order_By>>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};


export type Query_RootYoutube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootYoutube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};


export type Query_RootYoutube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};


export type Query_RootYoutube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "amongus_maps" */
  amongus_maps: Array<Amongus_Maps>;
  /** fetch aggregated fields from the table: "amongus_maps" */
  amongus_maps_aggregate: Amongus_Maps_Aggregate;
  /** fetch data from the table: "amongus_maps" using primary key columns */
  amongus_maps_by_pk?: Maybe<Amongus_Maps>;
  /** fetch data from the table in a streaming manner: "amongus_maps" */
  amongus_maps_stream: Array<Amongus_Maps>;
  /** fetch data from the table: "amongus_match_mods" */
  amongus_match_mods: Array<Amongus_Match_Mods>;
  /** fetch aggregated fields from the table: "amongus_match_mods" */
  amongus_match_mods_aggregate: Amongus_Match_Mods_Aggregate;
  /** fetch data from the table: "amongus_match_mods" using primary key columns */
  amongus_match_mods_by_pk?: Maybe<Amongus_Match_Mods>;
  /** fetch data from the table in a streaming manner: "amongus_match_mods" */
  amongus_match_mods_stream: Array<Amongus_Match_Mods>;
  /** fetch data from the table: "amongus_match_player_result_roles" */
  amongus_match_player_result_roles: Array<Amongus_Match_Player_Result_Roles>;
  /** fetch aggregated fields from the table: "amongus_match_player_result_roles" */
  amongus_match_player_result_roles_aggregate: Amongus_Match_Player_Result_Roles_Aggregate;
  /** fetch data from the table: "amongus_match_player_result_roles" using primary key columns */
  amongus_match_player_result_roles_by_pk?: Maybe<Amongus_Match_Player_Result_Roles>;
  /** fetch data from the table in a streaming manner: "amongus_match_player_result_roles" */
  amongus_match_player_result_roles_stream: Array<Amongus_Match_Player_Result_Roles>;
  /** An array relationship */
  amongus_match_players: Array<Amongus_Match_Players>;
  /** An aggregate relationship */
  amongus_match_players_aggregate: Amongus_Match_Players_Aggregate;
  /** fetch data from the table: "amongus_match_players" using primary key columns */
  amongus_match_players_by_pk?: Maybe<Amongus_Match_Players>;
  /** fetch data from the table in a streaming manner: "amongus_match_players" */
  amongus_match_players_stream: Array<Amongus_Match_Players>;
  /** An array relationship */
  amongus_matches: Array<Amongus_Matches>;
  /** An aggregate relationship */
  amongus_matches_aggregate: Amongus_Matches_Aggregate;
  /** fetch data from the table: "amongus_matches" using primary key columns */
  amongus_matches_by_pk?: Maybe<Amongus_Matches>;
  /** fetch data from the table in a streaming manner: "amongus_matches" */
  amongus_matches_stream: Array<Amongus_Matches>;
  /** fetch data from the table: "amongus_mod_versions" */
  amongus_mod_versions: Array<Amongus_Mod_Versions>;
  /** fetch aggregated fields from the table: "amongus_mod_versions" */
  amongus_mod_versions_aggregate: Amongus_Mod_Versions_Aggregate;
  /** fetch data from the table: "amongus_mod_versions" using primary key columns */
  amongus_mod_versions_by_pk?: Maybe<Amongus_Mod_Versions>;
  /** fetch data from the table in a streaming manner: "amongus_mod_versions" */
  amongus_mod_versions_stream: Array<Amongus_Mod_Versions>;
  /** fetch data from the table: "amongus_mods" */
  amongus_mods: Array<Amongus_Mods>;
  /** fetch aggregated fields from the table: "amongus_mods" */
  amongus_mods_aggregate: Amongus_Mods_Aggregate;
  /** fetch data from the table: "amongus_mods" using primary key columns */
  amongus_mods_by_pk?: Maybe<Amongus_Mods>;
  /** fetch data from the table in a streaming manner: "amongus_mods" */
  amongus_mods_stream: Array<Amongus_Mods>;
  /** fetch data from the table: "amongus_roles" */
  amongus_roles: Array<Amongus_Roles>;
  /** fetch aggregated fields from the table: "amongus_roles" */
  amongus_roles_aggregate: Amongus_Roles_Aggregate;
  /** fetch data from the table: "amongus_roles" using primary key columns */
  amongus_roles_by_pk?: Maybe<Amongus_Roles>;
  /** fetch data from the table in a streaming manner: "amongus_roles" */
  amongus_roles_stream: Array<Amongus_Roles>;
  /** fetch data from the table: "amongus_vanilla_versions" */
  amongus_vanilla_versions: Array<Amongus_Vanilla_Versions>;
  /** fetch aggregated fields from the table: "amongus_vanilla_versions" */
  amongus_vanilla_versions_aggregate: Amongus_Vanilla_Versions_Aggregate;
  /** fetch data from the table: "amongus_vanilla_versions" using primary key columns */
  amongus_vanilla_versions_by_pk?: Maybe<Amongus_Vanilla_Versions>;
  /** fetch data from the table in a streaming manner: "amongus_vanilla_versions" */
  amongus_vanilla_versions_stream: Array<Amongus_Vanilla_Versions>;
  /** fetch data from the table: "fediverse_accounts" */
  fediverse_accounts: Array<Fediverse_Accounts>;
  /** fetch aggregated fields from the table: "fediverse_accounts" */
  fediverse_accounts_aggregate: Fediverse_Accounts_Aggregate;
  /** fetch data from the table: "fediverse_accounts" using primary key columns */
  fediverse_accounts_by_pk?: Maybe<Fediverse_Accounts>;
  /** fetch data from the table in a streaming manner: "fediverse_accounts" */
  fediverse_accounts_stream: Array<Fediverse_Accounts>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table in a streaming manner: "games" */
  games_stream: Array<Games>;
  /** fetch data from the table: "niconico_accounts" */
  niconico_accounts: Array<Niconico_Accounts>;
  /** fetch aggregated fields from the table: "niconico_accounts" */
  niconico_accounts_aggregate: Niconico_Accounts_Aggregate;
  /** fetch data from the table: "niconico_accounts" using primary key columns */
  niconico_accounts_by_pk?: Maybe<Niconico_Accounts>;
  /** fetch data from the table in a streaming manner: "niconico_accounts" */
  niconico_accounts_stream: Array<Niconico_Accounts>;
  /** fetch data from the table: "niconico_communities" */
  niconico_communities: Array<Niconico_Communities>;
  /** fetch aggregated fields from the table: "niconico_communities" */
  niconico_communities_aggregate: Niconico_Communities_Aggregate;
  /** fetch data from the table: "niconico_communities" using primary key columns */
  niconico_communities_by_pk?: Maybe<Niconico_Communities>;
  /** fetch data from the table in a streaming manner: "niconico_communities" */
  niconico_communities_stream: Array<Niconico_Communities>;
  /** An array relationship */
  person_fediverse_accounts: Array<Person_Fediverse_Accounts>;
  /** An aggregate relationship */
  person_fediverse_accounts_aggregate: Person_Fediverse_Accounts_Aggregate;
  /** fetch data from the table: "person_fediverse_accounts" using primary key columns */
  person_fediverse_accounts_by_pk?: Maybe<Person_Fediverse_Accounts>;
  /** fetch data from the table in a streaming manner: "person_fediverse_accounts" */
  person_fediverse_accounts_stream: Array<Person_Fediverse_Accounts>;
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** fetch data from the table: "person_niconico_accounts" using primary key columns */
  person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** fetch data from the table in a streaming manner: "person_niconico_accounts" */
  person_niconico_accounts_stream: Array<Person_Niconico_Accounts>;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** fetch data from the table: "person_niconico_communities" using primary key columns */
  person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** fetch data from the table in a streaming manner: "person_niconico_communities" */
  person_niconico_communities_stream: Array<Person_Niconico_Communities>;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** fetch data from the table: "person_twitter_accounts" using primary key columns */
  person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** fetch data from the table in a streaming manner: "person_twitter_accounts" */
  person_twitter_accounts_stream: Array<Person_Twitter_Accounts>;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** fetch data from the table: "person_youtube_channels" using primary key columns */
  person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** fetch data from the table in a streaming manner: "person_youtube_channels" */
  person_youtube_channels_stream: Array<Person_Youtube_Channels>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** fetch data from the table in a streaming manner: "persons" */
  persons_stream: Array<Persons>;
  /** An array relationship */
  program_amongus_maps: Array<Program_Amongus_Maps>;
  /** An aggregate relationship */
  program_amongus_maps_aggregate: Program_Amongus_Maps_Aggregate;
  /** fetch data from the table: "program_amongus_maps" using primary key columns */
  program_amongus_maps_by_pk?: Maybe<Program_Amongus_Maps>;
  /** fetch data from the table in a streaming manner: "program_amongus_maps" */
  program_amongus_maps_stream: Array<Program_Amongus_Maps>;
  /** An array relationship */
  program_amongus_mods: Array<Program_Amongus_Mods>;
  /** An aggregate relationship */
  program_amongus_mods_aggregate: Program_Amongus_Mods_Aggregate;
  /** fetch data from the table: "program_amongus_mods" using primary key columns */
  program_amongus_mods_by_pk?: Maybe<Program_Amongus_Mods>;
  /** fetch data from the table in a streaming manner: "program_amongus_mods" */
  program_amongus_mods_stream: Array<Program_Amongus_Mods>;
  /** An array relationship */
  program_amongus_vanilla_versions: Array<Program_Amongus_Vanilla_Versions>;
  /** An aggregate relationship */
  program_amongus_vanilla_versions_aggregate: Program_Amongus_Vanilla_Versions_Aggregate;
  /** fetch data from the table: "program_amongus_vanilla_versions" using primary key columns */
  program_amongus_vanilla_versions_by_pk?: Maybe<Program_Amongus_Vanilla_Versions>;
  /** fetch data from the table in a streaming manner: "program_amongus_vanilla_versions" */
  program_amongus_vanilla_versions_stream: Array<Program_Amongus_Vanilla_Versions>;
  /** An array relationship */
  program_persons: Array<Program_Persons>;
  /** An aggregate relationship */
  program_persons_aggregate: Program_Persons_Aggregate;
  /** fetch data from the table: "program_persons" using primary key columns */
  program_persons_by_pk?: Maybe<Program_Persons>;
  /** fetch data from the table in a streaming manner: "program_persons" */
  program_persons_stream: Array<Program_Persons>;
  /** An array relationship */
  program_projects: Array<Program_Projects>;
  /** An aggregate relationship */
  program_projects_aggregate: Program_Projects_Aggregate;
  /** fetch data from the table: "program_projects" using primary key columns */
  program_projects_by_pk?: Maybe<Program_Projects>;
  /** fetch data from the table in a streaming manner: "program_projects" */
  program_projects_stream: Array<Program_Projects>;
  /** An array relationship */
  program_twitter_announcements: Array<Program_Twitter_Announcements>;
  /** An aggregate relationship */
  program_twitter_announcements_aggregate: Program_Twitter_Announcements_Aggregate;
  /** fetch data from the table: "program_twitter_announcements" using primary key columns */
  program_twitter_announcements_by_pk?: Maybe<Program_Twitter_Announcements>;
  /** fetch data from the table in a streaming manner: "program_twitter_announcements" */
  program_twitter_announcements_stream: Array<Program_Twitter_Announcements>;
  /** An array relationship */
  program_youtube_lives: Array<Program_Youtube_Lives>;
  /** An aggregate relationship */
  program_youtube_lives_aggregate: Program_Youtube_Lives_Aggregate;
  /** fetch data from the table: "program_youtube_lives" using primary key columns */
  program_youtube_lives_by_pk?: Maybe<Program_Youtube_Lives>;
  /** fetch data from the table in a streaming manner: "program_youtube_lives" */
  program_youtube_lives_stream: Array<Program_Youtube_Lives>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: Programs_Aggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk?: Maybe<Programs>;
  /** fetch data from the table in a streaming manner: "programs" */
  programs_stream: Array<Programs>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projects_stream: Array<Projects>;
  /** fetch data from the table: "twitter_accounts" */
  twitter_accounts: Array<Twitter_Accounts>;
  /** fetch aggregated fields from the table: "twitter_accounts" */
  twitter_accounts_aggregate: Twitter_Accounts_Aggregate;
  /** fetch data from the table: "twitter_accounts" using primary key columns */
  twitter_accounts_by_pk?: Maybe<Twitter_Accounts>;
  /** fetch data from the table in a streaming manner: "twitter_accounts" */
  twitter_accounts_stream: Array<Twitter_Accounts>;
  /** fetch data from the table: "twitter_tweet_images" */
  twitter_tweet_images: Array<Twitter_Tweet_Images>;
  /** fetch aggregated fields from the table: "twitter_tweet_images" */
  twitter_tweet_images_aggregate: Twitter_Tweet_Images_Aggregate;
  /** fetch data from the table: "twitter_tweet_images" using primary key columns */
  twitter_tweet_images_by_pk?: Maybe<Twitter_Tweet_Images>;
  /** fetch data from the table in a streaming manner: "twitter_tweet_images" */
  twitter_tweet_images_stream: Array<Twitter_Tweet_Images>;
  /** fetch data from the table: "twitter_tweets" */
  twitter_tweets: Array<Twitter_Tweets>;
  /** fetch aggregated fields from the table: "twitter_tweets" */
  twitter_tweets_aggregate: Twitter_Tweets_Aggregate;
  /** fetch data from the table: "twitter_tweets" using primary key columns */
  twitter_tweets_by_pk?: Maybe<Twitter_Tweets>;
  /** fetch data from the table in a streaming manner: "twitter_tweets" */
  twitter_tweets_stream: Array<Twitter_Tweets>;
  /** fetch data from the table: "youtube_channels" */
  youtube_channels: Array<Youtube_Channels>;
  /** fetch aggregated fields from the table: "youtube_channels" */
  youtube_channels_aggregate: Youtube_Channels_Aggregate;
  /** fetch data from the table: "youtube_channels" using primary key columns */
  youtube_channels_by_pk?: Maybe<Youtube_Channels>;
  /** fetch data from the table in a streaming manner: "youtube_channels" */
  youtube_channels_stream: Array<Youtube_Channels>;
  /** An array relationship */
  youtube_lives: Array<Youtube_Lives>;
  /** An aggregate relationship */
  youtube_lives_aggregate: Youtube_Lives_Aggregate;
  /** fetch data from the table: "youtube_lives" using primary key columns */
  youtube_lives_by_pk?: Maybe<Youtube_Lives>;
  /** fetch data from the table in a streaming manner: "youtube_lives" */
  youtube_lives_stream: Array<Youtube_Lives>;
};


export type Subscription_RootAmongus_MapsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootAmongus_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Maps_Order_By>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootAmongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Maps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Maps_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_ModsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Match_Mods_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Match_Mods_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Match_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Player_Result_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Player_Result_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Player_Result_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Player_Result_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Match_Player_Result_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Match_Player_Result_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Match_Player_Result_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Match_Players_Order_By>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


export type Subscription_RootAmongus_Match_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Match_Players_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Match_Players_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Match_Players_Bool_Exp>;
};


export type Subscription_RootAmongus_MatchesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


export type Subscription_RootAmongus_Matches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Matches_Order_By>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


export type Subscription_RootAmongus_Matches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Matches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Matches_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Matches_Bool_Exp>;
};


export type Subscription_RootAmongus_Mod_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


export type Subscription_RootAmongus_Mod_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mod_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mod_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


export type Subscription_RootAmongus_Mod_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Mod_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Mod_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Mod_Versions_Bool_Exp>;
};


export type Subscription_RootAmongus_ModsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Mods_Order_By>>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Mods_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Mods_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootAmongus_RolesArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Roles_Order_By>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Roles_Bool_Exp>;
};


export type Subscription_RootAmongus_Vanilla_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootAmongus_Vanilla_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootAmongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAmongus_Vanilla_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Amongus_Vanilla_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootFediverse_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootFediverse_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootFediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFediverse_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fediverse_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGames_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootNiconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootNiconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootNiconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNiconico_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Niconico_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootNiconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Communities_Order_By>>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootNiconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Niconico_Communities_Order_By>>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootNiconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNiconico_Communities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Niconico_Communities_Stream_Cursor_Input>>;
  where?: InputMaybe<Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Fediverse_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Fediverse_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Fediverse_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Fediverse_Accounts_Order_By>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Fediverse_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Fediverse_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Fediverse_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Fediverse_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Niconico_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Niconico_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Niconico_Communities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Niconico_Communities_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Twitter_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Twitter_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Youtube_Channels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Youtube_Channels_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_MapsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Maps_Order_By>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Amongus_Maps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Amongus_Maps_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Amongus_Maps_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_ModsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Mods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Mods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Mods_Order_By>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Mods_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Amongus_Mods_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Amongus_Mods_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Amongus_Mods_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Vanilla_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Vanilla_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Amongus_Vanilla_Versions_Order_By>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootProgram_Amongus_Vanilla_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Amongus_Vanilla_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Amongus_Vanilla_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Amongus_Vanilla_Versions_Bool_Exp>;
};


export type Subscription_RootProgram_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


export type Subscription_RootProgram_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Persons_Order_By>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


export type Subscription_RootProgram_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Persons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Persons_Bool_Exp>;
};


export type Subscription_RootProgram_ProjectsArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


export type Subscription_RootProgram_Projects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Projects_Order_By>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


export type Subscription_RootProgram_Projects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Projects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Projects_Bool_Exp>;
};


export type Subscription_RootProgram_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootProgram_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootProgram_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Twitter_Announcements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Twitter_Announcements_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootProgram_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootProgram_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootProgram_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProgram_Youtube_Lives_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Youtube_Lives_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootProgramsArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootPrograms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootPrograms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrograms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Programs_Stream_Cursor_Input>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootTwitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootTwitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootTwitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTwitter_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Twitter_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootTwitter_Tweet_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweet_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweet_Images_Order_By>>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};


export type Subscription_RootTwitter_Tweet_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweet_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweet_Images_Order_By>>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};


export type Subscription_RootTwitter_Tweet_Images_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTwitter_Tweet_Images_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Twitter_Tweet_Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};


export type Subscription_RootTwitter_TweetsArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweets_Order_By>>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};


export type Subscription_RootTwitter_Tweets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Twitter_Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Twitter_Tweets_Order_By>>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};


export type Subscription_RootTwitter_Tweets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTwitter_Tweets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Twitter_Tweets_Stream_Cursor_Input>>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};


export type Subscription_RootYoutube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Channels_Order_By>>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootYoutube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Channels_Order_By>>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootYoutube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootYoutube_Channels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Youtube_Channels_Stream_Cursor_Input>>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootYoutube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootYoutube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootYoutube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootYoutube_Lives_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Youtube_Lives_Stream_Cursor_Input>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "twitter_accounts" */
export type Twitter_Accounts = {
  __typename?: 'twitter_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  remote_twitter_user_id: Scalars['String']['output'];
  twitter_screen_name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "twitter_accounts" */
export type Twitter_Accounts_Aggregate = {
  __typename?: 'twitter_accounts_aggregate';
  aggregate?: Maybe<Twitter_Accounts_Aggregate_Fields>;
  nodes: Array<Twitter_Accounts>;
};

/** aggregate fields of "twitter_accounts" */
export type Twitter_Accounts_Aggregate_Fields = {
  __typename?: 'twitter_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Twitter_Accounts_Max_Fields>;
  min?: Maybe<Twitter_Accounts_Min_Fields>;
};


/** aggregate fields of "twitter_accounts" */
export type Twitter_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Twitter_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "twitter_accounts". All fields are combined with a logical 'AND'. */
export type Twitter_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Twitter_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Twitter_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Twitter_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  remote_twitter_user_id?: InputMaybe<String_Comparison_Exp>;
  twitter_screen_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "twitter_accounts" */
export enum Twitter_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  TwitterAccountsPkey = 'twitter_accounts_pkey',
  /** unique or primary key constraint on columns "remote_twitter_user_id" */
  TwitterAccountsRemoteTwitterUserIdKey = 'twitter_accounts_remote_twitter_user_id_key',
  /** unique or primary key constraint on columns "twitter_screen_name" */
  TwitterAccountsTwitterScreenNameKey = 'twitter_accounts_twitter_screen_name_key'
}

/** input type for inserting data into table "twitter_accounts" */
export type Twitter_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Twitter_Accounts_Max_Fields = {
  __typename?: 'twitter_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_twitter_user_id?: Maybe<Scalars['String']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Twitter_Accounts_Min_Fields = {
  __typename?: 'twitter_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_twitter_user_id?: Maybe<Scalars['String']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "twitter_accounts" */
export type Twitter_Accounts_Mutation_Response = {
  __typename?: 'twitter_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Twitter_Accounts>;
};

/** input type for inserting object relation for remote table "twitter_accounts" */
export type Twitter_Accounts_Obj_Rel_Insert_Input = {
  data: Twitter_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Twitter_Accounts_On_Conflict>;
};

/** on_conflict condition type for table "twitter_accounts" */
export type Twitter_Accounts_On_Conflict = {
  constraint: Twitter_Accounts_Constraint;
  update_columns?: Array<Twitter_Accounts_Update_Column>;
  where?: InputMaybe<Twitter_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "twitter_accounts". */
export type Twitter_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remote_twitter_user_id?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: twitter_accounts */
export type Twitter_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "twitter_accounts" */
export enum Twitter_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteTwitterUserId = 'remote_twitter_user_id',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "twitter_accounts" */
export type Twitter_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "twitter_accounts" */
export type Twitter_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Twitter_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Twitter_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "twitter_accounts" */
export enum Twitter_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteTwitterUserId = 'remote_twitter_user_id',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Twitter_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Twitter_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Twitter_Accounts_Bool_Exp;
};

/** columns and relationships of "twitter_tweet_images" */
export type Twitter_Tweet_Images = {
  __typename?: 'twitter_tweet_images';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  index: Scalars['Int']['output'];
  twitter_tweet_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "twitter_tweet_images" */
export type Twitter_Tweet_Images_Aggregate = {
  __typename?: 'twitter_tweet_images_aggregate';
  aggregate?: Maybe<Twitter_Tweet_Images_Aggregate_Fields>;
  nodes: Array<Twitter_Tweet_Images>;
};

/** aggregate fields of "twitter_tweet_images" */
export type Twitter_Tweet_Images_Aggregate_Fields = {
  __typename?: 'twitter_tweet_images_aggregate_fields';
  avg?: Maybe<Twitter_Tweet_Images_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Twitter_Tweet_Images_Max_Fields>;
  min?: Maybe<Twitter_Tweet_Images_Min_Fields>;
  stddev?: Maybe<Twitter_Tweet_Images_Stddev_Fields>;
  stddev_pop?: Maybe<Twitter_Tweet_Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Twitter_Tweet_Images_Stddev_Samp_Fields>;
  sum?: Maybe<Twitter_Tweet_Images_Sum_Fields>;
  var_pop?: Maybe<Twitter_Tweet_Images_Var_Pop_Fields>;
  var_samp?: Maybe<Twitter_Tweet_Images_Var_Samp_Fields>;
  variance?: Maybe<Twitter_Tweet_Images_Variance_Fields>;
};


/** aggregate fields of "twitter_tweet_images" */
export type Twitter_Tweet_Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Twitter_Tweet_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Twitter_Tweet_Images_Avg_Fields = {
  __typename?: 'twitter_tweet_images_avg_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "twitter_tweet_images". All fields are combined with a logical 'AND'. */
export type Twitter_Tweet_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Twitter_Tweet_Images_Bool_Exp>>;
  _not?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Twitter_Tweet_Images_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  twitter_tweet_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "twitter_tweet_images" */
export enum Twitter_Tweet_Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  TwitterTweetImagesPkey = 'twitter_tweet_images_pkey',
  /** unique or primary key constraint on columns "index", "twitter_tweet_id" */
  TwitterTweetImagesTweetIdIndexKey = 'twitter_tweet_images_tweet_id_index_key'
}

/** input type for incrementing numeric columns in table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Inc_Input = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Twitter_Tweet_Images_Max_Fields = {
  __typename?: 'twitter_tweet_images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  twitter_tweet_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Twitter_Tweet_Images_Min_Fields = {
  __typename?: 'twitter_tweet_images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  twitter_tweet_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Mutation_Response = {
  __typename?: 'twitter_tweet_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Twitter_Tweet_Images>;
};

/** input type for inserting object relation for remote table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Obj_Rel_Insert_Input = {
  data: Twitter_Tweet_Images_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Twitter_Tweet_Images_On_Conflict>;
};

/** on_conflict condition type for table "twitter_tweet_images" */
export type Twitter_Tweet_Images_On_Conflict = {
  constraint: Twitter_Tweet_Images_Constraint;
  update_columns?: Array<Twitter_Tweet_Images_Update_Column>;
  where?: InputMaybe<Twitter_Tweet_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "twitter_tweet_images". */
export type Twitter_Tweet_Images_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  twitter_tweet_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: twitter_tweet_images */
export type Twitter_Tweet_Images_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "twitter_tweet_images" */
export enum Twitter_Tweet_Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  TwitterTweetId = 'twitter_tweet_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Twitter_Tweet_Images_Stddev_Fields = {
  __typename?: 'twitter_tweet_images_stddev_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Twitter_Tweet_Images_Stddev_Pop_Fields = {
  __typename?: 'twitter_tweet_images_stddev_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Twitter_Tweet_Images_Stddev_Samp_Fields = {
  __typename?: 'twitter_tweet_images_stddev_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "twitter_tweet_images" */
export type Twitter_Tweet_Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Twitter_Tweet_Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Twitter_Tweet_Images_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  twitter_tweet_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Twitter_Tweet_Images_Sum_Fields = {
  __typename?: 'twitter_tweet_images_sum_fields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "twitter_tweet_images" */
export enum Twitter_Tweet_Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  TwitterTweetId = 'twitter_tweet_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Twitter_Tweet_Images_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Twitter_Tweet_Images_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Twitter_Tweet_Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Twitter_Tweet_Images_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Twitter_Tweet_Images_Var_Pop_Fields = {
  __typename?: 'twitter_tweet_images_var_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Twitter_Tweet_Images_Var_Samp_Fields = {
  __typename?: 'twitter_tweet_images_var_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Twitter_Tweet_Images_Variance_Fields = {
  __typename?: 'twitter_tweet_images_variance_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "twitter_tweets" */
export type Twitter_Tweets = {
  __typename?: 'twitter_tweets';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  remote_tweet_id: Scalars['String']['output'];
  tweet_embed_html: Scalars['String']['output'];
  tweet_time: Scalars['timestamptz']['output'];
  twitter_account_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "twitter_tweets" */
export type Twitter_Tweets_Aggregate = {
  __typename?: 'twitter_tweets_aggregate';
  aggregate?: Maybe<Twitter_Tweets_Aggregate_Fields>;
  nodes: Array<Twitter_Tweets>;
};

/** aggregate fields of "twitter_tweets" */
export type Twitter_Tweets_Aggregate_Fields = {
  __typename?: 'twitter_tweets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Twitter_Tweets_Max_Fields>;
  min?: Maybe<Twitter_Tweets_Min_Fields>;
};


/** aggregate fields of "twitter_tweets" */
export type Twitter_Tweets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Twitter_Tweets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "twitter_tweets". All fields are combined with a logical 'AND'. */
export type Twitter_Tweets_Bool_Exp = {
  _and?: InputMaybe<Array<Twitter_Tweets_Bool_Exp>>;
  _not?: InputMaybe<Twitter_Tweets_Bool_Exp>;
  _or?: InputMaybe<Array<Twitter_Tweets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  remote_tweet_id?: InputMaybe<String_Comparison_Exp>;
  tweet_embed_html?: InputMaybe<String_Comparison_Exp>;
  tweet_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "twitter_tweets" */
export enum Twitter_Tweets_Constraint {
  /** unique or primary key constraint on columns "id" */
  TwitterTweetsPkey = 'twitter_tweets_pkey',
  /** unique or primary key constraint on columns "remote_tweet_id" */
  TwitterTweetsRemoteTweetIdKey = 'twitter_tweets_remote_tweet_id_key'
}

/** input type for inserting data into table "twitter_tweets" */
export type Twitter_Tweets_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  remote_tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Twitter_Tweets_Max_Fields = {
  __typename?: 'twitter_tweets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  remote_tweet_id?: Maybe<Scalars['String']['output']>;
  tweet_embed_html?: Maybe<Scalars['String']['output']>;
  tweet_time?: Maybe<Scalars['timestamptz']['output']>;
  twitter_account_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Twitter_Tweets_Min_Fields = {
  __typename?: 'twitter_tweets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  remote_tweet_id?: Maybe<Scalars['String']['output']>;
  tweet_embed_html?: Maybe<Scalars['String']['output']>;
  tweet_time?: Maybe<Scalars['timestamptz']['output']>;
  twitter_account_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "twitter_tweets" */
export type Twitter_Tweets_Mutation_Response = {
  __typename?: 'twitter_tweets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Twitter_Tweets>;
};

/** input type for inserting object relation for remote table "twitter_tweets" */
export type Twitter_Tweets_Obj_Rel_Insert_Input = {
  data: Twitter_Tweets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Twitter_Tweets_On_Conflict>;
};

/** on_conflict condition type for table "twitter_tweets" */
export type Twitter_Tweets_On_Conflict = {
  constraint: Twitter_Tweets_Constraint;
  update_columns?: Array<Twitter_Tweets_Update_Column>;
  where?: InputMaybe<Twitter_Tweets_Bool_Exp>;
};

/** Ordering options when selecting data from "twitter_tweets". */
export type Twitter_Tweets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  remote_tweet_id?: InputMaybe<Order_By>;
  tweet_embed_html?: InputMaybe<Order_By>;
  tweet_time?: InputMaybe<Order_By>;
  twitter_account_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: twitter_tweets */
export type Twitter_Tweets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "twitter_tweets" */
export enum Twitter_Tweets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RemoteTweetId = 'remote_tweet_id',
  /** column name */
  TweetEmbedHtml = 'tweet_embed_html',
  /** column name */
  TweetTime = 'tweet_time',
  /** column name */
  TwitterAccountId = 'twitter_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "twitter_tweets" */
export type Twitter_Tweets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  remote_tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "twitter_tweets" */
export type Twitter_Tweets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Twitter_Tweets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Twitter_Tweets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  remote_tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_account_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "twitter_tweets" */
export enum Twitter_Tweets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RemoteTweetId = 'remote_tweet_id',
  /** column name */
  TweetEmbedHtml = 'tweet_embed_html',
  /** column name */
  TweetTime = 'tweet_time',
  /** column name */
  TwitterAccountId = 'twitter_account_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Twitter_Tweets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Twitter_Tweets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Twitter_Tweets_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "youtube_channels" */
export type Youtube_Channels = {
  __typename?: 'youtube_channels';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  remote_youtube_channel_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  youtube_lives: Array<Youtube_Lives>;
  /** An aggregate relationship */
  youtube_lives_aggregate: Youtube_Lives_Aggregate;
};


/** columns and relationships of "youtube_channels" */
export type Youtube_ChannelsPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "youtube_channels" */
export type Youtube_ChannelsPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "youtube_channels" */
export type Youtube_ChannelsYoutube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};


/** columns and relationships of "youtube_channels" */
export type Youtube_ChannelsYoutube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Youtube_Lives_Order_By>>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};

/** aggregated selection of "youtube_channels" */
export type Youtube_Channels_Aggregate = {
  __typename?: 'youtube_channels_aggregate';
  aggregate?: Maybe<Youtube_Channels_Aggregate_Fields>;
  nodes: Array<Youtube_Channels>;
};

/** aggregate fields of "youtube_channels" */
export type Youtube_Channels_Aggregate_Fields = {
  __typename?: 'youtube_channels_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Youtube_Channels_Max_Fields>;
  min?: Maybe<Youtube_Channels_Min_Fields>;
};


/** aggregate fields of "youtube_channels" */
export type Youtube_Channels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Youtube_Channels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "youtube_channels". All fields are combined with a logical 'AND'. */
export type Youtube_Channels_Bool_Exp = {
  _and?: InputMaybe<Array<Youtube_Channels_Bool_Exp>>;
  _not?: InputMaybe<Youtube_Channels_Bool_Exp>;
  _or?: InputMaybe<Array<Youtube_Channels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Bool_Exp>;
  remote_youtube_channel_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_channel_handle?: InputMaybe<String_Comparison_Exp>;
  youtube_lives?: InputMaybe<Youtube_Lives_Bool_Exp>;
  youtube_lives_aggregate?: InputMaybe<Youtube_Lives_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "youtube_channels" */
export enum Youtube_Channels_Constraint {
  /** unique or primary key constraint on columns "id" */
  YoutubeChannelsPkey = 'youtube_channels_pkey',
  /** unique or primary key constraint on columns "youtube_channel_handle" */
  YoutubeChannelsYoutubeChannelHandleKey = 'youtube_channels_youtube_channel_handle_key',
  /** unique or primary key constraint on columns "remote_youtube_channel_id" */
  YoutubeChannelsYoutubeChannelIdKey = 'youtube_channels_youtube_channel_id_key'
}

/** input type for inserting data into table "youtube_channels" */
export type Youtube_Channels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Arr_Rel_Insert_Input>;
  remote_youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
  youtube_lives?: InputMaybe<Youtube_Lives_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Youtube_Channels_Max_Fields = {
  __typename?: 'youtube_channels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_youtube_channel_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Youtube_Channels_Min_Fields = {
  __typename?: 'youtube_channels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remote_youtube_channel_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "youtube_channels" */
export type Youtube_Channels_Mutation_Response = {
  __typename?: 'youtube_channels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Youtube_Channels>;
};

/** input type for inserting object relation for remote table "youtube_channels" */
export type Youtube_Channels_Obj_Rel_Insert_Input = {
  data: Youtube_Channels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Youtube_Channels_On_Conflict>;
};

/** on_conflict condition type for table "youtube_channels" */
export type Youtube_Channels_On_Conflict = {
  constraint: Youtube_Channels_Constraint;
  update_columns?: Array<Youtube_Channels_Update_Column>;
  where?: InputMaybe<Youtube_Channels_Bool_Exp>;
};

/** Ordering options when selecting data from "youtube_channels". */
export type Youtube_Channels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Order_By>;
  remote_youtube_channel_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_handle?: InputMaybe<Order_By>;
  youtube_lives_aggregate?: InputMaybe<Youtube_Lives_Aggregate_Order_By>;
};

/** primary key columns input for table: youtube_channels */
export type Youtube_Channels_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "youtube_channels" */
export enum Youtube_Channels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteYoutubeChannelId = 'remote_youtube_channel_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelHandle = 'youtube_channel_handle'
}

/** input type for updating data in table "youtube_channels" */
export type Youtube_Channels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "youtube_channels" */
export type Youtube_Channels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Youtube_Channels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Youtube_Channels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remote_youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "youtube_channels" */
export enum Youtube_Channels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RemoteYoutubeChannelId = 'remote_youtube_channel_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelHandle = 'youtube_channel_handle'
}

export type Youtube_Channels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Youtube_Channels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Youtube_Channels_Bool_Exp;
};

/** columns and relationships of "youtube_lives" */
export type Youtube_Lives = {
  __typename?: 'youtube_lives';
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  program_youtube_lives: Array<Program_Youtube_Lives>;
  /** An aggregate relationship */
  program_youtube_lives_aggregate: Program_Youtube_Lives_Aggregate;
  remote_youtube_video_id: Scalars['String']['output'];
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  youtube_channel: Youtube_Channels;
  youtube_channel_id: Scalars['uuid']['output'];
};


/** columns and relationships of "youtube_lives" */
export type Youtube_LivesProgram_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};


/** columns and relationships of "youtube_lives" */
export type Youtube_LivesProgram_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
};

/** aggregated selection of "youtube_lives" */
export type Youtube_Lives_Aggregate = {
  __typename?: 'youtube_lives_aggregate';
  aggregate?: Maybe<Youtube_Lives_Aggregate_Fields>;
  nodes: Array<Youtube_Lives>;
};

export type Youtube_Lives_Aggregate_Bool_Exp = {
  count?: InputMaybe<Youtube_Lives_Aggregate_Bool_Exp_Count>;
};

export type Youtube_Lives_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Youtube_Lives_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "youtube_lives" */
export type Youtube_Lives_Aggregate_Fields = {
  __typename?: 'youtube_lives_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Youtube_Lives_Max_Fields>;
  min?: Maybe<Youtube_Lives_Min_Fields>;
};


/** aggregate fields of "youtube_lives" */
export type Youtube_Lives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "youtube_lives" */
export type Youtube_Lives_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Youtube_Lives_Max_Order_By>;
  min?: InputMaybe<Youtube_Lives_Min_Order_By>;
};

/** input type for inserting array relation for remote table "youtube_lives" */
export type Youtube_Lives_Arr_Rel_Insert_Input = {
  data: Array<Youtube_Lives_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Youtube_Lives_On_Conflict>;
};

/** Boolean expression to filter rows from the table "youtube_lives". All fields are combined with a logical 'AND'. */
export type Youtube_Lives_Bool_Exp = {
  _and?: InputMaybe<Array<Youtube_Lives_Bool_Exp>>;
  _not?: InputMaybe<Youtube_Lives_Bool_Exp>;
  _or?: InputMaybe<Array<Youtube_Lives_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  program_youtube_lives?: InputMaybe<Program_Youtube_Lives_Bool_Exp>;
  program_youtube_lives_aggregate?: InputMaybe<Program_Youtube_Lives_Aggregate_Bool_Exp>;
  remote_youtube_video_id?: InputMaybe<String_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_channel?: InputMaybe<Youtube_Channels_Bool_Exp>;
  youtube_channel_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "youtube_lives" */
export enum Youtube_Lives_Constraint {
  /** unique or primary key constraint on columns "id" */
  YoutubeLivesPkey = 'youtube_lives_pkey',
  /** unique or primary key constraint on columns "remote_youtube_video_id" */
  YoutubeLivesRemoteYoutubeVideoIdKey = 'youtube_lives_remote_youtube_video_id_key'
}

/** input type for inserting data into table "youtube_lives" */
export type Youtube_Lives_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  program_youtube_lives?: InputMaybe<Program_Youtube_Lives_Arr_Rel_Insert_Input>;
  remote_youtube_video_id?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel?: InputMaybe<Youtube_Channels_Obj_Rel_Insert_Input>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Youtube_Lives_Max_Fields = {
  __typename?: 'youtube_lives_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  remote_youtube_video_id?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "youtube_lives" */
export type Youtube_Lives_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  remote_youtube_video_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Youtube_Lives_Min_Fields = {
  __typename?: 'youtube_lives_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  remote_youtube_video_id?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "youtube_lives" */
export type Youtube_Lives_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  remote_youtube_video_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "youtube_lives" */
export type Youtube_Lives_Mutation_Response = {
  __typename?: 'youtube_lives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Youtube_Lives>;
};

/** input type for inserting object relation for remote table "youtube_lives" */
export type Youtube_Lives_Obj_Rel_Insert_Input = {
  data: Youtube_Lives_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Youtube_Lives_On_Conflict>;
};

/** on_conflict condition type for table "youtube_lives" */
export type Youtube_Lives_On_Conflict = {
  constraint: Youtube_Lives_Constraint;
  update_columns?: Array<Youtube_Lives_Update_Column>;
  where?: InputMaybe<Youtube_Lives_Bool_Exp>;
};

/** Ordering options when selecting data from "youtube_lives". */
export type Youtube_Lives_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_youtube_lives_aggregate?: InputMaybe<Program_Youtube_Lives_Aggregate_Order_By>;
  remote_youtube_video_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel?: InputMaybe<Youtube_Channels_Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: youtube_lives */
export type Youtube_Lives_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "youtube_lives" */
export enum Youtube_Lives_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  RemoteYoutubeVideoId = 'remote_youtube_video_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

/** input type for updating data in table "youtube_lives" */
export type Youtube_Lives_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  remote_youtube_video_id?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "youtube_lives" */
export type Youtube_Lives_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Youtube_Lives_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Youtube_Lives_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  remote_youtube_video_id?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "youtube_lives" */
export enum Youtube_Lives_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  RemoteYoutubeVideoId = 'remote_youtube_video_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

export type Youtube_Lives_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Youtube_Lives_Set_Input>;
  /** filter the rows which have to be updated */
  where: Youtube_Lives_Bool_Exp;
};

export type GetProgramPageQueryVariables = Exact<{
  programId: Scalars['uuid']['input'];
}>;


export type GetProgramPageQuery = { __typename?: 'query_root', program?: { __typename?: 'programs', id: any, title: string, startTime?: any | null, endTime?: any | null, programProjects: Array<{ __typename?: 'program_projects', project: { __typename?: 'projects', id: any, name: string } }>, programTwitterAnnouncements: Array<{ __typename?: 'program_twitter_announcements', twitterTweet: { __typename?: 'twitter_tweets', id: any, remoteTweetId: string } }>, programPersons: Array<{ __typename?: 'program_persons', person: { __typename?: 'persons', id: any, name: string } }>, programYouTubeLives: Array<{ __typename?: 'program_youtube_lives', id: any, person?: { __typename?: 'persons', id: any, name: string } | null, youtubeLive: { __typename?: 'youtube_lives', title: string, remoteYoutubeVideoId: string, youtubeChannel: { __typename?: 'youtube_channels', id: any, name: string, remoteYoutubeChannelId: string } } }>, amongusMatches: Array<{ __typename?: 'amongus_matches', id: any, startTime: any, endTime?: any | null }> } | null };

export type GetProgramTwitterAnnouncementIndexPageQueryVariables = Exact<{
  programId: Scalars['uuid']['input'];
}>;


export type GetProgramTwitterAnnouncementIndexPageQuery = { __typename?: 'query_root', program?: { __typename?: 'programs', id: any, title: string, programProjects: Array<{ __typename?: 'program_projects', project: { __typename?: 'projects', id: any, name: string } }>, programTwitterAnnouncements: Array<{ __typename?: 'program_twitter_announcements', twitterTweet: { __typename?: 'twitter_tweets', id: any, remoteTweetId: string } }> } | null };

export type GetProjectPageQueryVariables = Exact<{
  projectId: Scalars['uuid']['input'];
}>;


export type GetProjectPageQuery = { __typename?: 'query_root', project?: { __typename?: 'projects', id: any, name: string, programProjects: Array<{ __typename?: 'program_projects', id: any, program: { __typename?: 'programs', id: any, title: string, startTime?: any | null, endTime?: any | null } }> } | null };

export type GetProjectIndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectIndexPageQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', id: any, name: string }> };


export const GetProgramPageDocument = gql`
    query GetProgramPage($programId: uuid!) {
  program: programs_by_pk(id: $programId) {
    id
    title
    startTime: start_time
    endTime: end_time
    programProjects: program_projects(order_by: {project: {start_time: asc}}) {
      project {
        id
        name
      }
    }
    programTwitterAnnouncements: program_twitter_announcements {
      twitterTweet: twitter_tweet {
        id
        remoteTweetId: remote_tweet_id
      }
    }
    programPersons: program_persons(order_by: {person: {name: asc}}) {
      person {
        id
        name
      }
    }
    programYouTubeLives: program_youtube_lives(
      order_by: {person: {name: asc}, youtube_live: {youtube_channel: {name: asc}}}
    ) {
      id
      person {
        id
        name
      }
      youtubeLive: youtube_live {
        remoteYoutubeVideoId: remote_youtube_video_id
        title
        youtubeChannel: youtube_channel {
          id
          remoteYoutubeChannelId: remote_youtube_channel_id
          name
        }
      }
    }
    amongusMatches: amongus_matches(order_by: {start_time: asc}) {
      id
      startTime: start_time
      endTime: end_time
    }
  }
}
    `;

/**
 * __useGetProgramPageQuery__
 *
 * To run a query within a React component, call `useGetProgramPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramPageQuery({
 *   variables: {
 *      programId: // value for 'programId'
 *   },
 * });
 */
export function useGetProgramPageQuery(baseOptions: Apollo.QueryHookOptions<GetProgramPageQuery, GetProgramPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProgramPageQuery, GetProgramPageQueryVariables>(GetProgramPageDocument, options);
      }
export function useGetProgramPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProgramPageQuery, GetProgramPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProgramPageQuery, GetProgramPageQueryVariables>(GetProgramPageDocument, options);
        }
export type GetProgramPageQueryHookResult = ReturnType<typeof useGetProgramPageQuery>;
export type GetProgramPageLazyQueryHookResult = ReturnType<typeof useGetProgramPageLazyQuery>;
export type GetProgramPageQueryResult = Apollo.QueryResult<GetProgramPageQuery, GetProgramPageQueryVariables>;
export const GetProgramTwitterAnnouncementIndexPageDocument = gql`
    query GetProgramTwitterAnnouncementIndexPage($programId: uuid!) {
  program: programs_by_pk(id: $programId) {
    id
    title
    programProjects: program_projects(order_by: {project: {start_time: asc}}) {
      project {
        id
        name
      }
    }
    programTwitterAnnouncements: program_twitter_announcements {
      twitterTweet: twitter_tweet {
        id
        remoteTweetId: remote_tweet_id
      }
    }
  }
}
    `;

/**
 * __useGetProgramTwitterAnnouncementIndexPageQuery__
 *
 * To run a query within a React component, call `useGetProgramTwitterAnnouncementIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramTwitterAnnouncementIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramTwitterAnnouncementIndexPageQuery({
 *   variables: {
 *      programId: // value for 'programId'
 *   },
 * });
 */
export function useGetProgramTwitterAnnouncementIndexPageQuery(baseOptions: Apollo.QueryHookOptions<GetProgramTwitterAnnouncementIndexPageQuery, GetProgramTwitterAnnouncementIndexPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProgramTwitterAnnouncementIndexPageQuery, GetProgramTwitterAnnouncementIndexPageQueryVariables>(GetProgramTwitterAnnouncementIndexPageDocument, options);
      }
export function useGetProgramTwitterAnnouncementIndexPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProgramTwitterAnnouncementIndexPageQuery, GetProgramTwitterAnnouncementIndexPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProgramTwitterAnnouncementIndexPageQuery, GetProgramTwitterAnnouncementIndexPageQueryVariables>(GetProgramTwitterAnnouncementIndexPageDocument, options);
        }
export type GetProgramTwitterAnnouncementIndexPageQueryHookResult = ReturnType<typeof useGetProgramTwitterAnnouncementIndexPageQuery>;
export type GetProgramTwitterAnnouncementIndexPageLazyQueryHookResult = ReturnType<typeof useGetProgramTwitterAnnouncementIndexPageLazyQuery>;
export type GetProgramTwitterAnnouncementIndexPageQueryResult = Apollo.QueryResult<GetProgramTwitterAnnouncementIndexPageQuery, GetProgramTwitterAnnouncementIndexPageQueryVariables>;
export const GetProjectPageDocument = gql`
    query GetProjectPage($projectId: uuid!) {
  project: projects_by_pk(id: $projectId) {
    id
    name
    programProjects: program_projects(order_by: {program: {start_time: desc}}) {
      id
      program {
        id
        title
        startTime: start_time
        endTime: end_time
      }
    }
  }
}
    `;

/**
 * __useGetProjectPageQuery__
 *
 * To run a query within a React component, call `useGetProjectPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectPageQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectPageQuery(baseOptions: Apollo.QueryHookOptions<GetProjectPageQuery, GetProjectPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectPageQuery, GetProjectPageQueryVariables>(GetProjectPageDocument, options);
      }
export function useGetProjectPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectPageQuery, GetProjectPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectPageQuery, GetProjectPageQueryVariables>(GetProjectPageDocument, options);
        }
export type GetProjectPageQueryHookResult = ReturnType<typeof useGetProjectPageQuery>;
export type GetProjectPageLazyQueryHookResult = ReturnType<typeof useGetProjectPageLazyQuery>;
export type GetProjectPageQueryResult = Apollo.QueryResult<GetProjectPageQuery, GetProjectPageQueryVariables>;
export const GetProjectIndexPageDocument = gql`
    query GetProjectIndexPage {
  projects(order_by: {start_time: asc}) {
    id
    name
  }
}
    `;

/**
 * __useGetProjectIndexPageQuery__
 *
 * To run a query within a React component, call `useGetProjectIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectIndexPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectIndexPageQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectIndexPageQuery, GetProjectIndexPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectIndexPageQuery, GetProjectIndexPageQueryVariables>(GetProjectIndexPageDocument, options);
      }
export function useGetProjectIndexPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectIndexPageQuery, GetProjectIndexPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectIndexPageQuery, GetProjectIndexPageQueryVariables>(GetProjectIndexPageDocument, options);
        }
export type GetProjectIndexPageQueryHookResult = ReturnType<typeof useGetProjectIndexPageQuery>;
export type GetProjectIndexPageLazyQueryHookResult = ReturnType<typeof useGetProjectIndexPageLazyQuery>;
export type GetProjectIndexPageQueryResult = Apollo.QueryResult<GetProjectIndexPageQuery, GetProjectIndexPageQueryVariables>;