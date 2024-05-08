'use client'
import { useState, useEffect } from "react";
import GetProductVariant from "./service/GetProductVariant";

// Define interfaces for the images and product variant
interface ImageType {
    src: string;
  }
  
  interface Product {
    name: string;
    price: string;
    imageUrl: string;
  }
  
  interface Category {
    name: string;
    products: Product[];
  }
  
  interface ProductVariant {
    id: number;
    title: string;
    image: {
      image: string;
      image_id: number;
    };
    price: string;
    price_with_discount: string | null;
    quantity: number;
  }
  
  // This interface should match the return type of GetProductVariant
  interface ProductVariantType {
    count: number;
    next: string | null;
    previous: string | null;
    results: ProductVariant[];
  }

// Define props for Card component
interface CardProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, children }) => (
  <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '300px' }}>
    <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
    <h3>{title}</h3>
    {children}
  </div>
);

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', overflowX: 'auto' }}>
    {children}
  </div>
);

interface TabsProps {
  children: React.ReactElement[];
  activeKey: number;
  onChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ children, activeKey, onChange }) => {
  const tabs = children.map((child, index) => (
    <button key={index} onClick={() => onChange(index)} style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}>
      {child.props.title}
    </button>
  ));
  return (
    <div>
      <div>{tabs}</div>
      <div>{children[activeKey]}</div>
    </div>
  );
};

Tabs.Tab = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

const ComputerProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [productVariants, setProductVariants] = useState<ProductVariant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProductVariantType = await GetProductVariant();
        setProductVariants(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
    <Tabs activeKey={activeTab} onChange={setActiveTab}>
    {productVariants.map((variant, index) => (
      <Tabs.Tab title={variant.title} key={variant.id}>
        <Carousel>
          <Card title={variant.title} image={variant.image}>
            <p>Price: {variant.price}</p>
            {variant.price_with_discount && <p>Discount Price: {variant.price_with_discount}</p>}
            <p>Quantity Available: {variant.quantity}</p>
          </Card>
        </Carousel>
      </Tabs.Tab>
    ))}
  </Tabs>
  </div>
  );
};

export default ComputerProductSection;
