import { headers } from "next/headers";
import { whopsdk } from "@/lib/whop-sdk";
import GeneratePage from "@/app/(dashboard)/generate/page";

export default async function ExperiencePage({
	params,
}: {
	params: Promise<{ experienceId: string }>;
}) {
	const { experienceId } = await params;

	if (!whopsdk) {
		throw new Error(
			"Whop SDK is not configured. Please set NEXT_PUBLIC_WHOP_APP_ID, WHOP_API_KEY and WHOP_WEBHOOK_SECRET.",
		);
	}

	// Ensure the user is logged in on Whop and has access to this experience.
	const { userId } = await whopsdk.verifyUserToken(await headers());
	await whopsdk.users.checkAccess(experienceId, { id: userId });

	// Render the main thumbnail generator UI inside the Whop experience iframe.
	return <GeneratePage />;
}
