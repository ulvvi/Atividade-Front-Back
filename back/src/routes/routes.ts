import {Router} from "express";
import { UserController } from "../controllers/userController";
import { ProductController } from "../controllers/productController";
import { VendorOnly } from "../middlewares/VendorOnly";
import { PedidoController } from "../controllers/pedidoController";
import userValidator from "../config/UserValidator";
import PedidoValidator from "../config/PedidoValidator";
import productValidator from "../config/ProductValidator"
import { ValidateBody } from "../middlewares/ValidateMiddleware";
import configAuth from "../middlewares/authMiddleware";
import passport from "passport"

//roda a config pelo menos uma vez//
//talvez não seja necessário mas estava dando erro de não
//reconhecer o jwt sem isso
configAuth();

const router = Router()

//faciltar na hora de escrever as rotas
const auth = passport.authenticate('jwt', {session: false})

//User routes
router.post("/user", ValidateBody(userValidator.createUser), UserController.createUser);
//rota de login pa gerar o token
router.post("/login", UserController.login)
router.get("/user/:userId", auth, UserController.readUser);
router.get("/users", UserController.readAllUsers);
router.put("/user/:userId", auth, ValidateBody(userValidator.editUser), UserController.updateUser);
router.delete("/user/:userId", auth, UserController.deleteUser);

//Product routes
router.post("/product", auth, VendorOnly, ValidateBody(productValidator.createProduct), ProductController.createProduct);
router.get("/product/:productId", auth, ProductController.readProduct);
router.get("/products", ProductController.readAllProducts);
router.put("/product/:productId", auth, ValidateBody(productValidator.editProduct), ProductController.updateProduct);
router.delete("/product/:productId", auth, ProductController.deleteProduct);

//Pedido routes
router.post("/pedido", auth, ValidateBody(PedidoValidator.createPedido), PedidoController.createPedido); 
router.get("/pedido/:pedidoId", auth, PedidoController.readPedido);
router.get("/pedidos", auth, PedidoController.readAllPedidos);
router.put("/pedido/:pedidoId", auth, ValidateBody(PedidoValidator.editPedido), PedidoController.updatePedido);
router.delete("/pedido/:pedidoId", auth, PedidoController.deletePedido); 

export default router;