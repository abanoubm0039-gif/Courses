"use client";

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { motion, AnimatePresence } from "framer-motion"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onToggle?: () => void
    className?: string
}

export function AccordionItem({ title, children, isOpen, onToggle, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b border-slate-200", className)}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline"
            >
                {title}
                <ChevronDown
                    className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-4 pt-0 text-sm text-slate-500">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AccordionProps {
    items: { title: string; content: React.ReactNode }[]
    className?: string
}

export function Accordion({ items, className }: AccordionProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <div className={className}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
