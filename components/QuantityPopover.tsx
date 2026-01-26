"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useCartStore } from "@/store/cartStore"

// import { useMediaQuery } from "@/hooks/use-media-query"


interface DrawerDialogDemoProps {
    children: React.ReactNode
    productQuantity: number
    setProductQuantity: any
    product?: any
    finalPrice?: any
}


export function DrawerDialogDemo({ children, productQuantity, setProductQuantity, product, finalPrice }: DrawerDialogDemoProps) {
    const [open, setOpen] = React.useState(false)
    const addItem = useCartStore((s) => s.addItem);

    const isDesktop = window.innerWidth >= 768;

    const handleAddToCart
        = (product: any, finalPrice: number) => {
            addItem({
                id: product.id,
                name: product.name,
                price: finalPrice,
                imageUrl: product.imageUrl,
                quantity: productQuantity,
            });
            setOpen(false);
            alert(`${product.name} added to cart!`);
        }

    // if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Product Quantity</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() =>
                                setProductQuantity((qty: any) => Math.max(1, qty - 1))
                            }
                            className="px-3 py-1 border rounded"
                        >
                            −
                        </button>

                        <span>{productQuantity}</span>

                        <button
                            onClick={() =>
                                setProductQuantity((qty: any) => qty + 1)
                            }
                            className="px-3 py-1 border rounded"
                        >
                            +
                        </button>
                    </div>
                    <DrawerClose asChild>
                        <Button onClick={() => handleAddToCart(product, finalPrice)}>Add to cart</Button>
                    </DrawerClose>
                </DialogContent>
            </Dialog>
        )
    // }

//     return (
//         <Drawer open={open} onOpenChange={setOpen}>
//             <DrawerTrigger asChild>
//                 {children}
//             </DrawerTrigger>
//             <DrawerContent>
//                 <DrawerHeader className="text-left">
//                     <DialogTitle>Product Quantity</DialogTitle>
//                 </DrawerHeader>
//                 <div className="flex items-center gap-3 px-4">
//                     <button
//                         onClick={() =>
//                             setProductQuantity((qty: any) => Math.max(1, qty - 1))
//                         }
//                         className="px-3 py-1 border rounded"
//                     >
//                         −
//                     </button>

//                     <span>{productQuantity}</span>

//                     <button
//                         onClick={() =>
//                             setProductQuantity((qty: any) => qty + 1)
//                         }
//                         className="px-3 py-1 border rounded"
//                     >
//                         +
//                     </button>
//                 </div>

//                 <DrawerFooter className="pt-2">
//                     <DrawerClose asChild>
//                         <Button onClick={() => handleAddToCart(product, finalPrice)}>Add to cart</Button>
//                         <Button variant="outline">Cancel</Button>
//                     </DrawerClose>
//                 </DrawerFooter>
//             </DrawerContent>
//         </Drawer>
//     )
}

// function CartQuantityForm({ className }: React.ComponentProps<"form">) {
//     const { items, updateQuantity, removeItem } = useCartStore();
//     const [quantity, setQuantity] = useState(1)

//     return (
//         <form className={cn("grid items-start gap-6", className)}>
//             <div className="grid gap-3">
//                 <Label htmlFor="email">Select Product Quantity</Label>
//                 <div className="flex items-center gap-3">
//                     <button
//                         onClick={() =>
//                             setQuantity((qty) => Math.max(1, qty - 1))
//                         }
//                         className="px-3 py-1 border rounded"
//                     >
//                         −
//                     </button>

//                     <span>{quantity}</span>

//                     <button
//                         onClick={() =>
//                             setQuantity((qty) => qty + 1)
//                         }
//                         className="px-3 py-1 border rounded"
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//
//         </form>
//     )
// }
