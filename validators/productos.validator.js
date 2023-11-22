import { check } from "express-validator";
import productoMiddleware from "../middlewares/productos.middleware.js";

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    productoMiddleware
]

// productoUpdateValidator
// productoReadOneValidator

export default {
    productoCreateValidator,
    productoDeleteValidator
}
