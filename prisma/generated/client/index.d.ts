
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model guru_and_staffs
 * 
 */
export type guru_and_staffs = $Result.DefaultSelection<Prisma.$guru_and_staffsPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model kategoris
 * 
 */
export type kategoris = $Result.DefaultSelection<Prisma.$kategorisPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.guru_and_staffs`: Exposes CRUD operations for the **guru_and_staffs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guru_and_staffs
    * const guru_and_staffs = await prisma.guru_and_staffs.findMany()
    * ```
    */
  get guru_and_staffs(): Prisma.guru_and_staffsDelegate<ExtArgs>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs>;

  /**
   * `prisma.kategoris`: Exposes CRUD operations for the **kategoris** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategorises
    * const kategorises = await prisma.kategoris.findMany()
    * ```
    */
  get kategoris(): Prisma.kategorisDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.1
   * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    guru_and_staffs: 'guru_and_staffs',
    posts: 'posts',
    kategoris: 'kategoris'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'guru_and_staffs' | 'posts' | 'kategoris'
      txIsolationLevel: never
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.usersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.usersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      guru_and_staffs: {
        payload: Prisma.$guru_and_staffsPayload<ExtArgs>
        fields: Prisma.guru_and_staffsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.guru_and_staffsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.guru_and_staffsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          findFirst: {
            args: Prisma.guru_and_staffsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.guru_and_staffsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          findMany: {
            args: Prisma.guru_and_staffsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>[]
          }
          create: {
            args: Prisma.guru_and_staffsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          createMany: {
            args: Prisma.guru_and_staffsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.guru_and_staffsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          update: {
            args: Prisma.guru_and_staffsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          deleteMany: {
            args: Prisma.guru_and_staffsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.guru_and_staffsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.guru_and_staffsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$guru_and_staffsPayload>
          }
          aggregate: {
            args: Prisma.Guru_and_staffsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGuru_and_staffs>
          }
          groupBy: {
            args: Prisma.guru_and_staffsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Guru_and_staffsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.guru_and_staffsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.guru_and_staffsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.guru_and_staffsCountArgs<ExtArgs>,
            result: $Utils.Optional<Guru_and_staffsCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.postsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.postsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>,
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      kategoris: {
        payload: Prisma.$kategorisPayload<ExtArgs>
        fields: Prisma.kategorisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kategorisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kategorisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          findFirst: {
            args: Prisma.kategorisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kategorisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          findMany: {
            args: Prisma.kategorisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>[]
          }
          create: {
            args: Prisma.kategorisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          createMany: {
            args: Prisma.kategorisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.kategorisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          update: {
            args: Prisma.kategorisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          deleteMany: {
            args: Prisma.kategorisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.kategorisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.kategorisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kategorisPayload>
          }
          aggregate: {
            args: Prisma.KategorisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKategoris>
          }
          groupBy: {
            args: Prisma.kategorisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KategorisGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.kategorisFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.kategorisAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.kategorisCountArgs<ExtArgs>,
            result: $Utils.Optional<KategorisCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    nama: string | null
    password: string | null
    gambar: string | null
    role: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    nama: string | null
    password: string | null
    gambar: string | null
    role: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    nama: number
    password: number
    gambar: number
    role: number
    created_at: number
    upodated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    nama?: true
    password?: true
    gambar?: true
    role?: true
    created_at?: true
    upodated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    nama?: true
    password?: true
    gambar?: true
    role?: true
    created_at?: true
    upodated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    nama?: true
    password?: true
    gambar?: true
    role?: true
    created_at?: true
    upodated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    nama: string
    password: string
    gambar: string | null
    role: string
    created_at: Date
    upodated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    nama?: boolean
    password?: boolean
    gambar?: boolean
    role?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    nama?: boolean
    password?: boolean
    gambar?: boolean
    role?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      nama: string
      password: string
      gambar: string | null
      role: string
      created_at: Date
      upodated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: usersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: usersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly nama: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly gambar: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly upodated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users findRaw
   */
  export type usersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users aggregateRaw
   */
  export type usersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }



  /**
   * Model guru_and_staffs
   */

  export type AggregateGuru_and_staffs = {
    _count: Guru_and_staffsCountAggregateOutputType | null
    _min: Guru_and_staffsMinAggregateOutputType | null
    _max: Guru_and_staffsMaxAggregateOutputType | null
  }

  export type Guru_and_staffsMinAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    jenis: string | null
    jabatan: string | null
    bidang_studi: string | null
    no_hp: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type Guru_and_staffsMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    jenis: string | null
    jabatan: string | null
    bidang_studi: string | null
    no_hp: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type Guru_and_staffsCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    jenis: number
    jabatan: number
    bidang_studi: number
    no_hp: number
    profile: number
    created_at: number
    upodated_at: number
    _all: number
  }


  export type Guru_and_staffsMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    jabatan?: true
    bidang_studi?: true
    no_hp?: true
    created_at?: true
    upodated_at?: true
  }

  export type Guru_and_staffsMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    jabatan?: true
    bidang_studi?: true
    no_hp?: true
    created_at?: true
    upodated_at?: true
  }

  export type Guru_and_staffsCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    jabatan?: true
    bidang_studi?: true
    no_hp?: true
    profile?: true
    created_at?: true
    upodated_at?: true
    _all?: true
  }

  export type Guru_and_staffsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guru_and_staffs to aggregate.
     */
    where?: guru_and_staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guru_and_staffs to fetch.
     */
    orderBy?: guru_and_staffsOrderByWithRelationInput | guru_and_staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: guru_and_staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guru_and_staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guru_and_staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned guru_and_staffs
    **/
    _count?: true | Guru_and_staffsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Guru_and_staffsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Guru_and_staffsMaxAggregateInputType
  }

  export type GetGuru_and_staffsAggregateType<T extends Guru_and_staffsAggregateArgs> = {
        [P in keyof T & keyof AggregateGuru_and_staffs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuru_and_staffs[P]>
      : GetScalarType<T[P], AggregateGuru_and_staffs[P]>
  }




  export type guru_and_staffsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: guru_and_staffsWhereInput
    orderBy?: guru_and_staffsOrderByWithAggregationInput | guru_and_staffsOrderByWithAggregationInput[]
    by: Guru_and_staffsScalarFieldEnum[] | Guru_and_staffsScalarFieldEnum
    having?: guru_and_staffsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Guru_and_staffsCountAggregateInputType | true
    _min?: Guru_and_staffsMinAggregateInputType
    _max?: Guru_and_staffsMaxAggregateInputType
  }

  export type Guru_and_staffsGroupByOutputType = {
    id: string
    nama: string
    alamat: string | null
    jenis: string
    jabatan: string | null
    bidang_studi: string | null
    no_hp: string | null
    profile: JsonValue | null
    created_at: Date
    upodated_at: Date | null
    _count: Guru_and_staffsCountAggregateOutputType | null
    _min: Guru_and_staffsMinAggregateOutputType | null
    _max: Guru_and_staffsMaxAggregateOutputType | null
  }

  type GetGuru_and_staffsGroupByPayload<T extends guru_and_staffsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Guru_and_staffsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Guru_and_staffsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Guru_and_staffsGroupByOutputType[P]>
            : GetScalarType<T[P], Guru_and_staffsGroupByOutputType[P]>
        }
      >
    >


  export type guru_and_staffsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    jabatan?: boolean
    bidang_studi?: boolean
    no_hp?: boolean
    profile?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }, ExtArgs["result"]["guru_and_staffs"]>

  export type guru_and_staffsSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    jabatan?: boolean
    bidang_studi?: boolean
    no_hp?: boolean
    profile?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }


  export type $guru_and_staffsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "guru_and_staffs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      alamat: string | null
      jenis: string
      jabatan: string | null
      bidang_studi: string | null
      no_hp: string | null
      profile: Prisma.JsonValue | null
      created_at: Date
      upodated_at: Date | null
    }, ExtArgs["result"]["guru_and_staffs"]>
    composites: {}
  }


  type guru_and_staffsGetPayload<S extends boolean | null | undefined | guru_and_staffsDefaultArgs> = $Result.GetResult<Prisma.$guru_and_staffsPayload, S>

  type guru_and_staffsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<guru_and_staffsFindManyArgs, 'select' | 'include'> & {
      select?: Guru_and_staffsCountAggregateInputType | true
    }

  export interface guru_and_staffsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['guru_and_staffs'], meta: { name: 'guru_and_staffs' } }
    /**
     * Find zero or one Guru_and_staffs that matches the filter.
     * @param {guru_and_staffsFindUniqueArgs} args - Arguments to find a Guru_and_staffs
     * @example
     * // Get one Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends guru_and_staffsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsFindUniqueArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Guru_and_staffs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {guru_and_staffsFindUniqueOrThrowArgs} args - Arguments to find a Guru_and_staffs
     * @example
     * // Get one Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends guru_and_staffsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Guru_and_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsFindFirstArgs} args - Arguments to find a Guru_and_staffs
     * @example
     * // Get one Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends guru_and_staffsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsFindFirstArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Guru_and_staffs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsFindFirstOrThrowArgs} args - Arguments to find a Guru_and_staffs
     * @example
     * // Get one Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends guru_and_staffsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Guru_and_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findMany()
     * 
     * // Get first 10 Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guru_and_staffsWithIdOnly = await prisma.guru_and_staffs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends guru_and_staffsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Guru_and_staffs.
     * @param {guru_and_staffsCreateArgs} args - Arguments to create a Guru_and_staffs.
     * @example
     * // Create one Guru_and_staffs
     * const Guru_and_staffs = await prisma.guru_and_staffs.create({
     *   data: {
     *     // ... data to create a Guru_and_staffs
     *   }
     * })
     * 
    **/
    create<T extends guru_and_staffsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsCreateArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Guru_and_staffs.
     *     @param {guru_and_staffsCreateManyArgs} args - Arguments to create many Guru_and_staffs.
     *     @example
     *     // Create many Guru_and_staffs
     *     const guru_and_staffs = await prisma.guru_and_staffs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends guru_and_staffsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guru_and_staffs.
     * @param {guru_and_staffsDeleteArgs} args - Arguments to delete one Guru_and_staffs.
     * @example
     * // Delete one Guru_and_staffs
     * const Guru_and_staffs = await prisma.guru_and_staffs.delete({
     *   where: {
     *     // ... filter to delete one Guru_and_staffs
     *   }
     * })
     * 
    **/
    delete<T extends guru_and_staffsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsDeleteArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Guru_and_staffs.
     * @param {guru_and_staffsUpdateArgs} args - Arguments to update one Guru_and_staffs.
     * @example
     * // Update one Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends guru_and_staffsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsUpdateArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Guru_and_staffs.
     * @param {guru_and_staffsDeleteManyArgs} args - Arguments to filter Guru_and_staffs to delete.
     * @example
     * // Delete a few Guru_and_staffs
     * const { count } = await prisma.guru_and_staffs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends guru_and_staffsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guru_and_staffsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guru_and_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends guru_and_staffsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guru_and_staffs.
     * @param {guru_and_staffsUpsertArgs} args - Arguments to update or create a Guru_and_staffs.
     * @example
     * // Update or create a Guru_and_staffs
     * const guru_and_staffs = await prisma.guru_and_staffs.upsert({
     *   create: {
     *     // ... data to create a Guru_and_staffs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guru_and_staffs we want to update
     *   }
     * })
    **/
    upsert<T extends guru_and_staffsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, guru_and_staffsUpsertArgs<ExtArgs>>
    ): Prisma__guru_and_staffsClient<$Result.GetResult<Prisma.$guru_and_staffsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Guru_and_staffs that matches the filter.
     * @param {guru_and_staffsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const guru_and_staffs = await prisma.guru_and_staffs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: guru_and_staffsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Guru_and_staffs.
     * @param {guru_and_staffsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const guru_and_staffs = await prisma.guru_and_staffs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: guru_and_staffsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Guru_and_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsCountArgs} args - Arguments to filter Guru_and_staffs to count.
     * @example
     * // Count the number of Guru_and_staffs
     * const count = await prisma.guru_and_staffs.count({
     *   where: {
     *     // ... the filter for the Guru_and_staffs we want to count
     *   }
     * })
    **/
    count<T extends guru_and_staffsCountArgs>(
      args?: Subset<T, guru_and_staffsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Guru_and_staffsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guru_and_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Guru_and_staffsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Guru_and_staffsAggregateArgs>(args: Subset<T, Guru_and_staffsAggregateArgs>): Prisma.PrismaPromise<GetGuru_and_staffsAggregateType<T>>

    /**
     * Group by Guru_and_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guru_and_staffsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends guru_and_staffsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: guru_and_staffsGroupByArgs['orderBy'] }
        : { orderBy?: guru_and_staffsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, guru_and_staffsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuru_and_staffsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the guru_and_staffs model
   */
  readonly fields: guru_and_staffsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for guru_and_staffs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__guru_and_staffsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the guru_and_staffs model
   */ 
  interface guru_and_staffsFieldRefs {
    readonly id: FieldRef<"guru_and_staffs", 'String'>
    readonly nama: FieldRef<"guru_and_staffs", 'String'>
    readonly alamat: FieldRef<"guru_and_staffs", 'String'>
    readonly jenis: FieldRef<"guru_and_staffs", 'String'>
    readonly jabatan: FieldRef<"guru_and_staffs", 'String'>
    readonly bidang_studi: FieldRef<"guru_and_staffs", 'String'>
    readonly no_hp: FieldRef<"guru_and_staffs", 'String'>
    readonly profile: FieldRef<"guru_and_staffs", 'Json'>
    readonly created_at: FieldRef<"guru_and_staffs", 'DateTime'>
    readonly upodated_at: FieldRef<"guru_and_staffs", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * guru_and_staffs findUnique
   */
  export type guru_and_staffsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter, which guru_and_staffs to fetch.
     */
    where: guru_and_staffsWhereUniqueInput
  }


  /**
   * guru_and_staffs findUniqueOrThrow
   */
  export type guru_and_staffsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter, which guru_and_staffs to fetch.
     */
    where: guru_and_staffsWhereUniqueInput
  }


  /**
   * guru_and_staffs findFirst
   */
  export type guru_and_staffsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter, which guru_and_staffs to fetch.
     */
    where?: guru_and_staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guru_and_staffs to fetch.
     */
    orderBy?: guru_and_staffsOrderByWithRelationInput | guru_and_staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guru_and_staffs.
     */
    cursor?: guru_and_staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guru_and_staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guru_and_staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guru_and_staffs.
     */
    distinct?: Guru_and_staffsScalarFieldEnum | Guru_and_staffsScalarFieldEnum[]
  }


  /**
   * guru_and_staffs findFirstOrThrow
   */
  export type guru_and_staffsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter, which guru_and_staffs to fetch.
     */
    where?: guru_and_staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guru_and_staffs to fetch.
     */
    orderBy?: guru_and_staffsOrderByWithRelationInput | guru_and_staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guru_and_staffs.
     */
    cursor?: guru_and_staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guru_and_staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guru_and_staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guru_and_staffs.
     */
    distinct?: Guru_and_staffsScalarFieldEnum | Guru_and_staffsScalarFieldEnum[]
  }


  /**
   * guru_and_staffs findMany
   */
  export type guru_and_staffsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter, which guru_and_staffs to fetch.
     */
    where?: guru_and_staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guru_and_staffs to fetch.
     */
    orderBy?: guru_and_staffsOrderByWithRelationInput | guru_and_staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing guru_and_staffs.
     */
    cursor?: guru_and_staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guru_and_staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guru_and_staffs.
     */
    skip?: number
    distinct?: Guru_and_staffsScalarFieldEnum | Guru_and_staffsScalarFieldEnum[]
  }


  /**
   * guru_and_staffs create
   */
  export type guru_and_staffsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * The data needed to create a guru_and_staffs.
     */
    data: XOR<guru_and_staffsCreateInput, guru_and_staffsUncheckedCreateInput>
  }


  /**
   * guru_and_staffs createMany
   */
  export type guru_and_staffsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many guru_and_staffs.
     */
    data: guru_and_staffsCreateManyInput | guru_and_staffsCreateManyInput[]
  }


  /**
   * guru_and_staffs update
   */
  export type guru_and_staffsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * The data needed to update a guru_and_staffs.
     */
    data: XOR<guru_and_staffsUpdateInput, guru_and_staffsUncheckedUpdateInput>
    /**
     * Choose, which guru_and_staffs to update.
     */
    where: guru_and_staffsWhereUniqueInput
  }


  /**
   * guru_and_staffs updateMany
   */
  export type guru_and_staffsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update guru_and_staffs.
     */
    data: XOR<guru_and_staffsUpdateManyMutationInput, guru_and_staffsUncheckedUpdateManyInput>
    /**
     * Filter which guru_and_staffs to update
     */
    where?: guru_and_staffsWhereInput
  }


  /**
   * guru_and_staffs upsert
   */
  export type guru_and_staffsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * The filter to search for the guru_and_staffs to update in case it exists.
     */
    where: guru_and_staffsWhereUniqueInput
    /**
     * In case the guru_and_staffs found by the `where` argument doesn't exist, create a new guru_and_staffs with this data.
     */
    create: XOR<guru_and_staffsCreateInput, guru_and_staffsUncheckedCreateInput>
    /**
     * In case the guru_and_staffs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<guru_and_staffsUpdateInput, guru_and_staffsUncheckedUpdateInput>
  }


  /**
   * guru_and_staffs delete
   */
  export type guru_and_staffsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
    /**
     * Filter which guru_and_staffs to delete.
     */
    where: guru_and_staffsWhereUniqueInput
  }


  /**
   * guru_and_staffs deleteMany
   */
  export type guru_and_staffsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guru_and_staffs to delete
     */
    where?: guru_and_staffsWhereInput
  }


  /**
   * guru_and_staffs findRaw
   */
  export type guru_and_staffsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * guru_and_staffs aggregateRaw
   */
  export type guru_and_staffsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * guru_and_staffs without action
   */
  export type guru_and_staffsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guru_and_staffs
     */
    select?: guru_and_staffsSelect<ExtArgs> | null
  }



  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    excerpt: string | null
    body: string | null
    kategori: string | null
    author: string | null
    gambar: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    excerpt: string | null
    body: string | null
    kategori: string | null
    author: string | null
    gambar: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    judul: number
    slug: number
    excerpt: number
    body: number
    kategori: number
    author: number
    gambar: number
    komentar: number
    created_at: number
    upodated_at: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    excerpt?: true
    body?: true
    kategori?: true
    author?: true
    gambar?: true
    created_at?: true
    upodated_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    excerpt?: true
    body?: true
    kategori?: true
    author?: true
    gambar?: true
    created_at?: true
    upodated_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    excerpt?: true
    body?: true
    kategori?: true
    author?: true
    gambar?: true
    komentar?: true
    created_at?: true
    upodated_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    judul: string
    slug: string
    excerpt: string
    body: string
    kategori: string
    author: string
    gambar: string | null
    komentar: JsonValue | null
    created_at: Date
    upodated_at: Date | null
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    slug?: boolean
    excerpt?: boolean
    body?: boolean
    kategori?: boolean
    author?: boolean
    gambar?: boolean
    komentar?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    judul?: boolean
    slug?: boolean
    excerpt?: boolean
    body?: boolean
    kategori?: boolean
    author?: boolean
    gambar?: boolean
    komentar?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }


  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      slug: string
      excerpt: string
      body: string
      kategori: string
      author: string
      gambar: string | null
      komentar: Prisma.JsonValue | null
      created_at: Date
      upodated_at: Date | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }


  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postsFindManyArgs, 'select' | 'include'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends postsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postsCreateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {postsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends postsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postsDeleteArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends postsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpsertArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {postsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const posts = await prisma.posts.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: postsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Posts.
     * @param {postsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const posts = await prisma.posts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: postsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the posts model
   */ 
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'String'>
    readonly judul: FieldRef<"posts", 'String'>
    readonly slug: FieldRef<"posts", 'String'>
    readonly excerpt: FieldRef<"posts", 'String'>
    readonly body: FieldRef<"posts", 'String'>
    readonly kategori: FieldRef<"posts", 'String'>
    readonly author: FieldRef<"posts", 'String'>
    readonly gambar: FieldRef<"posts", 'String'>
    readonly komentar: FieldRef<"posts", 'Json'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly upodated_at: FieldRef<"posts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }


  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
  }


  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
  }


  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }


  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
  }


  /**
   * posts findRaw
   */
  export type postsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * posts aggregateRaw
   */
  export type postsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
  }



  /**
   * Model kategoris
   */

  export type AggregateKategoris = {
    _count: KategorisCountAggregateOutputType | null
    _min: KategorisMinAggregateOutputType | null
    _max: KategorisMaxAggregateOutputType | null
  }

  export type KategorisMinAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type KategorisMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    upodated_at: Date | null
  }

  export type KategorisCountAggregateOutputType = {
    id: number
    nama: number
    created_at: number
    upodated_at: number
    _all: number
  }


  export type KategorisMinAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    upodated_at?: true
  }

  export type KategorisMaxAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    upodated_at?: true
  }

  export type KategorisCountAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    upodated_at?: true
    _all?: true
  }

  export type KategorisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategoris to aggregate.
     */
    where?: kategorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategorises to fetch.
     */
    orderBy?: kategorisOrderByWithRelationInput | kategorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kategorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kategorises
    **/
    _count?: true | KategorisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategorisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategorisMaxAggregateInputType
  }

  export type GetKategorisAggregateType<T extends KategorisAggregateArgs> = {
        [P in keyof T & keyof AggregateKategoris]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategoris[P]>
      : GetScalarType<T[P], AggregateKategoris[P]>
  }




  export type kategorisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kategorisWhereInput
    orderBy?: kategorisOrderByWithAggregationInput | kategorisOrderByWithAggregationInput[]
    by: KategorisScalarFieldEnum[] | KategorisScalarFieldEnum
    having?: kategorisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategorisCountAggregateInputType | true
    _min?: KategorisMinAggregateInputType
    _max?: KategorisMaxAggregateInputType
  }

  export type KategorisGroupByOutputType = {
    id: string
    nama: string
    created_at: Date
    upodated_at: Date | null
    _count: KategorisCountAggregateOutputType | null
    _min: KategorisMinAggregateOutputType | null
    _max: KategorisMaxAggregateOutputType | null
  }

  type GetKategorisGroupByPayload<T extends kategorisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategorisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategorisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategorisGroupByOutputType[P]>
            : GetScalarType<T[P], KategorisGroupByOutputType[P]>
        }
      >
    >


  export type kategorisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }, ExtArgs["result"]["kategoris"]>

  export type kategorisSelectScalar = {
    id?: boolean
    nama?: boolean
    created_at?: boolean
    upodated_at?: boolean
  }


  export type $kategorisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kategoris"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      created_at: Date
      upodated_at: Date | null
    }, ExtArgs["result"]["kategoris"]>
    composites: {}
  }


  type kategorisGetPayload<S extends boolean | null | undefined | kategorisDefaultArgs> = $Result.GetResult<Prisma.$kategorisPayload, S>

  type kategorisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<kategorisFindManyArgs, 'select' | 'include'> & {
      select?: KategorisCountAggregateInputType | true
    }

  export interface kategorisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kategoris'], meta: { name: 'kategoris' } }
    /**
     * Find zero or one Kategoris that matches the filter.
     * @param {kategorisFindUniqueArgs} args - Arguments to find a Kategoris
     * @example
     * // Get one Kategoris
     * const kategoris = await prisma.kategoris.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kategorisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisFindUniqueArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kategoris that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kategorisFindUniqueOrThrowArgs} args - Arguments to find a Kategoris
     * @example
     * // Get one Kategoris
     * const kategoris = await prisma.kategoris.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kategorisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisFindFirstArgs} args - Arguments to find a Kategoris
     * @example
     * // Get one Kategoris
     * const kategoris = await prisma.kategoris.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kategorisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisFindFirstArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kategoris that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisFindFirstOrThrowArgs} args - Arguments to find a Kategoris
     * @example
     * // Get one Kategoris
     * const kategoris = await prisma.kategoris.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kategorisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kategorises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategorises
     * const kategorises = await prisma.kategoris.findMany()
     * 
     * // Get first 10 Kategorises
     * const kategorises = await prisma.kategoris.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategorisWithIdOnly = await prisma.kategoris.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends kategorisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kategoris.
     * @param {kategorisCreateArgs} args - Arguments to create a Kategoris.
     * @example
     * // Create one Kategoris
     * const Kategoris = await prisma.kategoris.create({
     *   data: {
     *     // ... data to create a Kategoris
     *   }
     * })
     * 
    **/
    create<T extends kategorisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisCreateArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kategorises.
     *     @param {kategorisCreateManyArgs} args - Arguments to create many Kategorises.
     *     @example
     *     // Create many Kategorises
     *     const kategoris = await prisma.kategoris.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kategorisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kategoris.
     * @param {kategorisDeleteArgs} args - Arguments to delete one Kategoris.
     * @example
     * // Delete one Kategoris
     * const Kategoris = await prisma.kategoris.delete({
     *   where: {
     *     // ... filter to delete one Kategoris
     *   }
     * })
     * 
    **/
    delete<T extends kategorisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisDeleteArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kategoris.
     * @param {kategorisUpdateArgs} args - Arguments to update one Kategoris.
     * @example
     * // Update one Kategoris
     * const kategoris = await prisma.kategoris.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kategorisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisUpdateArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kategorises.
     * @param {kategorisDeleteManyArgs} args - Arguments to filter Kategorises to delete.
     * @example
     * // Delete a few Kategorises
     * const { count } = await prisma.kategoris.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kategorisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kategorisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategorises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategorises
     * const kategoris = await prisma.kategoris.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kategorisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategoris.
     * @param {kategorisUpsertArgs} args - Arguments to update or create a Kategoris.
     * @example
     * // Update or create a Kategoris
     * const kategoris = await prisma.kategoris.upsert({
     *   create: {
     *     // ... data to create a Kategoris
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategoris we want to update
     *   }
     * })
    **/
    upsert<T extends kategorisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kategorisUpsertArgs<ExtArgs>>
    ): Prisma__kategorisClient<$Result.GetResult<Prisma.$kategorisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Kategorises that matches the filter.
     * @param {kategorisFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const kategoris = await prisma.kategoris.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: kategorisFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Kategoris.
     * @param {kategorisAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const kategoris = await prisma.kategoris.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: kategorisAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Kategorises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisCountArgs} args - Arguments to filter Kategorises to count.
     * @example
     * // Count the number of Kategorises
     * const count = await prisma.kategoris.count({
     *   where: {
     *     // ... the filter for the Kategorises we want to count
     *   }
     * })
    **/
    count<T extends kategorisCountArgs>(
      args?: Subset<T, kategorisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategorisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategorisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategorisAggregateArgs>(args: Subset<T, KategorisAggregateArgs>): Prisma.PrismaPromise<GetKategorisAggregateType<T>>

    /**
     * Group by Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategorisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kategorisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kategorisGroupByArgs['orderBy'] }
        : { orderBy?: kategorisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kategorisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategorisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kategoris model
   */
  readonly fields: kategorisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kategoris.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kategorisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the kategoris model
   */ 
  interface kategorisFieldRefs {
    readonly id: FieldRef<"kategoris", 'String'>
    readonly nama: FieldRef<"kategoris", 'String'>
    readonly created_at: FieldRef<"kategoris", 'DateTime'>
    readonly upodated_at: FieldRef<"kategoris", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * kategoris findUnique
   */
  export type kategorisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where: kategorisWhereUniqueInput
  }


  /**
   * kategoris findUniqueOrThrow
   */
  export type kategorisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where: kategorisWhereUniqueInput
  }


  /**
   * kategoris findFirst
   */
  export type kategorisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where?: kategorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategorises to fetch.
     */
    orderBy?: kategorisOrderByWithRelationInput | kategorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategorises.
     */
    cursor?: kategorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategorises.
     */
    distinct?: KategorisScalarFieldEnum | KategorisScalarFieldEnum[]
  }


  /**
   * kategoris findFirstOrThrow
   */
  export type kategorisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where?: kategorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategorises to fetch.
     */
    orderBy?: kategorisOrderByWithRelationInput | kategorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategorises.
     */
    cursor?: kategorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategorises.
     */
    distinct?: KategorisScalarFieldEnum | KategorisScalarFieldEnum[]
  }


  /**
   * kategoris findMany
   */
  export type kategorisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter, which kategorises to fetch.
     */
    where?: kategorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategorises to fetch.
     */
    orderBy?: kategorisOrderByWithRelationInput | kategorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kategorises.
     */
    cursor?: kategorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategorises.
     */
    skip?: number
    distinct?: KategorisScalarFieldEnum | KategorisScalarFieldEnum[]
  }


  /**
   * kategoris create
   */
  export type kategorisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * The data needed to create a kategoris.
     */
    data: XOR<kategorisCreateInput, kategorisUncheckedCreateInput>
  }


  /**
   * kategoris createMany
   */
  export type kategorisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kategorises.
     */
    data: kategorisCreateManyInput | kategorisCreateManyInput[]
  }


  /**
   * kategoris update
   */
  export type kategorisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * The data needed to update a kategoris.
     */
    data: XOR<kategorisUpdateInput, kategorisUncheckedUpdateInput>
    /**
     * Choose, which kategoris to update.
     */
    where: kategorisWhereUniqueInput
  }


  /**
   * kategoris updateMany
   */
  export type kategorisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kategorises.
     */
    data: XOR<kategorisUpdateManyMutationInput, kategorisUncheckedUpdateManyInput>
    /**
     * Filter which kategorises to update
     */
    where?: kategorisWhereInput
  }


  /**
   * kategoris upsert
   */
  export type kategorisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * The filter to search for the kategoris to update in case it exists.
     */
    where: kategorisWhereUniqueInput
    /**
     * In case the kategoris found by the `where` argument doesn't exist, create a new kategoris with this data.
     */
    create: XOR<kategorisCreateInput, kategorisUncheckedCreateInput>
    /**
     * In case the kategoris was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kategorisUpdateInput, kategorisUncheckedUpdateInput>
  }


  /**
   * kategoris delete
   */
  export type kategorisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
    /**
     * Filter which kategoris to delete.
     */
    where: kategorisWhereUniqueInput
  }


  /**
   * kategoris deleteMany
   */
  export type kategorisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategorises to delete
     */
    where?: kategorisWhereInput
  }


  /**
   * kategoris findRaw
   */
  export type kategorisFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * kategoris aggregateRaw
   */
  export type kategorisAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * kategoris without action
   */
  export type kategorisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategoris
     */
    select?: kategorisSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    nama: 'nama',
    password: 'password',
    gambar: 'gambar',
    role: 'role',
    created_at: 'created_at',
    upodated_at: 'upodated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Guru_and_staffsScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    jenis: 'jenis',
    jabatan: 'jabatan',
    bidang_studi: 'bidang_studi',
    no_hp: 'no_hp',
    profile: 'profile',
    created_at: 'created_at',
    upodated_at: 'upodated_at'
  };

  export type Guru_and_staffsScalarFieldEnum = (typeof Guru_and_staffsScalarFieldEnum)[keyof typeof Guru_and_staffsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    excerpt: 'excerpt',
    body: 'body',
    kategori: 'kategori',
    author: 'author',
    gambar: 'gambar',
    komentar: 'komentar',
    created_at: 'created_at',
    upodated_at: 'upodated_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const KategorisScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    created_at: 'created_at',
    upodated_at: 'upodated_at'
  };

  export type KategorisScalarFieldEnum = (typeof KategorisScalarFieldEnum)[keyof typeof KategorisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    nama?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    gambar?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    upodated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    gambar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nama?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    gambar?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    upodated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    gambar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    nama?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    gambar?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    upodated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type guru_and_staffsWhereInput = {
    AND?: guru_and_staffsWhereInput | guru_and_staffsWhereInput[]
    OR?: guru_and_staffsWhereInput[]
    NOT?: guru_and_staffsWhereInput | guru_and_staffsWhereInput[]
    id?: StringFilter<"guru_and_staffs"> | string
    nama?: StringFilter<"guru_and_staffs"> | string
    alamat?: StringNullableFilter<"guru_and_staffs"> | string | null
    jenis?: StringFilter<"guru_and_staffs"> | string
    jabatan?: StringNullableFilter<"guru_and_staffs"> | string | null
    bidang_studi?: StringNullableFilter<"guru_and_staffs"> | string | null
    no_hp?: StringNullableFilter<"guru_and_staffs"> | string | null
    profile?: JsonNullableFilter<"guru_and_staffs">
    created_at?: DateTimeFilter<"guru_and_staffs"> | Date | string
    upodated_at?: DateTimeNullableFilter<"guru_and_staffs"> | Date | string | null
  }

  export type guru_and_staffsOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    jabatan?: SortOrder
    bidang_studi?: SortOrder
    no_hp?: SortOrder
    profile?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type guru_and_staffsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: guru_and_staffsWhereInput | guru_and_staffsWhereInput[]
    OR?: guru_and_staffsWhereInput[]
    NOT?: guru_and_staffsWhereInput | guru_and_staffsWhereInput[]
    nama?: StringFilter<"guru_and_staffs"> | string
    alamat?: StringNullableFilter<"guru_and_staffs"> | string | null
    jenis?: StringFilter<"guru_and_staffs"> | string
    jabatan?: StringNullableFilter<"guru_and_staffs"> | string | null
    bidang_studi?: StringNullableFilter<"guru_and_staffs"> | string | null
    no_hp?: StringNullableFilter<"guru_and_staffs"> | string | null
    profile?: JsonNullableFilter<"guru_and_staffs">
    created_at?: DateTimeFilter<"guru_and_staffs"> | Date | string
    upodated_at?: DateTimeNullableFilter<"guru_and_staffs"> | Date | string | null
  }, "id">

  export type guru_and_staffsOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    jabatan?: SortOrder
    bidang_studi?: SortOrder
    no_hp?: SortOrder
    profile?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
    _count?: guru_and_staffsCountOrderByAggregateInput
    _max?: guru_and_staffsMaxOrderByAggregateInput
    _min?: guru_and_staffsMinOrderByAggregateInput
  }

  export type guru_and_staffsScalarWhereWithAggregatesInput = {
    AND?: guru_and_staffsScalarWhereWithAggregatesInput | guru_and_staffsScalarWhereWithAggregatesInput[]
    OR?: guru_and_staffsScalarWhereWithAggregatesInput[]
    NOT?: guru_and_staffsScalarWhereWithAggregatesInput | guru_and_staffsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"guru_and_staffs"> | string
    nama?: StringWithAggregatesFilter<"guru_and_staffs"> | string
    alamat?: StringNullableWithAggregatesFilter<"guru_and_staffs"> | string | null
    jenis?: StringWithAggregatesFilter<"guru_and_staffs"> | string
    jabatan?: StringNullableWithAggregatesFilter<"guru_and_staffs"> | string | null
    bidang_studi?: StringNullableWithAggregatesFilter<"guru_and_staffs"> | string | null
    no_hp?: StringNullableWithAggregatesFilter<"guru_and_staffs"> | string | null
    profile?: JsonNullableWithAggregatesFilter<"guru_and_staffs">
    created_at?: DateTimeWithAggregatesFilter<"guru_and_staffs"> | Date | string
    upodated_at?: DateTimeNullableWithAggregatesFilter<"guru_and_staffs"> | Date | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: StringFilter<"posts"> | string
    judul?: StringFilter<"posts"> | string
    slug?: StringFilter<"posts"> | string
    excerpt?: StringFilter<"posts"> | string
    body?: StringFilter<"posts"> | string
    kategori?: StringFilter<"posts"> | string
    author?: StringFilter<"posts"> | string
    gambar?: StringNullableFilter<"posts"> | string | null
    komentar?: JsonNullableFilter<"posts">
    created_at?: DateTimeFilter<"posts"> | Date | string
    upodated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    kategori?: SortOrder
    author?: SortOrder
    gambar?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    judul?: StringFilter<"posts"> | string
    slug?: StringFilter<"posts"> | string
    excerpt?: StringFilter<"posts"> | string
    body?: StringFilter<"posts"> | string
    kategori?: StringFilter<"posts"> | string
    author?: StringFilter<"posts"> | string
    gambar?: StringNullableFilter<"posts"> | string | null
    komentar?: JsonNullableFilter<"posts">
    created_at?: DateTimeFilter<"posts"> | Date | string
    upodated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    kategori?: SortOrder
    author?: SortOrder
    gambar?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"posts"> | string
    judul?: StringWithAggregatesFilter<"posts"> | string
    slug?: StringWithAggregatesFilter<"posts"> | string
    excerpt?: StringWithAggregatesFilter<"posts"> | string
    body?: StringWithAggregatesFilter<"posts"> | string
    kategori?: StringWithAggregatesFilter<"posts"> | string
    author?: StringWithAggregatesFilter<"posts"> | string
    gambar?: StringNullableWithAggregatesFilter<"posts"> | string | null
    komentar?: JsonNullableWithAggregatesFilter<"posts">
    created_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    upodated_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
  }

  export type kategorisWhereInput = {
    AND?: kategorisWhereInput | kategorisWhereInput[]
    OR?: kategorisWhereInput[]
    NOT?: kategorisWhereInput | kategorisWhereInput[]
    id?: StringFilter<"kategoris"> | string
    nama?: StringFilter<"kategoris"> | string
    created_at?: DateTimeFilter<"kategoris"> | Date | string
    upodated_at?: DateTimeNullableFilter<"kategoris"> | Date | string | null
  }

  export type kategorisOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type kategorisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: kategorisWhereInput | kategorisWhereInput[]
    OR?: kategorisWhereInput[]
    NOT?: kategorisWhereInput | kategorisWhereInput[]
    nama?: StringFilter<"kategoris"> | string
    created_at?: DateTimeFilter<"kategoris"> | Date | string
    upodated_at?: DateTimeNullableFilter<"kategoris"> | Date | string | null
  }, "id">

  export type kategorisOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
    _count?: kategorisCountOrderByAggregateInput
    _max?: kategorisMaxOrderByAggregateInput
    _min?: kategorisMinOrderByAggregateInput
  }

  export type kategorisScalarWhereWithAggregatesInput = {
    AND?: kategorisScalarWhereWithAggregatesInput | kategorisScalarWhereWithAggregatesInput[]
    OR?: kategorisScalarWhereWithAggregatesInput[]
    NOT?: kategorisScalarWhereWithAggregatesInput | kategorisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"kategoris"> | string
    nama?: StringWithAggregatesFilter<"kategoris"> | string
    created_at?: DateTimeWithAggregatesFilter<"kategoris"> | Date | string
    upodated_at?: DateTimeNullableWithAggregatesFilter<"kategoris"> | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    username: string
    email: string
    nama: string
    password: string
    gambar?: string | null
    role: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    nama: string
    password: string
    gambar?: string | null
    role: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: string
    username: string
    email: string
    nama: string
    password: string
    gambar?: string | null
    role: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guru_and_staffsCreateInput = {
    id?: string
    nama: string
    alamat?: string | null
    jenis: string
    jabatan?: string | null
    bidang_studi?: string | null
    no_hp?: string | null
    profile?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type guru_and_staffsUncheckedCreateInput = {
    id?: string
    nama: string
    alamat?: string | null
    jenis: string
    jabatan?: string | null
    bidang_studi?: string | null
    no_hp?: string | null
    profile?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type guru_and_staffsUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: StringFieldUpdateOperationsInput | string
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    bidang_studi?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guru_and_staffsUncheckedUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: StringFieldUpdateOperationsInput | string
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    bidang_studi?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guru_and_staffsCreateManyInput = {
    id?: string
    nama: string
    alamat?: string | null
    jenis: string
    jabatan?: string | null
    bidang_studi?: string | null
    no_hp?: string | null
    profile?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type guru_and_staffsUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: StringFieldUpdateOperationsInput | string
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    bidang_studi?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guru_and_staffsUncheckedUpdateManyInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: StringFieldUpdateOperationsInput | string
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    bidang_studi?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateInput = {
    id?: string
    judul: string
    slug: string
    excerpt: string
    body: string
    kategori: string
    author: string
    gambar?: string | null
    komentar?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type postsUncheckedCreateInput = {
    id?: string
    judul: string
    slug: string
    excerpt: string
    body: string
    kategori: string
    author: string
    gambar?: string | null
    komentar?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type postsUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    komentar?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    komentar?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateManyInput = {
    id?: string
    judul: string
    slug: string
    excerpt: string
    body: string
    kategori: string
    author: string
    gambar?: string | null
    komentar?: InputJsonValue | null
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type postsUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    komentar?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    komentar?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kategorisCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type kategorisUncheckedCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type kategorisUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kategorisUncheckedUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kategorisCreateManyInput = {
    id?: string
    nama: string
    created_at?: Date | string
    upodated_at?: Date | string | null
  }

  export type kategorisUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kategorisUncheckedUpdateManyInput = {
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    upodated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    gambar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    gambar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    gambar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type guru_and_staffsCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    jabatan?: SortOrder
    bidang_studi?: SortOrder
    no_hp?: SortOrder
    profile?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type guru_and_staffsMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    jabatan?: SortOrder
    bidang_studi?: SortOrder
    no_hp?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type guru_and_staffsMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    jabatan?: SortOrder
    bidang_studi?: SortOrder
    no_hp?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    kategori?: SortOrder
    author?: SortOrder
    gambar?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    kategori?: SortOrder
    author?: SortOrder
    gambar?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    kategori?: SortOrder
    author?: SortOrder
    gambar?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type kategorisCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type kategorisMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type kategorisMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    upodated_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use guru_and_staffsDefaultArgs instead
     */
    export type guru_and_staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = guru_and_staffsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postsDefaultArgs instead
     */
    export type postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use kategorisDefaultArgs instead
     */
    export type kategorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = kategorisDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}