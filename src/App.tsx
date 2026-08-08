/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-stone-200/80 p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mx-auto text-xl font-semibold shadow-inner">
          ✦
        </div>
        <h1 className="text-2xl font-medium tracking-tight text-stone-900">
          Ready to Build
        </h1>
        <p className="text-stone-500 text-sm leading-relaxed">
          Tell me what you'd like to create today—whether it's a dashboard, interactive tool, AI generator, or custom web application.
        </p>
      </div>
    </div>
  );
}
