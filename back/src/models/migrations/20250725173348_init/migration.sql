/*
  Warnings:

  - You are about to drop the column `date` on the `Product` table. All the data in the column will be lost.
  - Added the required column `date_post` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "date",
ADD COLUMN     "date_post" TEXT NOT NULL;
