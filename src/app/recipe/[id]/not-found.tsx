import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The recipe you're looking for doesn't exist or may have been removed.
        </p>
        <Link 
          href="/" 
          className="btn-primary"
        >
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}

