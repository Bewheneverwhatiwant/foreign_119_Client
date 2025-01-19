interface SpeechRecognitionEvent extends Event {
	readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResult {
	readonly isFinal: boolean;
	readonly [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
	readonly length: number;
	readonly [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
	readonly transcript: string;
	readonly confidence: number;
}

interface SpeechRecognition extends EventTarget {
	lang: string;
	interimResults: boolean;
	maxAlternatives: number;
	onaudioend: null | ((event: Event) => void);
	onaudiostart: null | ((event: Event) => void);
	onend: null | ((event: Event) => void);
	onerror: null | ((event: Event) => void);
	onnomatch: null | ((event: Event) => void);
	onresult: null | ((event: SpeechRecognitionEvent) => void);
	onsoundend: null | ((event: Event) => void);
	onsoundstart: null | ((event: Event) => void);
	onspeechend: null | ((event: Event) => void);
	onspeechstart: null | ((event: Event) => void);
	onstart: null | ((event: Event) => void);
	abort(): void;
	start(): void;
	stop(): void;
}

interface Window {
	SpeechRecognition: {
		new(): SpeechRecognition;
	};
	webkitSpeechRecognition: {
		new(): SpeechRecognition;
	};
}
