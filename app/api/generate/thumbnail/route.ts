import { NextRequest, NextResponse } from "next/server";

// Style-specific prompt modifiers for Nano Banana Pro
const STYLE_MODIFIERS: Record<string, string> = {
	photorealistic:
		"photorealistic, professional photography, high detail, sharp focus, studio lighting",
	"3d-render":
		"3D render, octane render, cinema 4d, highly detailed 3D model, professional 3D graphics",
	anime: "anime style, manga art, vibrant anime colors, detailed anime illustration",
	illustration:
		"digital illustration, professional artwork, detailed illustration style, artistic",
	cinematic:
		"cinematic lighting, movie poster style, dramatic composition, film photography",
	"vibrant-pop":
		"vibrant colors, pop art style, bold and colorful, high saturation, energetic",
	"dark-moody":
		"dark moody atmosphere, dramatic shadows, low key lighting, cinematic darkness",
	minimalist:
		"minimalist design, clean composition, simple and elegant, minimal elements",
};

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { prompt, style = "photorealistic", videoTitle } = body;

		// Validate required fields
		if (!prompt || typeof prompt !== "string") {
			return NextResponse.json(
				{ error: "Prompt is required and must be a string" },
				{ status: 400 }
			);
		}

		// Build the final prompt with style modifiers
		const styleModifier = STYLE_MODIFIERS[style] || STYLE_MODIFIERS.photorealistic;
		const finalPrompt = `${prompt}. ${styleModifier}. YouTube thumbnail format, 16:9 aspect ratio, eye-catching composition, professional quality.`;

		console.log("Generating thumbnail with prompt:", finalPrompt);

		// If no OpenRouter API key is configured, return a local placeholder
		// response so the app still works end-to-end without external AI.
		if (!process.env.OPENROUTER_API_KEY) {
			const placeholderUrl =
				"https://placehold.co/1536x1024/png?text=Thumbnail+Preview";

			return NextResponse.json({
				imageUrl: placeholderUrl,
				prompt: finalPrompt,
				style,
				videoTitle: videoTitle || null,
				metadata: {
					model: "local-placeholder",
					resolution: "1536x1024",
					format: "PNG",
					note: "Using placeholder image because OPENROUTER_API_KEY is not configured.",
				},
			});
		}

		// Otherwise, call OpenRouter API with Nano Banana Pro model
		const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
				"Content-Type": "application/json",
				"HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
				"X-Title": "Whop Thumbnail Generator",
			},
			body: JSON.stringify({
				model: "nousresearch/nano-banana-pro",
				messages: [
					{
						role: "user",
						content: [
							{
								type: "text",
								text: finalPrompt,
							},
						],
					},
				],
				// Image generation parameters
				max_tokens: 1024,
				temperature: 0.7,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			console.error("OpenRouter API error:", errorData);
			throw new Error(
				`OpenRouter API request failed: ${response.status} ${response.statusText}`
			);
		}

		const data = await response.json();

		// Extract the image URL from the response
		// Note: The exact response format may vary - adjust based on actual API response
		const imageUrl = data.choices?.[0]?.message?.content;

		if (!imageUrl) {
			console.error("No image URL in response:", data);
			throw new Error("No image URL returned from API");
		}

		return NextResponse.json({
			imageUrl,
			prompt: finalPrompt,
			style,
			videoTitle: videoTitle || null,
			metadata: {
				model: "nousresearch/nano-banana-pro",
				resolution: "1536x1024",
				format: "PNG",
			},
		});
	} catch (error) {
		console.error("Error generating thumbnail:", error);

		// Handle specific errors
		if (error instanceof Error) {
			if (error.message.includes("API key")) {
				return NextResponse.json(
					{ error: "OpenRouter API key is not configured" },
					{ status: 500 }
				);
			}

			if (error.message.includes("rate limit")) {
				return NextResponse.json(
					{ error: "Rate limit exceeded. Please try again later." },
					{ status: 429 }
				);
			}
		}

		return NextResponse.json(
			{
				error: "Failed to generate thumbnail. Please try again.",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}
