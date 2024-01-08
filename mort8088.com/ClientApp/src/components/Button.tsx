import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonStyles = cva(["transition-colors"], {
    variants:{
        variant:{
            default: [
                "dark:bg-headfoot-back",
                "dark:hover:bg-headfoot-backalt",
                "bg-normal-back",
                "dark:hover:bg-normal-backalt"
            ],
            themeSwitch: [
                "dark:text-headfoot",
                "dark:bg-headfoot-darkBack",
                "dark:hover:bg-normal-back",
                "dark:hover:text-normal-text",

                "bg-normal-back",
                "text-normal-text",
                "hover:bg-headfoot-back",
                "hover:text-headfoot-text",
            ],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary"
            ],
            rss: [
                "text-white",
                "bg-orange-400",
                "hover:border-2",
            ]

        },
        size: {
            default: [
                "rounded",
                "p-2"
            ],
            rss: [
                "rounded", 
                "w-9", 
                "h-9", 
                "flex", 
                "items-center", 
                "justify-center", 
                "p-1.5"
            ],
            icon: [
                "rounded-full", 
                "w-10", 
                "h-10", 
                "flex", 
                "items-center", 
                "justify-center", 
                "p-2.5"
            ]
        }
    },
    defaultVariants:{
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ variant, size, className, ...props }: ButtonProps) {
    return <button { ...props } className={twMerge(buttonStyles({ variant, size }), className)} />
}