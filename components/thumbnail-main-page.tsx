"use client";

import { useState } from "react";
import {
	FrostedButton,
	FrostedCard,
	FrostedCardHeader,
	FrostedCardTitle,
	FrostedCardDescription,
	FrostedCardBody,
	FrostedCardFooter,
	FrostedFeatureCard,
	FrostedInput,
	FrostedTextarea,
	FrostedSelect,
} from "@/components/ui";
import {
	Sparkles,
	Zap,
	Rocket,
	Mail,
	Lock,
	Search,
	ArrowRight,
	Download,
	Upload,
	Image as ImageIcon,
	Wand2,
	Star,
	Heart,
	Share2,
} from "lucide-react";

export default function ThumbnailMainPage() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");
	const [style, setStyle] = useState("");

	const handleGenerate = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto space-y-12">
				{/* Hero Section */}
				<div className="text-center space-y-6 py-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4">
						<Sparkles className="w-4 h-4 text-violet-400" />
						<span className="text-sm text-white/80">Frosted UI Components</span>
					</div>
					<h1 className="text-6xl font-bold gradient-text-accent animate-gradient-shift">
						AI Thumbnail Generator
					</h1>
					<p className="text-xl text-white/60 max-w-2xl mx-auto">
						Create stunning YouTube thumbnails with AI-powered design and beautiful glassmorphism UI
					</p>
					<div className="flex items-center justify-center gap-4 pt-4">
						<FrostedButton
							variant="gradient"
							size="lg"
							leftIcon={<Wand2 className="w-5 h-5" />}
							rightIcon={<ArrowRight className="w-5 h-5" />}
						>
							Start Creating
						</FrostedButton>
						<FrostedButton variant="secondary" size="lg">
							View Examples
						</FrostedButton>
					</div>
				</div>

				{/* Button Showcase */}
				<section className="space-y-6">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold gradient-text">Button Variants</h2>
						<p className="text-white/60">All button styles with different sizes and states</p>
					</div>
					
					<FrostedCard glow>
						<FrostedCardBody className="space-y-8">
							{/* Primary Buttons */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-white flex items-center gap-2">
									<Star className="w-5 h-5 text-violet-400" />
									Primary Variant
								</h3>
								<div className="flex flex-wrap gap-4">
									<FrostedButton size="sm">Small</FrostedButton>
									<FrostedButton size="md">Medium</FrostedButton>
									<FrostedButton size="lg">Large</FrostedButton>
									<FrostedButton size="xl">Extra Large</FrostedButton>
								</div>
							</div>

							{/* With Icons */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-white flex items-center gap-2">
									<Sparkles className="w-5 h-5 text-violet-400" />
									With Icons
								</h3>
								<div className="flex flex-wrap gap-4">
									<FrostedButton leftIcon={<Download className="w-4 h-4" />}>
										Download
									</FrostedButton>
									<FrostedButton rightIcon={<Upload className="w-4 h-4" />}>
										Upload
									</FrostedButton>
									<FrostedButton
										leftIcon={<ImageIcon className="w-4 h-4" />}
										rightIcon={<ArrowRight className="w-4 h-4" />}
									>
										Generate Image
									</FrostedButton>
								</div>
							</div>

							{/* All Variants */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-white flex items-center gap-2">
									<Zap className="w-5 h-5 text-violet-400" />
									All Variants
								</h3>
								<div className="flex flex-wrap gap-4">
									<FrostedButton variant="primary">Primary</FrostedButton>
									<FrostedButton variant="secondary">Secondary</FrostedButton>
									<FrostedButton variant="ghost">Ghost</FrostedButton>
									<FrostedButton variant="outline">Outline</FrostedButton>
									<FrostedButton variant="gradient">Gradient</FrostedButton>
								</div>
							</div>

							{/* States */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-white flex items-center gap-2">
									<Rocket className="w-5 h-5 text-violet-400" />
									Button States
								</h3>
								<div className="flex flex-wrap gap-4">
									<FrostedButton loading={loading} onClick={handleGenerate}>
										{loading ? "Generating..." : "Click to Load"}
									</FrostedButton>
									<FrostedButton disabled>Disabled</FrostedButton>
									<FrostedButton variant="secondary" loading={loading}>
										Secondary Loading
									</FrostedButton>
								</div>
							</div>
						</FrostedCardBody>
					</FrostedCard>
				</section>

				{/* Card Showcase */}
				<section className="space-y-6">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold gradient-text">Card Components</h2>
						<p className="text-white/60">Beautiful frosted glass cards with various effects</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Basic Card */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Basic Card</FrostedCardTitle>
								<FrostedCardDescription>
									Standard frosted glass card with subtle effects
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody>
								<p className="text-white/70 text-sm leading-relaxed">
									This card uses the default glass effect with backdrop blur and transparent background.
									Perfect for content sections.
								</p>
							</FrostedCardBody>
							<FrostedCardFooter>
								<FrostedButton size="sm" variant="ghost">
									Learn More
								</FrostedButton>
							</FrostedCardFooter>
						</FrostedCard>

						{/* Card with Glow */}
						<FrostedCard glow>
							<FrostedCardHeader>
								<FrostedCardTitle className="gradient-text">Glowing Card</FrostedCardTitle>
								<FrostedCardDescription>
									Card with purple glow effect
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody>
								<p className="text-white/70 text-sm leading-relaxed">
									The glow prop adds a beautiful purple shadow that becomes more intense on hover.
									Great for highlighting important content.
								</p>
							</FrostedCardBody>
							<FrostedCardFooter>
								<FrostedButton size="sm" variant="secondary">
									Explore
								</FrostedButton>
							</FrostedCardFooter>
						</FrostedCard>

						{/* Card with Gradient */}
						<FrostedCard gradient>
							<FrostedCardHeader>
								<FrostedCardTitle>Gradient Card</FrostedCardTitle>
								<FrostedCardDescription>
									Enhanced with gradient overlay
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody>
								<p className="text-white/70 text-sm leading-relaxed">
									The gradient prop adds a subtle gradient overlay to create more depth and visual interest.
								</p>
							</FrostedCardBody>
							<FrostedCardFooter>
								<FrostedButton size="sm">
									Get Started
								</FrostedButton>
							</FrostedCardFooter>
						</FrostedCard>
					</div>

					{/* Feature Cards */}
					<div className="space-y-4 pt-6">
						<h3 className="text-2xl font-semibold text-white text-center">Feature Cards</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<FrostedFeatureCard
								icon={<Sparkles className="w-6 h-6" />}
								title="AI-Powered Design"
								description="Generate stunning thumbnails using cutting-edge AI technology that understands design principles"
							/>
							<FrostedFeatureCard
								icon={<Zap className="w-6 h-6" />}
								title="Lightning Fast"
								description="Create professional-quality thumbnails in seconds, not hours. No design skills required"
								glow
							/>
							<FrostedFeatureCard
								icon={<Rocket className="w-6 h-6" />}
								title="Easy to Use"
								description="Intuitive interface that anyone can master. Just describe what you want and let AI do the rest"
							/>
						</div>
					</div>
				</section>

				{/* Form Inputs Showcase */}
				<section className="space-y-6">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold gradient-text">Form Inputs</h2>
						<p className="text-white/60">Beautiful form components with glassmorphism styling</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{/* Input Examples */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Input Fields</FrostedCardTitle>
								<FrostedCardDescription>
									Text inputs with icons and validation
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								<FrostedInput
									label="Email Address"
									type="email"
									placeholder="you@example.com"
									leftIcon={<Mail className="w-5 h-5" />}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>

								<FrostedInput
									label="Password"
									type="password"
									placeholder="Enter your password"
									leftIcon={<Lock className="w-5 h-5" />}
								/>

								<FrostedInput
									label="Search"
									type="text"
									placeholder="Search thumbnails..."
									leftIcon={<Search className="w-5 h-5" />}
								/>

								<FrostedInput
									label="With Error"
									type="text"
									placeholder="Invalid input"
									error="This field is required"
								/>
							</FrostedCardBody>
						</FrostedCard>

						{/* Textarea and Select */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Textarea & Select</FrostedCardTitle>
								<FrostedCardDescription>
									Multi-line text and dropdown inputs
								</FrostedCardDescription>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								<FrostedTextarea
									label="Thumbnail Description"
									placeholder="Describe your ideal thumbnail..."
									rows={4}
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>

								<FrostedSelect
									label="Thumbnail Style"
									value={style}
									onChange={(e) => setStyle(e.target.value)}
								>
									<option value="">Choose a style...</option>
									<option value="modern">Modern & Clean</option>
									<option value="bold">Bold & Vibrant</option>
									<option value="minimal">Minimal & Elegant</option>
									<option value="dramatic">Dramatic & Dark</option>
									<option value="playful">Playful & Fun</option>
								</FrostedSelect>

								<div className="pt-2">
									<FrostedButton
										className="w-full"
										leftIcon={<Wand2 className="w-4 h-4" />}
										loading={loading}
										onClick={handleGenerate}
									>
										Generate Thumbnail
									</FrostedButton>
								</div>
							</FrostedCardBody>
						</FrostedCard>
					</div>
				</section>

				{/* Complete Form Example */}
				<section className="space-y-6">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold gradient-text">Complete Form Example</h2>
						<p className="text-white/60">A full form combining all components</p>
					</div>

					<FrostedCard glow gradient className="max-w-3xl mx-auto">
						<FrostedCardHeader>
							<FrostedCardTitle className="text-3xl gradient-text-accent">
								Create Your Thumbnail
							</FrostedCardTitle>
							<FrostedCardDescription className="text-base">
								Fill in the details below to generate your AI-powered thumbnail
							</FrostedCardDescription>
						</FrostedCardHeader>
						<FrostedCardBody className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FrostedInput
									label="Video Title"
									placeholder="Enter your video title"
									leftIcon={<ImageIcon className="w-5 h-5" />}
								/>
								<FrostedSelect label="Category">
									<option value="">Select category...</option>
									<option value="gaming">Gaming</option>
									<option value="tech">Technology</option>
									<option value="education">Education</option>
									<option value="entertainment">Entertainment</option>
								</FrostedSelect>
							</div>

							<FrostedTextarea
								label="Thumbnail Concept"
								placeholder="Describe what you want in your thumbnail..."
								rows={5}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FrostedSelect label="Color Scheme">
									<option value="">Choose colors...</option>
									<option value="vibrant">Vibrant & Colorful</option>
									<option value="dark">Dark & Moody</option>
									<option value="pastel">Soft Pastels</option>
									<option value="neon">Neon & Bright</option>
								</FrostedSelect>
								<FrostedSelect label="Text Style">
									<option value="">Choose text style...</option>
									<option value="bold">Bold & Large</option>
									<option value="elegant">Elegant & Refined</option>
									<option value="playful">Playful & Fun</option>
									<option value="minimal">Minimal & Clean</option>
								</FrostedSelect>
							</div>
						</FrostedCardBody>
						<FrostedCardFooter className="flex flex-col sm:flex-row gap-3">
							<FrostedButton
								variant="gradient"
								size="lg"
								className="flex-1"
								leftIcon={<Wand2 className="w-5 h-5" />}
								loading={loading}
								onClick={handleGenerate}
							>
								Generate with AI
							</FrostedButton>
							<FrostedButton variant="secondary" size="lg">
								Save Draft
							</FrostedButton>
							<FrostedButton variant="ghost" size="lg">
								Reset
							</FrostedButton>
						</FrostedCardFooter>
					</FrostedCard>
				</section>

				{/* Utility Classes Demo */}
				<section className="space-y-6">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold gradient-text">Utility Classes</h2>
						<p className="text-white/60">Custom utility classes for special effects</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Gradient Text */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Gradient Text</FrostedCardTitle>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								<div>
									<p className="text-sm text-white/60 mb-2">gradient-text</p>
									<p className="gradient-text text-3xl font-bold">
										Beautiful Gradient
									</p>
								</div>
								<div>
									<p className="text-sm text-white/60 mb-2">gradient-text-primary</p>
									<p className="gradient-text-primary text-3xl font-bold">
										Primary Gradient
									</p>
								</div>
								<div>
									<p className="text-sm text-white/60 mb-2">gradient-text-accent</p>
									<p className="gradient-text-accent text-3xl font-bold">
										Accent Gradient
									</p>
								</div>
							</FrostedCardBody>
						</FrostedCard>

						{/* Animations */}
						<FrostedCard>
							<FrostedCardHeader>
								<FrostedCardTitle>Animations</FrostedCardTitle>
							</FrostedCardHeader>
							<FrostedCardBody className="space-y-4">
								<div className="glass rounded-lg p-4 animate-pulse-glow">
									<p className="text-white font-medium">animate-pulse-glow</p>
									<p className="text-white/60 text-sm">Pulsing glow effect</p>
								</div>
								<div className="glass rounded-lg p-4 animate-float">
									<p className="text-white font-medium">animate-float</p>
									<p className="text-white/60 text-sm">Floating animation</p>
								</div>
								<div className="gradient-accent rounded-lg p-4 animate-gradient-shift">
									<p className="text-white font-medium">animate-gradient-shift</p>
									<p className="text-white/60 text-sm">Shifting gradient</p>
								</div>
							</FrostedCardBody>
						</FrostedCard>
					</div>
				</section>

				{/* Action Cards */}
				<section className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<FrostedCard className="text-center" hover={false}>
							<FrostedCardBody className="space-y-4 py-8">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 mx-auto">
									<Heart className="w-8 h-8 text-violet-400" />
								</div>
								<div>
									<p className="text-3xl font-bold text-white">1,234</p>
									<p className="text-white/60">Thumbnails Created</p>
								</div>
							</FrostedCardBody>
						</FrostedCard>

						<FrostedCard className="text-center" hover={false}>
							<FrostedCardBody className="space-y-4 py-8">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 mx-auto">
									<Star className="w-8 h-8 text-violet-400" />
								</div>
								<div>
									<p className="text-3xl font-bold text-white">4.9/5</p>
									<p className="text-white/60">Average Rating</p>
								</div>
							</FrostedCardBody>
						</FrostedCard>

						<FrostedCard className="text-center" hover={false}>
							<FrostedCardBody className="space-y-4 py-8">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 mx-auto">
									<Share2 className="w-8 h-8 text-violet-400" />
								</div>
								<div>
									<p className="text-3xl font-bold text-white">10K+</p>
									<p className="text-white/60">Happy Users</p>
								</div>
							</FrostedCardBody>
						</FrostedCard>
					</div>
				</section>

				{/* Footer */}
				<div className="text-center py-12 space-y-4">
					<p className="gradient-text-accent text-lg font-medium">
						Ready to create amazing thumbnails?
					</p>
					<div className="flex items-center justify-center gap-4">
						<FrostedButton
							variant="gradient"
							size="xl"
							leftIcon={<Sparkles className="w-5 h-5" />}
						>
							Get Started Now
						</FrostedButton>
					</div>
					<p className="text-white/40 text-sm pt-8">
						Built with Next.js 16, Tailwind CSS 4, and TypeScript
					</p>
				</div>
			</div>
		</div>
	);
}
