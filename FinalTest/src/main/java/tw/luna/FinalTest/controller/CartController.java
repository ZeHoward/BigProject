package tw.luna.FinalTest.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tw.luna.FinalTest.Dto.CartSelectDto;
import tw.luna.FinalTest.model.CartItems;
import tw.luna.FinalTest.service.CartService;

import java.util.List;

@RequestMapping("/api/cart")
@RestController
public class CartController {
    Long userId = 1L; // 假設用戶 ID 固定為 1，實際情況應根據需求調整

    @Autowired
    CartService cartService;

    //從服務層獲取指定用戶的購物車項目
    //顯示用戶購物車items
    @GetMapping("/{userId}")
    public List<CartSelectDto> getCartItems(@PathVariable Long userId) {
        return cartService.getCartItemsByUserId(userId);
    }

//    // 新增購物車
//    @PostMapping
//    public ResponseEntity<String> addToCart(@RequestBody CartInsertDto cartInsertDto) {
//        cartService.insertCart(cartInsertDto);
//        return ResponseEntity.ok("成功新增購物車");
//    }
//
//    @DeleteMapping("/{userId}/{itemId}")
//    public ResponseEntity<String> deleteCartItem(@PathVariable Long userId,
//                                                 @PathVariable Long itemId) {
//        cartService.deleteCartItem(userId, itemId);
//        return ResponseEntity.ok("成功刪除單一購物車品項");
//    }
//
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteAllCartItems(@PathVariable Long userId) {
        cartService.deleteAllCartItems(userId);
        return ResponseEntity.ok("成功清空購物車");
    }
//
//    @PutMapping("/{cartItemId}")
//    public ResponseEntity<String> updateCartItem(
//            @PathVariable Long cartItemId,
//            @RequestBody CartUpdateDto cartUpdateDto) {
//        cartService.updateCartItem(cartItemId, cartUpdateDto);
//        return ResponseEntity.ok("Cart item updated successfully");
//    }
//

}