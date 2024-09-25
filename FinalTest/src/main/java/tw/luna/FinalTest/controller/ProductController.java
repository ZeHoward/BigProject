package tw.luna.FinalTest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tw.luna.FinalTest.model.Product;
import tw.luna.FinalTest.service.ProductService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductService productService;
	
	//查詢所有商品
	@GetMapping
	public List<Product> getAllProducts() {
		return productService.findAllProducts();
	}
	
	//根據id查詢產品
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Integer id) {
		return productService.findProductById(id).orElse(null);
	}
	
	//模糊查詢
	@GetMapping("/search")
	public List<Product> searchProductsByName(@RequestParam String keyword){
		return productService.findProductsByName(keyword);
	}
	
	//根據類別查詢產品	
	@GetMapping("/category/{categoryName}")
	public List<Product> searchProductsByCategoryName(@PathVariable String CategoryName){
		return productService.findProductsByCategory(CategoryName);
	} 
	
	//新增或更新產品	
	@PostMapping
	public Product createOrUpdateProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}
	
	//刪除產品	
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable Integer id) {
		productService.deleteProduct(id);
	}
	
	//批次新增產品
	@PostMapping("/batch")
	public List<Product> createProductsInBatch(@RequestBody List<Product> products){
		return productService.saveProductsInBatch(products);
	};
}