"use client";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({
    id: crypto.randomUUID,
    name: "",
    price: 0,
    photo: "",
  });

  const [products, setProducts] = useState([]);
  const handleSubmit = () => {
    if (!product.name || !product.price || !product.photo) return;
    setProducts((pre) => [...pre, product]);
    setIsOpen(false);
    setProduct({
      id: crypto.randomUUID(),
      name: "",
      price: 0,
      photo: "",
    });
  };
  console.log(products);
  return (
    <div className="w-5xl mx-auto text-center space-y-5">
      <Navbar />
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        {" "}
        Create Product{" "}
      </Button>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <form>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Create Product</DialogTitle>
              <DialogDescription>
                Add a new product and it will appear in the list below
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input
                  id="name-1"
                  name="name"
                  defaultValue={product.name}
                  placeholder="Product Name"
                  onChange={(e) =>
                    setProduct((pre) => ({
                      ...pre,
                      name: e.target.value,
                    }))
                  }
                />
              </Field>
              <Field>
                <Label htmlFor="price-1">Price</Label>
                <Input
                  id="price-1"
                  name="price"
                  defaultValue={product.price}
                  onChange={(e) =>
                    setProduct((pre) => ({
                      ...pre,
                      price: Number(e.target.value),
                    }))
                  }
                />
              </Field>
              <Field>
                <Label htmlFor="photo-1">Photo</Label>
                <Input
                  id="photo-1"
                  name="photo"
                  defaultValue={product.photo}
                  onChange={(e) =>
                    setProduct((pre) => ({
                      ...pre,
                      photo: e.target.value,
                    }))
                  }
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" onClick={handleSubmit}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      <div className="grid grid-cols-3 gap-4">
       
        {products.map((product, index) => (
         <div key= {product .id} className= "flex flex-col p-4 border rounded-lg">
          <img src= {product.photo} alt={product.name} />
          <div className=" flex justify-between ">

            <div className="">
              <h3 className=" font-semibold text -xl text-blue-500">Castify Case</h3>
              <p className="text-left">$40</p>
            </div>
            <Button>Add to cart</Button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
