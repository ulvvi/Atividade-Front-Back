-- CreateTable
CREATE TABLE "PedidoProduct" (
    "pedidoId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PedidoProduct_pedidoId_produtoId_key" ON "PedidoProduct"("pedidoId", "produtoId");

-- AddForeignKey
ALTER TABLE "PedidoProduct" ADD CONSTRAINT "PedidoProduct_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoProduct" ADD CONSTRAINT "PedidoProduct_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
