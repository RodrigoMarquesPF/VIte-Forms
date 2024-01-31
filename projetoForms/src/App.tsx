import { CreateProductDialog } from "./components/create-product-dialog";
import { ProductsFilters } from "./components/products-filters";
import { Button } from "./components/ui/button";
import {
  Dialog, DialogTrigger
} from "./components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { PlusCircle } from "lucide-react";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produots</h1>
      <div className="flex items-centr justify-between">
       
       <ProductsFilters/>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog/>
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>ifodmf9e0fuf8</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>R$ 122,00</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
