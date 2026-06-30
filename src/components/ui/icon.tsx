import { icons, type LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
    name: keyof typeof icons;
}

export function Icon({ name, size = 20, ...props }: IconProps) {
    const LucideIcon = icons[name];
    if (!LucideIcon) return null;
    return (
        <div className="inline-flex rounded-xl border border-accent/20 bg-accent/10 p-1 backdrop-blur-sm">
            <div className="flex items-center justify-center rounded-lg bg-accent p-1.5 shadow-sm">
                <LucideIcon
                    size={size}
                    strokeWidth={1.75}
                    className="text-accent-foreground"
                    {...props}
                />
            </div>
        </div>
    );
}
