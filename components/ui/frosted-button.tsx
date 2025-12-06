import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group",
	{
		variants: {
			variant: {
				primary:
					"bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] focus:ring-violet-500",
				secondary:
					"bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-glass hover:shadow-glass-lg focus:ring-violet-500",
				ghost:
					"text-white hover:bg-white/5 hover:backdrop-blur-xl focus:ring-violet-500",
				outline:
					"border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 backdrop-blur-xl focus:ring-violet-500",
				gradient:
					"bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 text-white shadow-lg hover:shadow-glow-xl hover:scale-[1.02] active:scale-[0.98] focus:ring-purple-500 animate-gradient-shift",
			},
			size: {
				sm: "h-9 px-4 text-sm",
				md: "h-11 px-6 text-base",
				lg: "h-12 px-8 text-lg",
				xl: "h-14 px-10 text-xl",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export interface FrostedButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const FrostedButton = React.forwardRef<HTMLButtonElement, FrostedButtonProps>(
	(
		{
			className,
			variant,
			size,
			loading = false,
			leftIcon,
			rightIcon,
			children,
			disabled,
			...props
		},
		ref
	) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled || loading}
				{...props}
			>
				{/* Shimmer effect overlay for primary and gradient variants */}
				{(variant === "primary" || variant === "gradient") && (
					<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				)}

				{/* Content */}
				<span className="relative flex items-center justify-center gap-2">
					{loading ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
					)}
					{children}
					{!loading && rightIcon && (
						<span className="flex-shrink-0">{rightIcon}</span>
					)}
				</span>
			</button>
		);
	}
);

FrostedButton.displayName = "FrostedButton";

export { FrostedButton, buttonVariants };
