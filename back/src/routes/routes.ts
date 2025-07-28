import {Router} from "express";
import { UserController } from "../controllers/userController";
import { ProductController } from "../controllers/productController";
import { VendorOnly } from "../middlewares/VendorOnly";
import { PedidoController } from "../controllers/pedidoController";


const router = Router()

//User routes
router.post("/user", UserController.createUser);
router.get("/user/:userId", UserController.readUser);
router.get("/users", UserController.readAllUsers);
router.put("/user/:userId", UserController.updateUser);
router.delete("/user/:userId", UserController.deleteUser);
router.post("/user/upsert/:userId", UserController.upsertUser);

//Product routes
router.post("/product", VendorOnly, ProductController.createProduct);
router.get("/product/:productId", ProductController.readProduct);
router.get("/products", ProductController.readAllProducts);
router.put("/product/:productId", ProductController.updateProduct);
router.post("/product/upsert/:productId", ProductController.upsertProduct);
router.delete("/product/:productId", ProductController.deleteProduct);

//Pedido routes
router.post("/pedido", PedidoController.createPedido); 
router.get("/pedido/:pedidoId", PedidoController.readPedido);
router.get("/pedidos", PedidoController.readAllPedidos);
router.put("/pedido/:pedidoId", PedidoController.updatePedido);
router.post("/pedido/upsert/:pedidoId", PedidoController.upsertPedido);
router.delete("/pedido/:pedidoId", PedidoController.deletePedido);
router.delete("/pedidos", PedidoController.deleteAllPedidos); 

export default router;