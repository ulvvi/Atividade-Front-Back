/*
  Warnings:

  - You are about to drop the column `number` on the `User` table. All the data in the column will be lost.
  - Added the required column `num` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_CPF_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "number",
ADD COLUMN     "num" TEXT NOT NULL,
ALTER COLUMN "age" SET DATA TYPE TEXT;
