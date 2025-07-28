/*
  Warnings:

  - You are about to drop the column `validatedVendor` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "validatedVendor",
ADD COLUMN     "registeredVendor" BOOLEAN NOT NULL DEFAULT false;
