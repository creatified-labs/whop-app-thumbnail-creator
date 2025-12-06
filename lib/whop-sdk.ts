import { Whop } from "@whop/sdk";

const hasWhopConfig =
	Boolean(process.env.NEXT_PUBLIC_WHOP_APP_ID) &&
	Boolean(process.env.WHOP_API_KEY) &&
	Boolean(process.env.WHOP_WEBHOOK_SECRET);

export const whopsdk = hasWhopConfig
	? new Whop({
			appID: process.env.NEXT_PUBLIC_WHOP_APP_ID,
			apiKey: process.env.WHOP_API_KEY,
			webhookKey: btoa(process.env.WHOP_WEBHOOK_SECRET as string),
		})
	: null;
