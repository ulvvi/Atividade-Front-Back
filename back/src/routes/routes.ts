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
router.put("/user/:userId", auth, UserController.updateUser);
router.delete("/user/:userId", auth, UserController.deleteUser);

//Product routes
router.post("/product", VendorOnly, ValidateBody(productValidator.createProduct), ProductController.createProduct);
router.get("/product/:productId", ProductController.readProduct);
router.get("/products", ProductController.readAllProducts);
router.put("/product/:productId", ProductController.updateProduct);
router.delete("/product/:productId", ProductController.deleteProduct);

//Pedido routes
router.post("/pedido", ValidateBody(PedidoValidator.createPedido), PedidoController.createPedido); 
router.get("/pedido/:pedidoId", PedidoController.readPedido);
router.get("/pedidos", PedidoController.readAllPedidos);
router.put("/pedido/:pedidoId", PedidoController.updatePedido);
router.delete("/pedido/:pedidoId", PedidoController.deletePedido); 

export default router;