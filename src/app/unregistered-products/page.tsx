// app/registered-products/page.tsx
'use client';
import { unregisteredProducts } from '../data/unregisteredProducts';

export default function UnRegisteredProductsPage() {
  return (
    <section className="px-4 md:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#009B7A]">UnRegistered Products</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {/* <th className="text-left px-4 py-2 border">Sr.</th> */}
              <th className="text-left px-4 py-2 border">Reg. No</th>
              <th className="text-left px-4 py-2 border">Brand Name</th>
              <th className="text-left px-4 py-2 border">Generic Name</th>
              <th className="text-left px-4 py-2 border">Dosage  Form</th>
              <th className="text-left px-4 py-2 border">Pack Size</th>
              <th className="text-left px-4 py-2 border">MRP</th>
              <th className="text-left px-4 py-2 border">Reason for shortage</th>
            </tr>
          </thead>
          <tbody>
            {unregisteredProducts.map((product) => (
              <tr key={product.sr} className="hover:bg-gray-50">
                {/* <td className="px-4 py-2 border">{product.sr}</td> */}
                <td className="px-4 py-2 border">{product.regNo}</td>
                <td className="px-4 py-2 border">{product.Brandname}</td>
                <td className="px-4 py-2 border">{product.Genericname}</td>
                <td className="px-4 py-2 border">{product.DosageForm}</td>
                <td className="px-4 py-2 border">{product.PackSize}</td>
                <td className="px-4 py-2 border">{product.mrp}</td>
                <td className="px-4 py-2 border">{product.rfs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
