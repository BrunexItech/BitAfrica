import React from 'react';

function SignIn() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-20 max-w-md">
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h1>
          <p className="text-gray-400 mb-8 text-center">
            Dummy sign in form. This will be replaced with actual authentication.
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Dummy email input"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Dummy password input"
              />
            </div>
            
            <button
              type="button"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Dummy Sign In
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-6 text-center">
            This is a dummy page. Actual authentication will be implemented later.
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignIn;