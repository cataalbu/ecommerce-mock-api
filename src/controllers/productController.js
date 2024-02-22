import Product from '../models/product.js';

const listPaginatedProducts = async (req, res) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const skip = (page - 1) * limit;

    const totalProducts = await Product.countDocuments();

    const products = await Product.find().skip(skip).limit(limit);

    res.status(200).json({
      data: products,
      count: totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default listPaginatedProducts;
