"use client";

import { useState } from "react";
import Image from "next/image";
import {
	FrostedButton,
	FrostedCard,
	FrostedCardHeader,
	FrostedCardTitle,
	FrostedCardDescription,
	FrostedCardBody,
	FrostedInput,
	FrostedTextarea,
} from "@/components/ui";
import {
	Video,
	Sparkles,
	ArrowRight,
	Download,
	Lightbulb,
	ImageIcon,
} from "lucide-react";

// Style options for thumbnail generation
const STYLES = [
	{ id: "photorealistic", name: "Photorealistic", emoji: "📸" },
	{ id: "3d-render", name: "3D Render", emoji: "🎨" },
	{ id: "anime", name: "Anime", emoji: "🎌" },
	{ id: "illustration", name: "Illustration", emoji: "✏️" },
	{ id: "cinematic", name: "Cinematic", emoji: "🎬" },
	{ id: "vibrant-pop", name: "Vibrant Pop", emoji: "🌈" },
	{ id: "dark-moody", name: "Dark Moody", emoji: "🌙" },
	{ id: "minimalist", name: "Minimalist", emoji: "⚪" },
];

export default function GeneratePage() {
	// Form state
	const [videoTitle, setVideoTitle] = useState("");
	const [promptInput, setPromptInput] = useState("");
	const [selectedStyle, setSelectedStyle] = useState("photorealistic");
	const [enhancedPrompt, setEnhancedPrompt] = useState("");

	// Loading states
	const [isEnhancing, setIsEnhancing] = useState(false);
	const [isGenerating, setIsGenerating] = useState(false);

	// Generated image
	const [generatedImage, setGeneratedImage] = useState<string | null>(null);

	/**
	 * Enhance the user's prompt using ChatGPT
	 */
	const handleEnhancePrompt = async () => {
		if (!promptInput.trim()) return;

		setIsEnhancing(true);
		try {
			const response = await fetch("/api/generate/enhance-prompt", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					prompt: promptInput,
					videoTitle: videoTitle || undefined,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to enhance prompt");
			}

			const data = await response.json();
			setEnhancedPrompt(data.enhancedPrompt);
		} catch (error) {
			console.error("Error enhancing prompt:", error);
			alert("Failed to enhance prompt. Please try again.");
		} finally {
			setIsEnhancing(false);
		}
	};

	/**
	 * Generate thumbnail using Nano Banana Pro
	 */
	const handleGenerate = async () => {
		const finalPrompt = enhancedPrompt || promptInput;
		if (!finalPrompt.trim()) return;

		setIsGenerating(true);
		try {
			const response = await fetch("/api/generate/thumbnail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					prompt: finalPrompt,
					style: selectedStyle,
					videoTitle: videoTitle || undefined,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to generate thumbnail");
			}

			const data = await response.json();
			setGeneratedImage(data.imageUrl);
		} catch (error) {
			console.error("Error generating thumbnail:", error);
			alert("Failed to generate thumbnail. Please try again.");
		} finally {
			setIsGenerating(false);
		}
	};

	/**
	 * Reset enhanced prompt to allow editing
	 */
	const handleEditPrompt = () => {
		setEnhancedPrompt("");
	};

	/**
	 * Download the generated image
	 */
	const handleDownload = () => {
		if (!generatedImage) return;

		const link = document.createElement("a");
		link.href = generatedImage;
		link.download = `thumbnail-${Date.now()}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Check if generate button should be disabled
	const isGenerateDisabled =
		isEnhancing || isGenerating || (!promptInput.trim() && !enhancedPrompt);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-5xl font-bold gradient-text-accent mb-3">
						AI Thumbnail Generator
					</h1>
					<p className="text-xl text-white/60">
						Create stunning YouTube thumbnails with AI-powered design
					</p>
				</div>

				{/* Two-column layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* LEFT COLUMN - Input Forms */}
					<div className="space-y-6">
						{/* Video Title Input */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Video Title</FrostedCardTitle>
								<FrostedCardDescription>
									Optional: Helps the AI understand context
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody>
								<FrostedInput
									placeholder="e.g., How to Cook Perfect Pasta"
									value={videoTitle}
									onChange={(e) => setVideoTitle(e.target.value)}
									leftIcon={<Video className="w-5 h-5" />}
									aria-label="Video title"
								/>
							</FrostedCardBody>
						</FrostedCard>

						{/* Prompt Input */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Describe Your Thumbnail</FrostedCardTitle>
								<FrostedCardDescription>
									Tell us what you want to see in your thumbnail
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								<FrostedTextarea
									placeholder="e.g., A chef in a modern kitchen tossing pasta in the air with steam rising, bright and inviting atmosphere, professional food photography"
									rows={4}
									value={promptInput}
									onChange={(e) => setPromptInput(e.target.value)}
									disabled={!!enhancedPrompt}
									aria-label="Thumbnail description"
								/>
								{!enhancedPrompt && (
									<FrostedButton
										variant="secondary"
										onClick={handleEnhancePrompt}
										loading={isEnhancing}
										disabled={!promptInput.trim() || isEnhancing}
										leftIcon={<Sparkles className="w-4 h-4" />}
										className="w-full"
									>
										{isEnhancing ? "Enhancing..." : "Enhance with AI"}
									</FrostedButton>
								)}
							</FrostedCardBody>
						</FrostedCard>

						{/* Enhanced Prompt Display */}
						{enhancedPrompt && (
							<FrostedCard glow>
								<FrostedCardHeader>
									<div className="flex items-center gap-2">
										<Lightbulb className="w-5 h-5 text-violet-400" />
										<FrostedCardTitle>AI-Enhanced Prompt</FrostedCardTitle>
									</div>
									<FrostedCardDescription>
										Your prompt has been optimized for better results
									</FrostedCardDescription>
								</FrostedCardHeader>
								<FrostedCardBody className="space-y-4">
									<div className="rounded-lg bg-white/5 border border-white/10 p-4">
										<p className="text-white/90 text-sm leading-relaxed">
											{enhancedPrompt}
										</p>
									</div>
									<FrostedButton
										variant="ghost"
										onClick={handleEditPrompt}
										size="sm"
										className="w-full"
									>
										Edit Prompt
									</FrostedButton>
								</FrostedCardBody>
							</FrostedCard>
						)}

						{/* Style Selector */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Choose Style</FrostedCardTitle>
								<FrostedCardDescription>
									Select the visual style for your thumbnail
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody>
								<div className="grid grid-cols-2 gap-3">
									{STYLES.map((style) => (
										<button
											key={style.id}
											onClick={() => setSelectedStyle(style.id)}
											className={`
												relative rounded-lg p-4 text-left transition-all duration-300
												${
													selectedStyle === style.id
														? "bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/50 shadow-glow"
														: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
												}
											`}
											aria-label={`Select ${style.name} style`}
											aria-pressed={selectedStyle === style.id}
										>
											<div className="flex items-center gap-3">
												<span className="text-2xl" aria-hidden="true">
													{style.emoji}
												</span>
												<span
													className={`text-sm font-medium ${
														selectedStyle === style.id
															? "text-white"
															: "text-white/80"
													}`}
												>
													{style.name}
												</span>
											</div>
											{selectedStyle === style.id && (
												<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-400" />
											)}
										</button>
									))}
								</div>
							</FrostedCardBody>
						</FrostedCard>

						{/* Generate Button */}
						<FrostedButton
							variant="gradient"
							size="xl"
							onClick={handleGenerate}
							loading={isGenerating}
							disabled={isGenerateDisabled}
							rightIcon={<ArrowRight className="w-5 h-5" />}
							className="w-full"
						>
							{isGenerating ? "Generating Thumbnail..." : "Generate Thumbnail"}
						</FrostedButton>
					</div>

					{/* RIGHT COLUMN - Preview */}
					<div className="lg:sticky lg:top-8 lg:self-start">
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Preview</FrostedCardTitle>
								<FrostedCardDescription>
									Your generated thumbnail will appear here
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								{/* Preview Container - 16:9 aspect ratio */}
								<div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10 group">
									{generatedImage ? (
										<>
											{/* Generated Image */}
											<Image
												src={generatedImage}
												alt="Generated thumbnail"
												fill
												className="object-cover"
												priority
											/>
											{/* Download Overlay on Hover */}
											<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
												<FrostedButton
													variant="secondary"
													onClick={handleDownload}
													leftIcon={<Download className="w-5 h-5" />}
												>
													Download
												</FrostedButton>
											</div>
										</>
									) : (
										/* Empty State */
										<div className="absolute inset-0 flex flex-col items-center justify-center text-white/40">
											<ImageIcon className="w-16 h-16 mb-4" />
											<p className="text-sm">Your thumbnail will appear here</p>
										</div>
									)}
								</div>

								{/* Image Info */}
								{generatedImage && (
									<div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10">
										<div className="flex justify-between text-sm">
											<span className="text-white/60">Resolution:</span>
											<span className="text-white font-medium">1536 × 1024</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-white/60">Style:</span>
											<span className="text-white font-medium">
												{STYLES.find((s) => s.id === selectedStyle)?.name}
											</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-white/60">Format:</span>
											<span className="text-white font-medium">PNG</span>
										</div>
									</div>
								)}
							</FrostedCardBody>
						</FrostedCard>
					</div>
				</div>
			</div>
		</div>
	);
}
