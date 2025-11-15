import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Brandora
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-Powered Brand Development Platform
        </p>
        <Link href="/module/audience-research">
          <Button size="lg">
            Go to Audience Research Module →
          </Button>
        </Link>
      </div>
    </div>
  );
}
