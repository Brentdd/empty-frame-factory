export const NotForSection = () => {
  return (
    <article className="bg-forest text-white py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center mb-12 md:mb-16">
          Let's be honest - we're not for everyone.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span>✗</span> This won't work if:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>Your products are "fine" but not exceptional</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>You want a passive partner who just lists things online</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>You're looking for someone to warehouse inventory you can't sell at home</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>You expect overnight results with zero communication from your end</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>Your brand story is "we make stuff cheap"</span>
              </li>
            </ul>
          </div>

          <div className="bg-white text-slate p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-forest">
              <span>✓</span> But if:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>Your craft rivals European heritage brands</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>You're serious about building a European presence, not just testing</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>You respond to emails and believe in transparent partnerships</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>You want a partner who tells you hard truths, not just what you want to hear</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>Your products have a story worth telling</span>
              </li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-forest text-center">Then let's talk.</p>
          </div>
        </div>
      </div>
    </article>
  );
};
