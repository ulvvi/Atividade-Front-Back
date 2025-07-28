/*
  Warnings:

  - You are about to drop the `PedidoProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoProduct" DROP CONSTRAINT "PedidoProduct_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoProduct" DROP CONSTRAINT "PedidoProduct_produtoId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "pedidoId" TEXT;

-- DropTable
DROP TABLE "PedidoProduct";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE SET NULL ON UPDATE CASCADE;
