Add to your .env:
DATABASE_URL="postgresql://postgres:password@localhost:5432/FUSE_DB"
JWT_SECRET=.....

Run:
npm install
npx prisma migrate dev --name "init"
npx prisma generate

-----------------------------------------------------

If you make changes to either schema.prisma or log.prisma, you need to run the following commands to apply the changes to the respective databases:

For schema.prisma changes (main database):

npx prisma migrate dev --name "describe-your-changes" - This will create a new migration file in the prisma/migrations directory, which contains the SQL statements to apply the changes to your main database.

npx prisma db push - This will apply the migration to your main database.

npx prisma generate - This will regenerate the Prisma Client based on the updated schema.prisma.

For log.prisma changes (logging database):

npx prisma db push --schema=./prisma/log.prisma - This will apply the changes directly to your logging database based on the log.prisma schema.

npx prisma generate --schema=./prisma/log.prisma - This will regenerate the Prisma Client for the logging database based on the updated log.prisma.

