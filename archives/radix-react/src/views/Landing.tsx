import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Avatar() {
  return (
    <div className="bg-gray-200 rounded-full w-10 h-10 text-xl font-bold text-slate-600 p-1">
      CK
    </div>
  );
}

function Landing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center text-gray-100 gap-4">
      <DropdownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenu.Trigger>
          <Avatar />
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {isDropdownOpen && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content sideOffset={6} align="start">
                <motion.div
                  className=" max-w-[200px] bg-gray-700/90 shadow-2xl backdrop-blur-sm rounded-md text-gray-200 p-3 flex flex-col gap-2 text-sm origin-top-left"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <DropdownMenu.Group className="flex flex-col gap-2">
                    <DropdownMenu.Item>View Profile</DropdownMenu.Item>
                    <DropdownMenu.Item>Edit Profile</DropdownMenu.Item>
                    <DropdownMenu.Item>Change Password</DropdownMenu.Item>
                  </DropdownMenu.Group>

                  <DropdownMenu.Separator className="h-px bg-gray-500/50" />

                  <DropdownMenu.Group>
                    <button
                      type="button"
                      className="text-red-400 font-semibold"
                    >
                      Logout
                    </button>
                  </DropdownMenu.Group>
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>

      <p className="max-w-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        quidem soluta provident blanditiis? Officiis repellat cupiditate
        deserunt voluptatibus eos libero obcaecati error sunt. Omnis iure,
        doloremque eaque esse sunt quod nostrum animi! Excepturi reprehenderit
        odio placeat eaque? Sunt, vel voluptatibus.
      </p>
    </main>
  );
}

export default Landing;
