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

// import { useMediaQuery } from "@/hooks/use-media-query"


interface DrawerDialogDemoProps {
    children: React.ReactNode
    productQuantity: number
    setProductQuantity: any
}


export function DrawerDialogDemo({ children, productQuantity, setProductQuantity }: DrawerDialogDemoProps) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
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
                            setProductQuantity((qty : any) => Math.max(1, qty - 1))
                        }
                        className="px-3 py-1 border rounded"
                    >
                        −
                    </button>

                    <span>{productQuantity}</span>

                    <button
                        onClick={() =>
                            setProductQuantity((qty : any) => qty + 1)
                        }
                        className="px-3 py-1 border rounded"
                    >
                        +
                    </button>
                </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DialogTitle>Product Quantity</DialogTitle>
                </DrawerHeader>
                <div className="flex items-center gap-3 px-4">
                    <button
                        onClick={() =>
                            setProductQuantity((qty : any) => Math.max(1, qty - 1))
                        }
                        className="px-3 py-1 border rounded"
                    >
                        −
                    </button>

                    <span>{productQuantity}</span>

                    <button
                        onClick={() =>
                            setProductQuantity((qty : any) => qty + 1)
                        }
                        className="px-3 py-1 border rounded"
                    >
                        +
                    </button>
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
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
//             <Button onClick={() => updateQuantity(items[0].id, quantity)}>Add to cart</Button>
//         </form>
//     )
// }
