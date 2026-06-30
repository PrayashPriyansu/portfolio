"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export default function Home() {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <div className="relative size-24 rounded-full overflow-clip">
                    <Image
                        src="/image.webp"
                        alt="Banner"
                        fill
                        className="object-fill"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-bold whitespace-nowrap sm:text-2xl">
                        Prayash Priyansu
                    </div>
                    <div className="text-secondary font-semibold">Engineer</div>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                    <Icon name="CodeXml" />
                    <span className="text-sm text-muted-foreground space-x-1">
                        <span>Backend Developer</span>
                        <span className="font-semibold text-foreground font-mono">
                            <a
                                href="https://www.ericsson.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-primary hover:underline"
                            >
                                @Ericsson
                            </a>
                        </span>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                "prayashpriyansu27@gmail.com",
                            )
                        }
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span>prayashpriyansu27@gmail.com</span>
                        <Icon name="Copy" size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
