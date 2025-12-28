export interface NetworkStats {
  totalNodes: number;
  recentAvatars: Array<number | { id: string; image: string | null; name: string; seed?: number; email?: string }>;
  isLoading: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}
