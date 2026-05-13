import { Clock3 } from "lucide-react";
import ProductPreview from "./ProductPreview.jsx";

export default function PreviewPanel({ product, customizer }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
       <ProductPreview product={product} customizer={customizer} />
    </div>
  );
}

