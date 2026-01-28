import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 bg-cream border-b border-border"
    >
      <div className="memorial-container">
        <h1 className="memorial-heading text-4xl md:text-5xl mb-4">{title}</h1>
        {subtitle && (
          <p className="memorial-subheading text-xl md:text-2xl">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
