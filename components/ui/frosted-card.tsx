import * as React from "react";
import { cn } from "@/lib/utils";

export interface FrostedCardProps extends React.HTMLAttributes<HTMLDivElement> {
	glow?: boolean;
	gradient?: boolean;
	hover?: boolean;
}

const FrostedCard = React.forwardRef<HTMLDivElement, FrostedCardProps>(
	({ className, glow = false, gradient = false, hover = true, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass transition-all duration-300",
					hover && "hover:bg-white/8 hover:border-white/20 hover:shadow-glass-lg hover:scale-[1.01]",
					glow && "shadow-glow hover:shadow-glow-lg",
					gradient && "bg-gradient-to-br from-white/10 to-white/5",
					className
				)}
				{...props}
			/>
		);
	}
);

FrostedCard.displayName = "FrostedCard";

export interface FrostedCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const FrostedCardHeader = React.forwardRef<HTMLDivElement, FrostedCardHeaderProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
				{...props}
			/>
		);
	}
);

FrostedCardHeader.displayName = "FrostedCardHeader";

export interface FrostedCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const FrostedCardTitle = React.forwardRef<HTMLHeadingElement, FrostedCardTitleProps>(
	({ className, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={cn(
					"text-2xl font-semibold leading-none tracking-tight text-white",
					className
				)}
				{...props}
			/>
		);
	}
);

FrostedCardTitle.displayName = "FrostedCardTitle";

export interface FrostedCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FrostedCardDescription = React.forwardRef<HTMLParagraphElement, FrostedCardDescriptionProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn("text-sm text-white/60", className)}
				{...props}
			/>
		);
	}
);

FrostedCardDescription.displayName = "FrostedCardDescription";

export interface FrostedCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const FrostedCardBody = React.forwardRef<HTMLDivElement, FrostedCardBodyProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("p-6 pt-0", className)}
				{...props}
			/>
		);
	}
);

FrostedCardBody.displayName = "FrostedCardBody";

export interface FrostedCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const FrostedCardFooter = React.forwardRef<HTMLDivElement, FrostedCardFooterProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("flex items-center p-6 pt-0", className)}
				{...props}
			/>
		);
	}
);

FrostedCardFooter.displayName = "FrostedCardFooter";

export interface FrostedFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: React.ReactNode;
	title: string;
	description: string;
	glow?: boolean;
}

const FrostedFeatureCard = React.forwardRef<HTMLDivElement, FrostedFeatureCardProps>(
	({ className, icon, title, description, glow = false, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"group relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-glass transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-glass-lg hover:scale-[1.02]",
					glow && "hover:shadow-glow-lg",
					className
				)}
				{...props}
			>
				{/* Gradient overlay on hover */}
				<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

				{/* Content */}
				<div className="relative z-10">
					{icon && (
						<div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 text-violet-400 group-hover:scale-110 transition-transform duration-300">
							{icon}
						</div>
					)}
					<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
						{title}
					</h3>
					<p className="text-white/60 text-sm leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		);
	}
);

FrostedFeatureCard.displayName = "FrostedFeatureCard";

export {
	FrostedCard,
	FrostedCardHeader,
	FrostedCardTitle,
	FrostedCardDescription,
	FrostedCardBody,
	FrostedCardFooter,
	FrostedFeatureCard,
};
