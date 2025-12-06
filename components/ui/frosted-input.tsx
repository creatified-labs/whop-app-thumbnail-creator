import * as React from "react";
import { cn } from "@/lib/utils";

export interface FrostedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const FrostedInput = React.forwardRef<HTMLInputElement, FrostedInputProps>(
	({ className, label, error, leftIcon, rightIcon, id, ...props }, ref) => {
		const inputId = id || `input-${React.useId()}`;

		return (
			<div className="w-full">
				{label && (
					<label
						htmlFor={inputId}
						className="block text-sm font-medium text-white/80 mb-2"
					>
						{label}
					</label>
				)}
				<div className="relative group">
					{leftIcon && (
						<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-violet-400 transition-colors duration-300">
							{leftIcon}
						</div>
					)}
					<input
						id={inputId}
						ref={ref}
						className={cn(
							"w-full rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 transition-all duration-300",
							"focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-white/20 focus:bg-white/8",
							"hover:border-white/20 hover:bg-white/8",
							"disabled:opacity-50 disabled:cursor-not-allowed",
							leftIcon && "pl-10",
							rightIcon && "pr-10",
							error && "border-red-500/50 focus:ring-red-500/50",
							className
						)}
						{...props}
					/>
					{rightIcon && (
						<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-violet-400 transition-colors duration-300">
							{rightIcon}
						</div>
					)}
					{/* Gradient glow effect on focus */}
					<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-violet-500/0 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
				</div>
				{error && (
					<p className="mt-1.5 text-sm text-red-400" role="alert">
						{error}
					</p>
				)}
			</div>
		);
	}
);

FrostedInput.displayName = "FrostedInput";

export interface FrostedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
}

const FrostedTextarea = React.forwardRef<HTMLTextAreaElement, FrostedTextareaProps>(
	({ className, label, error, id, ...props }, ref) => {
		const textareaId = id || `textarea-${React.useId()}`;

		return (
			<div className="w-full">
				{label && (
					<label
						htmlFor={textareaId}
						className="block text-sm font-medium text-white/80 mb-2"
					>
						{label}
					</label>
				)}
				<div className="relative group">
					<textarea
						id={textareaId}
						ref={ref}
						className={cn(
							"w-full rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 transition-all duration-300 resize-none",
							"focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-white/20 focus:bg-white/8",
							"hover:border-white/20 hover:bg-white/8",
							"disabled:opacity-50 disabled:cursor-not-allowed",
							error && "border-red-500/50 focus:ring-red-500/50",
							className
						)}
						{...props}
					/>
					{/* Gradient glow effect on focus */}
					<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-violet-500/0 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
				</div>
				{error && (
					<p className="mt-1.5 text-sm text-red-400" role="alert">
						{error}
					</p>
				)}
			</div>
		);
	}
);

FrostedTextarea.displayName = "FrostedTextarea";

export interface FrostedLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FrostedLabel = React.forwardRef<HTMLLabelElement, FrostedLabelProps>(
	({ className, ...props }, ref) => {
		return (
			<label
				ref={ref}
				className={cn(
					"block text-sm font-medium text-white/80 mb-2",
					className
				)}
				{...props}
			/>
		);
	}
);

FrostedLabel.displayName = "FrostedLabel";

export interface FrostedSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
}

const FrostedSelect = React.forwardRef<HTMLSelectElement, FrostedSelectProps>(
	({ className, label, error, id, children, ...props }, ref) => {
		const selectId = id || `select-${React.useId()}`;

		return (
			<div className="w-full">
				{label && (
					<label
						htmlFor={selectId}
						className="block text-sm font-medium text-white/80 mb-2"
					>
						{label}
					</label>
				)}
				<div className="relative group">
					<select
						id={selectId}
						ref={ref}
						className={cn(
							"w-full rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 text-white transition-all duration-300 appearance-none cursor-pointer",
							"focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-white/20 focus:bg-white/8",
							"hover:border-white/20 hover:bg-white/8",
							"disabled:opacity-50 disabled:cursor-not-allowed",
							error && "border-red-500/50 focus:ring-red-500/50",
							className
						)}
						{...props}
					>
						{children}
					</select>
					{/* Custom dropdown arrow */}
					<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-focus-within:text-violet-400 transition-colors duration-300">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
					{/* Gradient glow effect on focus */}
					<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-violet-500/0 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
				</div>
				{error && (
					<p className="mt-1.5 text-sm text-red-400" role="alert">
						{error}
					</p>
				)}
			</div>
		);
	}
);

FrostedSelect.displayName = "FrostedSelect";

export { FrostedInput, FrostedTextarea, FrostedLabel, FrostedSelect };
