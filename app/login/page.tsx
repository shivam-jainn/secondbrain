'use client';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button2';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card2';
import { LucideMail, LucideLock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  
  useEffect(() => {
      if (session) {
        router.push('/');
      }
    }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-[#3b3b3b] border-[#3b3b3b] shadow-xl rounded-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white">Sign in to continue to SecondBrain</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 text-white"
                required
              />
              <LucideMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 text-white"
                required
              />
              <LucideLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#636363] hover:bg-[#222222]"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#636363] px-2 text-black">Or continue with</span>
          </div>
        </div>

        <div className="grid gap-4">
          <Button
            variant="outline"
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center text-black"
          >
            <FcGoogle className="mr-2 h-5 w-5" /> {/* Google Icon */}
            Sign-Up with Google
          </Button>
        </div>

        <p className="text-center text-sm text-white">
          Dont have an account?{' '}
          <Link href="/signup" className="text-[#1995AD] hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
