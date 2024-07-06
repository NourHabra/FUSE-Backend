
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.1
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.1",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.MerchantScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  categoryId: 'categoryId',
  workPermit: 'workPermit'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  monthlyIncome: 'monthlyIncome'
};

exports.Prisma.BeneficiariesScalarFieldEnum = {
  id: 'id',
  requstUser: 'requstUser',
  acceptUser: 'acceptUser',
  accepted: 'accepted',
  createdAt: 'createdAt'
};

exports.Prisma.AccountsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  balance: 'balance',
  type: 'type',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.CardsScalarFieldEnum = {
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

exports.Prisma.CashTransactionsScalarFieldEnum = {
  id: 'id',
  supervisorId: 'supervisorId',
  accountNumber: 'accountNumber',
  type: 'type',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  sourceAccount: 'sourceAccount',
  destinationAccount: 'destinationAccount',
  type: 'type',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.BillsScalarFieldEnum = {
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

exports.Prisma.TransactionsDetailsScalarFieldEnum = {
  id: 'id',
  transactionId: 'transactionId',
  details: 'details'
};

exports.Prisma.MerchantCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  Admin: 'Admin',
  Customer: 'Customer',
  Merchant: 'Merchant',
  Vendor: 'Vendor',
  Employee: 'Employee'
};

exports.userStatus = exports.$Enums.userStatus = {
  Created: 'Created',
  Deleted: 'Deleted',
  Baned: 'Baned',
  Stopped: 'Stopped'
};

exports.AccountType = exports.$Enums.AccountType = {
  Checking: 'Checking',
  Investment: 'Investment',
  Savings: 'Savings'
};

exports.AccountStatus = exports.$Enums.AccountStatus = {
  Active: 'Active',
  Inactive: 'Inactive',
  Blocked: 'Blocked',
  Locked: 'Locked',
  Suspended: 'Suspended'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  Transfer: 'Transfer',
  Bill: 'Bill',
  Deposit: 'Deposit',
  Withdraw: 'Withdraw'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  Pending: 'Pending',
  Cancelled: 'Cancelled',
  Declined: 'Declined',
  Failed: 'Failed',
  Completed: 'Completed',
  Refunded: 'Refunded',
  Deleted: 'Deleted',
  Paid: 'Paid'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
