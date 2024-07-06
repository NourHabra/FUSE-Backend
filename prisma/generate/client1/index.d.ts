
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Beneficiaries
 * 
 */
export type Beneficiaries = $Result.DefaultSelection<Prisma.$BeneficiariesPayload>
/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Cards
 * 
 */
export type Cards = $Result.DefaultSelection<Prisma.$CardsPayload>
/**
 * Model CashTransactions
 * 
 */
export type CashTransactions = $Result.DefaultSelection<Prisma.$CashTransactionsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model Bills
 * 
 */
export type Bills = $Result.DefaultSelection<Prisma.$BillsPayload>
/**
 * Model TransactionsDetails
 * 
 */
export type TransactionsDetails = $Result.DefaultSelection<Prisma.$TransactionsDetailsPayload>
/**
 * Model MerchantCategory
 * 
 */
export type MerchantCategory = $Result.DefaultSelection<Prisma.$MerchantCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  Customer: 'Customer',
  Merchant: 'Merchant',
  Vendor: 'Vendor',
  Employee: 'Employee'
};

export type Role = (typeof Role)[keyof typeof Role]


export const userStatus: {
  Created: 'Created',
  Deleted: 'Deleted',
  Baned: 'Baned',
  Stopped: 'Stopped'
};

export type userStatus = (typeof userStatus)[keyof typeof userStatus]


export const AccountType: {
  Checking: 'Checking',
  Investment: 'Investment',
  Savings: 'Savings'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const AccountStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Blocked: 'Blocked',
  Locked: 'Locked',
  Suspended: 'Suspended'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const TransactionType: {
  Transfer: 'Transfer',
  Bill: 'Bill',
  Deposit: 'Deposit',
  Withdraw: 'Withdraw'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  Pending: 'Pending',
  Cancelled: 'Cancelled',
  Declined: 'Declined',
  Failed: 'Failed',
  Completed: 'Completed',
  Refunded: 'Refunded',
  Deleted: 'Deleted',
  Paid: 'Paid'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type userStatus = $Enums.userStatus

export const userStatus: typeof $Enums.userStatus

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.beneficiaries`: Exposes CRUD operations for the **Beneficiaries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiaries.findMany()
    * ```
    */
  get beneficiaries(): Prisma.BeneficiariesDelegate<ExtArgs>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **Cards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.cards.findMany()
    * ```
    */
  get cards(): Prisma.CardsDelegate<ExtArgs>;

  /**
   * `prisma.cashTransactions`: Exposes CRUD operations for the **CashTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashTransactions
    * const cashTransactions = await prisma.cashTransactions.findMany()
    * ```
    */
  get cashTransactions(): Prisma.CashTransactionsDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;

  /**
   * `prisma.bills`: Exposes CRUD operations for the **Bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bills.findMany()
    * ```
    */
  get bills(): Prisma.BillsDelegate<ExtArgs>;

  /**
   * `prisma.transactionsDetails`: Exposes CRUD operations for the **TransactionsDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionsDetails
    * const transactionsDetails = await prisma.transactionsDetails.findMany()
    * ```
    */
  get transactionsDetails(): Prisma.TransactionsDetailsDelegate<ExtArgs>;

  /**
   * `prisma.merchantCategory`: Exposes CRUD operations for the **MerchantCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerchantCategories
    * const merchantCategories = await prisma.merchantCategory.findMany()
    * ```
    */
  get merchantCategory(): Prisma.MerchantCategoryDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
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
    Users: 'Users',
    Merchant: 'Merchant',
    Customer: 'Customer',
    Beneficiaries: 'Beneficiaries',
    Accounts: 'Accounts',
    Cards: 'Cards',
    CashTransactions: 'CashTransactions',
    Transactions: 'Transactions',
    Bills: 'Bills',
    TransactionsDetails: 'TransactionsDetails',
    MerchantCategory: 'MerchantCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "merchant" | "customer" | "beneficiaries" | "accounts" | "cards" | "cashTransactions" | "transactions" | "bills" | "transactionsDetails" | "merchantCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Beneficiaries: {
        payload: Prisma.$BeneficiariesPayload<ExtArgs>
        fields: Prisma.BeneficiariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeneficiariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeneficiariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          findFirst: {
            args: Prisma.BeneficiariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeneficiariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          findMany: {
            args: Prisma.BeneficiariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>[]
          }
          create: {
            args: Prisma.BeneficiariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          createMany: {
            args: Prisma.BeneficiariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeneficiariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>[]
          }
          delete: {
            args: Prisma.BeneficiariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          update: {
            args: Prisma.BeneficiariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          deleteMany: {
            args: Prisma.BeneficiariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeneficiariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeneficiariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiariesPayload>
          }
          aggregate: {
            args: Prisma.BeneficiariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiaries>
          }
          groupBy: {
            args: Prisma.BeneficiariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeneficiariesCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiariesCountAggregateOutputType> | number
          }
        }
      }
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Cards: {
        payload: Prisma.$CardsPayload<ExtArgs>
        fields: Prisma.CardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findFirst: {
            args: Prisma.CardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findMany: {
            args: Prisma.CardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          create: {
            args: Prisma.CardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          createMany: {
            args: Prisma.CardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          delete: {
            args: Prisma.CardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          update: {
            args: Prisma.CardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          deleteMany: {
            args: Prisma.CardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          aggregate: {
            args: Prisma.CardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCards>
          }
          groupBy: {
            args: Prisma.CardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardsCountArgs<ExtArgs>
            result: $Utils.Optional<CardsCountAggregateOutputType> | number
          }
        }
      }
      CashTransactions: {
        payload: Prisma.$CashTransactionsPayload<ExtArgs>
        fields: Prisma.CashTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          findFirst: {
            args: Prisma.CashTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          findMany: {
            args: Prisma.CashTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>[]
          }
          create: {
            args: Prisma.CashTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          createMany: {
            args: Prisma.CashTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>[]
          }
          delete: {
            args: Prisma.CashTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          update: {
            args: Prisma.CashTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.CashTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CashTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashTransactionsPayload>
          }
          aggregate: {
            args: Prisma.CashTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashTransactions>
          }
          groupBy: {
            args: Prisma.CashTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<CashTransactionsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      Bills: {
        payload: Prisma.$BillsPayload<ExtArgs>
        fields: Prisma.BillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findFirst: {
            args: Prisma.BillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findMany: {
            args: Prisma.BillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          create: {
            args: Prisma.BillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          createMany: {
            args: Prisma.BillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          delete: {
            args: Prisma.BillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          update: {
            args: Prisma.BillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          deleteMany: {
            args: Prisma.BillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          aggregate: {
            args: Prisma.BillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBills>
          }
          groupBy: {
            args: Prisma.BillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillsCountArgs<ExtArgs>
            result: $Utils.Optional<BillsCountAggregateOutputType> | number
          }
        }
      }
      TransactionsDetails: {
        payload: Prisma.$TransactionsDetailsPayload<ExtArgs>
        fields: Prisma.TransactionsDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          findMany: {
            args: Prisma.TransactionsDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>[]
          }
          create: {
            args: Prisma.TransactionsDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          createMany: {
            args: Prisma.TransactionsDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          update: {
            args: Prisma.TransactionsDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsDetailsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionsDetails>
          }
          groupBy: {
            args: Prisma.TransactionsDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsDetailsCountAggregateOutputType> | number
          }
        }
      }
      MerchantCategory: {
        payload: Prisma.$MerchantCategoryPayload<ExtArgs>
        fields: Prisma.MerchantCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          findFirst: {
            args: Prisma.MerchantCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          findMany: {
            args: Prisma.MerchantCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>[]
          }
          create: {
            args: Prisma.MerchantCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          createMany: {
            args: Prisma.MerchantCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>[]
          }
          delete: {
            args: Prisma.MerchantCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          update: {
            args: Prisma.MerchantCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MerchantCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantCategoryPayload>
          }
          aggregate: {
            args: Prisma.MerchantCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchantCategory>
          }
          groupBy: {
            args: Prisma.MerchantCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sentReq: number
    recvReq: number
    accounts: number
    cashTransactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentReq?: boolean | UsersCountOutputTypeCountSentReqArgs
    recvReq?: boolean | UsersCountOutputTypeCountRecvReqArgs
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
    cashTransactions?: boolean | UsersCountOutputTypeCountCashTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiariesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecvReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiariesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCashTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashTransactionsWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    transS: number
    transD: number
    trans: number
    card: number
    bills: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transS?: boolean | AccountsCountOutputTypeCountTransSArgs
    transD?: boolean | AccountsCountOutputTypeCountTransDArgs
    trans?: boolean | AccountsCountOutputTypeCountTransArgs
    card?: boolean | AccountsCountOutputTypeCountCardArgs
    bills?: boolean | AccountsCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashTransactionsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }


  /**
   * Count Type CardsCountOutputType
   */

  export type CardsCountOutputType = {
    bills: number
  }

  export type CardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | CardsCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardsCountOutputType
     */
    select?: CardsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }


  /**
   * Count Type TransactionsCountOutputType
   */

  export type TransactionsCountOutputType = {
    details: number
  }

  export type TransactionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | TransactionsCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsCountOutputType
     */
    select?: TransactionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsDetailsWhereInput
  }


  /**
   * Count Type MerchantCategoryCountOutputType
   */

  export type MerchantCategoryCountOutputType = {
    merchants: number
  }

  export type MerchantCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchants?: boolean | MerchantCategoryCountOutputTypeCountMerchantsArgs
  }

  // Custom InputTypes
  /**
   * MerchantCategoryCountOutputType without action
   */
  export type MerchantCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategoryCountOutputType
     */
    select?: MerchantCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCategoryCountOutputType without action
   */
  export type MerchantCategoryCountOutputTypeCountMerchantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    phone: string | null
    birth: Date | null
    status: $Enums.userStatus | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    phone: string | null
    birth: Date | null
    status: $Enums.userStatus | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    role: number
    name: number
    email: number
    phone: number
    birth: number
    status: number
    password: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    birth?: true
    status?: true
    password?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    birth?: true
    status?: true
    password?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    birth?: true
    status?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date
    status: $Enums.userStatus
    password: string
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birth?: boolean
    status?: boolean
    password?: boolean
    createdAt?: boolean
    sentReq?: boolean | Users$sentReqArgs<ExtArgs>
    recvReq?: boolean | Users$recvReqArgs<ExtArgs>
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    merchant?: boolean | Users$merchantArgs<ExtArgs>
    customer?: boolean | Users$customerArgs<ExtArgs>
    cashTransactions?: boolean | Users$cashTransactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birth?: boolean
    status?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birth?: boolean
    status?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentReq?: boolean | Users$sentReqArgs<ExtArgs>
    recvReq?: boolean | Users$recvReqArgs<ExtArgs>
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    merchant?: boolean | Users$merchantArgs<ExtArgs>
    customer?: boolean | Users$customerArgs<ExtArgs>
    cashTransactions?: boolean | Users$cashTransactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      sentReq: Prisma.$BeneficiariesPayload<ExtArgs>[]
      recvReq: Prisma.$BeneficiariesPayload<ExtArgs>[]
      accounts: Prisma.$AccountsPayload<ExtArgs>[]
      merchant: Prisma.$MerchantPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      cashTransactions: Prisma.$CashTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.Role
      name: string
      email: string
      phone: string
      birth: Date
      status: $Enums.userStatus
      password: string
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentReq<T extends Users$sentReqArgs<ExtArgs> = {}>(args?: Subset<T, Users$sentReqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findMany"> | Null>
    recvReq<T extends Users$recvReqArgs<ExtArgs> = {}>(args?: Subset<T, Users$recvReqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findMany"> | Null>
    accounts<T extends Users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany"> | Null>
    merchant<T extends Users$merchantArgs<ExtArgs> = {}>(args?: Subset<T, Users$merchantArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    customer<T extends Users$customerArgs<ExtArgs> = {}>(args?: Subset<T, Users$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    cashTransactions<T extends Users$cashTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$cashTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly birth: FieldRef<"Users", 'DateTime'>
    readonly status: FieldRef<"Users", 'userStatus'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.sentReq
   */
  export type Users$sentReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    where?: BeneficiariesWhereInput
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    cursor?: BeneficiariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * Users.recvReq
   */
  export type Users$recvReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    where?: BeneficiariesWhereInput
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    cursor?: BeneficiariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * Users.accounts
   */
  export type Users$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    cursor?: AccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Users.merchant
   */
  export type Users$merchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    where?: MerchantWhereInput
  }

  /**
   * Users.customer
   */
  export type Users$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Users.cashTransactions
   */
  export type Users$cashTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    where?: CashTransactionsWhereInput
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    cursor?: CashTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashTransactionsScalarFieldEnum | CashTransactionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type MerchantSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    workPermit: string | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    workPermit: string | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    workPermit: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type MerchantSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    workPermit?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    workPermit?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    workPermit?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    workPermit: string
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    workPermit?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Category?: boolean | MerchantCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    workPermit?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Category?: boolean | MerchantCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    workPermit?: boolean
  }

  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Category?: boolean | MerchantCategoryDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Category?: boolean | MerchantCategoryDefaultArgs<ExtArgs>
  }

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      Category: Prisma.$MerchantCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number
      workPermit: string
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
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
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Category<T extends MerchantCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantCategoryDefaultArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Merchant model
   */ 
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'Int'>
    readonly userId: FieldRef<"Merchant", 'Int'>
    readonly categoryId: FieldRef<"Merchant", 'Int'>
    readonly workPermit: FieldRef<"Merchant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    monthlyIncome: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    userId: number
    monthlyIncome: number
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthlyIncome?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthlyIncome?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    monthlyIncome?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      monthlyIncome: number
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly userId: FieldRef<"Customer", 'Int'>
    readonly monthlyIncome: FieldRef<"Customer", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Beneficiaries
   */

  export type AggregateBeneficiaries = {
    _count: BeneficiariesCountAggregateOutputType | null
    _avg: BeneficiariesAvgAggregateOutputType | null
    _sum: BeneficiariesSumAggregateOutputType | null
    _min: BeneficiariesMinAggregateOutputType | null
    _max: BeneficiariesMaxAggregateOutputType | null
  }

  export type BeneficiariesAvgAggregateOutputType = {
    id: number | null
    requstUser: number | null
    acceptUser: number | null
  }

  export type BeneficiariesSumAggregateOutputType = {
    id: number | null
    requstUser: number | null
    acceptUser: number | null
  }

  export type BeneficiariesMinAggregateOutputType = {
    id: number | null
    requstUser: number | null
    acceptUser: number | null
    accepted: boolean | null
    createdAt: Date | null
  }

  export type BeneficiariesMaxAggregateOutputType = {
    id: number | null
    requstUser: number | null
    acceptUser: number | null
    accepted: boolean | null
    createdAt: Date | null
  }

  export type BeneficiariesCountAggregateOutputType = {
    id: number
    requstUser: number
    acceptUser: number
    accepted: number
    createdAt: number
    _all: number
  }


  export type BeneficiariesAvgAggregateInputType = {
    id?: true
    requstUser?: true
    acceptUser?: true
  }

  export type BeneficiariesSumAggregateInputType = {
    id?: true
    requstUser?: true
    acceptUser?: true
  }

  export type BeneficiariesMinAggregateInputType = {
    id?: true
    requstUser?: true
    acceptUser?: true
    accepted?: true
    createdAt?: true
  }

  export type BeneficiariesMaxAggregateInputType = {
    id?: true
    requstUser?: true
    acceptUser?: true
    accepted?: true
    createdAt?: true
  }

  export type BeneficiariesCountAggregateInputType = {
    id?: true
    requstUser?: true
    acceptUser?: true
    accepted?: true
    createdAt?: true
    _all?: true
  }

  export type BeneficiariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiaries to aggregate.
     */
    where?: BeneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beneficiaries
    **/
    _count?: true | BeneficiariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiariesMaxAggregateInputType
  }

  export type GetBeneficiariesAggregateType<T extends BeneficiariesAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiaries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiaries[P]>
      : GetScalarType<T[P], AggregateBeneficiaries[P]>
  }




  export type BeneficiariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiariesWhereInput
    orderBy?: BeneficiariesOrderByWithAggregationInput | BeneficiariesOrderByWithAggregationInput[]
    by: BeneficiariesScalarFieldEnum[] | BeneficiariesScalarFieldEnum
    having?: BeneficiariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiariesCountAggregateInputType | true
    _avg?: BeneficiariesAvgAggregateInputType
    _sum?: BeneficiariesSumAggregateInputType
    _min?: BeneficiariesMinAggregateInputType
    _max?: BeneficiariesMaxAggregateInputType
  }

  export type BeneficiariesGroupByOutputType = {
    id: number
    requstUser: number
    acceptUser: number
    accepted: boolean | null
    createdAt: Date
    _count: BeneficiariesCountAggregateOutputType | null
    _avg: BeneficiariesAvgAggregateOutputType | null
    _sum: BeneficiariesSumAggregateOutputType | null
    _min: BeneficiariesMinAggregateOutputType | null
    _max: BeneficiariesMaxAggregateOutputType | null
  }

  type GetBeneficiariesGroupByPayload<T extends BeneficiariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiariesGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiariesGroupByOutputType[P]>
        }
      >
    >


  export type BeneficiariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requstUser?: boolean
    acceptUser?: boolean
    accepted?: boolean
    createdAt?: boolean
    userR?: boolean | UsersDefaultArgs<ExtArgs>
    userA?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaries"]>

  export type BeneficiariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requstUser?: boolean
    acceptUser?: boolean
    accepted?: boolean
    createdAt?: boolean
    userR?: boolean | UsersDefaultArgs<ExtArgs>
    userA?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaries"]>

  export type BeneficiariesSelectScalar = {
    id?: boolean
    requstUser?: boolean
    acceptUser?: boolean
    accepted?: boolean
    createdAt?: boolean
  }

  export type BeneficiariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userR?: boolean | UsersDefaultArgs<ExtArgs>
    userA?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type BeneficiariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userR?: boolean | UsersDefaultArgs<ExtArgs>
    userA?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $BeneficiariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiaries"
    objects: {
      userR: Prisma.$UsersPayload<ExtArgs>
      userA: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requstUser: number
      acceptUser: number
      accepted: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["beneficiaries"]>
    composites: {}
  }

  type BeneficiariesGetPayload<S extends boolean | null | undefined | BeneficiariesDefaultArgs> = $Result.GetResult<Prisma.$BeneficiariesPayload, S>

  type BeneficiariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BeneficiariesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BeneficiariesCountAggregateInputType | true
    }

  export interface BeneficiariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beneficiaries'], meta: { name: 'Beneficiaries' } }
    /**
     * Find zero or one Beneficiaries that matches the filter.
     * @param {BeneficiariesFindUniqueArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeneficiariesFindUniqueArgs>(args: SelectSubset<T, BeneficiariesFindUniqueArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Beneficiaries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BeneficiariesFindUniqueOrThrowArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeneficiariesFindUniqueOrThrowArgs>(args: SelectSubset<T, BeneficiariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesFindFirstArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeneficiariesFindFirstArgs>(args?: SelectSubset<T, BeneficiariesFindFirstArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Beneficiaries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesFindFirstOrThrowArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeneficiariesFindFirstOrThrowArgs>(args?: SelectSubset<T, BeneficiariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiariesWithIdOnly = await prisma.beneficiaries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeneficiariesFindManyArgs>(args?: SelectSubset<T, BeneficiariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Beneficiaries.
     * @param {BeneficiariesCreateArgs} args - Arguments to create a Beneficiaries.
     * @example
     * // Create one Beneficiaries
     * const Beneficiaries = await prisma.beneficiaries.create({
     *   data: {
     *     // ... data to create a Beneficiaries
     *   }
     * })
     * 
     */
    create<T extends BeneficiariesCreateArgs>(args: SelectSubset<T, BeneficiariesCreateArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Beneficiaries.
     * @param {BeneficiariesCreateManyArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeneficiariesCreateManyArgs>(args?: SelectSubset<T, BeneficiariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiaries and returns the data saved in the database.
     * @param {BeneficiariesCreateManyAndReturnArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiaries and only return the `id`
     * const beneficiariesWithIdOnly = await prisma.beneficiaries.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeneficiariesCreateManyAndReturnArgs>(args?: SelectSubset<T, BeneficiariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Beneficiaries.
     * @param {BeneficiariesDeleteArgs} args - Arguments to delete one Beneficiaries.
     * @example
     * // Delete one Beneficiaries
     * const Beneficiaries = await prisma.beneficiaries.delete({
     *   where: {
     *     // ... filter to delete one Beneficiaries
     *   }
     * })
     * 
     */
    delete<T extends BeneficiariesDeleteArgs>(args: SelectSubset<T, BeneficiariesDeleteArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Beneficiaries.
     * @param {BeneficiariesUpdateArgs} args - Arguments to update one Beneficiaries.
     * @example
     * // Update one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeneficiariesUpdateArgs>(args: SelectSubset<T, BeneficiariesUpdateArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Beneficiaries.
     * @param {BeneficiariesDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiaries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeneficiariesDeleteManyArgs>(args?: SelectSubset<T, BeneficiariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeneficiariesUpdateManyArgs>(args: SelectSubset<T, BeneficiariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficiaries.
     * @param {BeneficiariesUpsertArgs} args - Arguments to update or create a Beneficiaries.
     * @example
     * // Update or create a Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.upsert({
     *   create: {
     *     // ... data to create a Beneficiaries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiaries we want to update
     *   }
     * })
     */
    upsert<T extends BeneficiariesUpsertArgs>(args: SelectSubset<T, BeneficiariesUpsertArgs<ExtArgs>>): Prisma__BeneficiariesClient<$Result.GetResult<Prisma.$BeneficiariesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiaries.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends BeneficiariesCountArgs>(
      args?: Subset<T, BeneficiariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiariesAggregateArgs>(args: Subset<T, BeneficiariesAggregateArgs>): Prisma.PrismaPromise<GetBeneficiariesAggregateType<T>>

    /**
     * Group by Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesGroupByArgs} args - Group by arguments.
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
      T extends BeneficiariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiariesGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiariesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeneficiariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beneficiaries model
   */
  readonly fields: BeneficiariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beneficiaries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeneficiariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userR<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userA<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Beneficiaries model
   */ 
  interface BeneficiariesFieldRefs {
    readonly id: FieldRef<"Beneficiaries", 'Int'>
    readonly requstUser: FieldRef<"Beneficiaries", 'Int'>
    readonly acceptUser: FieldRef<"Beneficiaries", 'Int'>
    readonly accepted: FieldRef<"Beneficiaries", 'Boolean'>
    readonly createdAt: FieldRef<"Beneficiaries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Beneficiaries findUnique
   */
  export type BeneficiariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where: BeneficiariesWhereUniqueInput
  }

  /**
   * Beneficiaries findUniqueOrThrow
   */
  export type BeneficiariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where: BeneficiariesWhereUniqueInput
  }

  /**
   * Beneficiaries findFirst
   */
  export type BeneficiariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where?: BeneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * Beneficiaries findFirstOrThrow
   */
  export type BeneficiariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where?: BeneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * Beneficiaries findMany
   */
  export type BeneficiariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where?: BeneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiariesOrderByWithRelationInput | BeneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beneficiaries.
     */
    cursor?: BeneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * Beneficiaries create
   */
  export type BeneficiariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * The data needed to create a Beneficiaries.
     */
    data: XOR<BeneficiariesCreateInput, BeneficiariesUncheckedCreateInput>
  }

  /**
   * Beneficiaries createMany
   */
  export type BeneficiariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiariesCreateManyInput | BeneficiariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiaries createManyAndReturn
   */
  export type BeneficiariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiariesCreateManyInput | BeneficiariesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Beneficiaries update
   */
  export type BeneficiariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * The data needed to update a Beneficiaries.
     */
    data: XOR<BeneficiariesUpdateInput, BeneficiariesUncheckedUpdateInput>
    /**
     * Choose, which Beneficiaries to update.
     */
    where: BeneficiariesWhereUniqueInput
  }

  /**
   * Beneficiaries updateMany
   */
  export type BeneficiariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beneficiaries.
     */
    data: XOR<BeneficiariesUpdateManyMutationInput, BeneficiariesUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiaries to update
     */
    where?: BeneficiariesWhereInput
  }

  /**
   * Beneficiaries upsert
   */
  export type BeneficiariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * The filter to search for the Beneficiaries to update in case it exists.
     */
    where: BeneficiariesWhereUniqueInput
    /**
     * In case the Beneficiaries found by the `where` argument doesn't exist, create a new Beneficiaries with this data.
     */
    create: XOR<BeneficiariesCreateInput, BeneficiariesUncheckedCreateInput>
    /**
     * In case the Beneficiaries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeneficiariesUpdateInput, BeneficiariesUncheckedUpdateInput>
  }

  /**
   * Beneficiaries delete
   */
  export type BeneficiariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
    /**
     * Filter which Beneficiaries to delete.
     */
    where: BeneficiariesWhereUniqueInput
  }

  /**
   * Beneficiaries deleteMany
   */
  export type BeneficiariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiaries to delete
     */
    where?: BeneficiariesWhereInput
  }

  /**
   * Beneficiaries without action
   */
  export type BeneficiariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiaries
     */
    select?: BeneficiariesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiariesInclude<ExtArgs> | null
  }


  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    userId: number | null
    balance: number | null
  }

  export type AccountsSumAggregateOutputType = {
    userId: number | null
    balance: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    balance: number | null
    type: $Enums.AccountType | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    balance: number | null
    type: $Enums.AccountType | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    balance: number
    type: number
    status: number
    createdAt: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    userId?: true
    balance?: true
  }

  export type AccountsSumAggregateInputType = {
    userId?: true
    balance?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    type?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    userId: number
    name: string
    balance: number
    type: $Enums.AccountType
    status: $Enums.AccountStatus
    createdAt: Date
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    balance?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    transS?: boolean | Accounts$transSArgs<ExtArgs>
    transD?: boolean | Accounts$transDArgs<ExtArgs>
    trans?: boolean | Accounts$transArgs<ExtArgs>
    card?: boolean | Accounts$cardArgs<ExtArgs>
    bills?: boolean | Accounts$billsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    balance?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    balance?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    transS?: boolean | Accounts$transSArgs<ExtArgs>
    transD?: boolean | Accounts$transDArgs<ExtArgs>
    trans?: boolean | Accounts$transArgs<ExtArgs>
    card?: boolean | Accounts$cardArgs<ExtArgs>
    bills?: boolean | Accounts$billsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      transS: Prisma.$TransactionsPayload<ExtArgs>[]
      transD: Prisma.$TransactionsPayload<ExtArgs>[]
      trans: Prisma.$CashTransactionsPayload<ExtArgs>[]
      card: Prisma.$CardsPayload<ExtArgs>[]
      bills: Prisma.$BillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      name: string
      balance: number
      type: $Enums.AccountType
      status: $Enums.AccountStatus
      createdAt: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transS<T extends Accounts$transSArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$transSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    transD<T extends Accounts$transDArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$transDArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    trans<T extends Accounts$transArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$transArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    card<T extends Accounts$cardArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$cardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findMany"> | Null>
    bills<T extends Accounts$billsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Accounts model
   */ 
  interface AccountsFieldRefs {
    readonly id: FieldRef<"Accounts", 'String'>
    readonly userId: FieldRef<"Accounts", 'Int'>
    readonly name: FieldRef<"Accounts", 'String'>
    readonly balance: FieldRef<"Accounts", 'Float'>
    readonly type: FieldRef<"Accounts", 'AccountType'>
    readonly status: FieldRef<"Accounts", 'AccountStatus'>
    readonly createdAt: FieldRef<"Accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
  }

  /**
   * Accounts.transS
   */
  export type Accounts$transSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Accounts.transD
   */
  export type Accounts$transDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Accounts.trans
   */
  export type Accounts$transArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    where?: CashTransactionsWhereInput
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    cursor?: CashTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashTransactionsScalarFieldEnum | CashTransactionsScalarFieldEnum[]
  }

  /**
   * Accounts.card
   */
  export type Accounts$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    cursor?: CardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Accounts.bills
   */
  export type Accounts$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsAvgAggregateOutputType = {
    balance: number | null
    cvv: number | null
  }

  export type CardsSumAggregateOutputType = {
    balance: number | null
    cvv: number | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    cardName: string | null
    accountNumber: string | null
    balance: number | null
    cvv: number | null
    PIN: string | null
    expiryDate: Date | null
    physical: boolean | null
    createdAt: Date | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    cardName: string | null
    accountNumber: string | null
    balance: number | null
    cvv: number | null
    PIN: string | null
    expiryDate: Date | null
    physical: boolean | null
    createdAt: Date | null
  }

  export type CardsCountAggregateOutputType = {
    id: number
    cardName: number
    accountNumber: number
    balance: number
    cvv: number
    PIN: number
    expiryDate: number
    physical: number
    createdAt: number
    _all: number
  }


  export type CardsAvgAggregateInputType = {
    balance?: true
    cvv?: true
  }

  export type CardsSumAggregateInputType = {
    balance?: true
    cvv?: true
  }

  export type CardsMinAggregateInputType = {
    id?: true
    cardName?: true
    accountNumber?: true
    balance?: true
    cvv?: true
    PIN?: true
    expiryDate?: true
    physical?: true
    createdAt?: true
  }

  export type CardsMaxAggregateInputType = {
    id?: true
    cardName?: true
    accountNumber?: true
    balance?: true
    cvv?: true
    PIN?: true
    expiryDate?: true
    physical?: true
    createdAt?: true
  }

  export type CardsCountAggregateInputType = {
    id?: true
    cardName?: true
    accountNumber?: true
    balance?: true
    cvv?: true
    PIN?: true
    expiryDate?: true
    physical?: true
    createdAt?: true
    _all?: true
  }

  export type CardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to aggregate.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardsMaxAggregateInputType
  }

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
        [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>
  }




  export type CardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithAggregationInput | CardsOrderByWithAggregationInput[]
    by: CardsScalarFieldEnum[] | CardsScalarFieldEnum
    having?: CardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardsCountAggregateInputType | true
    _avg?: CardsAvgAggregateInputType
    _sum?: CardsSumAggregateInputType
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }

  export type CardsGroupByOutputType = {
    id: string
    cardName: string
    accountNumber: string
    balance: number
    cvv: number
    PIN: string
    expiryDate: Date
    physical: boolean
    createdAt: Date
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  type GetCardsGroupByPayload<T extends CardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardsGroupByOutputType[P]>
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
        }
      >
    >


  export type CardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardName?: boolean
    accountNumber?: boolean
    balance?: boolean
    cvv?: boolean
    PIN?: boolean
    expiryDate?: boolean
    physical?: boolean
    createdAt?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
    bills?: boolean | Cards$billsArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardName?: boolean
    accountNumber?: boolean
    balance?: boolean
    cvv?: boolean
    PIN?: boolean
    expiryDate?: boolean
    physical?: boolean
    createdAt?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectScalar = {
    id?: boolean
    cardName?: boolean
    accountNumber?: boolean
    balance?: boolean
    cvv?: boolean
    PIN?: boolean
    expiryDate?: boolean
    physical?: boolean
    createdAt?: boolean
  }

  export type CardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
    bills?: boolean | Cards$billsArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $CardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cards"
    objects: {
      account: Prisma.$AccountsPayload<ExtArgs>
      bills: Prisma.$BillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardName: string
      accountNumber: string
      balance: number
      cvv: number
      PIN: string
      expiryDate: Date
      physical: boolean
      createdAt: Date
    }, ExtArgs["result"]["cards"]>
    composites: {}
  }

  type CardsGetPayload<S extends boolean | null | undefined | CardsDefaultArgs> = $Result.GetResult<Prisma.$CardsPayload, S>

  type CardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CardsCountAggregateInputType | true
    }

  export interface CardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cards'], meta: { name: 'Cards' } }
    /**
     * Find zero or one Cards that matches the filter.
     * @param {CardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardsFindUniqueArgs>(args: SelectSubset<T, CardsFindUniqueArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cards that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardsFindUniqueOrThrowArgs>(args: SelectSubset<T, CardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardsFindFirstArgs>(args?: SelectSubset<T, CardsFindFirstArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardsFindFirstOrThrowArgs>(args?: SelectSubset<T, CardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardsFindManyArgs>(args?: SelectSubset<T, CardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cards.
     * @param {CardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     * 
     */
    create<T extends CardsCreateArgs>(args: SelectSubset<T, CardsCreateArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cards.
     * @param {CardsCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardsCreateManyArgs>(args?: SelectSubset<T, CardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardsCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardsWithIdOnly = await prisma.cards.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardsCreateManyAndReturnArgs>(args?: SelectSubset<T, CardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cards.
     * @param {CardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     * 
     */
    delete<T extends CardsDeleteArgs>(args: SelectSubset<T, CardsDeleteArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cards.
     * @param {CardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardsUpdateArgs>(args: SelectSubset<T, CardsUpdateArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cards.
     * @param {CardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardsDeleteManyArgs>(args?: SelectSubset<T, CardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardsUpdateManyArgs>(args: SelectSubset<T, CardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cards.
     * @param {CardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
     */
    upsert<T extends CardsUpsertArgs>(args: SelectSubset<T, CardsUpsertArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardsCountArgs>(
      args?: Subset<T, CardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardsAggregateArgs>(args: Subset<T, CardsAggregateArgs>): Prisma.PrismaPromise<GetCardsAggregateType<T>>

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsGroupByArgs} args - Group by arguments.
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
      T extends CardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardsGroupByArgs['orderBy'] }
        : { orderBy?: CardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cards model
   */
  readonly fields: CardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bills<T extends Cards$billsArgs<ExtArgs> = {}>(args?: Subset<T, Cards$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cards model
   */ 
  interface CardsFieldRefs {
    readonly id: FieldRef<"Cards", 'String'>
    readonly cardName: FieldRef<"Cards", 'String'>
    readonly accountNumber: FieldRef<"Cards", 'String'>
    readonly balance: FieldRef<"Cards", 'Float'>
    readonly cvv: FieldRef<"Cards", 'Int'>
    readonly PIN: FieldRef<"Cards", 'String'>
    readonly expiryDate: FieldRef<"Cards", 'DateTime'>
    readonly physical: FieldRef<"Cards", 'Boolean'>
    readonly createdAt: FieldRef<"Cards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cards findUnique
   */
  export type CardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards findUniqueOrThrow
   */
  export type CardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards findFirst
   */
  export type CardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards findFirstOrThrow
   */
  export type CardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards findMany
   */
  export type CardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards create
   */
  export type CardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cards.
     */
    data: XOR<CardsCreateInput, CardsUncheckedCreateInput>
  }

  /**
   * Cards createMany
   */
  export type CardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardsCreateManyInput | CardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cards createManyAndReturn
   */
  export type CardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardsCreateManyInput | CardsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cards update
   */
  export type CardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cards.
     */
    data: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
    /**
     * Choose, which Cards to update.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards updateMany
   */
  export type CardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardsWhereInput
  }

  /**
   * Cards upsert
   */
  export type CardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cards to update in case it exists.
     */
    where: CardsWhereUniqueInput
    /**
     * In case the Cards found by the `where` argument doesn't exist, create a new Cards with this data.
     */
    create: XOR<CardsCreateInput, CardsUncheckedCreateInput>
    /**
     * In case the Cards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
  }

  /**
   * Cards delete
   */
  export type CardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter which Cards to delete.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards deleteMany
   */
  export type CardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardsWhereInput
  }

  /**
   * Cards.bills
   */
  export type Cards$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Cards without action
   */
  export type CardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
  }


  /**
   * Model CashTransactions
   */

  export type AggregateCashTransactions = {
    _count: CashTransactionsCountAggregateOutputType | null
    _avg: CashTransactionsAvgAggregateOutputType | null
    _sum: CashTransactionsSumAggregateOutputType | null
    _min: CashTransactionsMinAggregateOutputType | null
    _max: CashTransactionsMaxAggregateOutputType | null
  }

  export type CashTransactionsAvgAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    amount: number | null
  }

  export type CashTransactionsSumAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    amount: number | null
  }

  export type CashTransactionsMinAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    accountNumber: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type CashTransactionsMaxAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    accountNumber: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type CashTransactionsCountAggregateOutputType = {
    id: number
    supervisorId: number
    accountNumber: number
    type: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type CashTransactionsAvgAggregateInputType = {
    id?: true
    supervisorId?: true
    amount?: true
  }

  export type CashTransactionsSumAggregateInputType = {
    id?: true
    supervisorId?: true
    amount?: true
  }

  export type CashTransactionsMinAggregateInputType = {
    id?: true
    supervisorId?: true
    accountNumber?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type CashTransactionsMaxAggregateInputType = {
    id?: true
    supervisorId?: true
    accountNumber?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type CashTransactionsCountAggregateInputType = {
    id?: true
    supervisorId?: true
    accountNumber?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CashTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashTransactions to aggregate.
     */
    where?: CashTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashTransactions to fetch.
     */
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashTransactions
    **/
    _count?: true | CashTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashTransactionsMaxAggregateInputType
  }

  export type GetCashTransactionsAggregateType<T extends CashTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCashTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashTransactions[P]>
      : GetScalarType<T[P], AggregateCashTransactions[P]>
  }




  export type CashTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashTransactionsWhereInput
    orderBy?: CashTransactionsOrderByWithAggregationInput | CashTransactionsOrderByWithAggregationInput[]
    by: CashTransactionsScalarFieldEnum[] | CashTransactionsScalarFieldEnum
    having?: CashTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashTransactionsCountAggregateInputType | true
    _avg?: CashTransactionsAvgAggregateInputType
    _sum?: CashTransactionsSumAggregateInputType
    _min?: CashTransactionsMinAggregateInputType
    _max?: CashTransactionsMaxAggregateInputType
  }

  export type CashTransactionsGroupByOutputType = {
    id: number
    supervisorId: number
    accountNumber: string
    type: $Enums.TransactionType
    amount: number
    status: $Enums.TransactionStatus
    createdAt: Date
    _count: CashTransactionsCountAggregateOutputType | null
    _avg: CashTransactionsAvgAggregateOutputType | null
    _sum: CashTransactionsSumAggregateOutputType | null
    _min: CashTransactionsMinAggregateOutputType | null
    _max: CashTransactionsMaxAggregateOutputType | null
  }

  type GetCashTransactionsGroupByPayload<T extends CashTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], CashTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type CashTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorId?: boolean
    accountNumber?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    supervisor?: boolean | UsersDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashTransactions"]>

  export type CashTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorId?: boolean
    accountNumber?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    supervisor?: boolean | UsersDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashTransactions"]>

  export type CashTransactionsSelectScalar = {
    id?: boolean
    supervisorId?: boolean
    accountNumber?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CashTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | UsersDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type CashTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | UsersDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $CashTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashTransactions"
    objects: {
      supervisor: Prisma.$UsersPayload<ExtArgs>
      account: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supervisorId: number
      accountNumber: string
      type: $Enums.TransactionType
      amount: number
      status: $Enums.TransactionStatus
      createdAt: Date
    }, ExtArgs["result"]["cashTransactions"]>
    composites: {}
  }

  type CashTransactionsGetPayload<S extends boolean | null | undefined | CashTransactionsDefaultArgs> = $Result.GetResult<Prisma.$CashTransactionsPayload, S>

  type CashTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CashTransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CashTransactionsCountAggregateInputType | true
    }

  export interface CashTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashTransactions'], meta: { name: 'CashTransactions' } }
    /**
     * Find zero or one CashTransactions that matches the filter.
     * @param {CashTransactionsFindUniqueArgs} args - Arguments to find a CashTransactions
     * @example
     * // Get one CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashTransactionsFindUniqueArgs>(args: SelectSubset<T, CashTransactionsFindUniqueArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CashTransactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CashTransactionsFindUniqueOrThrowArgs} args - Arguments to find a CashTransactions
     * @example
     * // Get one CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, CashTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CashTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsFindFirstArgs} args - Arguments to find a CashTransactions
     * @example
     * // Get one CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashTransactionsFindFirstArgs>(args?: SelectSubset<T, CashTransactionsFindFirstArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CashTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsFindFirstOrThrowArgs} args - Arguments to find a CashTransactions
     * @example
     * // Get one CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, CashTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CashTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findMany()
     * 
     * // Get first 10 CashTransactions
     * const cashTransactions = await prisma.cashTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashTransactionsWithIdOnly = await prisma.cashTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashTransactionsFindManyArgs>(args?: SelectSubset<T, CashTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CashTransactions.
     * @param {CashTransactionsCreateArgs} args - Arguments to create a CashTransactions.
     * @example
     * // Create one CashTransactions
     * const CashTransactions = await prisma.cashTransactions.create({
     *   data: {
     *     // ... data to create a CashTransactions
     *   }
     * })
     * 
     */
    create<T extends CashTransactionsCreateArgs>(args: SelectSubset<T, CashTransactionsCreateArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CashTransactions.
     * @param {CashTransactionsCreateManyArgs} args - Arguments to create many CashTransactions.
     * @example
     * // Create many CashTransactions
     * const cashTransactions = await prisma.cashTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashTransactionsCreateManyArgs>(args?: SelectSubset<T, CashTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashTransactions and returns the data saved in the database.
     * @param {CashTransactionsCreateManyAndReturnArgs} args - Arguments to create many CashTransactions.
     * @example
     * // Create many CashTransactions
     * const cashTransactions = await prisma.cashTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashTransactions and only return the `id`
     * const cashTransactionsWithIdOnly = await prisma.cashTransactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, CashTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CashTransactions.
     * @param {CashTransactionsDeleteArgs} args - Arguments to delete one CashTransactions.
     * @example
     * // Delete one CashTransactions
     * const CashTransactions = await prisma.cashTransactions.delete({
     *   where: {
     *     // ... filter to delete one CashTransactions
     *   }
     * })
     * 
     */
    delete<T extends CashTransactionsDeleteArgs>(args: SelectSubset<T, CashTransactionsDeleteArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CashTransactions.
     * @param {CashTransactionsUpdateArgs} args - Arguments to update one CashTransactions.
     * @example
     * // Update one CashTransactions
     * const cashTransactions = await prisma.cashTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashTransactionsUpdateArgs>(args: SelectSubset<T, CashTransactionsUpdateArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CashTransactions.
     * @param {CashTransactionsDeleteManyArgs} args - Arguments to filter CashTransactions to delete.
     * @example
     * // Delete a few CashTransactions
     * const { count } = await prisma.cashTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashTransactionsDeleteManyArgs>(args?: SelectSubset<T, CashTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashTransactions
     * const cashTransactions = await prisma.cashTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashTransactionsUpdateManyArgs>(args: SelectSubset<T, CashTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CashTransactions.
     * @param {CashTransactionsUpsertArgs} args - Arguments to update or create a CashTransactions.
     * @example
     * // Update or create a CashTransactions
     * const cashTransactions = await prisma.cashTransactions.upsert({
     *   create: {
     *     // ... data to create a CashTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashTransactions we want to update
     *   }
     * })
     */
    upsert<T extends CashTransactionsUpsertArgs>(args: SelectSubset<T, CashTransactionsUpsertArgs<ExtArgs>>): Prisma__CashTransactionsClient<$Result.GetResult<Prisma.$CashTransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CashTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsCountArgs} args - Arguments to filter CashTransactions to count.
     * @example
     * // Count the number of CashTransactions
     * const count = await prisma.cashTransactions.count({
     *   where: {
     *     // ... the filter for the CashTransactions we want to count
     *   }
     * })
    **/
    count<T extends CashTransactionsCountArgs>(
      args?: Subset<T, CashTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashTransactionsAggregateArgs>(args: Subset<T, CashTransactionsAggregateArgs>): Prisma.PrismaPromise<GetCashTransactionsAggregateType<T>>

    /**
     * Group by CashTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashTransactionsGroupByArgs} args - Group by arguments.
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
      T extends CashTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: CashTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CashTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashTransactions model
   */
  readonly fields: CashTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CashTransactions model
   */ 
  interface CashTransactionsFieldRefs {
    readonly id: FieldRef<"CashTransactions", 'Int'>
    readonly supervisorId: FieldRef<"CashTransactions", 'Int'>
    readonly accountNumber: FieldRef<"CashTransactions", 'String'>
    readonly type: FieldRef<"CashTransactions", 'TransactionType'>
    readonly amount: FieldRef<"CashTransactions", 'Float'>
    readonly status: FieldRef<"CashTransactions", 'TransactionStatus'>
    readonly createdAt: FieldRef<"CashTransactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashTransactions findUnique
   */
  export type CashTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which CashTransactions to fetch.
     */
    where: CashTransactionsWhereUniqueInput
  }

  /**
   * CashTransactions findUniqueOrThrow
   */
  export type CashTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which CashTransactions to fetch.
     */
    where: CashTransactionsWhereUniqueInput
  }

  /**
   * CashTransactions findFirst
   */
  export type CashTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which CashTransactions to fetch.
     */
    where?: CashTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashTransactions to fetch.
     */
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashTransactions.
     */
    cursor?: CashTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashTransactions.
     */
    distinct?: CashTransactionsScalarFieldEnum | CashTransactionsScalarFieldEnum[]
  }

  /**
   * CashTransactions findFirstOrThrow
   */
  export type CashTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which CashTransactions to fetch.
     */
    where?: CashTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashTransactions to fetch.
     */
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashTransactions.
     */
    cursor?: CashTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashTransactions.
     */
    distinct?: CashTransactionsScalarFieldEnum | CashTransactionsScalarFieldEnum[]
  }

  /**
   * CashTransactions findMany
   */
  export type CashTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which CashTransactions to fetch.
     */
    where?: CashTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashTransactions to fetch.
     */
    orderBy?: CashTransactionsOrderByWithRelationInput | CashTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashTransactions.
     */
    cursor?: CashTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashTransactions.
     */
    skip?: number
    distinct?: CashTransactionsScalarFieldEnum | CashTransactionsScalarFieldEnum[]
  }

  /**
   * CashTransactions create
   */
  export type CashTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a CashTransactions.
     */
    data: XOR<CashTransactionsCreateInput, CashTransactionsUncheckedCreateInput>
  }

  /**
   * CashTransactions createMany
   */
  export type CashTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashTransactions.
     */
    data: CashTransactionsCreateManyInput | CashTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashTransactions createManyAndReturn
   */
  export type CashTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CashTransactions.
     */
    data: CashTransactionsCreateManyInput | CashTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashTransactions update
   */
  export type CashTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a CashTransactions.
     */
    data: XOR<CashTransactionsUpdateInput, CashTransactionsUncheckedUpdateInput>
    /**
     * Choose, which CashTransactions to update.
     */
    where: CashTransactionsWhereUniqueInput
  }

  /**
   * CashTransactions updateMany
   */
  export type CashTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashTransactions.
     */
    data: XOR<CashTransactionsUpdateManyMutationInput, CashTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which CashTransactions to update
     */
    where?: CashTransactionsWhereInput
  }

  /**
   * CashTransactions upsert
   */
  export type CashTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the CashTransactions to update in case it exists.
     */
    where: CashTransactionsWhereUniqueInput
    /**
     * In case the CashTransactions found by the `where` argument doesn't exist, create a new CashTransactions with this data.
     */
    create: XOR<CashTransactionsCreateInput, CashTransactionsUncheckedCreateInput>
    /**
     * In case the CashTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashTransactionsUpdateInput, CashTransactionsUncheckedUpdateInput>
  }

  /**
   * CashTransactions delete
   */
  export type CashTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
    /**
     * Filter which CashTransactions to delete.
     */
    where: CashTransactionsWhereUniqueInput
  }

  /**
   * CashTransactions deleteMany
   */
  export type CashTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashTransactions to delete
     */
    where?: CashTransactionsWhereInput
  }

  /**
   * CashTransactions without action
   */
  export type CashTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashTransactions
     */
    select?: CashTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashTransactionsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    sourceAccount: string | null
    destinationAccount: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    sourceAccount: string | null
    destinationAccount: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    sourceAccount: number
    destinationAccount: number
    type: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    sourceAccount?: true
    destinationAccount?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    sourceAccount?: true
    destinationAccount?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    sourceAccount?: true
    destinationAccount?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    sourceAccount: string | null
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status: $Enums.TransactionStatus
    createdAt: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceAccount?: boolean
    destinationAccount?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    sAccount?: boolean | Transactions$sAccountArgs<ExtArgs>
    dAccount?: boolean | AccountsDefaultArgs<ExtArgs>
    details?: boolean | Transactions$detailsArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceAccount?: boolean
    destinationAccount?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    sAccount?: boolean | Transactions$sAccountArgs<ExtArgs>
    dAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    sourceAccount?: boolean
    destinationAccount?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sAccount?: boolean | Transactions$sAccountArgs<ExtArgs>
    dAccount?: boolean | AccountsDefaultArgs<ExtArgs>
    details?: boolean | Transactions$detailsArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sAccount?: boolean | Transactions$sAccountArgs<ExtArgs>
    dAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      sAccount: Prisma.$AccountsPayload<ExtArgs> | null
      dAccount: Prisma.$AccountsPayload<ExtArgs>
      details: Prisma.$TransactionsDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceAccount: string | null
      destinationAccount: string
      type: $Enums.TransactionType
      amount: number
      status: $Enums.TransactionStatus
      createdAt: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sAccount<T extends Transactions$sAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$sAccountArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    dAccount<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    details<T extends Transactions$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly sourceAccount: FieldRef<"Transactions", 'String'>
    readonly destinationAccount: FieldRef<"Transactions", 'String'>
    readonly type: FieldRef<"Transactions", 'TransactionType'>
    readonly amount: FieldRef<"Transactions", 'Float'>
    readonly status: FieldRef<"Transactions", 'TransactionStatus'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions.sAccount
   */
  export type Transactions$sAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    where?: AccountsWhereInput
  }

  /**
   * Transactions.details
   */
  export type Transactions$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    where?: TransactionsDetailsWhereInput
    orderBy?: TransactionsDetailsOrderByWithRelationInput | TransactionsDetailsOrderByWithRelationInput[]
    cursor?: TransactionsDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsDetailsScalarFieldEnum | TransactionsDetailsScalarFieldEnum[]
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model Bills
   */

  export type AggregateBills = {
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  export type BillsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type BillsSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type BillsMinAggregateOutputType = {
    id: number | null
    cardId: string | null
    merchantAccountNumber: string | null
    category: string | null
    amount: number | null
    details: string | null
    status: $Enums.TransactionStatus | null
    payedAt: Date | null
    createdAt: Date | null
  }

  export type BillsMaxAggregateOutputType = {
    id: number | null
    cardId: string | null
    merchantAccountNumber: string | null
    category: string | null
    amount: number | null
    details: string | null
    status: $Enums.TransactionStatus | null
    payedAt: Date | null
    createdAt: Date | null
  }

  export type BillsCountAggregateOutputType = {
    id: number
    cardId: number
    merchantAccountNumber: number
    category: number
    amount: number
    details: number
    status: number
    payedAt: number
    createdAt: number
    _all: number
  }


  export type BillsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type BillsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type BillsMinAggregateInputType = {
    id?: true
    cardId?: true
    merchantAccountNumber?: true
    category?: true
    amount?: true
    details?: true
    status?: true
    payedAt?: true
    createdAt?: true
  }

  export type BillsMaxAggregateInputType = {
    id?: true
    cardId?: true
    merchantAccountNumber?: true
    category?: true
    amount?: true
    details?: true
    status?: true
    payedAt?: true
    createdAt?: true
  }

  export type BillsCountAggregateInputType = {
    id?: true
    cardId?: true
    merchantAccountNumber?: true
    category?: true
    amount?: true
    details?: true
    status?: true
    payedAt?: true
    createdAt?: true
    _all?: true
  }

  export type BillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to aggregate.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillsMaxAggregateInputType
  }

  export type GetBillsAggregateType<T extends BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBills[P]>
      : GetScalarType<T[P], AggregateBills[P]>
  }




  export type BillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithAggregationInput | BillsOrderByWithAggregationInput[]
    by: BillsScalarFieldEnum[] | BillsScalarFieldEnum
    having?: BillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillsCountAggregateInputType | true
    _avg?: BillsAvgAggregateInputType
    _sum?: BillsSumAggregateInputType
    _min?: BillsMinAggregateInputType
    _max?: BillsMaxAggregateInputType
  }

  export type BillsGroupByOutputType = {
    id: number
    cardId: string | null
    merchantAccountNumber: string
    category: string
    amount: number
    details: string
    status: $Enums.TransactionStatus
    payedAt: Date | null
    createdAt: Date
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  type GetBillsGroupByPayload<T extends BillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillsGroupByOutputType[P]>
            : GetScalarType<T[P], BillsGroupByOutputType[P]>
        }
      >
    >


  export type BillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    merchantAccountNumber?: boolean
    category?: boolean
    amount?: boolean
    details?: boolean
    status?: boolean
    payedAt?: boolean
    createdAt?: boolean
    card?: boolean | Bills$cardArgs<ExtArgs>
    merchantAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type BillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    merchantAccountNumber?: boolean
    category?: boolean
    amount?: boolean
    details?: boolean
    status?: boolean
    payedAt?: boolean
    createdAt?: boolean
    card?: boolean | Bills$cardArgs<ExtArgs>
    merchantAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type BillsSelectScalar = {
    id?: boolean
    cardId?: boolean
    merchantAccountNumber?: boolean
    category?: boolean
    amount?: boolean
    details?: boolean
    status?: boolean
    payedAt?: boolean
    createdAt?: boolean
  }

  export type BillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | Bills$cardArgs<ExtArgs>
    merchantAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type BillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | Bills$cardArgs<ExtArgs>
    merchantAccount?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $BillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bills"
    objects: {
      card: Prisma.$CardsPayload<ExtArgs> | null
      merchantAccount: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cardId: string | null
      merchantAccountNumber: string
      category: string
      amount: number
      details: string
      status: $Enums.TransactionStatus
      payedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["bills"]>
    composites: {}
  }

  type BillsGetPayload<S extends boolean | null | undefined | BillsDefaultArgs> = $Result.GetResult<Prisma.$BillsPayload, S>

  type BillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillsCountAggregateInputType | true
    }

  export interface BillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bills'], meta: { name: 'Bills' } }
    /**
     * Find zero or one Bills that matches the filter.
     * @param {BillsFindUniqueArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillsFindUniqueArgs>(args: SelectSubset<T, BillsFindUniqueArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bills that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BillsFindUniqueOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillsFindUniqueOrThrowArgs>(args: SelectSubset<T, BillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillsFindFirstArgs>(args?: SelectSubset<T, BillsFindFirstArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillsFindFirstOrThrowArgs>(args?: SelectSubset<T, BillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bills.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billsWithIdOnly = await prisma.bills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillsFindManyArgs>(args?: SelectSubset<T, BillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bills.
     * @param {BillsCreateArgs} args - Arguments to create a Bills.
     * @example
     * // Create one Bills
     * const Bills = await prisma.bills.create({
     *   data: {
     *     // ... data to create a Bills
     *   }
     * })
     * 
     */
    create<T extends BillsCreateArgs>(args: SelectSubset<T, BillsCreateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bills.
     * @param {BillsCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillsCreateManyArgs>(args?: SelectSubset<T, BillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillsCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billsWithIdOnly = await prisma.bills.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillsCreateManyAndReturnArgs>(args?: SelectSubset<T, BillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bills.
     * @param {BillsDeleteArgs} args - Arguments to delete one Bills.
     * @example
     * // Delete one Bills
     * const Bills = await prisma.bills.delete({
     *   where: {
     *     // ... filter to delete one Bills
     *   }
     * })
     * 
     */
    delete<T extends BillsDeleteArgs>(args: SelectSubset<T, BillsDeleteArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bills.
     * @param {BillsUpdateArgs} args - Arguments to update one Bills.
     * @example
     * // Update one Bills
     * const bills = await prisma.bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillsUpdateArgs>(args: SelectSubset<T, BillsUpdateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {BillsDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillsDeleteManyArgs>(args?: SelectSubset<T, BillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillsUpdateManyArgs>(args: SelectSubset<T, BillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bills.
     * @param {BillsUpsertArgs} args - Arguments to update or create a Bills.
     * @example
     * // Update or create a Bills
     * const bills = await prisma.bills.upsert({
     *   create: {
     *     // ... data to create a Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bills we want to update
     *   }
     * })
     */
    upsert<T extends BillsUpsertArgs>(args: SelectSubset<T, BillsUpsertArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bills.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillsCountArgs>(
      args?: Subset<T, BillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillsAggregateArgs>(args: Subset<T, BillsAggregateArgs>): Prisma.PrismaPromise<GetBillsAggregateType<T>>

    /**
     * Group by Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsGroupByArgs} args - Group by arguments.
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
      T extends BillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillsGroupByArgs['orderBy'] }
        : { orderBy?: BillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bills model
   */
  readonly fields: BillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends Bills$cardArgs<ExtArgs> = {}>(args?: Subset<T, Bills$cardArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    merchantAccount<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Bills model
   */ 
  interface BillsFieldRefs {
    readonly id: FieldRef<"Bills", 'Int'>
    readonly cardId: FieldRef<"Bills", 'String'>
    readonly merchantAccountNumber: FieldRef<"Bills", 'String'>
    readonly category: FieldRef<"Bills", 'String'>
    readonly amount: FieldRef<"Bills", 'Float'>
    readonly details: FieldRef<"Bills", 'String'>
    readonly status: FieldRef<"Bills", 'TransactionStatus'>
    readonly payedAt: FieldRef<"Bills", 'DateTime'>
    readonly createdAt: FieldRef<"Bills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bills findUnique
   */
  export type BillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findUniqueOrThrow
   */
  export type BillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findFirst
   */
  export type BillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findFirstOrThrow
   */
  export type BillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findMany
   */
  export type BillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills create
   */
  export type BillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bills.
     */
    data: XOR<BillsCreateInput, BillsUncheckedCreateInput>
  }

  /**
   * Bills createMany
   */
  export type BillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillsCreateManyInput | BillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bills createManyAndReturn
   */
  export type BillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillsCreateManyInput | BillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bills update
   */
  export type BillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bills.
     */
    data: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
    /**
     * Choose, which Bills to update.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills updateMany
   */
  export type BillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillsWhereInput
  }

  /**
   * Bills upsert
   */
  export type BillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bills to update in case it exists.
     */
    where: BillsWhereUniqueInput
    /**
     * In case the Bills found by the `where` argument doesn't exist, create a new Bills with this data.
     */
    create: XOR<BillsCreateInput, BillsUncheckedCreateInput>
    /**
     * In case the Bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
  }

  /**
   * Bills delete
   */
  export type BillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter which Bills to delete.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills deleteMany
   */
  export type BillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillsWhereInput
  }

  /**
   * Bills.card
   */
  export type Bills$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    where?: CardsWhereInput
  }

  /**
   * Bills without action
   */
  export type BillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
  }


  /**
   * Model TransactionsDetails
   */

  export type AggregateTransactionsDetails = {
    _count: TransactionsDetailsCountAggregateOutputType | null
    _avg: TransactionsDetailsAvgAggregateOutputType | null
    _sum: TransactionsDetailsSumAggregateOutputType | null
    _min: TransactionsDetailsMinAggregateOutputType | null
    _max: TransactionsDetailsMaxAggregateOutputType | null
  }

  export type TransactionsDetailsAvgAggregateOutputType = {
    id: number | null
    transactionId: number | null
  }

  export type TransactionsDetailsSumAggregateOutputType = {
    id: number | null
    transactionId: number | null
  }

  export type TransactionsDetailsMinAggregateOutputType = {
    id: number | null
    transactionId: number | null
    details: string | null
  }

  export type TransactionsDetailsMaxAggregateOutputType = {
    id: number | null
    transactionId: number | null
    details: string | null
  }

  export type TransactionsDetailsCountAggregateOutputType = {
    id: number
    transactionId: number
    details: number
    _all: number
  }


  export type TransactionsDetailsAvgAggregateInputType = {
    id?: true
    transactionId?: true
  }

  export type TransactionsDetailsSumAggregateInputType = {
    id?: true
    transactionId?: true
  }

  export type TransactionsDetailsMinAggregateInputType = {
    id?: true
    transactionId?: true
    details?: true
  }

  export type TransactionsDetailsMaxAggregateInputType = {
    id?: true
    transactionId?: true
    details?: true
  }

  export type TransactionsDetailsCountAggregateInputType = {
    id?: true
    transactionId?: true
    details?: true
    _all?: true
  }

  export type TransactionsDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionsDetails to aggregate.
     */
    where?: TransactionsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionsDetails to fetch.
     */
    orderBy?: TransactionsDetailsOrderByWithRelationInput | TransactionsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionsDetails
    **/
    _count?: true | TransactionsDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsDetailsMaxAggregateInputType
  }

  export type GetTransactionsDetailsAggregateType<T extends TransactionsDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionsDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionsDetails[P]>
      : GetScalarType<T[P], AggregateTransactionsDetails[P]>
  }




  export type TransactionsDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsDetailsWhereInput
    orderBy?: TransactionsDetailsOrderByWithAggregationInput | TransactionsDetailsOrderByWithAggregationInput[]
    by: TransactionsDetailsScalarFieldEnum[] | TransactionsDetailsScalarFieldEnum
    having?: TransactionsDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsDetailsCountAggregateInputType | true
    _avg?: TransactionsDetailsAvgAggregateInputType
    _sum?: TransactionsDetailsSumAggregateInputType
    _min?: TransactionsDetailsMinAggregateInputType
    _max?: TransactionsDetailsMaxAggregateInputType
  }

  export type TransactionsDetailsGroupByOutputType = {
    id: number
    transactionId: number
    details: string
    _count: TransactionsDetailsCountAggregateOutputType | null
    _avg: TransactionsDetailsAvgAggregateOutputType | null
    _sum: TransactionsDetailsSumAggregateOutputType | null
    _min: TransactionsDetailsMinAggregateOutputType | null
    _max: TransactionsDetailsMaxAggregateOutputType | null
  }

  type GetTransactionsDetailsGroupByPayload<T extends TransactionsDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsDetailsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    details?: boolean
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionsDetails"]>

  export type TransactionsDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    details?: boolean
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionsDetails"]>

  export type TransactionsDetailsSelectScalar = {
    id?: boolean
    transactionId?: boolean
    details?: boolean
  }

  export type TransactionsDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }
  export type TransactionsDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }

  export type $TransactionsDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionsDetails"
    objects: {
      transaction: Prisma.$TransactionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionId: number
      details: string
    }, ExtArgs["result"]["transactionsDetails"]>
    composites: {}
  }

  type TransactionsDetailsGetPayload<S extends boolean | null | undefined | TransactionsDetailsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsDetailsPayload, S>

  type TransactionsDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsDetailsCountAggregateInputType | true
    }

  export interface TransactionsDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionsDetails'], meta: { name: 'TransactionsDetails' } }
    /**
     * Find zero or one TransactionsDetails that matches the filter.
     * @param {TransactionsDetailsFindUniqueArgs} args - Arguments to find a TransactionsDetails
     * @example
     * // Get one TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsDetailsFindUniqueArgs>(args: SelectSubset<T, TransactionsDetailsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TransactionsDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsDetailsFindUniqueOrThrowArgs} args - Arguments to find a TransactionsDetails
     * @example
     * // Get one TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TransactionsDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsFindFirstArgs} args - Arguments to find a TransactionsDetails
     * @example
     * // Get one TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsDetailsFindFirstArgs>(args?: SelectSubset<T, TransactionsDetailsFindFirstArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TransactionsDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsFindFirstOrThrowArgs} args - Arguments to find a TransactionsDetails
     * @example
     * // Get one TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TransactionsDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findMany()
     * 
     * // Get first 10 TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsDetailsWithIdOnly = await prisma.transactionsDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsDetailsFindManyArgs>(args?: SelectSubset<T, TransactionsDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TransactionsDetails.
     * @param {TransactionsDetailsCreateArgs} args - Arguments to create a TransactionsDetails.
     * @example
     * // Create one TransactionsDetails
     * const TransactionsDetails = await prisma.transactionsDetails.create({
     *   data: {
     *     // ... data to create a TransactionsDetails
     *   }
     * })
     * 
     */
    create<T extends TransactionsDetailsCreateArgs>(args: SelectSubset<T, TransactionsDetailsCreateArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TransactionsDetails.
     * @param {TransactionsDetailsCreateManyArgs} args - Arguments to create many TransactionsDetails.
     * @example
     * // Create many TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsDetailsCreateManyArgs>(args?: SelectSubset<T, TransactionsDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionsDetails and returns the data saved in the database.
     * @param {TransactionsDetailsCreateManyAndReturnArgs} args - Arguments to create many TransactionsDetails.
     * @example
     * // Create many TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionsDetails and only return the `id`
     * const transactionsDetailsWithIdOnly = await prisma.transactionsDetails.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TransactionsDetails.
     * @param {TransactionsDetailsDeleteArgs} args - Arguments to delete one TransactionsDetails.
     * @example
     * // Delete one TransactionsDetails
     * const TransactionsDetails = await prisma.transactionsDetails.delete({
     *   where: {
     *     // ... filter to delete one TransactionsDetails
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDetailsDeleteArgs>(args: SelectSubset<T, TransactionsDetailsDeleteArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TransactionsDetails.
     * @param {TransactionsDetailsUpdateArgs} args - Arguments to update one TransactionsDetails.
     * @example
     * // Update one TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsDetailsUpdateArgs>(args: SelectSubset<T, TransactionsDetailsUpdateArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TransactionsDetails.
     * @param {TransactionsDetailsDeleteManyArgs} args - Arguments to filter TransactionsDetails to delete.
     * @example
     * // Delete a few TransactionsDetails
     * const { count } = await prisma.transactionsDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDetailsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsDetailsUpdateManyArgs>(args: SelectSubset<T, TransactionsDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionsDetails.
     * @param {TransactionsDetailsUpsertArgs} args - Arguments to update or create a TransactionsDetails.
     * @example
     * // Update or create a TransactionsDetails
     * const transactionsDetails = await prisma.transactionsDetails.upsert({
     *   create: {
     *     // ... data to create a TransactionsDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionsDetails we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsDetailsUpsertArgs>(args: SelectSubset<T, TransactionsDetailsUpsertArgs<ExtArgs>>): Prisma__TransactionsDetailsClient<$Result.GetResult<Prisma.$TransactionsDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TransactionsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsCountArgs} args - Arguments to filter TransactionsDetails to count.
     * @example
     * // Count the number of TransactionsDetails
     * const count = await prisma.transactionsDetails.count({
     *   where: {
     *     // ... the filter for the TransactionsDetails we want to count
     *   }
     * })
    **/
    count<T extends TransactionsDetailsCountArgs>(
      args?: Subset<T, TransactionsDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsDetailsAggregateArgs>(args: Subset<T, TransactionsDetailsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsDetailsAggregateType<T>>

    /**
     * Group by TransactionsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsDetailsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsDetailsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionsDetails model
   */
  readonly fields: TransactionsDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionsDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionsDefaultArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TransactionsDetails model
   */ 
  interface TransactionsDetailsFieldRefs {
    readonly id: FieldRef<"TransactionsDetails", 'Int'>
    readonly transactionId: FieldRef<"TransactionsDetails", 'Int'>
    readonly details: FieldRef<"TransactionsDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionsDetails findUnique
   */
  export type TransactionsDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TransactionsDetails to fetch.
     */
    where: TransactionsDetailsWhereUniqueInput
  }

  /**
   * TransactionsDetails findUniqueOrThrow
   */
  export type TransactionsDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TransactionsDetails to fetch.
     */
    where: TransactionsDetailsWhereUniqueInput
  }

  /**
   * TransactionsDetails findFirst
   */
  export type TransactionsDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TransactionsDetails to fetch.
     */
    where?: TransactionsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionsDetails to fetch.
     */
    orderBy?: TransactionsDetailsOrderByWithRelationInput | TransactionsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionsDetails.
     */
    cursor?: TransactionsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionsDetails.
     */
    distinct?: TransactionsDetailsScalarFieldEnum | TransactionsDetailsScalarFieldEnum[]
  }

  /**
   * TransactionsDetails findFirstOrThrow
   */
  export type TransactionsDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TransactionsDetails to fetch.
     */
    where?: TransactionsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionsDetails to fetch.
     */
    orderBy?: TransactionsDetailsOrderByWithRelationInput | TransactionsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionsDetails.
     */
    cursor?: TransactionsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionsDetails.
     */
    distinct?: TransactionsDetailsScalarFieldEnum | TransactionsDetailsScalarFieldEnum[]
  }

  /**
   * TransactionsDetails findMany
   */
  export type TransactionsDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TransactionsDetails to fetch.
     */
    where?: TransactionsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionsDetails to fetch.
     */
    orderBy?: TransactionsDetailsOrderByWithRelationInput | TransactionsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionsDetails.
     */
    cursor?: TransactionsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionsDetails.
     */
    skip?: number
    distinct?: TransactionsDetailsScalarFieldEnum | TransactionsDetailsScalarFieldEnum[]
  }

  /**
   * TransactionsDetails create
   */
  export type TransactionsDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionsDetails.
     */
    data: XOR<TransactionsDetailsCreateInput, TransactionsDetailsUncheckedCreateInput>
  }

  /**
   * TransactionsDetails createMany
   */
  export type TransactionsDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionsDetails.
     */
    data: TransactionsDetailsCreateManyInput | TransactionsDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionsDetails createManyAndReturn
   */
  export type TransactionsDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TransactionsDetails.
     */
    data: TransactionsDetailsCreateManyInput | TransactionsDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionsDetails update
   */
  export type TransactionsDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionsDetails.
     */
    data: XOR<TransactionsDetailsUpdateInput, TransactionsDetailsUncheckedUpdateInput>
    /**
     * Choose, which TransactionsDetails to update.
     */
    where: TransactionsDetailsWhereUniqueInput
  }

  /**
   * TransactionsDetails updateMany
   */
  export type TransactionsDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionsDetails.
     */
    data: XOR<TransactionsDetailsUpdateManyMutationInput, TransactionsDetailsUncheckedUpdateManyInput>
    /**
     * Filter which TransactionsDetails to update
     */
    where?: TransactionsDetailsWhereInput
  }

  /**
   * TransactionsDetails upsert
   */
  export type TransactionsDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionsDetails to update in case it exists.
     */
    where: TransactionsDetailsWhereUniqueInput
    /**
     * In case the TransactionsDetails found by the `where` argument doesn't exist, create a new TransactionsDetails with this data.
     */
    create: XOR<TransactionsDetailsCreateInput, TransactionsDetailsUncheckedCreateInput>
    /**
     * In case the TransactionsDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsDetailsUpdateInput, TransactionsDetailsUncheckedUpdateInput>
  }

  /**
   * TransactionsDetails delete
   */
  export type TransactionsDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
    /**
     * Filter which TransactionsDetails to delete.
     */
    where: TransactionsDetailsWhereUniqueInput
  }

  /**
   * TransactionsDetails deleteMany
   */
  export type TransactionsDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionsDetails to delete
     */
    where?: TransactionsDetailsWhereInput
  }

  /**
   * TransactionsDetails without action
   */
  export type TransactionsDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsDetails
     */
    select?: TransactionsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsDetailsInclude<ExtArgs> | null
  }


  /**
   * Model MerchantCategory
   */

  export type AggregateMerchantCategory = {
    _count: MerchantCategoryCountAggregateOutputType | null
    _avg: MerchantCategoryAvgAggregateOutputType | null
    _sum: MerchantCategorySumAggregateOutputType | null
    _min: MerchantCategoryMinAggregateOutputType | null
    _max: MerchantCategoryMaxAggregateOutputType | null
  }

  export type MerchantCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchantCategorySumAggregateOutputType = {
    id: number | null
  }

  export type MerchantCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MerchantCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MerchantCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MerchantCategoryAvgAggregateInputType = {
    id?: true
  }

  export type MerchantCategorySumAggregateInputType = {
    id?: true
  }

  export type MerchantCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MerchantCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MerchantCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MerchantCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantCategory to aggregate.
     */
    where?: MerchantCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantCategories to fetch.
     */
    orderBy?: MerchantCategoryOrderByWithRelationInput | MerchantCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerchantCategories
    **/
    _count?: true | MerchantCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantCategoryMaxAggregateInputType
  }

  export type GetMerchantCategoryAggregateType<T extends MerchantCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchantCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchantCategory[P]>
      : GetScalarType<T[P], AggregateMerchantCategory[P]>
  }




  export type MerchantCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantCategoryWhereInput
    orderBy?: MerchantCategoryOrderByWithAggregationInput | MerchantCategoryOrderByWithAggregationInput[]
    by: MerchantCategoryScalarFieldEnum[] | MerchantCategoryScalarFieldEnum
    having?: MerchantCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCategoryCountAggregateInputType | true
    _avg?: MerchantCategoryAvgAggregateInputType
    _sum?: MerchantCategorySumAggregateInputType
    _min?: MerchantCategoryMinAggregateInputType
    _max?: MerchantCategoryMaxAggregateInputType
  }

  export type MerchantCategoryGroupByOutputType = {
    id: number
    name: string
    _count: MerchantCategoryCountAggregateOutputType | null
    _avg: MerchantCategoryAvgAggregateOutputType | null
    _sum: MerchantCategorySumAggregateOutputType | null
    _min: MerchantCategoryMinAggregateOutputType | null
    _max: MerchantCategoryMaxAggregateOutputType | null
  }

  type GetMerchantCategoryGroupByPayload<T extends MerchantCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MerchantCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    merchants?: boolean | MerchantCategory$merchantsArgs<ExtArgs>
    _count?: boolean | MerchantCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantCategory"]>

  export type MerchantCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["merchantCategory"]>

  export type MerchantCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MerchantCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchants?: boolean | MerchantCategory$merchantsArgs<ExtArgs>
    _count?: boolean | MerchantCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerchantCategory"
    objects: {
      merchants: Prisma.$MerchantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["merchantCategory"]>
    composites: {}
  }

  type MerchantCategoryGetPayload<S extends boolean | null | undefined | MerchantCategoryDefaultArgs> = $Result.GetResult<Prisma.$MerchantCategoryPayload, S>

  type MerchantCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCategoryCountAggregateInputType | true
    }

  export interface MerchantCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerchantCategory'], meta: { name: 'MerchantCategory' } }
    /**
     * Find zero or one MerchantCategory that matches the filter.
     * @param {MerchantCategoryFindUniqueArgs} args - Arguments to find a MerchantCategory
     * @example
     * // Get one MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantCategoryFindUniqueArgs>(args: SelectSubset<T, MerchantCategoryFindUniqueArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MerchantCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantCategoryFindUniqueOrThrowArgs} args - Arguments to find a MerchantCategory
     * @example
     * // Get one MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MerchantCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryFindFirstArgs} args - Arguments to find a MerchantCategory
     * @example
     * // Get one MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantCategoryFindFirstArgs>(args?: SelectSubset<T, MerchantCategoryFindFirstArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MerchantCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryFindFirstOrThrowArgs} args - Arguments to find a MerchantCategory
     * @example
     * // Get one MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MerchantCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerchantCategories
     * const merchantCategories = await prisma.merchantCategory.findMany()
     * 
     * // Get first 10 MerchantCategories
     * const merchantCategories = await prisma.merchantCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantCategoryWithIdOnly = await prisma.merchantCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantCategoryFindManyArgs>(args?: SelectSubset<T, MerchantCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MerchantCategory.
     * @param {MerchantCategoryCreateArgs} args - Arguments to create a MerchantCategory.
     * @example
     * // Create one MerchantCategory
     * const MerchantCategory = await prisma.merchantCategory.create({
     *   data: {
     *     // ... data to create a MerchantCategory
     *   }
     * })
     * 
     */
    create<T extends MerchantCategoryCreateArgs>(args: SelectSubset<T, MerchantCategoryCreateArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MerchantCategories.
     * @param {MerchantCategoryCreateManyArgs} args - Arguments to create many MerchantCategories.
     * @example
     * // Create many MerchantCategories
     * const merchantCategory = await prisma.merchantCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCategoryCreateManyArgs>(args?: SelectSubset<T, MerchantCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerchantCategories and returns the data saved in the database.
     * @param {MerchantCategoryCreateManyAndReturnArgs} args - Arguments to create many MerchantCategories.
     * @example
     * // Create many MerchantCategories
     * const merchantCategory = await prisma.merchantCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerchantCategories and only return the `id`
     * const merchantCategoryWithIdOnly = await prisma.merchantCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MerchantCategory.
     * @param {MerchantCategoryDeleteArgs} args - Arguments to delete one MerchantCategory.
     * @example
     * // Delete one MerchantCategory
     * const MerchantCategory = await prisma.merchantCategory.delete({
     *   where: {
     *     // ... filter to delete one MerchantCategory
     *   }
     * })
     * 
     */
    delete<T extends MerchantCategoryDeleteArgs>(args: SelectSubset<T, MerchantCategoryDeleteArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MerchantCategory.
     * @param {MerchantCategoryUpdateArgs} args - Arguments to update one MerchantCategory.
     * @example
     * // Update one MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantCategoryUpdateArgs>(args: SelectSubset<T, MerchantCategoryUpdateArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MerchantCategories.
     * @param {MerchantCategoryDeleteManyArgs} args - Arguments to filter MerchantCategories to delete.
     * @example
     * // Delete a few MerchantCategories
     * const { count } = await prisma.merchantCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantCategoryDeleteManyArgs>(args?: SelectSubset<T, MerchantCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchantCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerchantCategories
     * const merchantCategory = await prisma.merchantCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantCategoryUpdateManyArgs>(args: SelectSubset<T, MerchantCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MerchantCategory.
     * @param {MerchantCategoryUpsertArgs} args - Arguments to update or create a MerchantCategory.
     * @example
     * // Update or create a MerchantCategory
     * const merchantCategory = await prisma.merchantCategory.upsert({
     *   create: {
     *     // ... data to create a MerchantCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerchantCategory we want to update
     *   }
     * })
     */
    upsert<T extends MerchantCategoryUpsertArgs>(args: SelectSubset<T, MerchantCategoryUpsertArgs<ExtArgs>>): Prisma__MerchantCategoryClient<$Result.GetResult<Prisma.$MerchantCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MerchantCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryCountArgs} args - Arguments to filter MerchantCategories to count.
     * @example
     * // Count the number of MerchantCategories
     * const count = await prisma.merchantCategory.count({
     *   where: {
     *     // ... the filter for the MerchantCategories we want to count
     *   }
     * })
    **/
    count<T extends MerchantCategoryCountArgs>(
      args?: Subset<T, MerchantCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerchantCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantCategoryAggregateArgs>(args: Subset<T, MerchantCategoryAggregateArgs>): Prisma.PrismaPromise<GetMerchantCategoryAggregateType<T>>

    /**
     * Group by MerchantCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCategoryGroupByArgs} args - Group by arguments.
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
      T extends MerchantCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MerchantCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerchantCategory model
   */
  readonly fields: MerchantCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerchantCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchants<T extends MerchantCategory$merchantsArgs<ExtArgs> = {}>(args?: Subset<T, MerchantCategory$merchantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MerchantCategory model
   */ 
  interface MerchantCategoryFieldRefs {
    readonly id: FieldRef<"MerchantCategory", 'Int'>
    readonly name: FieldRef<"MerchantCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MerchantCategory findUnique
   */
  export type MerchantCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MerchantCategory to fetch.
     */
    where: MerchantCategoryWhereUniqueInput
  }

  /**
   * MerchantCategory findUniqueOrThrow
   */
  export type MerchantCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MerchantCategory to fetch.
     */
    where: MerchantCategoryWhereUniqueInput
  }

  /**
   * MerchantCategory findFirst
   */
  export type MerchantCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MerchantCategory to fetch.
     */
    where?: MerchantCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantCategories to fetch.
     */
    orderBy?: MerchantCategoryOrderByWithRelationInput | MerchantCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantCategories.
     */
    cursor?: MerchantCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantCategories.
     */
    distinct?: MerchantCategoryScalarFieldEnum | MerchantCategoryScalarFieldEnum[]
  }

  /**
   * MerchantCategory findFirstOrThrow
   */
  export type MerchantCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MerchantCategory to fetch.
     */
    where?: MerchantCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantCategories to fetch.
     */
    orderBy?: MerchantCategoryOrderByWithRelationInput | MerchantCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantCategories.
     */
    cursor?: MerchantCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantCategories.
     */
    distinct?: MerchantCategoryScalarFieldEnum | MerchantCategoryScalarFieldEnum[]
  }

  /**
   * MerchantCategory findMany
   */
  export type MerchantCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MerchantCategories to fetch.
     */
    where?: MerchantCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantCategories to fetch.
     */
    orderBy?: MerchantCategoryOrderByWithRelationInput | MerchantCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerchantCategories.
     */
    cursor?: MerchantCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantCategories.
     */
    skip?: number
    distinct?: MerchantCategoryScalarFieldEnum | MerchantCategoryScalarFieldEnum[]
  }

  /**
   * MerchantCategory create
   */
  export type MerchantCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MerchantCategory.
     */
    data: XOR<MerchantCategoryCreateInput, MerchantCategoryUncheckedCreateInput>
  }

  /**
   * MerchantCategory createMany
   */
  export type MerchantCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerchantCategories.
     */
    data: MerchantCategoryCreateManyInput | MerchantCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchantCategory createManyAndReturn
   */
  export type MerchantCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MerchantCategories.
     */
    data: MerchantCategoryCreateManyInput | MerchantCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchantCategory update
   */
  export type MerchantCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MerchantCategory.
     */
    data: XOR<MerchantCategoryUpdateInput, MerchantCategoryUncheckedUpdateInput>
    /**
     * Choose, which MerchantCategory to update.
     */
    where: MerchantCategoryWhereUniqueInput
  }

  /**
   * MerchantCategory updateMany
   */
  export type MerchantCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerchantCategories.
     */
    data: XOR<MerchantCategoryUpdateManyMutationInput, MerchantCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MerchantCategories to update
     */
    where?: MerchantCategoryWhereInput
  }

  /**
   * MerchantCategory upsert
   */
  export type MerchantCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MerchantCategory to update in case it exists.
     */
    where: MerchantCategoryWhereUniqueInput
    /**
     * In case the MerchantCategory found by the `where` argument doesn't exist, create a new MerchantCategory with this data.
     */
    create: XOR<MerchantCategoryCreateInput, MerchantCategoryUncheckedCreateInput>
    /**
     * In case the MerchantCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantCategoryUpdateInput, MerchantCategoryUncheckedUpdateInput>
  }

  /**
   * MerchantCategory delete
   */
  export type MerchantCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
    /**
     * Filter which MerchantCategory to delete.
     */
    where: MerchantCategoryWhereUniqueInput
  }

  /**
   * MerchantCategory deleteMany
   */
  export type MerchantCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantCategories to delete
     */
    where?: MerchantCategoryWhereInput
  }

  /**
   * MerchantCategory.merchants
   */
  export type MerchantCategory$merchantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    cursor?: MerchantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * MerchantCategory without action
   */
  export type MerchantCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCategory
     */
    select?: MerchantCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantCategoryInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    email: 'email',
    phone: 'phone',
    birth: 'birth',
    status: 'status',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    workPermit: 'workPermit'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    monthlyIncome: 'monthlyIncome'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BeneficiariesScalarFieldEnum: {
    id: 'id',
    requstUser: 'requstUser',
    acceptUser: 'acceptUser',
    accepted: 'accepted',
    createdAt: 'createdAt'
  };

  export type BeneficiariesScalarFieldEnum = (typeof BeneficiariesScalarFieldEnum)[keyof typeof BeneficiariesScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    balance: 'balance',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const CardsScalarFieldEnum: {
    id: 'id',
    cardName: 'cardName',
    accountNumber: 'accountNumber',
    balance: 'balance',
    cvv: 'cvv',
    PIN: 'PIN',
    expiryDate: 'expiryDate',
    physical: 'physical',
    createdAt: 'createdAt'
  };

  export type CardsScalarFieldEnum = (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum]


  export const CashTransactionsScalarFieldEnum: {
    id: 'id',
    supervisorId: 'supervisorId',
    accountNumber: 'accountNumber',
    type: 'type',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CashTransactionsScalarFieldEnum = (typeof CashTransactionsScalarFieldEnum)[keyof typeof CashTransactionsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    sourceAccount: 'sourceAccount',
    destinationAccount: 'destinationAccount',
    type: 'type',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const BillsScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    merchantAccountNumber: 'merchantAccountNumber',
    category: 'category',
    amount: 'amount',
    details: 'details',
    status: 'status',
    payedAt: 'payedAt',
    createdAt: 'createdAt'
  };

  export type BillsScalarFieldEnum = (typeof BillsScalarFieldEnum)[keyof typeof BillsScalarFieldEnum]


  export const TransactionsDetailsScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    details: 'details'
  };

  export type TransactionsDetailsScalarFieldEnum = (typeof TransactionsDetailsScalarFieldEnum)[keyof typeof TransactionsDetailsScalarFieldEnum]


  export const MerchantCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MerchantCategoryScalarFieldEnum = (typeof MerchantCategoryScalarFieldEnum)[keyof typeof MerchantCategoryScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'userStatus'
   */
  export type EnumuserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userStatus'>
    


  /**
   * Reference to a field of type 'userStatus[]'
   */
  export type ListEnumuserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    birth?: DateTimeFilter<"Users"> | Date | string
    status?: EnumuserStatusFilter<"Users"> | $Enums.userStatus
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    sentReq?: BeneficiariesListRelationFilter
    recvReq?: BeneficiariesListRelationFilter
    accounts?: AccountsListRelationFilter
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    cashTransactions?: CashTransactionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birth?: SortOrder
    status?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sentReq?: BeneficiariesOrderByRelationAggregateInput
    recvReq?: BeneficiariesOrderByRelationAggregateInput
    accounts?: AccountsOrderByRelationAggregateInput
    merchant?: MerchantOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    cashTransactions?: CashTransactionsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    name?: StringFilter<"Users"> | string
    birth?: DateTimeFilter<"Users"> | Date | string
    status?: EnumuserStatusFilter<"Users"> | $Enums.userStatus
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    sentReq?: BeneficiariesListRelationFilter
    recvReq?: BeneficiariesListRelationFilter
    accounts?: AccountsListRelationFilter
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    cashTransactions?: CashTransactionsListRelationFilter
  }, "id" | "email" | "phone">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birth?: SortOrder
    status?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    birth?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    status?: EnumuserStatusWithAggregatesFilter<"Users"> | $Enums.userStatus
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: IntFilter<"Merchant"> | number
    userId?: IntFilter<"Merchant"> | number
    categoryId?: IntFilter<"Merchant"> | number
    workPermit?: StringFilter<"Merchant"> | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    Category?: XOR<MerchantCategoryRelationFilter, MerchantCategoryWhereInput>
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    workPermit?: SortOrder
    user?: UsersOrderByWithRelationInput
    Category?: MerchantCategoryOrderByWithRelationInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    categoryId?: IntFilter<"Merchant"> | number
    workPermit?: StringFilter<"Merchant"> | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    Category?: XOR<MerchantCategoryRelationFilter, MerchantCategoryWhereInput>
  }, "id" | "userId">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    workPermit?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _avg?: MerchantAvgOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
    _sum?: MerchantSumOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Merchant"> | number
    userId?: IntWithAggregatesFilter<"Merchant"> | number
    categoryId?: IntWithAggregatesFilter<"Merchant"> | number
    workPermit?: StringWithAggregatesFilter<"Merchant"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    userId?: IntFilter<"Customer"> | number
    monthlyIncome?: FloatFilter<"Customer"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    monthlyIncome?: FloatFilter<"Customer"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    userId?: IntWithAggregatesFilter<"Customer"> | number
    monthlyIncome?: FloatWithAggregatesFilter<"Customer"> | number
  }

  export type BeneficiariesWhereInput = {
    AND?: BeneficiariesWhereInput | BeneficiariesWhereInput[]
    OR?: BeneficiariesWhereInput[]
    NOT?: BeneficiariesWhereInput | BeneficiariesWhereInput[]
    id?: IntFilter<"Beneficiaries"> | number
    requstUser?: IntFilter<"Beneficiaries"> | number
    acceptUser?: IntFilter<"Beneficiaries"> | number
    accepted?: BoolNullableFilter<"Beneficiaries"> | boolean | null
    createdAt?: DateTimeFilter<"Beneficiaries"> | Date | string
    userR?: XOR<UsersRelationFilter, UsersWhereInput>
    userA?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type BeneficiariesOrderByWithRelationInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
    accepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userR?: UsersOrderByWithRelationInput
    userA?: UsersOrderByWithRelationInput
  }

  export type BeneficiariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BeneficiariesWhereInput | BeneficiariesWhereInput[]
    OR?: BeneficiariesWhereInput[]
    NOT?: BeneficiariesWhereInput | BeneficiariesWhereInput[]
    requstUser?: IntFilter<"Beneficiaries"> | number
    acceptUser?: IntFilter<"Beneficiaries"> | number
    accepted?: BoolNullableFilter<"Beneficiaries"> | boolean | null
    createdAt?: DateTimeFilter<"Beneficiaries"> | Date | string
    userR?: XOR<UsersRelationFilter, UsersWhereInput>
    userA?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type BeneficiariesOrderByWithAggregationInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
    accepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BeneficiariesCountOrderByAggregateInput
    _avg?: BeneficiariesAvgOrderByAggregateInput
    _max?: BeneficiariesMaxOrderByAggregateInput
    _min?: BeneficiariesMinOrderByAggregateInput
    _sum?: BeneficiariesSumOrderByAggregateInput
  }

  export type BeneficiariesScalarWhereWithAggregatesInput = {
    AND?: BeneficiariesScalarWhereWithAggregatesInput | BeneficiariesScalarWhereWithAggregatesInput[]
    OR?: BeneficiariesScalarWhereWithAggregatesInput[]
    NOT?: BeneficiariesScalarWhereWithAggregatesInput | BeneficiariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Beneficiaries"> | number
    requstUser?: IntWithAggregatesFilter<"Beneficiaries"> | number
    acceptUser?: IntWithAggregatesFilter<"Beneficiaries"> | number
    accepted?: BoolNullableWithAggregatesFilter<"Beneficiaries"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Beneficiaries"> | Date | string
  }

  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    id?: StringFilter<"Accounts"> | string
    userId?: IntFilter<"Accounts"> | number
    name?: StringFilter<"Accounts"> | string
    balance?: FloatFilter<"Accounts"> | number
    type?: EnumAccountTypeFilter<"Accounts"> | $Enums.AccountType
    status?: EnumAccountStatusFilter<"Accounts"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    transS?: TransactionsListRelationFilter
    transD?: TransactionsListRelationFilter
    trans?: CashTransactionsListRelationFilter
    card?: CardsListRelationFilter
    bills?: BillsListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    transS?: TransactionsOrderByRelationAggregateInput
    transD?: TransactionsOrderByRelationAggregateInput
    trans?: CashTransactionsOrderByRelationAggregateInput
    card?: CardsOrderByRelationAggregateInput
    bills?: BillsOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    userId?: IntFilter<"Accounts"> | number
    name?: StringFilter<"Accounts"> | string
    balance?: FloatFilter<"Accounts"> | number
    type?: EnumAccountTypeFilter<"Accounts"> | $Enums.AccountType
    status?: EnumAccountStatusFilter<"Accounts"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    transS?: TransactionsListRelationFilter
    transD?: TransactionsListRelationFilter
    trans?: CashTransactionsListRelationFilter
    card?: CardsListRelationFilter
    bills?: BillsListRelationFilter
  }, "id">

  export type AccountsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accounts"> | string
    userId?: IntWithAggregatesFilter<"Accounts"> | number
    name?: StringWithAggregatesFilter<"Accounts"> | string
    balance?: FloatWithAggregatesFilter<"Accounts"> | number
    type?: EnumAccountTypeWithAggregatesFilter<"Accounts"> | $Enums.AccountType
    status?: EnumAccountStatusWithAggregatesFilter<"Accounts"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
  }

  export type CardsWhereInput = {
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    id?: StringFilter<"Cards"> | string
    cardName?: StringFilter<"Cards"> | string
    accountNumber?: StringFilter<"Cards"> | string
    balance?: FloatFilter<"Cards"> | number
    cvv?: IntFilter<"Cards"> | number
    PIN?: StringFilter<"Cards"> | string
    expiryDate?: DateTimeFilter<"Cards"> | Date | string
    physical?: BoolFilter<"Cards"> | boolean
    createdAt?: DateTimeFilter<"Cards"> | Date | string
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
    bills?: BillsListRelationFilter
  }

  export type CardsOrderByWithRelationInput = {
    id?: SortOrder
    cardName?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    cvv?: SortOrder
    PIN?: SortOrder
    expiryDate?: SortOrder
    physical?: SortOrder
    createdAt?: SortOrder
    account?: AccountsOrderByWithRelationInput
    bills?: BillsOrderByRelationAggregateInput
  }

  export type CardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    cardName?: StringFilter<"Cards"> | string
    accountNumber?: StringFilter<"Cards"> | string
    balance?: FloatFilter<"Cards"> | number
    cvv?: IntFilter<"Cards"> | number
    PIN?: StringFilter<"Cards"> | string
    expiryDate?: DateTimeFilter<"Cards"> | Date | string
    physical?: BoolFilter<"Cards"> | boolean
    createdAt?: DateTimeFilter<"Cards"> | Date | string
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
    bills?: BillsListRelationFilter
  }, "id">

  export type CardsOrderByWithAggregationInput = {
    id?: SortOrder
    cardName?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    cvv?: SortOrder
    PIN?: SortOrder
    expiryDate?: SortOrder
    physical?: SortOrder
    createdAt?: SortOrder
    _count?: CardsCountOrderByAggregateInput
    _avg?: CardsAvgOrderByAggregateInput
    _max?: CardsMaxOrderByAggregateInput
    _min?: CardsMinOrderByAggregateInput
    _sum?: CardsSumOrderByAggregateInput
  }

  export type CardsScalarWhereWithAggregatesInput = {
    AND?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    OR?: CardsScalarWhereWithAggregatesInput[]
    NOT?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cards"> | string
    cardName?: StringWithAggregatesFilter<"Cards"> | string
    accountNumber?: StringWithAggregatesFilter<"Cards"> | string
    balance?: FloatWithAggregatesFilter<"Cards"> | number
    cvv?: IntWithAggregatesFilter<"Cards"> | number
    PIN?: StringWithAggregatesFilter<"Cards"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"Cards"> | Date | string
    physical?: BoolWithAggregatesFilter<"Cards"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Cards"> | Date | string
  }

  export type CashTransactionsWhereInput = {
    AND?: CashTransactionsWhereInput | CashTransactionsWhereInput[]
    OR?: CashTransactionsWhereInput[]
    NOT?: CashTransactionsWhereInput | CashTransactionsWhereInput[]
    id?: IntFilter<"CashTransactions"> | number
    supervisorId?: IntFilter<"CashTransactions"> | number
    accountNumber?: StringFilter<"CashTransactions"> | string
    type?: EnumTransactionTypeFilter<"CashTransactions"> | $Enums.TransactionType
    amount?: FloatFilter<"CashTransactions"> | number
    status?: EnumTransactionStatusFilter<"CashTransactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"CashTransactions"> | Date | string
    supervisor?: XOR<UsersRelationFilter, UsersWhereInput>
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
  }

  export type CashTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    accountNumber?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    supervisor?: UsersOrderByWithRelationInput
    account?: AccountsOrderByWithRelationInput
  }

  export type CashTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CashTransactionsWhereInput | CashTransactionsWhereInput[]
    OR?: CashTransactionsWhereInput[]
    NOT?: CashTransactionsWhereInput | CashTransactionsWhereInput[]
    supervisorId?: IntFilter<"CashTransactions"> | number
    accountNumber?: StringFilter<"CashTransactions"> | string
    type?: EnumTransactionTypeFilter<"CashTransactions"> | $Enums.TransactionType
    amount?: FloatFilter<"CashTransactions"> | number
    status?: EnumTransactionStatusFilter<"CashTransactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"CashTransactions"> | Date | string
    supervisor?: XOR<UsersRelationFilter, UsersWhereInput>
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
  }, "id">

  export type CashTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    accountNumber?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CashTransactionsCountOrderByAggregateInput
    _avg?: CashTransactionsAvgOrderByAggregateInput
    _max?: CashTransactionsMaxOrderByAggregateInput
    _min?: CashTransactionsMinOrderByAggregateInput
    _sum?: CashTransactionsSumOrderByAggregateInput
  }

  export type CashTransactionsScalarWhereWithAggregatesInput = {
    AND?: CashTransactionsScalarWhereWithAggregatesInput | CashTransactionsScalarWhereWithAggregatesInput[]
    OR?: CashTransactionsScalarWhereWithAggregatesInput[]
    NOT?: CashTransactionsScalarWhereWithAggregatesInput | CashTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CashTransactions"> | number
    supervisorId?: IntWithAggregatesFilter<"CashTransactions"> | number
    accountNumber?: StringWithAggregatesFilter<"CashTransactions"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"CashTransactions"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"CashTransactions"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"CashTransactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"CashTransactions"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    sourceAccount?: StringNullableFilter<"Transactions"> | string | null
    destinationAccount?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    amount?: FloatFilter<"Transactions"> | number
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    sAccount?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    dAccount?: XOR<AccountsRelationFilter, AccountsWhereInput>
    details?: TransactionsDetailsListRelationFilter
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    sourceAccount?: SortOrderInput | SortOrder
    destinationAccount?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    sAccount?: AccountsOrderByWithRelationInput
    dAccount?: AccountsOrderByWithRelationInput
    details?: TransactionsDetailsOrderByRelationAggregateInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    sourceAccount?: StringNullableFilter<"Transactions"> | string | null
    destinationAccount?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    amount?: FloatFilter<"Transactions"> | number
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    sAccount?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    dAccount?: XOR<AccountsRelationFilter, AccountsWhereInput>
    details?: TransactionsDetailsListRelationFilter
  }, "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    sourceAccount?: SortOrderInput | SortOrder
    destinationAccount?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    sourceAccount?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    destinationAccount?: StringWithAggregatesFilter<"Transactions"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transactions"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"Transactions"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type BillsWhereInput = {
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    id?: IntFilter<"Bills"> | number
    cardId?: StringNullableFilter<"Bills"> | string | null
    merchantAccountNumber?: StringFilter<"Bills"> | string
    category?: StringFilter<"Bills"> | string
    amount?: FloatFilter<"Bills"> | number
    details?: StringFilter<"Bills"> | string
    status?: EnumTransactionStatusFilter<"Bills"> | $Enums.TransactionStatus
    payedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
    createdAt?: DateTimeFilter<"Bills"> | Date | string
    card?: XOR<CardsNullableRelationFilter, CardsWhereInput> | null
    merchantAccount?: XOR<AccountsRelationFilter, AccountsWhereInput>
  }

  export type BillsOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrderInput | SortOrder
    merchantAccountNumber?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    details?: SortOrder
    status?: SortOrder
    payedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    card?: CardsOrderByWithRelationInput
    merchantAccount?: AccountsOrderByWithRelationInput
  }

  export type BillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    cardId?: StringNullableFilter<"Bills"> | string | null
    merchantAccountNumber?: StringFilter<"Bills"> | string
    category?: StringFilter<"Bills"> | string
    amount?: FloatFilter<"Bills"> | number
    details?: StringFilter<"Bills"> | string
    status?: EnumTransactionStatusFilter<"Bills"> | $Enums.TransactionStatus
    payedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
    createdAt?: DateTimeFilter<"Bills"> | Date | string
    card?: XOR<CardsNullableRelationFilter, CardsWhereInput> | null
    merchantAccount?: XOR<AccountsRelationFilter, AccountsWhereInput>
  }, "id">

  export type BillsOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrderInput | SortOrder
    merchantAccountNumber?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    details?: SortOrder
    status?: SortOrder
    payedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BillsCountOrderByAggregateInput
    _avg?: BillsAvgOrderByAggregateInput
    _max?: BillsMaxOrderByAggregateInput
    _min?: BillsMinOrderByAggregateInput
    _sum?: BillsSumOrderByAggregateInput
  }

  export type BillsScalarWhereWithAggregatesInput = {
    AND?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    OR?: BillsScalarWhereWithAggregatesInput[]
    NOT?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bills"> | number
    cardId?: StringNullableWithAggregatesFilter<"Bills"> | string | null
    merchantAccountNumber?: StringWithAggregatesFilter<"Bills"> | string
    category?: StringWithAggregatesFilter<"Bills"> | string
    amount?: FloatWithAggregatesFilter<"Bills"> | number
    details?: StringWithAggregatesFilter<"Bills"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Bills"> | $Enums.TransactionStatus
    payedAt?: DateTimeNullableWithAggregatesFilter<"Bills"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bills"> | Date | string
  }

  export type TransactionsDetailsWhereInput = {
    AND?: TransactionsDetailsWhereInput | TransactionsDetailsWhereInput[]
    OR?: TransactionsDetailsWhereInput[]
    NOT?: TransactionsDetailsWhereInput | TransactionsDetailsWhereInput[]
    id?: IntFilter<"TransactionsDetails"> | number
    transactionId?: IntFilter<"TransactionsDetails"> | number
    details?: StringFilter<"TransactionsDetails"> | string
    transaction?: XOR<TransactionsRelationFilter, TransactionsWhereInput>
  }

  export type TransactionsDetailsOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    details?: SortOrder
    transaction?: TransactionsOrderByWithRelationInput
  }

  export type TransactionsDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsDetailsWhereInput | TransactionsDetailsWhereInput[]
    OR?: TransactionsDetailsWhereInput[]
    NOT?: TransactionsDetailsWhereInput | TransactionsDetailsWhereInput[]
    transactionId?: IntFilter<"TransactionsDetails"> | number
    details?: StringFilter<"TransactionsDetails"> | string
    transaction?: XOR<TransactionsRelationFilter, TransactionsWhereInput>
  }, "id">

  export type TransactionsDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    details?: SortOrder
    _count?: TransactionsDetailsCountOrderByAggregateInput
    _avg?: TransactionsDetailsAvgOrderByAggregateInput
    _max?: TransactionsDetailsMaxOrderByAggregateInput
    _min?: TransactionsDetailsMinOrderByAggregateInput
    _sum?: TransactionsDetailsSumOrderByAggregateInput
  }

  export type TransactionsDetailsScalarWhereWithAggregatesInput = {
    AND?: TransactionsDetailsScalarWhereWithAggregatesInput | TransactionsDetailsScalarWhereWithAggregatesInput[]
    OR?: TransactionsDetailsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsDetailsScalarWhereWithAggregatesInput | TransactionsDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionsDetails"> | number
    transactionId?: IntWithAggregatesFilter<"TransactionsDetails"> | number
    details?: StringWithAggregatesFilter<"TransactionsDetails"> | string
  }

  export type MerchantCategoryWhereInput = {
    AND?: MerchantCategoryWhereInput | MerchantCategoryWhereInput[]
    OR?: MerchantCategoryWhereInput[]
    NOT?: MerchantCategoryWhereInput | MerchantCategoryWhereInput[]
    id?: IntFilter<"MerchantCategory"> | number
    name?: StringFilter<"MerchantCategory"> | string
    merchants?: MerchantListRelationFilter
  }

  export type MerchantCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    merchants?: MerchantOrderByRelationAggregateInput
  }

  export type MerchantCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MerchantCategoryWhereInput | MerchantCategoryWhereInput[]
    OR?: MerchantCategoryWhereInput[]
    NOT?: MerchantCategoryWhereInput | MerchantCategoryWhereInput[]
    name?: StringFilter<"MerchantCategory"> | string
    merchants?: MerchantListRelationFilter
  }, "id">

  export type MerchantCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MerchantCategoryCountOrderByAggregateInput
    _avg?: MerchantCategoryAvgOrderByAggregateInput
    _max?: MerchantCategoryMaxOrderByAggregateInput
    _min?: MerchantCategoryMinOrderByAggregateInput
    _sum?: MerchantCategorySumOrderByAggregateInput
  }

  export type MerchantCategoryScalarWhereWithAggregatesInput = {
    AND?: MerchantCategoryScalarWhereWithAggregatesInput | MerchantCategoryScalarWhereWithAggregatesInput[]
    OR?: MerchantCategoryScalarWhereWithAggregatesInput[]
    NOT?: MerchantCategoryScalarWhereWithAggregatesInput | MerchantCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MerchantCategory"> | number
    name?: StringWithAggregatesFilter<"MerchantCategory"> | string
  }

  export type UsersCreateInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantCreateInput = {
    workPermit: string
    user: UsersCreateNestedOneWithoutMerchantInput
    Category: MerchantCategoryCreateNestedOneWithoutMerchantsInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    workPermit: string
  }

  export type MerchantUpdateInput = {
    workPermit?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutMerchantNestedInput
    Category?: MerchantCategoryUpdateOneRequiredWithoutMerchantsNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    workPermit?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    workPermit: string
  }

  export type MerchantUpdateManyMutationInput = {
    workPermit?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    workPermit?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    monthlyIncome: number
    user: UsersCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    userId: number
    monthlyIncome: number
  }

  export type CustomerUpdateInput = {
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerCreateManyInput = {
    id?: number
    userId: number
    monthlyIncome: number
  }

  export type CustomerUpdateManyMutationInput = {
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
  }

  export type BeneficiariesCreateInput = {
    accepted?: boolean | null
    createdAt?: Date | string
    userR: UsersCreateNestedOneWithoutSentReqInput
    userA: UsersCreateNestedOneWithoutRecvReqInput
  }

  export type BeneficiariesUncheckedCreateInput = {
    id?: number
    requstUser: number
    acceptUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type BeneficiariesUpdateInput = {
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userR?: UsersUpdateOneRequiredWithoutSentReqNestedInput
    userA?: UsersUpdateOneRequiredWithoutRecvReqNestedInput
  }

  export type BeneficiariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requstUser?: IntFieldUpdateOperationsInput | number
    acceptUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiariesCreateManyInput = {
    id?: number
    requstUser: number
    acceptUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type BeneficiariesUpdateManyMutationInput = {
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requstUser?: IntFieldUpdateOperationsInput | number
    acceptUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsCreateInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsCreateManyInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
  }

  export type AccountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateInput = {
    id: string
    cardName: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
    account: AccountsCreateNestedOneWithoutCardInput
    bills?: BillsCreateNestedManyWithoutCardInput
  }

  export type CardsUncheckedCreateInput = {
    id: string
    cardName: string
    accountNumber: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
    bills?: BillsUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountsUpdateOneRequiredWithoutCardNestedInput
    bills?: BillsUpdateManyWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillsUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardsCreateManyInput = {
    id: string
    cardName: string
    accountNumber: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
  }

  export type CardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsCreateInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    supervisor: UsersCreateNestedOneWithoutCashTransactionsInput
    account: AccountsCreateNestedOneWithoutTransInput
  }

  export type CashTransactionsUncheckedCreateInput = {
    id?: number
    supervisorId: number
    accountNumber: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CashTransactionsUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UsersUpdateOneRequiredWithoutCashTransactionsNestedInput
    account?: AccountsUpdateOneRequiredWithoutTransNestedInput
  }

  export type CashTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsCreateManyInput = {
    id?: number
    supervisorId: number
    accountNumber: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CashTransactionsUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    sAccount?: AccountsCreateNestedOneWithoutTransSInput
    dAccount: AccountsCreateNestedOneWithoutTransDInput
    details?: TransactionsDetailsCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    sourceAccount?: string | null
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    details?: TransactionsDetailsUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sAccount?: AccountsUpdateOneWithoutTransSNestedInput
    dAccount?: AccountsUpdateOneRequiredWithoutTransDNestedInput
    details?: TransactionsDetailsUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceAccount?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAccount?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TransactionsDetailsUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsCreateManyInput = {
    id?: number
    sourceAccount?: string | null
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceAccount?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAccount?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsCreateInput = {
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
    card?: CardsCreateNestedOneWithoutBillsInput
    merchantAccount: AccountsCreateNestedOneWithoutBillsInput
  }

  export type BillsUncheckedCreateInput = {
    id?: number
    cardId?: string | null
    merchantAccountNumber: string
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillsUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardsUpdateOneWithoutBillsNestedInput
    merchantAccount?: AccountsUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    merchantAccountNumber?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsCreateManyInput = {
    id?: number
    cardId?: string | null
    merchantAccountNumber: string
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillsUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    merchantAccountNumber?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsDetailsCreateInput = {
    details: string
    transaction: TransactionsCreateNestedOneWithoutDetailsInput
  }

  export type TransactionsDetailsUncheckedCreateInput = {
    id?: number
    transactionId: number
    details: string
  }

  export type TransactionsDetailsUpdateInput = {
    details?: StringFieldUpdateOperationsInput | string
    transaction?: TransactionsUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type TransactionsDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsDetailsCreateManyInput = {
    id?: number
    transactionId: number
    details: string
  }

  export type TransactionsDetailsUpdateManyMutationInput = {
    details?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCategoryCreateInput = {
    name: string
    merchants?: MerchantCreateNestedManyWithoutCategoryInput
  }

  export type MerchantCategoryUncheckedCreateInput = {
    id?: number
    name: string
    merchants?: MerchantUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MerchantCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    merchants?: MerchantUpdateManyWithoutCategoryNestedInput
  }

  export type MerchantCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    merchants?: MerchantUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MerchantCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type MerchantCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EnumuserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusFilter<$PrismaModel> | $Enums.userStatus
  }

  export type BeneficiariesListRelationFilter = {
    every?: BeneficiariesWhereInput
    some?: BeneficiariesWhereInput
    none?: BeneficiariesWhereInput
  }

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type MerchantNullableRelationFilter = {
    is?: MerchantWhereInput | null
    isNot?: MerchantWhereInput | null
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type CashTransactionsListRelationFilter = {
    every?: CashTransactionsWhereInput
    some?: CashTransactionsWhereInput
    none?: CashTransactionsWhereInput
  }

  export type BeneficiariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birth?: SortOrder
    status?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birth?: SortOrder
    status?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birth?: SortOrder
    status?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumuserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusWithAggregatesFilter<$PrismaModel> | $Enums.userStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserStatusFilter<$PrismaModel>
    _max?: NestedEnumuserStatusFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type MerchantCategoryRelationFilter = {
    is?: MerchantCategoryWhereInput
    isNot?: MerchantCategoryWhereInput
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    workPermit?: SortOrder
  }

  export type MerchantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    workPermit?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    workPermit?: SortOrder
  }

  export type MerchantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BeneficiariesCountOrderByAggregateInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type BeneficiariesAvgOrderByAggregateInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
  }

  export type BeneficiariesMaxOrderByAggregateInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type BeneficiariesMinOrderByAggregateInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type BeneficiariesSumOrderByAggregateInput = {
    id?: SortOrder
    requstUser?: SortOrder
    acceptUser?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type CardsListRelationFilter = {
    every?: CardsWhereInput
    some?: CardsWhereInput
    none?: CardsWhereInput
  }

  export type BillsListRelationFilter = {
    every?: BillsWhereInput
    some?: BillsWhereInput
    none?: BillsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountsRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type CardsCountOrderByAggregateInput = {
    id?: SortOrder
    cardName?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    cvv?: SortOrder
    PIN?: SortOrder
    expiryDate?: SortOrder
    physical?: SortOrder
    createdAt?: SortOrder
  }

  export type CardsAvgOrderByAggregateInput = {
    balance?: SortOrder
    cvv?: SortOrder
  }

  export type CardsMaxOrderByAggregateInput = {
    id?: SortOrder
    cardName?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    cvv?: SortOrder
    PIN?: SortOrder
    expiryDate?: SortOrder
    physical?: SortOrder
    createdAt?: SortOrder
  }

  export type CardsMinOrderByAggregateInput = {
    id?: SortOrder
    cardName?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    cvv?: SortOrder
    PIN?: SortOrder
    expiryDate?: SortOrder
    physical?: SortOrder
    createdAt?: SortOrder
  }

  export type CardsSumOrderByAggregateInput = {
    balance?: SortOrder
    cvv?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type CashTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    accountNumber?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CashTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    amount?: SortOrder
  }

  export type CashTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    accountNumber?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CashTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    accountNumber?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CashTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type AccountsNullableRelationFilter = {
    is?: AccountsWhereInput | null
    isNot?: AccountsWhereInput | null
  }

  export type TransactionsDetailsListRelationFilter = {
    every?: TransactionsDetailsWhereInput
    some?: TransactionsDetailsWhereInput
    none?: TransactionsDetailsWhereInput
  }

  export type TransactionsDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    sourceAccount?: SortOrder
    destinationAccount?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceAccount?: SortOrder
    destinationAccount?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    sourceAccount?: SortOrder
    destinationAccount?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CardsNullableRelationFilter = {
    is?: CardsWhereInput | null
    isNot?: CardsWhereInput | null
  }

  export type BillsCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    merchantAccountNumber?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    details?: SortOrder
    status?: SortOrder
    payedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type BillsMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    merchantAccountNumber?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    details?: SortOrder
    status?: SortOrder
    payedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillsMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    merchantAccountNumber?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    details?: SortOrder
    status?: SortOrder
    payedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
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
  }

  export type TransactionsRelationFilter = {
    is?: TransactionsWhereInput
    isNot?: TransactionsWhereInput
  }

  export type TransactionsDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    details?: SortOrder
  }

  export type TransactionsDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
  }

  export type TransactionsDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    details?: SortOrder
  }

  export type TransactionsDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    details?: SortOrder
  }

  export type TransactionsDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
  }

  export type MerchantListRelationFilter = {
    every?: MerchantWhereInput
    some?: MerchantWhereInput
    none?: MerchantWhereInput
  }

  export type MerchantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerchantCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchantCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerchantCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerchantCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BeneficiariesCreateNestedManyWithoutUserRInput = {
    create?: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput> | BeneficiariesCreateWithoutUserRInput[] | BeneficiariesUncheckedCreateWithoutUserRInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserRInput | BeneficiariesCreateOrConnectWithoutUserRInput[]
    createMany?: BeneficiariesCreateManyUserRInputEnvelope
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
  }

  export type BeneficiariesCreateNestedManyWithoutUserAInput = {
    create?: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput> | BeneficiariesCreateWithoutUserAInput[] | BeneficiariesUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserAInput | BeneficiariesCreateOrConnectWithoutUserAInput[]
    createMany?: BeneficiariesCreateManyUserAInputEnvelope
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
  }

  export type AccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type MerchantCreateNestedOneWithoutUserInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    connect?: MerchantWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type CashTransactionsCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput> | CashTransactionsCreateWithoutSupervisorInput[] | CashTransactionsUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutSupervisorInput | CashTransactionsCreateOrConnectWithoutSupervisorInput[]
    createMany?: CashTransactionsCreateManySupervisorInputEnvelope
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
  }

  export type BeneficiariesUncheckedCreateNestedManyWithoutUserRInput = {
    create?: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput> | BeneficiariesCreateWithoutUserRInput[] | BeneficiariesUncheckedCreateWithoutUserRInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserRInput | BeneficiariesCreateOrConnectWithoutUserRInput[]
    createMany?: BeneficiariesCreateManyUserRInputEnvelope
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
  }

  export type BeneficiariesUncheckedCreateNestedManyWithoutUserAInput = {
    create?: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput> | BeneficiariesCreateWithoutUserAInput[] | BeneficiariesUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserAInput | BeneficiariesCreateOrConnectWithoutUserAInput[]
    createMany?: BeneficiariesCreateManyUserAInputEnvelope
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
  }

  export type AccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type MerchantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    connect?: MerchantWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput> | CashTransactionsCreateWithoutSupervisorInput[] | CashTransactionsUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutSupervisorInput | CashTransactionsCreateOrConnectWithoutSupervisorInput[]
    createMany?: CashTransactionsCreateManySupervisorInputEnvelope
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumuserStatusFieldUpdateOperationsInput = {
    set?: $Enums.userStatus
  }

  export type BeneficiariesUpdateManyWithoutUserRNestedInput = {
    create?: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput> | BeneficiariesCreateWithoutUserRInput[] | BeneficiariesUncheckedCreateWithoutUserRInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserRInput | BeneficiariesCreateOrConnectWithoutUserRInput[]
    upsert?: BeneficiariesUpsertWithWhereUniqueWithoutUserRInput | BeneficiariesUpsertWithWhereUniqueWithoutUserRInput[]
    createMany?: BeneficiariesCreateManyUserRInputEnvelope
    set?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    disconnect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    delete?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    update?: BeneficiariesUpdateWithWhereUniqueWithoutUserRInput | BeneficiariesUpdateWithWhereUniqueWithoutUserRInput[]
    updateMany?: BeneficiariesUpdateManyWithWhereWithoutUserRInput | BeneficiariesUpdateManyWithWhereWithoutUserRInput[]
    deleteMany?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
  }

  export type BeneficiariesUpdateManyWithoutUserANestedInput = {
    create?: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput> | BeneficiariesCreateWithoutUserAInput[] | BeneficiariesUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserAInput | BeneficiariesCreateOrConnectWithoutUserAInput[]
    upsert?: BeneficiariesUpsertWithWhereUniqueWithoutUserAInput | BeneficiariesUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: BeneficiariesCreateManyUserAInputEnvelope
    set?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    disconnect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    delete?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    update?: BeneficiariesUpdateWithWhereUniqueWithoutUserAInput | BeneficiariesUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: BeneficiariesUpdateManyWithWhereWithoutUserAInput | BeneficiariesUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
  }

  export type AccountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type MerchantUpdateOneWithoutUserNestedInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    upsert?: MerchantUpsertWithoutUserInput
    disconnect?: MerchantWhereInput | boolean
    delete?: MerchantWhereInput | boolean
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutUserInput, MerchantUpdateWithoutUserInput>, MerchantUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CashTransactionsUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput> | CashTransactionsCreateWithoutSupervisorInput[] | CashTransactionsUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutSupervisorInput | CashTransactionsCreateOrConnectWithoutSupervisorInput[]
    upsert?: CashTransactionsUpsertWithWhereUniqueWithoutSupervisorInput | CashTransactionsUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CashTransactionsCreateManySupervisorInputEnvelope
    set?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    disconnect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    delete?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    update?: CashTransactionsUpdateWithWhereUniqueWithoutSupervisorInput | CashTransactionsUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CashTransactionsUpdateManyWithWhereWithoutSupervisorInput | CashTransactionsUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput = {
    create?: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput> | BeneficiariesCreateWithoutUserRInput[] | BeneficiariesUncheckedCreateWithoutUserRInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserRInput | BeneficiariesCreateOrConnectWithoutUserRInput[]
    upsert?: BeneficiariesUpsertWithWhereUniqueWithoutUserRInput | BeneficiariesUpsertWithWhereUniqueWithoutUserRInput[]
    createMany?: BeneficiariesCreateManyUserRInputEnvelope
    set?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    disconnect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    delete?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    update?: BeneficiariesUpdateWithWhereUniqueWithoutUserRInput | BeneficiariesUpdateWithWhereUniqueWithoutUserRInput[]
    updateMany?: BeneficiariesUpdateManyWithWhereWithoutUserRInput | BeneficiariesUpdateManyWithWhereWithoutUserRInput[]
    deleteMany?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
  }

  export type BeneficiariesUncheckedUpdateManyWithoutUserANestedInput = {
    create?: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput> | BeneficiariesCreateWithoutUserAInput[] | BeneficiariesUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: BeneficiariesCreateOrConnectWithoutUserAInput | BeneficiariesCreateOrConnectWithoutUserAInput[]
    upsert?: BeneficiariesUpsertWithWhereUniqueWithoutUserAInput | BeneficiariesUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: BeneficiariesCreateManyUserAInputEnvelope
    set?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    disconnect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    delete?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    connect?: BeneficiariesWhereUniqueInput | BeneficiariesWhereUniqueInput[]
    update?: BeneficiariesUpdateWithWhereUniqueWithoutUserAInput | BeneficiariesUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: BeneficiariesUpdateManyWithWhereWithoutUserAInput | BeneficiariesUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
  }

  export type AccountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type MerchantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    upsert?: MerchantUpsertWithoutUserInput
    disconnect?: MerchantWhereInput | boolean
    delete?: MerchantWhereInput | boolean
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutUserInput, MerchantUpdateWithoutUserInput>, MerchantUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput> | CashTransactionsCreateWithoutSupervisorInput[] | CashTransactionsUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutSupervisorInput | CashTransactionsCreateOrConnectWithoutSupervisorInput[]
    upsert?: CashTransactionsUpsertWithWhereUniqueWithoutSupervisorInput | CashTransactionsUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CashTransactionsCreateManySupervisorInputEnvelope
    set?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    disconnect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    delete?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    update?: CashTransactionsUpdateWithWhereUniqueWithoutSupervisorInput | CashTransactionsUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CashTransactionsUpdateManyWithWhereWithoutSupervisorInput | CashTransactionsUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutMerchantInput = {
    create?: XOR<UsersCreateWithoutMerchantInput, UsersUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMerchantInput
    connect?: UsersWhereUniqueInput
  }

  export type MerchantCategoryCreateNestedOneWithoutMerchantsInput = {
    create?: XOR<MerchantCategoryCreateWithoutMerchantsInput, MerchantCategoryUncheckedCreateWithoutMerchantsInput>
    connectOrCreate?: MerchantCategoryCreateOrConnectWithoutMerchantsInput
    connect?: MerchantCategoryWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMerchantNestedInput = {
    create?: XOR<UsersCreateWithoutMerchantInput, UsersUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMerchantInput
    upsert?: UsersUpsertWithoutMerchantInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMerchantInput, UsersUpdateWithoutMerchantInput>, UsersUncheckedUpdateWithoutMerchantInput>
  }

  export type MerchantCategoryUpdateOneRequiredWithoutMerchantsNestedInput = {
    create?: XOR<MerchantCategoryCreateWithoutMerchantsInput, MerchantCategoryUncheckedCreateWithoutMerchantsInput>
    connectOrCreate?: MerchantCategoryCreateOrConnectWithoutMerchantsInput
    upsert?: MerchantCategoryUpsertWithoutMerchantsInput
    connect?: MerchantCategoryWhereUniqueInput
    update?: XOR<XOR<MerchantCategoryUpdateToOneWithWhereWithoutMerchantsInput, MerchantCategoryUpdateWithoutMerchantsInput>, MerchantCategoryUncheckedUpdateWithoutMerchantsInput>
  }

  export type UsersCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UsersCreateWithoutCustomerInput, UsersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCustomerInput
    connect?: UsersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UsersCreateWithoutCustomerInput, UsersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCustomerInput
    upsert?: UsersUpsertWithoutCustomerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCustomerInput, UsersUpdateWithoutCustomerInput>, UsersUncheckedUpdateWithoutCustomerInput>
  }

  export type UsersCreateNestedOneWithoutSentReqInput = {
    create?: XOR<UsersCreateWithoutSentReqInput, UsersUncheckedCreateWithoutSentReqInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentReqInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutRecvReqInput = {
    create?: XOR<UsersCreateWithoutRecvReqInput, UsersUncheckedCreateWithoutRecvReqInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecvReqInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdateOneRequiredWithoutSentReqNestedInput = {
    create?: XOR<UsersCreateWithoutSentReqInput, UsersUncheckedCreateWithoutSentReqInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentReqInput
    upsert?: UsersUpsertWithoutSentReqInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSentReqInput, UsersUpdateWithoutSentReqInput>, UsersUncheckedUpdateWithoutSentReqInput>
  }

  export type UsersUpdateOneRequiredWithoutRecvReqNestedInput = {
    create?: XOR<UsersCreateWithoutRecvReqInput, UsersUncheckedCreateWithoutRecvReqInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecvReqInput
    upsert?: UsersUpsertWithoutRecvReqInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRecvReqInput, UsersUpdateWithoutRecvReqInput>, UsersUncheckedUpdateWithoutRecvReqInput>
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutSAccountInput = {
    create?: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput> | TransactionsCreateWithoutSAccountInput[] | TransactionsUncheckedCreateWithoutSAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSAccountInput | TransactionsCreateOrConnectWithoutSAccountInput[]
    createMany?: TransactionsCreateManySAccountInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutDAccountInput = {
    create?: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput> | TransactionsCreateWithoutDAccountInput[] | TransactionsUncheckedCreateWithoutDAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutDAccountInput | TransactionsCreateOrConnectWithoutDAccountInput[]
    createMany?: TransactionsCreateManyDAccountInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type CashTransactionsCreateNestedManyWithoutAccountInput = {
    create?: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput> | CashTransactionsCreateWithoutAccountInput[] | CashTransactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutAccountInput | CashTransactionsCreateOrConnectWithoutAccountInput[]
    createMany?: CashTransactionsCreateManyAccountInputEnvelope
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
  }

  export type CardsCreateNestedManyWithoutAccountInput = {
    create?: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput> | CardsCreateWithoutAccountInput[] | CardsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutAccountInput | CardsCreateOrConnectWithoutAccountInput[]
    createMany?: CardsCreateManyAccountInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type BillsCreateNestedManyWithoutMerchantAccountInput = {
    create?: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput> | BillsCreateWithoutMerchantAccountInput[] | BillsUncheckedCreateWithoutMerchantAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutMerchantAccountInput | BillsCreateOrConnectWithoutMerchantAccountInput[]
    createMany?: BillsCreateManyMerchantAccountInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutSAccountInput = {
    create?: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput> | TransactionsCreateWithoutSAccountInput[] | TransactionsUncheckedCreateWithoutSAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSAccountInput | TransactionsCreateOrConnectWithoutSAccountInput[]
    createMany?: TransactionsCreateManySAccountInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutDAccountInput = {
    create?: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput> | TransactionsCreateWithoutDAccountInput[] | TransactionsUncheckedCreateWithoutDAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutDAccountInput | TransactionsCreateOrConnectWithoutDAccountInput[]
    createMany?: TransactionsCreateManyDAccountInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type CashTransactionsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput> | CashTransactionsCreateWithoutAccountInput[] | CashTransactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutAccountInput | CashTransactionsCreateOrConnectWithoutAccountInput[]
    createMany?: CashTransactionsCreateManyAccountInputEnvelope
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
  }

  export type CardsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput> | CardsCreateWithoutAccountInput[] | CardsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutAccountInput | CardsCreateOrConnectWithoutAccountInput[]
    createMany?: CardsCreateManyAccountInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutMerchantAccountInput = {
    create?: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput> | BillsCreateWithoutMerchantAccountInput[] | BillsUncheckedCreateWithoutMerchantAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutMerchantAccountInput | BillsCreateOrConnectWithoutMerchantAccountInput[]
    createMany?: BillsCreateManyMerchantAccountInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type UsersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    upsert?: UsersUpsertWithoutAccountsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccountsInput, UsersUpdateWithoutAccountsInput>, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type TransactionsUpdateManyWithoutSAccountNestedInput = {
    create?: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput> | TransactionsCreateWithoutSAccountInput[] | TransactionsUncheckedCreateWithoutSAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSAccountInput | TransactionsCreateOrConnectWithoutSAccountInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutSAccountInput | TransactionsUpsertWithWhereUniqueWithoutSAccountInput[]
    createMany?: TransactionsCreateManySAccountInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutSAccountInput | TransactionsUpdateWithWhereUniqueWithoutSAccountInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutSAccountInput | TransactionsUpdateManyWithWhereWithoutSAccountInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutDAccountNestedInput = {
    create?: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput> | TransactionsCreateWithoutDAccountInput[] | TransactionsUncheckedCreateWithoutDAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutDAccountInput | TransactionsCreateOrConnectWithoutDAccountInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutDAccountInput | TransactionsUpsertWithWhereUniqueWithoutDAccountInput[]
    createMany?: TransactionsCreateManyDAccountInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutDAccountInput | TransactionsUpdateWithWhereUniqueWithoutDAccountInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutDAccountInput | TransactionsUpdateManyWithWhereWithoutDAccountInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type CashTransactionsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput> | CashTransactionsCreateWithoutAccountInput[] | CashTransactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutAccountInput | CashTransactionsCreateOrConnectWithoutAccountInput[]
    upsert?: CashTransactionsUpsertWithWhereUniqueWithoutAccountInput | CashTransactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CashTransactionsCreateManyAccountInputEnvelope
    set?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    disconnect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    delete?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    update?: CashTransactionsUpdateWithWhereUniqueWithoutAccountInput | CashTransactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CashTransactionsUpdateManyWithWhereWithoutAccountInput | CashTransactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
  }

  export type CardsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput> | CardsCreateWithoutAccountInput[] | CardsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutAccountInput | CardsCreateOrConnectWithoutAccountInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutAccountInput | CardsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CardsCreateManyAccountInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutAccountInput | CardsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutAccountInput | CardsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type BillsUpdateManyWithoutMerchantAccountNestedInput = {
    create?: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput> | BillsCreateWithoutMerchantAccountInput[] | BillsUncheckedCreateWithoutMerchantAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutMerchantAccountInput | BillsCreateOrConnectWithoutMerchantAccountInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutMerchantAccountInput | BillsUpsertWithWhereUniqueWithoutMerchantAccountInput[]
    createMany?: BillsCreateManyMerchantAccountInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutMerchantAccountInput | BillsUpdateWithWhereUniqueWithoutMerchantAccountInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutMerchantAccountInput | BillsUpdateManyWithWhereWithoutMerchantAccountInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutSAccountNestedInput = {
    create?: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput> | TransactionsCreateWithoutSAccountInput[] | TransactionsUncheckedCreateWithoutSAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSAccountInput | TransactionsCreateOrConnectWithoutSAccountInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutSAccountInput | TransactionsUpsertWithWhereUniqueWithoutSAccountInput[]
    createMany?: TransactionsCreateManySAccountInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutSAccountInput | TransactionsUpdateWithWhereUniqueWithoutSAccountInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutSAccountInput | TransactionsUpdateManyWithWhereWithoutSAccountInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutDAccountNestedInput = {
    create?: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput> | TransactionsCreateWithoutDAccountInput[] | TransactionsUncheckedCreateWithoutDAccountInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutDAccountInput | TransactionsCreateOrConnectWithoutDAccountInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutDAccountInput | TransactionsUpsertWithWhereUniqueWithoutDAccountInput[]
    createMany?: TransactionsCreateManyDAccountInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutDAccountInput | TransactionsUpdateWithWhereUniqueWithoutDAccountInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutDAccountInput | TransactionsUpdateManyWithWhereWithoutDAccountInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput> | CashTransactionsCreateWithoutAccountInput[] | CashTransactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CashTransactionsCreateOrConnectWithoutAccountInput | CashTransactionsCreateOrConnectWithoutAccountInput[]
    upsert?: CashTransactionsUpsertWithWhereUniqueWithoutAccountInput | CashTransactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CashTransactionsCreateManyAccountInputEnvelope
    set?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    disconnect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    delete?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    connect?: CashTransactionsWhereUniqueInput | CashTransactionsWhereUniqueInput[]
    update?: CashTransactionsUpdateWithWhereUniqueWithoutAccountInput | CashTransactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CashTransactionsUpdateManyWithWhereWithoutAccountInput | CashTransactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
  }

  export type CardsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput> | CardsCreateWithoutAccountInput[] | CardsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutAccountInput | CardsCreateOrConnectWithoutAccountInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutAccountInput | CardsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CardsCreateManyAccountInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutAccountInput | CardsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutAccountInput | CardsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput = {
    create?: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput> | BillsCreateWithoutMerchantAccountInput[] | BillsUncheckedCreateWithoutMerchantAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutMerchantAccountInput | BillsCreateOrConnectWithoutMerchantAccountInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutMerchantAccountInput | BillsUpsertWithWhereUniqueWithoutMerchantAccountInput[]
    createMany?: BillsCreateManyMerchantAccountInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutMerchantAccountInput | BillsUpdateWithWhereUniqueWithoutMerchantAccountInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutMerchantAccountInput | BillsUpdateManyWithWhereWithoutMerchantAccountInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type AccountsCreateNestedOneWithoutCardInput = {
    create?: XOR<AccountsCreateWithoutCardInput, AccountsUncheckedCreateWithoutCardInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutCardInput
    connect?: AccountsWhereUniqueInput
  }

  export type BillsCreateNestedManyWithoutCardInput = {
    create?: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput> | BillsCreateWithoutCardInput[] | BillsUncheckedCreateWithoutCardInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCardInput | BillsCreateOrConnectWithoutCardInput[]
    createMany?: BillsCreateManyCardInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput> | BillsCreateWithoutCardInput[] | BillsUncheckedCreateWithoutCardInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCardInput | BillsCreateOrConnectWithoutCardInput[]
    createMany?: BillsCreateManyCardInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountsUpdateOneRequiredWithoutCardNestedInput = {
    create?: XOR<AccountsCreateWithoutCardInput, AccountsUncheckedCreateWithoutCardInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutCardInput
    upsert?: AccountsUpsertWithoutCardInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutCardInput, AccountsUpdateWithoutCardInput>, AccountsUncheckedUpdateWithoutCardInput>
  }

  export type BillsUpdateManyWithoutCardNestedInput = {
    create?: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput> | BillsCreateWithoutCardInput[] | BillsUncheckedCreateWithoutCardInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCardInput | BillsCreateOrConnectWithoutCardInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutCardInput | BillsUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: BillsCreateManyCardInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutCardInput | BillsUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutCardInput | BillsUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput> | BillsCreateWithoutCardInput[] | BillsUncheckedCreateWithoutCardInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCardInput | BillsCreateOrConnectWithoutCardInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutCardInput | BillsUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: BillsCreateManyCardInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutCardInput | BillsUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutCardInput | BillsUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCashTransactionsInput = {
    create?: XOR<UsersCreateWithoutCashTransactionsInput, UsersUncheckedCreateWithoutCashTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCashTransactionsInput
    connect?: UsersWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutTransInput = {
    create?: XOR<AccountsCreateWithoutTransInput, AccountsUncheckedCreateWithoutTransInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransInput
    connect?: AccountsWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UsersUpdateOneRequiredWithoutCashTransactionsNestedInput = {
    create?: XOR<UsersCreateWithoutCashTransactionsInput, UsersUncheckedCreateWithoutCashTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCashTransactionsInput
    upsert?: UsersUpsertWithoutCashTransactionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCashTransactionsInput, UsersUpdateWithoutCashTransactionsInput>, UsersUncheckedUpdateWithoutCashTransactionsInput>
  }

  export type AccountsUpdateOneRequiredWithoutTransNestedInput = {
    create?: XOR<AccountsCreateWithoutTransInput, AccountsUncheckedCreateWithoutTransInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransInput
    upsert?: AccountsUpsertWithoutTransInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTransInput, AccountsUpdateWithoutTransInput>, AccountsUncheckedUpdateWithoutTransInput>
  }

  export type AccountsCreateNestedOneWithoutTransSInput = {
    create?: XOR<AccountsCreateWithoutTransSInput, AccountsUncheckedCreateWithoutTransSInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransSInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutTransDInput = {
    create?: XOR<AccountsCreateWithoutTransDInput, AccountsUncheckedCreateWithoutTransDInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransDInput
    connect?: AccountsWhereUniqueInput
  }

  export type TransactionsDetailsCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput> | TransactionsDetailsCreateWithoutTransactionInput[] | TransactionsDetailsUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionsDetailsCreateOrConnectWithoutTransactionInput | TransactionsDetailsCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionsDetailsCreateManyTransactionInputEnvelope
    connect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
  }

  export type TransactionsDetailsUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput> | TransactionsDetailsCreateWithoutTransactionInput[] | TransactionsDetailsUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionsDetailsCreateOrConnectWithoutTransactionInput | TransactionsDetailsCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionsDetailsCreateManyTransactionInputEnvelope
    connect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
  }

  export type AccountsUpdateOneWithoutTransSNestedInput = {
    create?: XOR<AccountsCreateWithoutTransSInput, AccountsUncheckedCreateWithoutTransSInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransSInput
    upsert?: AccountsUpsertWithoutTransSInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTransSInput, AccountsUpdateWithoutTransSInput>, AccountsUncheckedUpdateWithoutTransSInput>
  }

  export type AccountsUpdateOneRequiredWithoutTransDNestedInput = {
    create?: XOR<AccountsCreateWithoutTransDInput, AccountsUncheckedCreateWithoutTransDInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransDInput
    upsert?: AccountsUpsertWithoutTransDInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTransDInput, AccountsUpdateWithoutTransDInput>, AccountsUncheckedUpdateWithoutTransDInput>
  }

  export type TransactionsDetailsUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput> | TransactionsDetailsCreateWithoutTransactionInput[] | TransactionsDetailsUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionsDetailsCreateOrConnectWithoutTransactionInput | TransactionsDetailsCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionsDetailsUpsertWithWhereUniqueWithoutTransactionInput | TransactionsDetailsUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionsDetailsCreateManyTransactionInputEnvelope
    set?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    disconnect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    delete?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    connect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    update?: TransactionsDetailsUpdateWithWhereUniqueWithoutTransactionInput | TransactionsDetailsUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionsDetailsUpdateManyWithWhereWithoutTransactionInput | TransactionsDetailsUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionsDetailsScalarWhereInput | TransactionsDetailsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TransactionsDetailsUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput> | TransactionsDetailsCreateWithoutTransactionInput[] | TransactionsDetailsUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionsDetailsCreateOrConnectWithoutTransactionInput | TransactionsDetailsCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionsDetailsUpsertWithWhereUniqueWithoutTransactionInput | TransactionsDetailsUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionsDetailsCreateManyTransactionInputEnvelope
    set?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    disconnect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    delete?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    connect?: TransactionsDetailsWhereUniqueInput | TransactionsDetailsWhereUniqueInput[]
    update?: TransactionsDetailsUpdateWithWhereUniqueWithoutTransactionInput | TransactionsDetailsUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionsDetailsUpdateManyWithWhereWithoutTransactionInput | TransactionsDetailsUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionsDetailsScalarWhereInput | TransactionsDetailsScalarWhereInput[]
  }

  export type CardsCreateNestedOneWithoutBillsInput = {
    create?: XOR<CardsCreateWithoutBillsInput, CardsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CardsCreateOrConnectWithoutBillsInput
    connect?: CardsWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutBillsInput = {
    create?: XOR<AccountsCreateWithoutBillsInput, AccountsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutBillsInput
    connect?: AccountsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CardsUpdateOneWithoutBillsNestedInput = {
    create?: XOR<CardsCreateWithoutBillsInput, CardsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CardsCreateOrConnectWithoutBillsInput
    upsert?: CardsUpsertWithoutBillsInput
    disconnect?: CardsWhereInput | boolean
    delete?: CardsWhereInput | boolean
    connect?: CardsWhereUniqueInput
    update?: XOR<XOR<CardsUpdateToOneWithWhereWithoutBillsInput, CardsUpdateWithoutBillsInput>, CardsUncheckedUpdateWithoutBillsInput>
  }

  export type AccountsUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<AccountsCreateWithoutBillsInput, AccountsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutBillsInput
    upsert?: AccountsUpsertWithoutBillsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutBillsInput, AccountsUpdateWithoutBillsInput>, AccountsUncheckedUpdateWithoutBillsInput>
  }

  export type TransactionsCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TransactionsCreateWithoutDetailsInput, TransactionsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutDetailsInput
    connect?: TransactionsWhereUniqueInput
  }

  export type TransactionsUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TransactionsCreateWithoutDetailsInput, TransactionsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutDetailsInput
    upsert?: TransactionsUpsertWithoutDetailsInput
    connect?: TransactionsWhereUniqueInput
    update?: XOR<XOR<TransactionsUpdateToOneWithWhereWithoutDetailsInput, TransactionsUpdateWithoutDetailsInput>, TransactionsUncheckedUpdateWithoutDetailsInput>
  }

  export type MerchantCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput> | MerchantCreateWithoutCategoryInput[] | MerchantUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MerchantCreateOrConnectWithoutCategoryInput | MerchantCreateOrConnectWithoutCategoryInput[]
    createMany?: MerchantCreateManyCategoryInputEnvelope
    connect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
  }

  export type MerchantUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput> | MerchantCreateWithoutCategoryInput[] | MerchantUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MerchantCreateOrConnectWithoutCategoryInput | MerchantCreateOrConnectWithoutCategoryInput[]
    createMany?: MerchantCreateManyCategoryInputEnvelope
    connect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
  }

  export type MerchantUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput> | MerchantCreateWithoutCategoryInput[] | MerchantUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MerchantCreateOrConnectWithoutCategoryInput | MerchantCreateOrConnectWithoutCategoryInput[]
    upsert?: MerchantUpsertWithWhereUniqueWithoutCategoryInput | MerchantUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MerchantCreateManyCategoryInputEnvelope
    set?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    disconnect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    delete?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    connect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    update?: MerchantUpdateWithWhereUniqueWithoutCategoryInput | MerchantUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MerchantUpdateManyWithWhereWithoutCategoryInput | MerchantUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MerchantScalarWhereInput | MerchantScalarWhereInput[]
  }

  export type MerchantUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput> | MerchantCreateWithoutCategoryInput[] | MerchantUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MerchantCreateOrConnectWithoutCategoryInput | MerchantCreateOrConnectWithoutCategoryInput[]
    upsert?: MerchantUpsertWithWhereUniqueWithoutCategoryInput | MerchantUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MerchantCreateManyCategoryInputEnvelope
    set?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    disconnect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    delete?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    connect?: MerchantWhereUniqueInput | MerchantWhereUniqueInput[]
    update?: MerchantUpdateWithWhereUniqueWithoutCategoryInput | MerchantUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MerchantUpdateManyWithWhereWithoutCategoryInput | MerchantUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MerchantScalarWhereInput | MerchantScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumuserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusFilter<$PrismaModel> | $Enums.userStatus
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumuserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusWithAggregatesFilter<$PrismaModel> | $Enums.userStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserStatusFilter<$PrismaModel>
    _max?: NestedEnumuserStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type BeneficiariesCreateWithoutUserRInput = {
    accepted?: boolean | null
    createdAt?: Date | string
    userA: UsersCreateNestedOneWithoutRecvReqInput
  }

  export type BeneficiariesUncheckedCreateWithoutUserRInput = {
    id?: number
    acceptUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type BeneficiariesCreateOrConnectWithoutUserRInput = {
    where: BeneficiariesWhereUniqueInput
    create: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput>
  }

  export type BeneficiariesCreateManyUserRInputEnvelope = {
    data: BeneficiariesCreateManyUserRInput | BeneficiariesCreateManyUserRInput[]
    skipDuplicates?: boolean
  }

  export type BeneficiariesCreateWithoutUserAInput = {
    accepted?: boolean | null
    createdAt?: Date | string
    userR: UsersCreateNestedOneWithoutSentReqInput
  }

  export type BeneficiariesUncheckedCreateWithoutUserAInput = {
    id?: number
    requstUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type BeneficiariesCreateOrConnectWithoutUserAInput = {
    where: BeneficiariesWhereUniqueInput
    create: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput>
  }

  export type BeneficiariesCreateManyUserAInputEnvelope = {
    data: BeneficiariesCreateManyUserAInput | BeneficiariesCreateManyUserAInput[]
    skipDuplicates?: boolean
  }

  export type AccountsCreateWithoutUserInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsCreateOrConnectWithoutUserInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsCreateManyUserInputEnvelope = {
    data: AccountsCreateManyUserInput | AccountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MerchantCreateWithoutUserInput = {
    workPermit: string
    Category: MerchantCategoryCreateNestedOneWithoutMerchantsInput
  }

  export type MerchantUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    workPermit: string
  }

  export type MerchantCreateOrConnectWithoutUserInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateWithoutUserInput = {
    monthlyIncome: number
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: number
    monthlyIncome: number
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CashTransactionsCreateWithoutSupervisorInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    account: AccountsCreateNestedOneWithoutTransInput
  }

  export type CashTransactionsUncheckedCreateWithoutSupervisorInput = {
    id?: number
    accountNumber: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CashTransactionsCreateOrConnectWithoutSupervisorInput = {
    where: CashTransactionsWhereUniqueInput
    create: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput>
  }

  export type CashTransactionsCreateManySupervisorInputEnvelope = {
    data: CashTransactionsCreateManySupervisorInput | CashTransactionsCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type BeneficiariesUpsertWithWhereUniqueWithoutUserRInput = {
    where: BeneficiariesWhereUniqueInput
    update: XOR<BeneficiariesUpdateWithoutUserRInput, BeneficiariesUncheckedUpdateWithoutUserRInput>
    create: XOR<BeneficiariesCreateWithoutUserRInput, BeneficiariesUncheckedCreateWithoutUserRInput>
  }

  export type BeneficiariesUpdateWithWhereUniqueWithoutUserRInput = {
    where: BeneficiariesWhereUniqueInput
    data: XOR<BeneficiariesUpdateWithoutUserRInput, BeneficiariesUncheckedUpdateWithoutUserRInput>
  }

  export type BeneficiariesUpdateManyWithWhereWithoutUserRInput = {
    where: BeneficiariesScalarWhereInput
    data: XOR<BeneficiariesUpdateManyMutationInput, BeneficiariesUncheckedUpdateManyWithoutUserRInput>
  }

  export type BeneficiariesScalarWhereInput = {
    AND?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
    OR?: BeneficiariesScalarWhereInput[]
    NOT?: BeneficiariesScalarWhereInput | BeneficiariesScalarWhereInput[]
    id?: IntFilter<"Beneficiaries"> | number
    requstUser?: IntFilter<"Beneficiaries"> | number
    acceptUser?: IntFilter<"Beneficiaries"> | number
    accepted?: BoolNullableFilter<"Beneficiaries"> | boolean | null
    createdAt?: DateTimeFilter<"Beneficiaries"> | Date | string
  }

  export type BeneficiariesUpsertWithWhereUniqueWithoutUserAInput = {
    where: BeneficiariesWhereUniqueInput
    update: XOR<BeneficiariesUpdateWithoutUserAInput, BeneficiariesUncheckedUpdateWithoutUserAInput>
    create: XOR<BeneficiariesCreateWithoutUserAInput, BeneficiariesUncheckedCreateWithoutUserAInput>
  }

  export type BeneficiariesUpdateWithWhereUniqueWithoutUserAInput = {
    where: BeneficiariesWhereUniqueInput
    data: XOR<BeneficiariesUpdateWithoutUserAInput, BeneficiariesUncheckedUpdateWithoutUserAInput>
  }

  export type BeneficiariesUpdateManyWithWhereWithoutUserAInput = {
    where: BeneficiariesScalarWhereInput
    data: XOR<BeneficiariesUpdateManyMutationInput, BeneficiariesUncheckedUpdateManyWithoutUserAInput>
  }

  export type AccountsUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    update: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    data: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
  }

  export type AccountsUpdateManyWithWhereWithoutUserInput = {
    where: AccountsScalarWhereInput
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountsScalarWhereInput = {
    AND?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    OR?: AccountsScalarWhereInput[]
    NOT?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    id?: StringFilter<"Accounts"> | string
    userId?: IntFilter<"Accounts"> | number
    name?: StringFilter<"Accounts"> | string
    balance?: FloatFilter<"Accounts"> | number
    type?: EnumAccountTypeFilter<"Accounts"> | $Enums.AccountType
    status?: EnumAccountStatusFilter<"Accounts"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
  }

  export type MerchantUpsertWithoutUserInput = {
    update: XOR<MerchantUpdateWithoutUserInput, MerchantUncheckedUpdateWithoutUserInput>
    create: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutUserInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutUserInput, MerchantUncheckedUpdateWithoutUserInput>
  }

  export type MerchantUpdateWithoutUserInput = {
    workPermit?: StringFieldUpdateOperationsInput | string
    Category?: MerchantCategoryUpdateOneRequiredWithoutMerchantsNestedInput
  }

  export type MerchantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    workPermit?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    monthlyIncome?: FloatFieldUpdateOperationsInput | number
  }

  export type CashTransactionsUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: CashTransactionsWhereUniqueInput
    update: XOR<CashTransactionsUpdateWithoutSupervisorInput, CashTransactionsUncheckedUpdateWithoutSupervisorInput>
    create: XOR<CashTransactionsCreateWithoutSupervisorInput, CashTransactionsUncheckedCreateWithoutSupervisorInput>
  }

  export type CashTransactionsUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: CashTransactionsWhereUniqueInput
    data: XOR<CashTransactionsUpdateWithoutSupervisorInput, CashTransactionsUncheckedUpdateWithoutSupervisorInput>
  }

  export type CashTransactionsUpdateManyWithWhereWithoutSupervisorInput = {
    where: CashTransactionsScalarWhereInput
    data: XOR<CashTransactionsUpdateManyMutationInput, CashTransactionsUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type CashTransactionsScalarWhereInput = {
    AND?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
    OR?: CashTransactionsScalarWhereInput[]
    NOT?: CashTransactionsScalarWhereInput | CashTransactionsScalarWhereInput[]
    id?: IntFilter<"CashTransactions"> | number
    supervisorId?: IntFilter<"CashTransactions"> | number
    accountNumber?: StringFilter<"CashTransactions"> | string
    type?: EnumTransactionTypeFilter<"CashTransactions"> | $Enums.TransactionType
    amount?: FloatFilter<"CashTransactions"> | number
    status?: EnumTransactionStatusFilter<"CashTransactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"CashTransactions"> | Date | string
  }

  export type UsersCreateWithoutMerchantInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateWithoutMerchantInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersCreateOrConnectWithoutMerchantInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMerchantInput, UsersUncheckedCreateWithoutMerchantInput>
  }

  export type MerchantCategoryCreateWithoutMerchantsInput = {
    name: string
  }

  export type MerchantCategoryUncheckedCreateWithoutMerchantsInput = {
    id?: number
    name: string
  }

  export type MerchantCategoryCreateOrConnectWithoutMerchantsInput = {
    where: MerchantCategoryWhereUniqueInput
    create: XOR<MerchantCategoryCreateWithoutMerchantsInput, MerchantCategoryUncheckedCreateWithoutMerchantsInput>
  }

  export type UsersUpsertWithoutMerchantInput = {
    update: XOR<UsersUpdateWithoutMerchantInput, UsersUncheckedUpdateWithoutMerchantInput>
    create: XOR<UsersCreateWithoutMerchantInput, UsersUncheckedCreateWithoutMerchantInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMerchantInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMerchantInput, UsersUncheckedUpdateWithoutMerchantInput>
  }

  export type UsersUpdateWithoutMerchantInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type MerchantCategoryUpsertWithoutMerchantsInput = {
    update: XOR<MerchantCategoryUpdateWithoutMerchantsInput, MerchantCategoryUncheckedUpdateWithoutMerchantsInput>
    create: XOR<MerchantCategoryCreateWithoutMerchantsInput, MerchantCategoryUncheckedCreateWithoutMerchantsInput>
    where?: MerchantCategoryWhereInput
  }

  export type MerchantCategoryUpdateToOneWithWhereWithoutMerchantsInput = {
    where?: MerchantCategoryWhereInput
    data: XOR<MerchantCategoryUpdateWithoutMerchantsInput, MerchantCategoryUncheckedUpdateWithoutMerchantsInput>
  }

  export type MerchantCategoryUpdateWithoutMerchantsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCategoryUncheckedUpdateWithoutMerchantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutCustomerInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateWithoutCustomerInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersCreateOrConnectWithoutCustomerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCustomerInput, UsersUncheckedCreateWithoutCustomerInput>
  }

  export type UsersUpsertWithoutCustomerInput = {
    update: XOR<UsersUpdateWithoutCustomerInput, UsersUncheckedUpdateWithoutCustomerInput>
    create: XOR<UsersCreateWithoutCustomerInput, UsersUncheckedCreateWithoutCustomerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCustomerInput, UsersUncheckedUpdateWithoutCustomerInput>
  }

  export type UsersUpdateWithoutCustomerInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersCreateWithoutSentReqInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateWithoutSentReqInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersCreateOrConnectWithoutSentReqInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSentReqInput, UsersUncheckedCreateWithoutSentReqInput>
  }

  export type UsersCreateWithoutRecvReqInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateWithoutRecvReqInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersCreateOrConnectWithoutRecvReqInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRecvReqInput, UsersUncheckedCreateWithoutRecvReqInput>
  }

  export type UsersUpsertWithoutSentReqInput = {
    update: XOR<UsersUpdateWithoutSentReqInput, UsersUncheckedUpdateWithoutSentReqInput>
    create: XOR<UsersCreateWithoutSentReqInput, UsersUncheckedCreateWithoutSentReqInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSentReqInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSentReqInput, UsersUncheckedUpdateWithoutSentReqInput>
  }

  export type UsersUpdateWithoutSentReqInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateWithoutSentReqInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUpsertWithoutRecvReqInput = {
    update: XOR<UsersUpdateWithoutRecvReqInput, UsersUncheckedUpdateWithoutRecvReqInput>
    create: XOR<UsersCreateWithoutRecvReqInput, UsersUncheckedCreateWithoutRecvReqInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRecvReqInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRecvReqInput, UsersUncheckedUpdateWithoutRecvReqInput>
  }

  export type UsersUpdateWithoutRecvReqInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateWithoutRecvReqInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersCreateWithoutAccountsInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsCreateNestedManyWithoutSupervisorInput
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    cashTransactions?: CashTransactionsUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionsCreateWithoutSAccountInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    dAccount: AccountsCreateNestedOneWithoutTransDInput
    details?: TransactionsDetailsCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutSAccountInput = {
    id?: number
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    details?: TransactionsDetailsUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsCreateOrConnectWithoutSAccountInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput>
  }

  export type TransactionsCreateManySAccountInputEnvelope = {
    data: TransactionsCreateManySAccountInput | TransactionsCreateManySAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutDAccountInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    sAccount?: AccountsCreateNestedOneWithoutTransSInput
    details?: TransactionsDetailsCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutDAccountInput = {
    id?: number
    sourceAccount?: string | null
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    details?: TransactionsDetailsUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionsCreateOrConnectWithoutDAccountInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput>
  }

  export type TransactionsCreateManyDAccountInputEnvelope = {
    data: TransactionsCreateManyDAccountInput | TransactionsCreateManyDAccountInput[]
    skipDuplicates?: boolean
  }

  export type CashTransactionsCreateWithoutAccountInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    supervisor: UsersCreateNestedOneWithoutCashTransactionsInput
  }

  export type CashTransactionsUncheckedCreateWithoutAccountInput = {
    id?: number
    supervisorId: number
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CashTransactionsCreateOrConnectWithoutAccountInput = {
    where: CashTransactionsWhereUniqueInput
    create: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput>
  }

  export type CashTransactionsCreateManyAccountInputEnvelope = {
    data: CashTransactionsCreateManyAccountInput | CashTransactionsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CardsCreateWithoutAccountInput = {
    id: string
    cardName: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
    bills?: BillsCreateNestedManyWithoutCardInput
  }

  export type CardsUncheckedCreateWithoutAccountInput = {
    id: string
    cardName: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
    bills?: BillsUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsCreateOrConnectWithoutAccountInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput>
  }

  export type CardsCreateManyAccountInputEnvelope = {
    data: CardsCreateManyAccountInput | CardsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type BillsCreateWithoutMerchantAccountInput = {
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
    card?: CardsCreateNestedOneWithoutBillsInput
  }

  export type BillsUncheckedCreateWithoutMerchantAccountInput = {
    id?: number
    cardId?: string | null
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillsCreateOrConnectWithoutMerchantAccountInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput>
  }

  export type BillsCreateManyMerchantAccountInputEnvelope = {
    data: BillsCreateManyMerchantAccountInput | BillsCreateManyMerchantAccountInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAccountsInput = {
    update: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersUpdateWithoutAccountsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUpdateManyWithoutSupervisorNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    cashTransactions?: CashTransactionsUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutSAccountInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutSAccountInput, TransactionsUncheckedUpdateWithoutSAccountInput>
    create: XOR<TransactionsCreateWithoutSAccountInput, TransactionsUncheckedCreateWithoutSAccountInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutSAccountInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutSAccountInput, TransactionsUncheckedUpdateWithoutSAccountInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutSAccountInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutSAccountInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    sourceAccount?: StringNullableFilter<"Transactions"> | string | null
    destinationAccount?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    amount?: FloatFilter<"Transactions"> | number
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutDAccountInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutDAccountInput, TransactionsUncheckedUpdateWithoutDAccountInput>
    create: XOR<TransactionsCreateWithoutDAccountInput, TransactionsUncheckedCreateWithoutDAccountInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutDAccountInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutDAccountInput, TransactionsUncheckedUpdateWithoutDAccountInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutDAccountInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutDAccountInput>
  }

  export type CashTransactionsUpsertWithWhereUniqueWithoutAccountInput = {
    where: CashTransactionsWhereUniqueInput
    update: XOR<CashTransactionsUpdateWithoutAccountInput, CashTransactionsUncheckedUpdateWithoutAccountInput>
    create: XOR<CashTransactionsCreateWithoutAccountInput, CashTransactionsUncheckedCreateWithoutAccountInput>
  }

  export type CashTransactionsUpdateWithWhereUniqueWithoutAccountInput = {
    where: CashTransactionsWhereUniqueInput
    data: XOR<CashTransactionsUpdateWithoutAccountInput, CashTransactionsUncheckedUpdateWithoutAccountInput>
  }

  export type CashTransactionsUpdateManyWithWhereWithoutAccountInput = {
    where: CashTransactionsScalarWhereInput
    data: XOR<CashTransactionsUpdateManyMutationInput, CashTransactionsUncheckedUpdateManyWithoutAccountInput>
  }

  export type CardsUpsertWithWhereUniqueWithoutAccountInput = {
    where: CardsWhereUniqueInput
    update: XOR<CardsUpdateWithoutAccountInput, CardsUncheckedUpdateWithoutAccountInput>
    create: XOR<CardsCreateWithoutAccountInput, CardsUncheckedCreateWithoutAccountInput>
  }

  export type CardsUpdateWithWhereUniqueWithoutAccountInput = {
    where: CardsWhereUniqueInput
    data: XOR<CardsUpdateWithoutAccountInput, CardsUncheckedUpdateWithoutAccountInput>
  }

  export type CardsUpdateManyWithWhereWithoutAccountInput = {
    where: CardsScalarWhereInput
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyWithoutAccountInput>
  }

  export type CardsScalarWhereInput = {
    AND?: CardsScalarWhereInput | CardsScalarWhereInput[]
    OR?: CardsScalarWhereInput[]
    NOT?: CardsScalarWhereInput | CardsScalarWhereInput[]
    id?: StringFilter<"Cards"> | string
    cardName?: StringFilter<"Cards"> | string
    accountNumber?: StringFilter<"Cards"> | string
    balance?: FloatFilter<"Cards"> | number
    cvv?: IntFilter<"Cards"> | number
    PIN?: StringFilter<"Cards"> | string
    expiryDate?: DateTimeFilter<"Cards"> | Date | string
    physical?: BoolFilter<"Cards"> | boolean
    createdAt?: DateTimeFilter<"Cards"> | Date | string
  }

  export type BillsUpsertWithWhereUniqueWithoutMerchantAccountInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutMerchantAccountInput, BillsUncheckedUpdateWithoutMerchantAccountInput>
    create: XOR<BillsCreateWithoutMerchantAccountInput, BillsUncheckedCreateWithoutMerchantAccountInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutMerchantAccountInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutMerchantAccountInput, BillsUncheckedUpdateWithoutMerchantAccountInput>
  }

  export type BillsUpdateManyWithWhereWithoutMerchantAccountInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutMerchantAccountInput>
  }

  export type BillsScalarWhereInput = {
    AND?: BillsScalarWhereInput | BillsScalarWhereInput[]
    OR?: BillsScalarWhereInput[]
    NOT?: BillsScalarWhereInput | BillsScalarWhereInput[]
    id?: IntFilter<"Bills"> | number
    cardId?: StringNullableFilter<"Bills"> | string | null
    merchantAccountNumber?: StringFilter<"Bills"> | string
    category?: StringFilter<"Bills"> | string
    amount?: FloatFilter<"Bills"> | number
    details?: StringFilter<"Bills"> | string
    status?: EnumTransactionStatusFilter<"Bills"> | $Enums.TransactionStatus
    payedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
    createdAt?: DateTimeFilter<"Bills"> | Date | string
  }

  export type AccountsCreateWithoutCardInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateWithoutCardInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsCreateOrConnectWithoutCardInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutCardInput, AccountsUncheckedCreateWithoutCardInput>
  }

  export type BillsCreateWithoutCardInput = {
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
    merchantAccount: AccountsCreateNestedOneWithoutBillsInput
  }

  export type BillsUncheckedCreateWithoutCardInput = {
    id?: number
    merchantAccountNumber: string
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillsCreateOrConnectWithoutCardInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput>
  }

  export type BillsCreateManyCardInputEnvelope = {
    data: BillsCreateManyCardInput | BillsCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type AccountsUpsertWithoutCardInput = {
    update: XOR<AccountsUpdateWithoutCardInput, AccountsUncheckedUpdateWithoutCardInput>
    create: XOR<AccountsCreateWithoutCardInput, AccountsUncheckedCreateWithoutCardInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutCardInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutCardInput, AccountsUncheckedUpdateWithoutCardInput>
  }

  export type AccountsUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type BillsUpsertWithWhereUniqueWithoutCardInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutCardInput, BillsUncheckedUpdateWithoutCardInput>
    create: XOR<BillsCreateWithoutCardInput, BillsUncheckedCreateWithoutCardInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutCardInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutCardInput, BillsUncheckedUpdateWithoutCardInput>
  }

  export type BillsUpdateManyWithWhereWithoutCardInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutCardInput>
  }

  export type UsersCreateWithoutCashTransactionsInput = {
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesCreateNestedManyWithoutUserAInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    merchant?: MerchantCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCashTransactionsInput = {
    id?: number
    role: $Enums.Role
    name: string
    email: string
    phone: string
    birth: Date | string
    status?: $Enums.userStatus
    password: string
    createdAt?: Date | string
    sentReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserRInput
    recvReq?: BeneficiariesUncheckedCreateNestedManyWithoutUserAInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    merchant?: MerchantUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCashTransactionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCashTransactionsInput, UsersUncheckedCreateWithoutCashTransactionsInput>
  }

  export type AccountsCreateWithoutTransInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateWithoutTransInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsCreateOrConnectWithoutTransInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutTransInput, AccountsUncheckedCreateWithoutTransInput>
  }

  export type UsersUpsertWithoutCashTransactionsInput = {
    update: XOR<UsersUpdateWithoutCashTransactionsInput, UsersUncheckedUpdateWithoutCashTransactionsInput>
    create: XOR<UsersCreateWithoutCashTransactionsInput, UsersUncheckedCreateWithoutCashTransactionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCashTransactionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCashTransactionsInput, UsersUncheckedUpdateWithoutCashTransactionsInput>
  }

  export type UsersUpdateWithoutCashTransactionsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUpdateManyWithoutUserANestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    merchant?: MerchantUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCashTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentReq?: BeneficiariesUncheckedUpdateManyWithoutUserRNestedInput
    recvReq?: BeneficiariesUncheckedUpdateManyWithoutUserANestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    merchant?: MerchantUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountsUpsertWithoutTransInput = {
    update: XOR<AccountsUpdateWithoutTransInput, AccountsUncheckedUpdateWithoutTransInput>
    create: XOR<AccountsCreateWithoutTransInput, AccountsUncheckedCreateWithoutTransInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutTransInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutTransInput, AccountsUncheckedUpdateWithoutTransInput>
  }

  export type AccountsUpdateWithoutTransInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutTransInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsCreateWithoutTransSInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateWithoutTransSInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsCreateOrConnectWithoutTransSInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutTransSInput, AccountsUncheckedCreateWithoutTransSInput>
  }

  export type AccountsCreateWithoutTransDInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
    bills?: BillsCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsUncheckedCreateWithoutTransDInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
    bills?: BillsUncheckedCreateNestedManyWithoutMerchantAccountInput
  }

  export type AccountsCreateOrConnectWithoutTransDInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutTransDInput, AccountsUncheckedCreateWithoutTransDInput>
  }

  export type TransactionsDetailsCreateWithoutTransactionInput = {
    details: string
  }

  export type TransactionsDetailsUncheckedCreateWithoutTransactionInput = {
    id?: number
    details: string
  }

  export type TransactionsDetailsCreateOrConnectWithoutTransactionInput = {
    where: TransactionsDetailsWhereUniqueInput
    create: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionsDetailsCreateManyTransactionInputEnvelope = {
    data: TransactionsDetailsCreateManyTransactionInput | TransactionsDetailsCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type AccountsUpsertWithoutTransSInput = {
    update: XOR<AccountsUpdateWithoutTransSInput, AccountsUncheckedUpdateWithoutTransSInput>
    create: XOR<AccountsCreateWithoutTransSInput, AccountsUncheckedCreateWithoutTransSInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutTransSInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutTransSInput, AccountsUncheckedUpdateWithoutTransSInput>
  }

  export type AccountsUpdateWithoutTransSInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutTransSInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUpsertWithoutTransDInput = {
    update: XOR<AccountsUpdateWithoutTransDInput, AccountsUncheckedUpdateWithoutTransDInput>
    create: XOR<AccountsCreateWithoutTransDInput, AccountsUncheckedCreateWithoutTransDInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutTransDInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutTransDInput, AccountsUncheckedUpdateWithoutTransDInput>
  }

  export type AccountsUpdateWithoutTransDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutTransDInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type TransactionsDetailsUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionsDetailsWhereUniqueInput
    update: XOR<TransactionsDetailsUpdateWithoutTransactionInput, TransactionsDetailsUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionsDetailsCreateWithoutTransactionInput, TransactionsDetailsUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionsDetailsUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionsDetailsWhereUniqueInput
    data: XOR<TransactionsDetailsUpdateWithoutTransactionInput, TransactionsDetailsUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionsDetailsUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionsDetailsScalarWhereInput
    data: XOR<TransactionsDetailsUpdateManyMutationInput, TransactionsDetailsUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionsDetailsScalarWhereInput = {
    AND?: TransactionsDetailsScalarWhereInput | TransactionsDetailsScalarWhereInput[]
    OR?: TransactionsDetailsScalarWhereInput[]
    NOT?: TransactionsDetailsScalarWhereInput | TransactionsDetailsScalarWhereInput[]
    id?: IntFilter<"TransactionsDetails"> | number
    transactionId?: IntFilter<"TransactionsDetails"> | number
    details?: StringFilter<"TransactionsDetails"> | string
  }

  export type CardsCreateWithoutBillsInput = {
    id: string
    cardName: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
    account: AccountsCreateNestedOneWithoutCardInput
  }

  export type CardsUncheckedCreateWithoutBillsInput = {
    id: string
    cardName: string
    accountNumber: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
  }

  export type CardsCreateOrConnectWithoutBillsInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutBillsInput, CardsUncheckedCreateWithoutBillsInput>
  }

  export type AccountsCreateWithoutBillsInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    transS?: TransactionsCreateNestedManyWithoutSAccountInput
    transD?: TransactionsCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsCreateNestedManyWithoutAccountInput
    card?: CardsCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateWithoutBillsInput = {
    id: string
    userId: number
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    transS?: TransactionsUncheckedCreateNestedManyWithoutSAccountInput
    transD?: TransactionsUncheckedCreateNestedManyWithoutDAccountInput
    trans?: CashTransactionsUncheckedCreateNestedManyWithoutAccountInput
    card?: CardsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsCreateOrConnectWithoutBillsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutBillsInput, AccountsUncheckedCreateWithoutBillsInput>
  }

  export type CardsUpsertWithoutBillsInput = {
    update: XOR<CardsUpdateWithoutBillsInput, CardsUncheckedUpdateWithoutBillsInput>
    create: XOR<CardsCreateWithoutBillsInput, CardsUncheckedCreateWithoutBillsInput>
    where?: CardsWhereInput
  }

  export type CardsUpdateToOneWithWhereWithoutBillsInput = {
    where?: CardsWhereInput
    data: XOR<CardsUpdateWithoutBillsInput, CardsUncheckedUpdateWithoutBillsInput>
  }

  export type CardsUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountsUpdateOneRequiredWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUpsertWithoutBillsInput = {
    update: XOR<AccountsUpdateWithoutBillsInput, AccountsUncheckedUpdateWithoutBillsInput>
    create: XOR<AccountsCreateWithoutBillsInput, AccountsUncheckedCreateWithoutBillsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutBillsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutBillsInput, AccountsUncheckedUpdateWithoutBillsInput>
  }

  export type AccountsUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type TransactionsCreateWithoutDetailsInput = {
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    sAccount?: AccountsCreateNestedOneWithoutTransSInput
    dAccount: AccountsCreateNestedOneWithoutTransDInput
  }

  export type TransactionsUncheckedCreateWithoutDetailsInput = {
    id?: number
    sourceAccount?: string | null
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutDetailsInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutDetailsInput, TransactionsUncheckedCreateWithoutDetailsInput>
  }

  export type TransactionsUpsertWithoutDetailsInput = {
    update: XOR<TransactionsUpdateWithoutDetailsInput, TransactionsUncheckedUpdateWithoutDetailsInput>
    create: XOR<TransactionsCreateWithoutDetailsInput, TransactionsUncheckedCreateWithoutDetailsInput>
    where?: TransactionsWhereInput
  }

  export type TransactionsUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TransactionsWhereInput
    data: XOR<TransactionsUpdateWithoutDetailsInput, TransactionsUncheckedUpdateWithoutDetailsInput>
  }

  export type TransactionsUpdateWithoutDetailsInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sAccount?: AccountsUpdateOneWithoutTransSNestedInput
    dAccount?: AccountsUpdateOneRequiredWithoutTransDNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceAccount?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAccount?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantCreateWithoutCategoryInput = {
    workPermit: string
    user: UsersCreateNestedOneWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    workPermit: string
  }

  export type MerchantCreateOrConnectWithoutCategoryInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput>
  }

  export type MerchantCreateManyCategoryInputEnvelope = {
    data: MerchantCreateManyCategoryInput | MerchantCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MerchantUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MerchantWhereUniqueInput
    update: XOR<MerchantUpdateWithoutCategoryInput, MerchantUncheckedUpdateWithoutCategoryInput>
    create: XOR<MerchantCreateWithoutCategoryInput, MerchantUncheckedCreateWithoutCategoryInput>
  }

  export type MerchantUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MerchantWhereUniqueInput
    data: XOR<MerchantUpdateWithoutCategoryInput, MerchantUncheckedUpdateWithoutCategoryInput>
  }

  export type MerchantUpdateManyWithWhereWithoutCategoryInput = {
    where: MerchantScalarWhereInput
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MerchantScalarWhereInput = {
    AND?: MerchantScalarWhereInput | MerchantScalarWhereInput[]
    OR?: MerchantScalarWhereInput[]
    NOT?: MerchantScalarWhereInput | MerchantScalarWhereInput[]
    id?: IntFilter<"Merchant"> | number
    userId?: IntFilter<"Merchant"> | number
    categoryId?: IntFilter<"Merchant"> | number
    workPermit?: StringFilter<"Merchant"> | string
  }

  export type BeneficiariesCreateManyUserRInput = {
    id?: number
    acceptUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type BeneficiariesCreateManyUserAInput = {
    id?: number
    requstUser: number
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type AccountsCreateManyUserInput = {
    id: string
    name: string
    balance?: number
    type?: $Enums.AccountType
    status?: $Enums.AccountStatus
    createdAt?: Date | string
  }

  export type CashTransactionsCreateManySupervisorInput = {
    id?: number
    accountNumber: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type BeneficiariesUpdateWithoutUserRInput = {
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UsersUpdateOneRequiredWithoutRecvReqNestedInput
  }

  export type BeneficiariesUncheckedUpdateWithoutUserRInput = {
    id?: IntFieldUpdateOperationsInput | number
    acceptUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiariesUncheckedUpdateManyWithoutUserRInput = {
    id?: IntFieldUpdateOperationsInput | number
    acceptUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiariesUpdateWithoutUserAInput = {
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userR?: UsersUpdateOneRequiredWithoutSentReqNestedInput
  }

  export type BeneficiariesUncheckedUpdateWithoutUserAInput = {
    id?: IntFieldUpdateOperationsInput | number
    requstUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiariesUncheckedUpdateManyWithoutUserAInput = {
    id?: IntFieldUpdateOperationsInput | number
    requstUser?: IntFieldUpdateOperationsInput | number
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUpdateManyWithoutAccountNestedInput
    card?: CardsUpdateManyWithoutAccountNestedInput
    bills?: BillsUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transS?: TransactionsUncheckedUpdateManyWithoutSAccountNestedInput
    transD?: TransactionsUncheckedUpdateManyWithoutDAccountNestedInput
    trans?: CashTransactionsUncheckedUpdateManyWithoutAccountNestedInput
    card?: CardsUncheckedUpdateManyWithoutAccountNestedInput
    bills?: BillsUncheckedUpdateManyWithoutMerchantAccountNestedInput
  }

  export type AccountsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsUpdateWithoutSupervisorInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountsUpdateOneRequiredWithoutTransNestedInput
  }

  export type CashTransactionsUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManySAccountInput = {
    id?: number
    destinationAccount: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionsCreateManyDAccountInput = {
    id?: number
    sourceAccount?: string | null
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CashTransactionsCreateManyAccountInput = {
    id?: number
    supervisorId: number
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type CardsCreateManyAccountInput = {
    id: string
    cardName: string
    balance: number
    cvv: number
    PIN: string
    expiryDate?: Date | string
    physical?: boolean
    createdAt?: Date | string
  }

  export type BillsCreateManyMerchantAccountInput = {
    id?: number
    cardId?: string | null
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TransactionsUpdateWithoutSAccountInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dAccount?: AccountsUpdateOneRequiredWithoutTransDNestedInput
    details?: TransactionsDetailsUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutSAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinationAccount?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TransactionsDetailsUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateManyWithoutSAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinationAccount?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutDAccountInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sAccount?: AccountsUpdateOneWithoutTransSNestedInput
    details?: TransactionsDetailsUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutDAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceAccount?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TransactionsDetailsUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateManyWithoutDAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceAccount?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsUpdateWithoutAccountInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UsersUpdateOneRequiredWithoutCashTransactionsNestedInput
  }

  export type CashTransactionsUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashTransactionsUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillsUpdateManyWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillsUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cvv?: IntFieldUpdateOperationsInput | number
    PIN?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    physical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsUpdateWithoutMerchantAccountInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardsUpdateOneWithoutBillsNestedInput
  }

  export type BillsUncheckedUpdateWithoutMerchantAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsUncheckedUpdateManyWithoutMerchantAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsCreateManyCardInput = {
    id?: number
    merchantAccountNumber: string
    category: string
    amount: number
    details: string
    status?: $Enums.TransactionStatus
    payedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillsUpdateWithoutCardInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchantAccount?: AccountsUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillsUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantAccountNumber?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillsUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantAccountNumber?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsDetailsCreateManyTransactionInput = {
    id?: number
    details: string
  }

  export type TransactionsDetailsUpdateWithoutTransactionInput = {
    details?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsDetailsUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsDetailsUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCreateManyCategoryInput = {
    id?: number
    userId: number
    workPermit: string
  }

  export type MerchantUpdateWithoutCategoryInput = {
    workPermit?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workPermit?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workPermit?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountsCountOutputTypeDefaultArgs instead
     */
    export type AccountsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardsCountOutputTypeDefaultArgs instead
     */
    export type CardsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsCountOutputTypeDefaultArgs instead
     */
    export type TransactionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantCategoryCountOutputTypeDefaultArgs instead
     */
    export type MerchantCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantDefaultArgs instead
     */
    export type MerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BeneficiariesDefaultArgs instead
     */
    export type BeneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BeneficiariesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountsDefaultArgs instead
     */
    export type AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardsDefaultArgs instead
     */
    export type CardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CashTransactionsDefaultArgs instead
     */
    export type CashTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CashTransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillsDefaultArgs instead
     */
    export type BillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDetailsDefaultArgs instead
     */
    export type TransactionsDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantCategoryDefaultArgs instead
     */
    export type MerchantCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCategoryDefaultArgs<ExtArgs>

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