            =======================  User: section =======================
POST:  base_URL/user/register    => for registering new User;
POST:   base_URL/user/login    =>will give token {which can be used to login or logout user from frontend}

====CART ====:

GET: base_URL/user/cart =>  expects header as Bearer token; gives all products of cart as array

PATCH: base_URL/user/cart =>  expects header as Bearer token and {body: (cart:[cart items array])}  

use cases of : {PATCH:base_URL/uesr/cart}

adding item in the cart :=> param :( id: user's id) and [updated cart (cart_items+1) ]
deleting an item from cart => param:(id:user's id) and [updated cart (cart_items-1) ]
 
====WISHLIST===:

GET: base_URL/user/wishlist   =>  expects  will give all the items in wishlist of  a user.
PATCH: base_URL/wishlist =>  expects:{  param:(id : user's id);  body: (wishlist: [ ...user.wishlist,"id of the product which was added to wishlist"])}  

====== use cases of : {PATCH:base_URL/wishlist} :

adding item in the wishlist :=> param :( id: user's id) and [updated wishlist (wishlist_items+1) ]
deleting an item from wishlist => param:(id:user's id) and [updated wishlist (wishlist_items-1) ]

=======ORDERS====:

GET: base_URL/user/orders   =>  expects  will give all the items in the cart of  a user.
PATCH: base_URL/cart =>  expects:{  param:(id : user's id);  body: (orders: [ ...user.cart,"id of the product which was added to order"])}  

====use cases of : {PATCH:base_URL/ordes} :

adding item in the orders :=> param :( id: user's id) and [updated orders]
deleting an item from orders => param:(id:user's id) and [updated cart]


			=====================Admin pannel ================
==login:{email,and password will be provided }

POST: base_URL/user/login  =>will give token {which can be used to login or logout user from frontend}

==getting users :
GET : base_URL/users:===> will give all the users data ;
getting cart items of a user :
GET:  base_URL/uesrs/cart/id ====> expects: {(user's id:param) and (cart-array: body) => gives the cart items of that user
getting orders of a user:
GET:  base_URL/uesrs/order/id ====> expects: {(user's id:param) and (order-array: body) => gives the order items of that user;
getting wishlist of a user:
GET:  base_URL/uesrs/wishlist/id ====> expects: {(user's id:param) and (wishlist-array: body) => gives the wishlist items of that user;




GET: base_URL/users/orders ===> expects id of user and gives orders of that user;




GET : base_URL/products====>will give all the products ;
PATCH : base_URL/products/product id  ==> will update the changes to the product;