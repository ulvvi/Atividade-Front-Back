/*
  Warnings:

  - You are about to drop the column `date_post` on the `Product` table. All the data in the column will be lost.
  - Added the required column `date` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "date_post",
ADD COLUMN     "date" TEXT NOT NULL;
