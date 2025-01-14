import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Submit Anonymous Report",
        description:
            "Fill out our secure reporting form with incident details. No personal information is required, and your IP address is never stored.",
        icon: (
            <svg
                className="h-6 w-6 text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Encryption & Processing",
        description:
            "Your report is immediately encrypted using advanced encryption protocols. All identifying metadata is stripped from your submission.",
        icon: (
            <svg
                className="h-6 w-6 text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Secure Delivery",
        description:
            "Your encrypted report is securely delivered to relevant authorities. They can act on the information while your identity remains protected.",
        icon: (
            <svg
                className="h-6 w-6 text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <main className="relative px-6 pt-10 pb-10">
            <div className="mx-auto max-w-5xl">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                        How It Works
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Our platform ensures your safety and anonymity while making important reports.
                        Learn how we protect your identity throughout the entire process.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="mt-20">
                    <div className="grid gap-8 md:grid-cols-3">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="inline-flex rounded-xl bg-sky-500/10 p-3">
                                            {step.icon}
                                        </div>
                                        <span className="text-sm font-medium text-zinc-500">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-lg font-medium text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 flex flex-col items-center">
                    <Link href="/submit-report">
                        <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400">
                            Report Crime Anonymously
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 12h14M12 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
} 