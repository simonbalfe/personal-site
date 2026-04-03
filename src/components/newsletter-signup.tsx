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
      {/* Sticky side bar with hook + form, always visible when popup is closed */}
      {!popupVisible && !dismissed && (
        <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 w-[280px] rounded-l-xl border border-r-0 bg-background p-4 shadow-xl animate-in slide-in-from-right-5 fade-in duration-300">
          <button
            onClick={() => {
              setDismissed(true);
              sessionStorage.setItem(DISMISSED_KEY, '1');
            }}
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="size-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Mail className="size-4 text-muted-foreground shrink-0" />
            <p className="font-weight-display text-sm tracking-tight leading-tight pr-4">
              AI prompts & workflows that close deals
            </p>
          </div>

          {status === 'success' ? (
            <p className="text-xs font-medium text-green-600 dark:text-green-400">
              You're in! Check your inbox.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-1.5">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-xs h-8"
              />
              <Button type="submit" size="sm" className="h-8 text-xs px-3" disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Join'}
              </Button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">Try again.</p>
          )}
        </div>
      )}

      {/* Centre popup with backdrop */}
      {popupVisible && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 animate-in fade-in duration-200"
            onClick={handleDismiss}
          />
          <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[420px] max-w-[calc(100vw-2rem)] animate-in zoom-in-95 fade-in duration-300 rounded-xl border bg-background p-6 shadow-2xl">
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Mail className="size-5 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Newsletter</span>
            </div>

            <h3 className="font-weight-display text-lg tracking-tight pr-6">
              Your competitors are closing deals while you write cold emails
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              I share the exact prompts, workflows, and automations I use to turn AI into a revenue
              engine. Join and steal what works.
            </p>

            {status === 'success' ? (
              <p className="mt-5 text-sm font-medium text-green-600 dark:text-green-400">
                You're in! Check your inbox to confirm.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
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
        </>
      )}
    </>
  );
};

export default NewsletterSignup;
