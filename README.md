
# Lamparas-DECO
### Proyecto final React JS
- Dejo el link donde se hizo el deploy [Lamparas-DECO](https://proyecto-44970.web.app/).

### Aplicacion Web E-commerce
- Esta app se construyó para un e-commerce dedicado a la venta de lamparas de diseño y decoración.
- La misma cuenta con una página principal donde se muestran el total de los artículos y pestañas de categorías con sus respectivos artículos. 
- Tiene una utilización sencila: se elije un producto , lo lleva a los detalles del mismo y si es de su agrado le agrega la cantidad requerida al carrito(la cual no se puede agregar mas de lo que hay en stock actualmente), el cual si esta vacío no se muestra.
- Las cantidades son controladas con el stock desde la base de datos de firebase para que no superen las mismas en las compras,el stock ya se descuenta una vez agregadas las lámparas al carrito y se vuelven a agregar en caso de cancelar la compra, el carrito persiste porque se encuentra en el LocalStorage.
- Una vez agregado al carrito puede ir a ver al mismo si los productos y las cantidades estan bien,alli se muestran los precios y se pueden eliminar algunos productos o vaciar el carrito entero(lo borra del LocalStorage tambien), de estar seguro presiona pagar que lo lleva al checkout.
- En el checkout llena un formulario con las validaciones correspondientes para realizar la compra y le devuelve un ticket con el id del pedido, los productos y el monto, datos que se guardan en la base de datos de firestore.
- Sin más que agregar espero la app sea de su agrado.

### Librerías y donde se utilizaron
                    
Librería | Aplicación
------------- | -------------
M.U.I.  | La utilice para el landing, navbar, cards, spiner e iconos.
Sweetalert2  | Fue usada especialmente en el checkout para los errores de validaciones y la impresion del "ticket" de compra. 
Firebase  | Fue utilizada como base de datos del proyecto y para hacer el deploy del mismo.

