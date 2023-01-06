import React from "react";
import dynamic from "next/dynamic";


const loadMinFeatures = () =>
  import("lib/fm/features-min.js").then((res) => res.default);

const LazyMotion = dynamic(() => import("ui/LazyMotion"));

const MButton = dynamic(() => import("ui/m/button"), { ssr: false });

const Dialog = dynamic(() => import("ui/dialog"), { suspense: true });


export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <main grid justify-center>
        <div pt-5 />
        <LazyMotion strict features={loadMinFeatures}>
          <MButton
            text="hover:red"
            cursor-pointer
            bg-transparent
            px-1
            border-0
            rounded-md
            focus:border
            focus:outline-none
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
          >
            click me
          </MButton>
          <React.Suspense>
            <Dialog open={open} onOpenChange={setOpen}>
              <MButton
                text="red hover:green"
                cursor-pointer
                bg-transparent
                px-1
                border-0
                rounded-md
                focus:border
                focus:outline-none
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
              >
                close btn
              </MButton>
            </Dialog>
          </React.Suspense>
        </LazyMotion>
      </main>
    </>
  );
}
