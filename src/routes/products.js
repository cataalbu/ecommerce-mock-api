import { Router } from 'express';
import listPaginatedProducts from '../controllers/productController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const productsRouter = Router();

productsRouter.get('/', authMiddleware, listPaginatedProducts);

export default productsRouter;
