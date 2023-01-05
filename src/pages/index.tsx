import React from "react";
import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("ui/dialog"), { ssr: false });
const MotionBtn = dynamic(() => import("ui/motion/button"), { ssr: false });
// const MotionDiv = dynamic(() => import("ui/motion/div"), { ssr: false });

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <main grid justify-center>
        <div pt-5/>
        <button
          h-4
          bg-transparent
          border-0
          text="red hover:purple-500"
          cursor-pointer
          onClick={() => setOpen(!open)}
        >click me</button>
        <React.Suspense>
          <Dialog open={open} onOpenChange={setOpen}>
            <MotionBtn
              style={{ all: "unset" }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpen(!open)}
            >
              <div text="red hover:purple-500" cursor-pointer>
                close btn
              </div>
            </MotionBtn>
          </Dialog>
        </React.Suspense>
      </main>
    </>
  );
}
