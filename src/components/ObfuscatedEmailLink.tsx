import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openContactEmail } from "@/lib/contact-email";

interface ObfuscatedEmailLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  subject?: string;
}

const ObfuscatedEmailLink = ({
  children,
  subject,
  type = "button",
  onClick,
  ...props
}: ObfuscatedEmailLinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    openContactEmail(subject);
  };

  return (
    <button type={type} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default ObfuscatedEmailLink;
