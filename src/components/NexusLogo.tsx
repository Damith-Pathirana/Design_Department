import React from 'react';

interface NexusLogoProps {
  className?: string;
}

export default function NexusLogo({ className = "w-8 h-8 text-[#2094f3]" }: NexusLogoProps) {
    return (
        <img src="/Nexus Logo.png" alt="NexusLink Logo" className={`object-contain ${className}`} />
    );
}
