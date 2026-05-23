import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <div id="newsletter" className="bordered-div-padding border border-t-0">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="size-4 text-muted-foreground" />
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Newsletter
        </span>
      </div>
      <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl">
        Get new posts in your inbox
      </h2>
      <p className="text-muted-foreground mt-2 max-w-[520px] text-sm md:text-base">
        Occasional notes on outbound, automation, and whatever I'm building. No spam.
      </p>

      {status === 'success' ? (
        <p className="mt-4 text-sm font-medium text-green-600 dark:text-green-400">
          You're in! Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex max-w-[420px] gap-2">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '...' : 'Join'}
          </Button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
