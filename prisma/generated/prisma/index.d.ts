
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model countries
 * 
 */
export type countries = $Result.DefaultSelection<Prisma.$countriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.countries.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Countries
   * const countries = await prisma.countries.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    countries: 'countries'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "countries"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      countries: {
        payload: Prisma.$countriesPayload<ExtArgs>
        fields: Prisma.countriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findFirst: {
            args: Prisma.countriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findMany: {
            args: Prisma.countriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          create: {
            args: Prisma.countriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          createMany: {
            args: Prisma.countriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.countriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          delete: {
            args: Prisma.countriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          update: {
            args: Prisma.countriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          deleteMany: {
            args: Prisma.countriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.countriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          upsert: {
            args: Prisma.countriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.countriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.countriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    countries?: countriesOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Model countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
    population: number | null
    area_sq_mi: number | null
    pop_density: number | null
    coastline: number | null
    net_migration: number | null
    infant_mortality: number | null
    gdp: number | null
    literacy: number | null
    phones: number | null
    arable: number | null
    crops: number | null
    other: number | null
    climate: number | null
    birthrate: number | null
    deathrate: number | null
    agriculture: number | null
    industry: number | null
    service: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: number | null
    population: bigint | null
    area_sq_mi: number | null
    pop_density: number | null
    coastline: number | null
    net_migration: number | null
    infant_mortality: number | null
    gdp: number | null
    literacy: number | null
    phones: number | null
    arable: number | null
    crops: number | null
    other: number | null
    climate: number | null
    birthrate: number | null
    deathrate: number | null
    agriculture: number | null
    industry: number | null
    service: number | null
  }

  export type CountriesMinAggregateOutputType = {
    id: number | null
    country: string | null
    region: string | null
    population: bigint | null
    area_sq_mi: number | null
    pop_density: number | null
    coastline: number | null
    net_migration: number | null
    infant_mortality: number | null
    gdp: number | null
    literacy: number | null
    phones: number | null
    arable: number | null
    crops: number | null
    other: number | null
    climate: number | null
    birthrate: number | null
    deathrate: number | null
    agriculture: number | null
    industry: number | null
    service: number | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: number | null
    country: string | null
    region: string | null
    population: bigint | null
    area_sq_mi: number | null
    pop_density: number | null
    coastline: number | null
    net_migration: number | null
    infant_mortality: number | null
    gdp: number | null
    literacy: number | null
    phones: number | null
    arable: number | null
    crops: number | null
    other: number | null
    climate: number | null
    birthrate: number | null
    deathrate: number | null
    agriculture: number | null
    industry: number | null
    service: number | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    country: number
    region: number
    population: number
    area_sq_mi: number
    pop_density: number
    coastline: number
    net_migration: number
    infant_mortality: number
    gdp: number
    literacy: number
    phones: number
    arable: number
    crops: number
    other: number
    climate: number
    birthrate: number
    deathrate: number
    agriculture: number
    industry: number
    service: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
    population?: true
    area_sq_mi?: true
    pop_density?: true
    coastline?: true
    net_migration?: true
    infant_mortality?: true
    gdp?: true
    literacy?: true
    phones?: true
    arable?: true
    crops?: true
    other?: true
    climate?: true
    birthrate?: true
    deathrate?: true
    agriculture?: true
    industry?: true
    service?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
    population?: true
    area_sq_mi?: true
    pop_density?: true
    coastline?: true
    net_migration?: true
    infant_mortality?: true
    gdp?: true
    literacy?: true
    phones?: true
    arable?: true
    crops?: true
    other?: true
    climate?: true
    birthrate?: true
    deathrate?: true
    agriculture?: true
    industry?: true
    service?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    country?: true
    region?: true
    population?: true
    area_sq_mi?: true
    pop_density?: true
    coastline?: true
    net_migration?: true
    infant_mortality?: true
    gdp?: true
    literacy?: true
    phones?: true
    arable?: true
    crops?: true
    other?: true
    climate?: true
    birthrate?: true
    deathrate?: true
    agriculture?: true
    industry?: true
    service?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    country?: true
    region?: true
    population?: true
    area_sq_mi?: true
    pop_density?: true
    coastline?: true
    net_migration?: true
    infant_mortality?: true
    gdp?: true
    literacy?: true
    phones?: true
    arable?: true
    crops?: true
    other?: true
    climate?: true
    birthrate?: true
    deathrate?: true
    agriculture?: true
    industry?: true
    service?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    country?: true
    region?: true
    population?: true
    area_sq_mi?: true
    pop_density?: true
    coastline?: true
    net_migration?: true
    infant_mortality?: true
    gdp?: true
    literacy?: true
    phones?: true
    arable?: true
    crops?: true
    other?: true
    climate?: true
    birthrate?: true
    deathrate?: true
    agriculture?: true
    industry?: true
    service?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to aggregate.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type countriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countriesWhereInput
    orderBy?: countriesOrderByWithAggregationInput | countriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: countriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: number
    country: string | null
    region: string | null
    population: bigint | null
    area_sq_mi: number | null
    pop_density: number | null
    coastline: number | null
    net_migration: number | null
    infant_mortality: number | null
    gdp: number | null
    literacy: number | null
    phones: number | null
    arable: number | null
    crops: number | null
    other: number | null
    climate: number | null
    birthrate: number | null
    deathrate: number | null
    agriculture: number | null
    industry: number | null
    service: number | null
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type countriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    population?: boolean
    area_sq_mi?: boolean
    pop_density?: boolean
    coastline?: boolean
    net_migration?: boolean
    infant_mortality?: boolean
    gdp?: boolean
    literacy?: boolean
    phones?: boolean
    arable?: boolean
    crops?: boolean
    other?: boolean
    climate?: boolean
    birthrate?: boolean
    deathrate?: boolean
    agriculture?: boolean
    industry?: boolean
    service?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    population?: boolean
    area_sq_mi?: boolean
    pop_density?: boolean
    coastline?: boolean
    net_migration?: boolean
    infant_mortality?: boolean
    gdp?: boolean
    literacy?: boolean
    phones?: boolean
    arable?: boolean
    crops?: boolean
    other?: boolean
    climate?: boolean
    birthrate?: boolean
    deathrate?: boolean
    agriculture?: boolean
    industry?: boolean
    service?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    population?: boolean
    area_sq_mi?: boolean
    pop_density?: boolean
    coastline?: boolean
    net_migration?: boolean
    infant_mortality?: boolean
    gdp?: boolean
    literacy?: boolean
    phones?: boolean
    arable?: boolean
    crops?: boolean
    other?: boolean
    climate?: boolean
    birthrate?: boolean
    deathrate?: boolean
    agriculture?: boolean
    industry?: boolean
    service?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectScalar = {
    id?: boolean
    country?: boolean
    region?: boolean
    population?: boolean
    area_sq_mi?: boolean
    pop_density?: boolean
    coastline?: boolean
    net_migration?: boolean
    infant_mortality?: boolean
    gdp?: boolean
    literacy?: boolean
    phones?: boolean
    arable?: boolean
    crops?: boolean
    other?: boolean
    climate?: boolean
    birthrate?: boolean
    deathrate?: boolean
    agriculture?: boolean
    industry?: boolean
    service?: boolean
  }

  export type countriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "region" | "population" | "area_sq_mi" | "pop_density" | "coastline" | "net_migration" | "infant_mortality" | "gdp" | "literacy" | "phones" | "arable" | "crops" | "other" | "climate" | "birthrate" | "deathrate" | "agriculture" | "industry" | "service", ExtArgs["result"]["countries"]>

  export type $countriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "countries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string | null
      region: string | null
      population: bigint | null
      area_sq_mi: number | null
      pop_density: number | null
      coastline: number | null
      net_migration: number | null
      infant_mortality: number | null
      gdp: number | null
      literacy: number | null
      phones: number | null
      arable: number | null
      crops: number | null
      other: number | null
      climate: number | null
      birthrate: number | null
      deathrate: number | null
      agriculture: number | null
      industry: number | null
      service: number | null
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = $Result.GetResult<Prisma.$countriesPayload, S>

  type countriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface countriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['countries'], meta: { name: 'countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countriesFindUniqueArgs>(args: SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countriesFindFirstArgs>(args?: SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends countriesFindManyArgs>(args?: SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends countriesCreateArgs>(args: SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countriesCreateManyArgs>(args?: SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {countriesCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countriesWithIdOnly = await prisma.countries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends countriesCreateManyAndReturnArgs>(args?: SelectSubset<T, countriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends countriesDeleteArgs>(args: SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countriesUpdateArgs>(args: SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countriesDeleteManyArgs>(args?: SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countriesUpdateManyArgs>(args: SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {countriesUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countriesWithIdOnly = await prisma.countries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends countriesUpdateManyAndReturnArgs>(args: SelectSubset<T, countriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends countriesUpsertArgs>(args: SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesGroupByArgs} args - Group by arguments.
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
      T extends countriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countriesGroupByArgs['orderBy'] }
        : { orderBy?: countriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the countries model
   */
  readonly fields: countriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the countries model
   */
  interface countriesFieldRefs {
    readonly id: FieldRef<"countries", 'Int'>
    readonly country: FieldRef<"countries", 'String'>
    readonly region: FieldRef<"countries", 'String'>
    readonly population: FieldRef<"countries", 'BigInt'>
    readonly area_sq_mi: FieldRef<"countries", 'Float'>
    readonly pop_density: FieldRef<"countries", 'Float'>
    readonly coastline: FieldRef<"countries", 'Float'>
    readonly net_migration: FieldRef<"countries", 'Float'>
    readonly infant_mortality: FieldRef<"countries", 'Float'>
    readonly gdp: FieldRef<"countries", 'Float'>
    readonly literacy: FieldRef<"countries", 'Float'>
    readonly phones: FieldRef<"countries", 'Float'>
    readonly arable: FieldRef<"countries", 'Float'>
    readonly crops: FieldRef<"countries", 'Float'>
    readonly other: FieldRef<"countries", 'Float'>
    readonly climate: FieldRef<"countries", 'Float'>
    readonly birthrate: FieldRef<"countries", 'Float'>
    readonly deathrate: FieldRef<"countries", 'Float'>
    readonly agriculture: FieldRef<"countries", 'Float'>
    readonly industry: FieldRef<"countries", 'Float'>
    readonly service: FieldRef<"countries", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findUniqueOrThrow
   */
  export type countriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findFirstOrThrow
   */
  export type countriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findMany
   */
  export type countriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries create
   */
  export type countriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to create a countries.
     */
    data?: XOR<countriesCreateInput, countriesUncheckedCreateInput>
  }

  /**
   * countries createMany
   */
  export type countriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries createManyAndReturn
   */
  export type countriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries update
   */
  export type countriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to update a countries.
     */
    data: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
    /**
     * Choose, which countries to update.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries updateManyAndReturn
   */
  export type countriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries upsert
   */
  export type countriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The filter to search for the countries to update in case it exists.
     */
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
     */
    create: XOR<countriesCreateInput, countriesUncheckedCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
  }

  /**
   * countries delete
   */
  export type countriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter which countries to delete.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * countries without action
   */
  export type countriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    country: 'country',
    region: 'region',
    population: 'population',
    area_sq_mi: 'area_sq_mi',
    pop_density: 'pop_density',
    coastline: 'coastline',
    net_migration: 'net_migration',
    infant_mortality: 'infant_mortality',
    gdp: 'gdp',
    literacy: 'literacy',
    phones: 'phones',
    arable: 'arable',
    crops: 'crops',
    other: 'other',
    climate: 'climate',
    birthrate: 'birthrate',
    deathrate: 'deathrate',
    agriculture: 'agriculture',
    industry: 'industry',
    service: 'service'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type countriesWhereInput = {
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    id?: IntFilter<"countries"> | number
    country?: StringNullableFilter<"countries"> | string | null
    region?: StringNullableFilter<"countries"> | string | null
    population?: BigIntNullableFilter<"countries"> | bigint | number | null
    area_sq_mi?: FloatNullableFilter<"countries"> | number | null
    pop_density?: FloatNullableFilter<"countries"> | number | null
    coastline?: FloatNullableFilter<"countries"> | number | null
    net_migration?: FloatNullableFilter<"countries"> | number | null
    infant_mortality?: FloatNullableFilter<"countries"> | number | null
    gdp?: FloatNullableFilter<"countries"> | number | null
    literacy?: FloatNullableFilter<"countries"> | number | null
    phones?: FloatNullableFilter<"countries"> | number | null
    arable?: FloatNullableFilter<"countries"> | number | null
    crops?: FloatNullableFilter<"countries"> | number | null
    other?: FloatNullableFilter<"countries"> | number | null
    climate?: FloatNullableFilter<"countries"> | number | null
    birthrate?: FloatNullableFilter<"countries"> | number | null
    deathrate?: FloatNullableFilter<"countries"> | number | null
    agriculture?: FloatNullableFilter<"countries"> | number | null
    industry?: FloatNullableFilter<"countries"> | number | null
    service?: FloatNullableFilter<"countries"> | number | null
  }

  export type countriesOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    population?: SortOrderInput | SortOrder
    area_sq_mi?: SortOrderInput | SortOrder
    pop_density?: SortOrderInput | SortOrder
    coastline?: SortOrderInput | SortOrder
    net_migration?: SortOrderInput | SortOrder
    infant_mortality?: SortOrderInput | SortOrder
    gdp?: SortOrderInput | SortOrder
    literacy?: SortOrderInput | SortOrder
    phones?: SortOrderInput | SortOrder
    arable?: SortOrderInput | SortOrder
    crops?: SortOrderInput | SortOrder
    other?: SortOrderInput | SortOrder
    climate?: SortOrderInput | SortOrder
    birthrate?: SortOrderInput | SortOrder
    deathrate?: SortOrderInput | SortOrder
    agriculture?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
  }

  export type countriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    country?: StringNullableFilter<"countries"> | string | null
    region?: StringNullableFilter<"countries"> | string | null
    population?: BigIntNullableFilter<"countries"> | bigint | number | null
    area_sq_mi?: FloatNullableFilter<"countries"> | number | null
    pop_density?: FloatNullableFilter<"countries"> | number | null
    coastline?: FloatNullableFilter<"countries"> | number | null
    net_migration?: FloatNullableFilter<"countries"> | number | null
    infant_mortality?: FloatNullableFilter<"countries"> | number | null
    gdp?: FloatNullableFilter<"countries"> | number | null
    literacy?: FloatNullableFilter<"countries"> | number | null
    phones?: FloatNullableFilter<"countries"> | number | null
    arable?: FloatNullableFilter<"countries"> | number | null
    crops?: FloatNullableFilter<"countries"> | number | null
    other?: FloatNullableFilter<"countries"> | number | null
    climate?: FloatNullableFilter<"countries"> | number | null
    birthrate?: FloatNullableFilter<"countries"> | number | null
    deathrate?: FloatNullableFilter<"countries"> | number | null
    agriculture?: FloatNullableFilter<"countries"> | number | null
    industry?: FloatNullableFilter<"countries"> | number | null
    service?: FloatNullableFilter<"countries"> | number | null
  }, "id">

  export type countriesOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    population?: SortOrderInput | SortOrder
    area_sq_mi?: SortOrderInput | SortOrder
    pop_density?: SortOrderInput | SortOrder
    coastline?: SortOrderInput | SortOrder
    net_migration?: SortOrderInput | SortOrder
    infant_mortality?: SortOrderInput | SortOrder
    gdp?: SortOrderInput | SortOrder
    literacy?: SortOrderInput | SortOrder
    phones?: SortOrderInput | SortOrder
    arable?: SortOrderInput | SortOrder
    crops?: SortOrderInput | SortOrder
    other?: SortOrderInput | SortOrder
    climate?: SortOrderInput | SortOrder
    birthrate?: SortOrderInput | SortOrder
    deathrate?: SortOrderInput | SortOrder
    agriculture?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    _count?: countriesCountOrderByAggregateInput
    _avg?: countriesAvgOrderByAggregateInput
    _max?: countriesMaxOrderByAggregateInput
    _min?: countriesMinOrderByAggregateInput
    _sum?: countriesSumOrderByAggregateInput
  }

  export type countriesScalarWhereWithAggregatesInput = {
    AND?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    OR?: countriesScalarWhereWithAggregatesInput[]
    NOT?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"countries"> | number
    country?: StringNullableWithAggregatesFilter<"countries"> | string | null
    region?: StringNullableWithAggregatesFilter<"countries"> | string | null
    population?: BigIntNullableWithAggregatesFilter<"countries"> | bigint | number | null
    area_sq_mi?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    pop_density?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    coastline?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    net_migration?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    infant_mortality?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    gdp?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    literacy?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    phones?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    arable?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    crops?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    other?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    climate?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    birthrate?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    deathrate?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    agriculture?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    industry?: FloatNullableWithAggregatesFilter<"countries"> | number | null
    service?: FloatNullableWithAggregatesFilter<"countries"> | number | null
  }

  export type countriesCreateInput = {
    country?: string | null
    region?: string | null
    population?: bigint | number | null
    area_sq_mi?: number | null
    pop_density?: number | null
    coastline?: number | null
    net_migration?: number | null
    infant_mortality?: number | null
    gdp?: number | null
    literacy?: number | null
    phones?: number | null
    arable?: number | null
    crops?: number | null
    other?: number | null
    climate?: number | null
    birthrate?: number | null
    deathrate?: number | null
    agriculture?: number | null
    industry?: number | null
    service?: number | null
  }

  export type countriesUncheckedCreateInput = {
    id?: number
    country?: string | null
    region?: string | null
    population?: bigint | number | null
    area_sq_mi?: number | null
    pop_density?: number | null
    coastline?: number | null
    net_migration?: number | null
    infant_mortality?: number | null
    gdp?: number | null
    literacy?: number | null
    phones?: number | null
    arable?: number | null
    crops?: number | null
    other?: number | null
    climate?: number | null
    birthrate?: number | null
    deathrate?: number | null
    agriculture?: number | null
    industry?: number | null
    service?: number | null
  }

  export type countriesUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    population?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    area_sq_mi?: NullableFloatFieldUpdateOperationsInput | number | null
    pop_density?: NullableFloatFieldUpdateOperationsInput | number | null
    coastline?: NullableFloatFieldUpdateOperationsInput | number | null
    net_migration?: NullableFloatFieldUpdateOperationsInput | number | null
    infant_mortality?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp?: NullableFloatFieldUpdateOperationsInput | number | null
    literacy?: NullableFloatFieldUpdateOperationsInput | number | null
    phones?: NullableFloatFieldUpdateOperationsInput | number | null
    arable?: NullableFloatFieldUpdateOperationsInput | number | null
    crops?: NullableFloatFieldUpdateOperationsInput | number | null
    other?: NullableFloatFieldUpdateOperationsInput | number | null
    climate?: NullableFloatFieldUpdateOperationsInput | number | null
    birthrate?: NullableFloatFieldUpdateOperationsInput | number | null
    deathrate?: NullableFloatFieldUpdateOperationsInput | number | null
    agriculture?: NullableFloatFieldUpdateOperationsInput | number | null
    industry?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type countriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    population?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    area_sq_mi?: NullableFloatFieldUpdateOperationsInput | number | null
    pop_density?: NullableFloatFieldUpdateOperationsInput | number | null
    coastline?: NullableFloatFieldUpdateOperationsInput | number | null
    net_migration?: NullableFloatFieldUpdateOperationsInput | number | null
    infant_mortality?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp?: NullableFloatFieldUpdateOperationsInput | number | null
    literacy?: NullableFloatFieldUpdateOperationsInput | number | null
    phones?: NullableFloatFieldUpdateOperationsInput | number | null
    arable?: NullableFloatFieldUpdateOperationsInput | number | null
    crops?: NullableFloatFieldUpdateOperationsInput | number | null
    other?: NullableFloatFieldUpdateOperationsInput | number | null
    climate?: NullableFloatFieldUpdateOperationsInput | number | null
    birthrate?: NullableFloatFieldUpdateOperationsInput | number | null
    deathrate?: NullableFloatFieldUpdateOperationsInput | number | null
    agriculture?: NullableFloatFieldUpdateOperationsInput | number | null
    industry?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type countriesCreateManyInput = {
    id?: number
    country?: string | null
    region?: string | null
    population?: bigint | number | null
    area_sq_mi?: number | null
    pop_density?: number | null
    coastline?: number | null
    net_migration?: number | null
    infant_mortality?: number | null
    gdp?: number | null
    literacy?: number | null
    phones?: number | null
    arable?: number | null
    crops?: number | null
    other?: number | null
    climate?: number | null
    birthrate?: number | null
    deathrate?: number | null
    agriculture?: number | null
    industry?: number | null
    service?: number | null
  }

  export type countriesUpdateManyMutationInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    population?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    area_sq_mi?: NullableFloatFieldUpdateOperationsInput | number | null
    pop_density?: NullableFloatFieldUpdateOperationsInput | number | null
    coastline?: NullableFloatFieldUpdateOperationsInput | number | null
    net_migration?: NullableFloatFieldUpdateOperationsInput | number | null
    infant_mortality?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp?: NullableFloatFieldUpdateOperationsInput | number | null
    literacy?: NullableFloatFieldUpdateOperationsInput | number | null
    phones?: NullableFloatFieldUpdateOperationsInput | number | null
    arable?: NullableFloatFieldUpdateOperationsInput | number | null
    crops?: NullableFloatFieldUpdateOperationsInput | number | null
    other?: NullableFloatFieldUpdateOperationsInput | number | null
    climate?: NullableFloatFieldUpdateOperationsInput | number | null
    birthrate?: NullableFloatFieldUpdateOperationsInput | number | null
    deathrate?: NullableFloatFieldUpdateOperationsInput | number | null
    agriculture?: NullableFloatFieldUpdateOperationsInput | number | null
    industry?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type countriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    population?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    area_sq_mi?: NullableFloatFieldUpdateOperationsInput | number | null
    pop_density?: NullableFloatFieldUpdateOperationsInput | number | null
    coastline?: NullableFloatFieldUpdateOperationsInput | number | null
    net_migration?: NullableFloatFieldUpdateOperationsInput | number | null
    infant_mortality?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp?: NullableFloatFieldUpdateOperationsInput | number | null
    literacy?: NullableFloatFieldUpdateOperationsInput | number | null
    phones?: NullableFloatFieldUpdateOperationsInput | number | null
    arable?: NullableFloatFieldUpdateOperationsInput | number | null
    crops?: NullableFloatFieldUpdateOperationsInput | number | null
    other?: NullableFloatFieldUpdateOperationsInput | number | null
    climate?: NullableFloatFieldUpdateOperationsInput | number | null
    birthrate?: NullableFloatFieldUpdateOperationsInput | number | null
    deathrate?: NullableFloatFieldUpdateOperationsInput | number | null
    agriculture?: NullableFloatFieldUpdateOperationsInput | number | null
    industry?: NullableFloatFieldUpdateOperationsInput | number | null
    service?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type countriesCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    population?: SortOrder
    area_sq_mi?: SortOrder
    pop_density?: SortOrder
    coastline?: SortOrder
    net_migration?: SortOrder
    infant_mortality?: SortOrder
    gdp?: SortOrder
    literacy?: SortOrder
    phones?: SortOrder
    arable?: SortOrder
    crops?: SortOrder
    other?: SortOrder
    climate?: SortOrder
    birthrate?: SortOrder
    deathrate?: SortOrder
    agriculture?: SortOrder
    industry?: SortOrder
    service?: SortOrder
  }

  export type countriesAvgOrderByAggregateInput = {
    id?: SortOrder
    population?: SortOrder
    area_sq_mi?: SortOrder
    pop_density?: SortOrder
    coastline?: SortOrder
    net_migration?: SortOrder
    infant_mortality?: SortOrder
    gdp?: SortOrder
    literacy?: SortOrder
    phones?: SortOrder
    arable?: SortOrder
    crops?: SortOrder
    other?: SortOrder
    climate?: SortOrder
    birthrate?: SortOrder
    deathrate?: SortOrder
    agriculture?: SortOrder
    industry?: SortOrder
    service?: SortOrder
  }

  export type countriesMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    population?: SortOrder
    area_sq_mi?: SortOrder
    pop_density?: SortOrder
    coastline?: SortOrder
    net_migration?: SortOrder
    infant_mortality?: SortOrder
    gdp?: SortOrder
    literacy?: SortOrder
    phones?: SortOrder
    arable?: SortOrder
    crops?: SortOrder
    other?: SortOrder
    climate?: SortOrder
    birthrate?: SortOrder
    deathrate?: SortOrder
    agriculture?: SortOrder
    industry?: SortOrder
    service?: SortOrder
  }

  export type countriesMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    population?: SortOrder
    area_sq_mi?: SortOrder
    pop_density?: SortOrder
    coastline?: SortOrder
    net_migration?: SortOrder
    infant_mortality?: SortOrder
    gdp?: SortOrder
    literacy?: SortOrder
    phones?: SortOrder
    arable?: SortOrder
    crops?: SortOrder
    other?: SortOrder
    climate?: SortOrder
    birthrate?: SortOrder
    deathrate?: SortOrder
    agriculture?: SortOrder
    industry?: SortOrder
    service?: SortOrder
  }

  export type countriesSumOrderByAggregateInput = {
    id?: SortOrder
    population?: SortOrder
    area_sq_mi?: SortOrder
    pop_density?: SortOrder
    coastline?: SortOrder
    net_migration?: SortOrder
    infant_mortality?: SortOrder
    gdp?: SortOrder
    literacy?: SortOrder
    phones?: SortOrder
    arable?: SortOrder
    crops?: SortOrder
    other?: SortOrder
    climate?: SortOrder
    birthrate?: SortOrder
    deathrate?: SortOrder
    agriculture?: SortOrder
    industry?: SortOrder
    service?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



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