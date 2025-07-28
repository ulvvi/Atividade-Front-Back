/*
  Warnings:

  - You are about to drop the column `isVendor` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isVendor",
ADD COLUMN     "validatedVendor" BOOLEAN NOT NULL DEFAULT false;
