import { notFound } from 'next/navigation';
import { recipes } from '@/data/recipes';
import RecipeDetailClient from './RecipeDetailClient';

interface RecipeDetailPageProps {
  params: {
    id: string;
  };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const recipe = recipes.find(r => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetailClient recipe={recipe} />;
}
