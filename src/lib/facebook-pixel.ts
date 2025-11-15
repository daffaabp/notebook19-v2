type FacebookPixelArgument =
	| string
	| number
	| boolean
	| Record<string, unknown>;

type FacebookPixel = {
	push: (args: FacebookPixelArgument[]) => void;
	loaded: boolean;
	version: string;
	queue: FacebookPixelArgument[];
	(action: string, event: string, params?: Record<string, unknown>): void;
	callMethod?: (...args: FacebookPixelArgument[]) => void;
};

declare global {
	interface Window {
		fbq: FacebookPixel;
		_fbq: FacebookPixel;
	}
}

export const FB_PIXEL_ID = "995854432393406";

export const pageview = () => {
	window.fbq("track", "PageView");
};

export const lead = () => {
	window.fbq("track", "Lead");
};

export const initiateCheckout = () => {
	window.fbq("track", "InitiateCheckout");
};

export const contact = () => {
	window.fbq("track", "Contact");
};
