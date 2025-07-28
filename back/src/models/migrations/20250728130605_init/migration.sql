/*
  Warnings:

  - You are about to drop the column `registeredVendor` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "registeredVendor",
ADD COLUMN     "isRegisteredVendor" BOOLEAN NOT NULL DEFAULT false;
