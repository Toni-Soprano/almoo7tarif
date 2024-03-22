<input
              className="p-2 rounded-xl border mb-2"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative mb-2">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>