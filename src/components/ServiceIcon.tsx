import {
  Home, Wrench, Plug, ToggleLeft, Lightbulb, LayoutGrid, Cable, Fan,
  BatteryCharging, ClipboardCheck, Shield, Power, MapPin, Zap,
  ShieldCheck, FileCheck, TrendingUp, Phone, Search, Droplets, Baby,
  Anchor, RefreshCw, Plus, Trees, Refrigerator, CloudLightning,
  CloudRain, Shuffle, Clock, Star, Award, CheckCircle2, AlertCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Home, Wrench, Plug, ToggleLeft, Lightbulb, LayoutGrid, Cable, Fan,
  BatteryCharging, ClipboardCheck, Shield, Power, MapPin, Zap,
  ShieldCheck, FileCheck, TrendingUp, Phone, Search, Droplets, Baby,
  Anchor, RefreshCw, Plus, Trees, Refrigerator, CloudLightning,
  CloudRain, Shuffle, Clock, Star, Award, CheckCircle2, AlertCircle,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Zap;
  return <Icon className={className} />;
}
