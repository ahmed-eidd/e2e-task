import Image from 'next/image';
import { promises as fs } from 'fs';
import ProductList from './_components/ProuctList/ProductList';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  
  return (
    <div>
      <ProductList products={data} />
    </div>
  );
}
