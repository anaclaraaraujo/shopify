export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-80">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-white">Shopify</h1>
        </div>
      </div>
    </header>
  );
};