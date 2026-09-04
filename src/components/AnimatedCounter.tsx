"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const decimalSep = numStr.includes(",") ? "," : null;
  const target = parseFloat(numStr.replace(",", "."));
  const decimals = decimalSep ? numStr.split(",")[1]?.length ?? 0 : 0;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (!ref.current) return;
      const formatted = decimals > 0 ? v.toFixed(decimals).replace(".", ",") : Math.round(v).toString();
      ref.current.textContent = `${prefix}${formatted}${suffix}`;
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? (0).toFixed(decimals).replace(".", ",") : 0}
      {suffix}
    </span>
  );
}
