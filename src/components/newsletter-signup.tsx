import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Subscribe failed');

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bordered-div-padding border-x border-b text-center">
      <h3 className="font-weight-display text-lg tracking-tight md:text-xl">
        Your competitors are closing deals while you write cold emails
      </h3>
      <p className="text-muted-foreground mt-1 text-sm md:text-base">
        I share the exact prompts, workflows, and automations I use to turn AI into a revenue engine. Join and steal
        what works.
      </p>

      {status === 'success' ? (
        <p className="mt-4 text-sm font-medium text-green-600 dark:text-green-400">
          You're in! Check your inbox to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex items-center justify-center gap-2">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="max-w-xs"
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">Something went wrong. Try again.</p>
      )}
    </div>
  );
};

export default NewsletterSignup;
