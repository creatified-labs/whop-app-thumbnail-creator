import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { prompt, videoTitle, style } = body;

		// Validate required fields
		if (!prompt || typeof prompt !== "string") {
			return NextResponse.json(
				{ error: "Prompt is required and must be a string" },
				{ status: 400 }
			);
		}

		// System prompt for ChatGPT to enhance thumbnail descriptions
		const systemPrompt = `You are an expert YouTube thumbnail designer and prompt engineer. Your job is to take a user's basic thumbnail idea and transform it into a detailed, professional prompt that will generate an eye-catching YouTube thumbnail.

Key guidelines:
1. YouTube thumbnails are 1280x720 pixels (16:9 aspect ratio)
2. They need to be attention-grabbing and readable even at small sizes
3. Include specific details about composition, lighting, colors, and mood
4. Mention text placement and style if relevant
5. Focus on creating visual impact and emotional appeal
6. Keep the enhanced prompt concise but detailed (2-3 sentences max)
7. Don't use phrases like "create a thumbnail" - describe the image directly
8. Consider the selected style: ${style || "photorealistic"}

Transform the user's idea into a professional image generation prompt that will create a compelling YouTube thumbnail.`;

		// Build the user message with context
		let userMessage = prompt;
		if (videoTitle) {
			userMessage = `Video Title: "${videoTitle}"\n\nThumbnail Idea: ${prompt}`;
		}

		// Fallback: keep the app working even without the OpenAI SDK or API.
		// Instead of calling an external API, we locally "enhance" the prompt by
		// combining the title, style, and user idea into a concise description.
		const enhancedPromptBase = videoTitle
			? `YouTube thumbnail for video titled "${videoTitle}"`
			: "YouTube thumbnail concept";

		const styleLabel = style || "photorealistic";

		const enhancedPrompt = `${enhancedPromptBase} in ${styleLabel} style: ${prompt}`;

		return NextResponse.json({
			enhancedPrompt: enhancedPrompt.trim(),
			originalPrompt: prompt,
			videoTitle: videoTitle || null,
		});
	} catch (error) {
		console.error("Error enhancing prompt:", error);

		return NextResponse.json(
			{ error: "Failed to enhance prompt. Please try again." },
			{ status: 500 }
		);
	}
}
