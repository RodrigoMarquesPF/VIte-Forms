import { Button } from "./ui/button";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver } from '@hookform/resolvers/zod'
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const productFiltersSchema = z.object({
  id:z.string(),
  name:z.string(),
})

type ProductsFiltersSchema = z.infer<typeof productFiltersSchema>

export function ProductsFilters() {

  //validação com o zod
  const { register, handleSubmit} = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productFiltersSchema),
  })

  function handleFilterProducts(data: ProductsFiltersSchema) {
    console.log(data)
  }
    return (

        <form onSubmit={handleSubmit(handleFilterProducts)} className="flex items-center gap-2">
        <Input  placeholder="Id do pedido" {...register('id')}></Input>
        <Input  placeholder="Nome do produto" {...register('name')}></Input>
        <Button type="submit" variant={"link"}>
          <Search className="w-4 h-4 mr-2" />
          Filtrar resultados
        </Button>
      </form>
    )
}