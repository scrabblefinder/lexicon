import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

export const CategoryCard = ({ title, description, Icon, href }: CategoryCardProps) => {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-xl font-montserrat font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};