import { useEffect, useState } from 'react';
import { X, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DISMISSED_KEY = 'newsletter-dismissed';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [popupVisible, setPopupVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(DISMISSED_KEY);
    if (wasDismissed) return;

    const timer = setTimeout(() => {
      setDismissed(false);
      setPopupVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setPopupVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  const handleOpen = () => {
    setPopupVisible(true);
  };

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
      setTimeout(() => {
        setPopupVisible(false);
        setDismissed(true);
        sessionStorage.setItem(DISMISSED_KEY, '1');
      }, 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Sticky side tab */}
      {!popupVisible && !dismissed && (
        <button
          onClick={handleOpen}
          className="fixed right-0 top-1/2 z-50 -translate-y-1/2 flex items-center gap-2 rounded-l-lg border border-r-0 bg-background px-3 py-3 shadow-lg transition-all hover:pr-5"
          aria-label="Open newsletter signup"
        >
          <Mail className="size-4" />
          <span className="text-xs font-medium hidden sm:inline">Subscribe</span>
        </button>
      )}

      {/* Popup */}
      {popupVisible && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-5 fade-in duration-300 rounded-lg border bg-background p-5 shadow-xl">
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          <h3 className="font-weight-display text-base tracking-tight pr-6">
            Your competitors are closing deals while you write cold emails
          </h3>
          <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
            I share the exact prompts, workflows, and automations I use to turn AI into a revenue
            engine. Join and steal what works.
          </p>

          {status === 'success' ? (
            <p className="mt-4 text-sm font-medium text-green-600 dark:text-green-400">
              You're in! Check your inbox to confirm.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-sm"
              />
              <Button type="submit" size="sm" disabled={status === 'loading'}>
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
      )}
    </>
  );
};

export default NewsletterSignup;
