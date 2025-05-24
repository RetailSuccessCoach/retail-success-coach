'use client';

import MainLayout from '@/components/layout/MainLayout';
import { ScaleHeading } from '@/components/ui/ScaleHeading';
import { motion } from 'framer-motion';
import CalComPage from './calcompage';

export default function ProfitPerformanceCallPage() {
  return (
    <MainLayout>
      <section className="pt-20 pb-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <ScaleHeading size="3xl" className="mb-8 text-center">
            Book a <span className="scale-gradient-text">Discovery Call</span>
          </ScaleHeading>
          <CalComPage />
        </motion.div>
      </section>
    </MainLayout>
  );
}
