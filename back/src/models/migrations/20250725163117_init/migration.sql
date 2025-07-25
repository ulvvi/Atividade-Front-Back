/*
  Warnings:

  - You are about to drop the column `num` on the `User` table. All the data in the column will be lost.
  - Added the required column `numero` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `age` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "num",
ADD COLUMN     "numero" TEXT NOT NULL,
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;
