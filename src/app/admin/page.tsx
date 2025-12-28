"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Cpu, Globe, Shield, 
  Plus, Pencil, Trash2, LogOut, 
  Save, X, Loader2, ArrowRight,
  LayoutDashboard, MessageSquareQuote, 
  User, Briefcase, Image as ImageIcon,
  Atom, Microscope, FlaskConical, 
  BrainCircuit, Network, Code2,
  Zap, BarChart3, Settings, Cloud,
  Users, Beaker,
  LayoutGrid, Activity, Server,
  GraduationCap, Star, Trophy,
  Terminal, Rocket, ChevronRight,
  Handshake, BarChart, Hash,
  Upload, Link as LinkIcon,
  Workflow, CircuitBoard, CpuIcon,
  HardDrive, Layers, GitBranch,
  Boxes, Package, FileCode,
  Wrench, Cog
} from 'lucide-react';

const EngineIcon = Zap;

// Image component with fallback
const ImageWithFallback = ({ src, alt, fallback, className }: { src: string; alt: string; fallback: React.ReactNode; className?: string }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <>{fallback}</>;
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

// ... (interfaces)

interface HomeSolution {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  accent_color: string;
  features: string[];
}

interface InnovationHubItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  stats: string;
}

const IconOptions = [
  { value: 'database', label: 'Database', icon: <Database size={16} /> },
  { value: 'cpu', label: 'Processor', icon: <Cpu size={16} /> },
  { value: 'globe', label: 'Globe', icon: <Globe size={16} /> },
  { value: 'shield', label: 'Shield', icon: <Shield size={16} /> },
  { value: 'zap', label: 'Energy', icon: <Zap size={16} /> },
  { value: 'brain', label: 'Neural', icon: <BrainCircuit size={16} /> },
  { value: 'network', label: 'Network', icon: <Network size={16} /> },
  { value: 'code', label: 'Code', icon: <Code2 size={16} /> },
  { value: 'atom', label: 'Quantum', icon: <Atom size={16} /> },
  { value: 'microscope', label: 'Research', icon: <Microscope size={16} /> },
  { value: 'flask', label: 'Lab', icon: <FlaskConical size={16} /> },
  { value: 'bar-chart', label: 'Analytics', icon: <BarChart3 size={16} /> },
  { value: 'settings', label: 'Settings', icon: <Settings size={16} /> },
  { value: 'cloud', label: 'Cloud', icon: <Cloud size={16} /> },
  { value: 'activity', label: 'Activity', icon: <Activity size={16} /> },
  { value: 'server', label: 'Server', icon: <Server size={16} /> },
  { value: 'terminal', label: 'Terminal', icon: <Terminal size={16} /> },
  { value: 'rocket', label: 'Rocket', icon: <Rocket size={16} /> },
  { value: 'workflow', label: 'Workflow', icon: <Workflow size={16} /> },
  { value: 'circuit-board', label: 'Circuit Board', icon: <CircuitBoard size={16} /> },
  { value: 'cpu-icon', label: 'CPU', icon: <CpuIcon size={16} /> },
  { value: 'hard-drive', label: 'Storage', icon: <HardDrive size={16} /> },
  { value: 'layers', label: 'Layers', icon: <Layers size={16} /> },
  { value: 'git-branch', label: 'Git Branch', icon: <GitBranch size={16} /> },
  { value: 'boxes', label: 'Boxes', icon: <Boxes size={16} /> },
  { value: 'package', label: 'Package', icon: <Package size={16} /> },
  { value: 'file-code', label: 'File Code', icon: <FileCode size={16} /> },
  { value: 'wrench', label: 'Wrench', icon: <Wrench size={16} /> },
  { value: 'cog', label: 'Cog', icon: <Cog size={16} /> },
  { value: 'graduation-cap', label: 'Academy', icon: <GraduationCap size={16} /> },
  { value: 'star', label: 'Featured', icon: <Star size={16} /> },
  { value: 'trophy', label: 'Achievement', icon: <Trophy size={16} /> },
];

const ColorOptions = [
  { value: 'blue', label: 'Ocean Blue', class: 'bg-blue-500' },
  { value: 'emerald', label: 'Emerald Green', class: 'bg-emerald-500' },
  { value: 'purple', label: 'Deep Purple', class: 'bg-purple-500' },
  { value: 'accent', label: 'System Accent', class: 'bg-accent' },
  { value: 'primary', label: 'Core Primary', class: 'bg-primary' },
  { value: 'orange', label: 'Heat Orange', class: 'bg-orange-500' },
];

type Tab = 'projects' | 'testimonials' | 'team_members' | 'lab_experiments' | 'logic_engines' | 'erp_features' | 'programs' | 'partners' | 'metrics' | 'home_solutions' | 'innovation_hub' | 'website_settings' | 'messages';


export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  // Data state
  const [data, setData] = useState<any[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState<any>({});
  const [imageUploadMode, setImageUploadMode] = useState<'url' | 'upload'>('url');
  const [avatarUploadMode, setAvatarUploadMode] = useState<'url' | 'upload'>('url');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  
  // Website Settings state
  const [websiteSettings, setWebsiteSettings] = useState<Record<string, string>>({});
  const [logoUploadMode, setLogoUploadMode] = useState<'url' | 'upload'>('url');
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string>('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchData(activeTab);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchData(activeTab);
    });

    return () => subscription.unsubscribe();
  }, [activeTab]);

  async function fetchData(tab: Tab) {
    setLoading(true);
    
    try {
      if (tab === 'website_settings') {
        // Fetch website settings via API route (bypasses PostgREST schema cache issues)
        const response = await fetch('/api/website-settings');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.data) {
          const settingsMap: Record<string, string> = {};
          result.data.forEach((setting: any) => {
            settingsMap[setting.setting_key] = setting.setting_value || '';
          });
          setWebsiteSettings(settingsMap);
          if (settingsMap.logo_url) {
            setLogoPreview(settingsMap.logo_url);
          }
        }
      } else if (tab === 'messages') {
        // Fetch contact submissions
        const { data: fetchedData, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error(`Error fetching ${tab}:`, error);
          toast.error(`Failed to load ${tab}: ${error.message}`);
          setData([]);
        } else {
          setData(fetchedData || []);
        }
      } else {
        const { data: fetchedData, error } = await supabase
          .from(tab)
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error(`Error fetching ${tab}:`, error);
          toast.error(`Failed to load ${tab}: ${error.message}`);
          setData([]);
        } else {
          setData(fetchedData || []);
        }
      }
    } catch (error: any) {
      console.error(`Error fetching ${tab}:`, error);
      toast.error(`Failed to load ${tab}: ${error.message || 'Unknown error'}`);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast.success('Sign up successful! Check your email.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success('Access Granted');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      if (activeTab === 'website_settings') {
        // Save website settings via API route (bypasses PostgREST schema cache issues)
        const settingsToUpdate = [
          { setting_key: 'logo_url', setting_value: websiteSettings.logo_url || '' },
          { setting_key: 'logo_type', setting_value: websiteSettings.logo_type || 'default' },
          { setting_key: 'hover_animation_enabled', setting_value: websiteSettings.hover_animation_enabled || 'false' },
          { setting_key: 'site_name', setting_value: websiteSettings.site_name || 'EASYIO' },
          { setting_key: 'site_tagline', setting_value: websiteSettings.site_tagline || 'Technologies' },
          { setting_key: 'github_url', setting_value: websiteSettings.github_url || '' },
          { setting_key: 'instagram_url', setting_value: websiteSettings.instagram_url || '' },
          { setting_key: 'twitter_url', setting_value: websiteSettings.twitter_url || '' },
        ];

        const response = await fetch('/api/website-settings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ settings: settingsToUpdate }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
          const errors = result.results?.filter((r: any) => !r.success).map((r: any) => r.error).join(', ') || result.error;
          throw new Error(errors || 'Failed to save website settings');
        }
        
        toast.success('Website settings updated successfully');
        fetchData(activeTab);
      } else {
        // Prepare data for save - ensure testimonials use 'image' field
        let dataToSave = { ...formData };
        
        // Clean up data - remove empty strings and undefined values
        Object.keys(dataToSave).forEach(key => {
          if (dataToSave[key] === '' || dataToSave[key] === undefined) {
            delete dataToSave[key];
          }
        });
        
        if (activeTab === 'testimonials') {
          // For testimonials, ensure we use 'image' field, not 'avatar'
          if (dataToSave.avatar && !dataToSave.image) {
            dataToSave.image = dataToSave.avatar;
            delete dataToSave.avatar;
          }
          // Remove avatar field if it exists
          if (dataToSave.avatar) {
            delete dataToSave.avatar;
          }
        }
        
        // For partners table, remove icon_type if column doesn't exist in schema
        // (This is a PostgREST schema cache issue - column may exist but not in cache)
        // We'll filter it out to prevent errors, but keep it in formData for UI
        if (activeTab === 'partners' && dataToSave.icon_type) {
          // Keep icon_type in formData but don't send it to DB if it causes errors
          // The column might exist but not be in PostgREST cache
          // We'll try to save it, but if it fails, we'll remove it and retry
        }
        
        // Remove id from data if it's a new item (to let database generate it)
        if (!editingItem && dataToSave.id) {
          delete dataToSave.id;
        }
        
        if (editingItem) {
          let { data: updatedData, error } = await supabase
            .from(activeTab)
            .update(dataToSave)
            .eq('id', editingItem.id)
            .select();
            
          // If error is about missing column (schema cache issue), retry without that column
          if (error && error.code === 'PGRST204' && activeTab === 'partners' && dataToSave.icon_type) {
            const dataToSaveWithoutIconType = { ...dataToSave };
            delete dataToSaveWithoutIconType.icon_type;
            const retryResult = await supabase
              .from(activeTab)
              .update(dataToSaveWithoutIconType)
              .eq('id', editingItem.id)
              .select();
            updatedData = retryResult.data;
            error = retryResult.error;
          }
            
          if (error) {
            console.error('Update error:', error);
            throw new Error(error.message || 'Failed to update record');
          }
          
          if (!updatedData || updatedData.length === 0) {
            throw new Error('Update succeeded but no data returned');
          }
          
          toast.success('Record updated successfully');
        } else {
          let { data: insertedData, error } = await supabase
            .from(activeTab)
            .insert([dataToSave])
            .select();
          
          // If error is about missing column (schema cache issue), retry without that column
          if (error && error.code === 'PGRST204' && activeTab === 'partners' && dataToSave.icon_type) {
            const dataToSaveWithoutIconType = { ...dataToSave };
            delete dataToSaveWithoutIconType.icon_type;
            const retryResult = await supabase
              .from(activeTab)
              .insert([dataToSaveWithoutIconType])
              .select();
            insertedData = retryResult.data;
            error = retryResult.error;
          }
            
          if (error) {
            console.error('Insert error:', error);
            throw new Error(error.message || 'Failed to create record');
          }
          
          if (!insertedData || insertedData.length === 0) {
            throw new Error('Insert succeeded but no data returned');
          }
          
          toast.success('New record created successfully');
        }
        
        closePanels();
        fetchData(activeTab);
      }
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error(error.message || 'Failed to save. Please check console for details.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`Confirm permanent deletion from ${activeTab}?`)) return;
    
    try {
      const { data, error } = await supabase
        .from(activeTab)
        .delete()
        .eq('id', id)
        .select();
        
      if (error) {
        console.error('Delete error:', error);
        throw new Error(error.message || 'Failed to delete record');
      }
      
      toast.success('Record deleted successfully');
      fetchData(activeTab);
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Failed to delete record');
    }
  };


  const startAdding = () => {
    closePanels();
    setIsAdding(true);
    // Initialize form with defaults based on tab
    const defaults: any = {
      projects: { title: '', category: '', description: '', image: '', icon_type: 'database', tags: [] },
      testimonials: { name: '', role: '', company: '', content: '', image: '' },
      team_members: { name: '', role: '', bio: '', image: '' },
      lab_experiments: { title: '', status: '', description: '', icon_type: 'atom' },
      logic_engines: { title: '', description: '', icon_type: 'brain' },
      erp_features: { title: '', description: '', icon_type: 'database' },
      programs: { title: '', duration: '', level: '', description: '', icon_type: 'graduation-cap' },
      partners: { name: '', icon_type: 'cpu' },
      metrics: { label: '', value: '', sub_label: '', icon_type: 'globe', color_theme: 'blue' },
      home_solutions: { title: '', category: '', description: '', icon_type: 'database', accent_color: 'blue', features: [] },
      innovation_hub: { title: '', category: '', description: '', icon_type: 'rocket', stats: '' }
    };
    setFormData(defaults[activeTab] || {});
  };

  const startEditing = (item: any) => {
    setEditingItem(item);
    setIsAdding(false);
    setFormData(item);
    // Set preview images when editing
    if (item.image) {
      setImagePreview(item.image);
      setImageUploadMode('url');
    }
    // For testimonials, check image field; for others, check avatar
    if (activeTab === 'testimonials' && item.image) {
      setAvatarPreview(item.image);
      setAvatarUploadMode('url');
    } else if (item.avatar) {
      setAvatarPreview(item.avatar);
      setAvatarUploadMode('url');
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast.error(`Invalid file type: ${file.type}. Only images are allowed.`);
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 5MB limit`);
      return;
    }

    if (file.size === 0) {
      toast.error('File is empty');
      return;
    }

    setUploadingLogo(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'website-settings');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();

      if (!result.success || !result.url) {
        throw new Error(result.error || 'Upload succeeded but no URL returned');
      }

      const updatedSettings = { ...websiteSettings, logo_url: result.url, logo_type: 'custom' };
      setWebsiteSettings(updatedSettings);
      setLogoPreview(result.url);
      toast.success('Logo uploaded successfully');
    } catch (error: any) {
      console.error('Logo upload error:', error);
      toast.error(error.message || 'Failed to upload logo. Please try again.');
    } finally {
      setUploadingLogo(false);
      // Reset file input
      e.target.value = '';
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'avatar') => {
    const file = e.target.files?.[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast.error(`Invalid file type: ${file.type}. Only images are allowed.`);
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 5MB limit`);
      return;
    }

    // Validate file is not empty
    if (file.size === 0) {
      toast.error('File is empty');
      return;
    }

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'admin-uploads');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();

      if (!result.success || !result.url) {
        throw new Error(result.error || 'Upload succeeded but no URL returned');
      }

      // Update form data with the uploaded image URL
      if (type === 'image') {
        setFormData({...formData, image: result.url});
        setImagePreview(result.url);
      } else {
        // For testimonials, use 'image' field instead of 'avatar'
        if (activeTab === 'testimonials') {
          setFormData({...formData, image: result.url});
          setAvatarPreview(result.url);
        } else {
          setFormData({...formData, avatar: result.url});
          setAvatarPreview(result.url);
        }
      }

      toast.success('Image uploaded successfully');
    } catch (error: any) {
      console.error('Image upload error:', error);
      toast.error(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
      // Reset file input
      e.target.value = '';
    }
  };

  const closePanels = () => {
    setIsAdding(false);
    setEditingItem(null);
    setFormData({});
    setImagePreview('');
    setAvatarPreview('');
    setImageUploadMode('url');
    setAvatarUploadMode('url');
  };

  if (loading && !data.length) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="animate-spin text-primary" size={40} />
    </div>
  );

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md obsidian-card p-8 rounded-3xl border border-primary/10"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="p-4 rounded-2xl glass-effect text-primary mb-4 bg-primary/5">
              <Shield size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Admin Authentication</h1>
            <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.2em] mt-2">Core System Access Only</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Identity Hash</label>
              <input 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="admin@easyio.tech" required
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Security Key</label>
              <input 
                type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="••••••••" required
              />
            </div>

            <button 
              disabled={authLoading}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
            >
              {authLoading ? <Loader2 className="animate-spin" size={16} /> : (
                <>
                  {isSignUp ? 'Initialize Profile' : 'Access System'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-muted-foreground text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest"
            >
              {isSignUp ? 'Return to authentication' : 'Request system access'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 text-primary mb-3">
              <div className="w-8 h-px bg-primary/50" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">OmniControl Hub v1.0</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">System Management</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end mr-4">
              <span className="text-white text-xs font-bold">{session.user.email}</span>
              <span className="text-primary text-[10px] font-mono uppercase tracking-widest">Master Administrator</span>
            </div>
            <button 
              onClick={() => supabase.auth.signOut()}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/10 hover:border-red-400/20 transition-all text-[10px] font-bold uppercase tracking-widest"
            >
              <LogOut size={14} />
              Kill Session
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white/5 p-2 rounded-2xl w-fit border border-white/5">
          {[
            { id: 'projects', label: 'Projects', icon: <Briefcase size={14} /> },
            { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={14} /> },
            { id: 'team_members', label: 'Team', icon: <Users size={14} /> },
            { id: 'lab_experiments', label: 'R&D Labs', icon: <Beaker size={14} /> },
            { id: 'logic_engines', label: 'Engines', icon: <EngineIcon size={14} /> },
            { id: 'erp_features', label: 'ERP', icon: <LayoutGrid size={14} /> },
            { id: 'programs', label: 'Academy', icon: <GraduationCap size={14} /> },
            { id: 'home_solutions', label: 'Solutions', icon: <LayoutDashboard size={14} /> },
            { id: 'innovation_hub', label: 'Ecosystem', icon: <Rocket size={14} /> },
            { id: 'partners', label: 'Partners', icon: <Handshake size={14} /> },
            { id: 'metrics', label: 'Metrics', icon: <BarChart size={14} /> },
            { id: 'messages', label: 'Messages', icon: <MessageSquareQuote size={14} /> },
            { id: 'website_settings', label: 'Settings', icon: <Settings size={14} /> },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'website_settings' ? (
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="obsidian-card p-8 rounded-3xl border border-primary/20 bg-primary/5"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Website Settings</h2>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Configure global website preferences</p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                {/* Logo Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <ImageIcon size={20} className="text-primary" />
                    Logo Configuration
                  </h3>
                  
                  <div className="flex gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setLogoUploadMode('url')}
                      className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                        logoUploadMode === 'url'
                          ? 'bg-primary text-white'
                          : 'bg-white/5 text-white/40 hover:text-white'
                      }`}
                    >
                      <LinkIcon size={14} className="inline mr-2" />
                      URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogoUploadMode('upload')}
                      className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                        logoUploadMode === 'upload'
                          ? 'bg-primary text-white'
                          : 'bg-white/5 text-white/40 hover:text-white'
                      }`}
                    >
                      <Upload size={14} className="inline mr-2" />
                      Upload
                    </button>
                  </div>

                  {logoUploadMode === 'url' && (
                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Logo URL</label>
                      <input
                        type="text"
                        value={websiteSettings.logo_url || ''}
                        onChange={(e) => {
                          setWebsiteSettings({ ...websiteSettings, logo_url: e.target.value, logo_type: 'custom' });
                          setLogoPreview(e.target.value);
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                        placeholder="https://example.com/logo.png"
                      />
                    </div>
                  )}

                  {logoUploadMode === 'upload' && (
                    <div>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-black/20 hover:border-primary/50 transition-colors">
                        {uploadingLogo ? (
                          <div className="flex flex-col items-center justify-center">
                            <Loader2 className="animate-spin text-primary mb-2" size={24} />
                            <span className="text-white/60 text-xs">Uploading...</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="text-white/40 mb-2" size={24} />
                            <p className="text-xs text-white/60 mb-1">
                              <span className="text-primary font-bold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-[10px] text-white/40">PNG, JPG, SVG, GIF up to 5MB</p>
                          </div>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          disabled={uploadingLogo}
                        />
                      </label>
                    </div>
                  )}

                  {logoPreview && (
                    <div className="mt-4 relative rounded-xl overflow-hidden border border-white/10 w-48 h-48 bg-black/20 flex items-center justify-center">
                      <img
                        src={logoPreview}
                        alt="Logo Preview"
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '';
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setWebsiteSettings({ ...websiteSettings, logo_url: '', logo_type: 'default' });
                          setLogoPreview('');
                        }}
                        className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors"
                      >
                        <X size={16} className="text-white" />
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setWebsiteSettings({ ...websiteSettings, logo_type: 'default', logo_url: '' });
                        setLogoPreview('');
                      }}
                      className="px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all"
                    >
                      Reset to Default
                    </button>
                  </div>
                </div>

                {/* Site Information */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Globe size={20} className="text-primary" />
                    Site Information
                  </h3>
                  
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Site Name</label>
                    <input
                      type="text"
                      value={websiteSettings.site_name || 'EASYIO'}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, site_name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Site Tagline</label>
                    <input
                      type="text"
                      value={websiteSettings.site_tagline || 'Technologies'}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, site_tagline: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    Social Media Links
                  </h3>
                  
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">GitHub URL</label>
                    <input
                      type="url"
                      value={websiteSettings.github_url || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, github_url: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Instagram URL</label>
                    <input
                      type="url"
                      value={websiteSettings.instagram_url || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, instagram_url: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                      placeholder="https://instagram.com/yourusername"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Twitter URL</label>
                    <input
                      type="url"
                      value={websiteSettings.twitter_url || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, twitter_url: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50"
                      placeholder="https://twitter.com/yourusername"
                    />
                  </div>
                </div>

                {/* Animation Settings */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Zap size={20} className="text-primary" />
                    Animation Settings
                  </h3>
                  
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/10">
                    <div>
                      <label className="text-sm font-bold text-white mb-1 block">Hover Animation</label>
                      <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Enable hover scale effects on logo</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        try {
                          const currentValue = websiteSettings?.hover_animation_enabled || 'false';
                          const newValue = currentValue === 'true' ? 'false' : 'true';
                          setWebsiteSettings({ ...websiteSettings, hover_animation_enabled: newValue });
                        } catch (error) {
                          console.error('Error toggling hover animation:', error);
                        }
                      }}
                      className={`relative w-14 h-8 rounded-full transition-colors ${
                        websiteSettings?.hover_animation_enabled === 'true' ? 'bg-primary' : 'bg-white/10'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        websiteSettings?.hover_animation_enabled === 'true' ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>

                <button
                  disabled={authLoading}
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-[10px] mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {authLoading ? <Loader2 className="animate-spin" size={16} /> : <><Save size={16} /> Save Settings</>}
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main List Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-2 text-white/20">
                <LayoutDashboard size={18} />
                <span className="text-[10px] font-mono uppercase tracking-widest">
                  {activeTab === 'messages' ? `Total Messages: ${data.length}` : `Active Records: ${data.length}`}
                </span>
              </div>
              {activeTab !== 'messages' && (
                <button 
                  onClick={startAdding}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary/20 transition-all"
                >
                  <Plus size={16} />
                  New {activeTab.replace('_', ' ')}
                </button>
              )}
            </div>

            <div className="space-y-4">
              {loading && data.length > 0 && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="animate-spin text-primary" size={24} />
                </div>
              )}
              <AnimatePresence mode="popLayout">
                {activeTab === 'messages' ? (
                  data.map((item: any) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="obsidian-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-primary bg-primary/5 border border-primary/10">
                              <User size={20} />
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-lg tracking-tight">
                                {item.name}
                              </h3>
                              <p className="text-primary text-xs font-mono">{item.email}</p>
                            </div>
                          </div>
                          {item.company && (
                            <span className="text-primary font-mono text-[9px] uppercase tracking-widest font-bold bg-primary/5 px-2 py-0.5 rounded-full inline-block mb-2">
                              {item.company}
                            </span>
                          )}
                          <span className="text-white/60 font-mono text-[9px] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full inline-block ml-2">
                            {item.type || 'general'}
                          </span>
                        </div>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:text-red-500 transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-red-500/10"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">
                          {item.message}
                        </p>
                      </div>
                      <div className="mt-3 text-white/40 text-[9px] font-mono uppercase tracking-widest">
                        {new Date(item.created_at).toLocaleString()}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  data.map((item: any) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="obsidian-card p-6 rounded-2xl flex items-center justify-between group border border-white/5 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden glass-effect flex items-center justify-center text-primary bg-primary/5 border border-primary/10 relative">
                          {(item.image || item.avatar) && (item.image || item.avatar).trim() !== '' ? (
                            <ImageWithFallback 
                              src={item.image || item.avatar} 
                              alt=""
                              fallback={IconOptions.find(opt => opt.value === item.icon_type)?.icon || <Database size={24} />}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            IconOptions.find(opt => opt.value === item.icon_type)?.icon || <Database size={24} />
                          )}
                        </div>
                        <div>
                          <span className="text-primary font-mono text-[9px] uppercase tracking-widest font-bold bg-primary/5 px-2 py-0.5 rounded-full">
                            {item.category || item.status || item.role || 'CORE HUB'}
                          </span>
                          <h3 className="text-white font-bold text-lg mt-1 tracking-tight">
                            {item.title || item.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => startEditing(item)}
                          className="p-3 hover:text-primary transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-white/10"
                        >
                          <Pencil size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-3 hover:text-red-500 transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-red-500/10"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
              {!loading && data.length === 0 && (
                <div className="text-center py-20 obsidian-card rounded-3xl border border-white/5">
                  <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">No data detected in this sector</p>
                </div>
              )}
            </div>
          </div>

          {/* Configuration Panel Column */}
          {activeTab !== 'messages' && (
          <div className="lg:col-span-4 lg:sticky lg:top-12">
            <AnimatePresence mode="wait">
              {(isAdding || editingItem) ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="obsidian-card p-8 rounded-3xl border border-primary/20 bg-primary/5"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {editingItem ? 'Edit Protocol' : 'Initial Deployment'}
                    </h2>
                    <button onClick={closePanels} className="text-white/20 hover:text-white transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleSave} className="space-y-5">
                      {/* Common Fields: Title/Name */}
                      {(activeTab === 'projects' || activeTab === 'lab_experiments' || activeTab === 'logic_engines' || activeTab === 'erp_features' || activeTab === 'programs' || activeTab === 'home_solutions' || activeTab === 'innovation_hub') && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">System Designation (Title)</label>
                          <input type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                        </div>
                      )}
                      {(activeTab === 'testimonials' || activeTab === 'team_members' || activeTab === 'partners') && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Identity (Name)</label>
                          <input type="text" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                        </div>
                      )}
                      {activeTab === 'metrics' && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Metric Label</label>
                          <input type="text" value={formData.label || ''} onChange={(e) => setFormData({...formData, label: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                        </div>
                      )}

                      {/* Description/Bio/Feedback */}
                      {(activeTab === 'projects' || activeTab === 'lab_experiments' || activeTab === 'logic_engines' || activeTab === 'erp_features' || activeTab === 'programs' || activeTab === 'home_solutions' || activeTab === 'innovation_hub') && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Logic Definition (Description)</label>
                          <textarea value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm h-24 resize-none focus:border-primary/50" required />
                        </div>
                      )}
                      {activeTab === 'team_members' && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Dossier (Bio)</label>
                          <textarea value={formData.bio || ''} onChange={(e) => setFormData({...formData, bio: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm h-24 resize-none focus:border-primary/50" required />
                        </div>
                      )}
                        {activeTab === 'testimonials' && (
                          <>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Role</label>
                              <input type="text" value={formData.role || ''} onChange={(e) => setFormData({...formData, role: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Company</label>
                              <input type="text" value={formData.company || ''} onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                            <div className="col-span-2">
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Validation Content</label>
                              <textarea value={formData.content || ''} onChange={(e) => setFormData({...formData, content: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm h-32 resize-none focus:border-primary/50" required />
                            </div>
                          </>
                        )}


                      {/* Secondary Fields: Category/Role/Status */}
                      <div className="grid grid-cols-2 gap-4">
                        {(activeTab === 'projects' || activeTab === 'home_solutions' || activeTab === 'innovation_hub') && (
                          <div>
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Category</label>
                            <input type="text" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                          </div>
                        )}
                        {activeTab === 'team_members' && (
                          <div>
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Designation (Role)</label>
                            <input type="text" value={formData.role || ''} onChange={(e) => setFormData({...formData, role: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                          </div>
                        )}
                        {activeTab === 'testimonials' && (
                          <div>
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Position (Title)</label>
                            <input type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                          </div>
                        )}
                        {activeTab === 'lab_experiments' && (
                          <div>
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Current Status</label>
                            <input type="text" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                          </div>
                        )}
                        {activeTab === 'programs' && (
                          <>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Duration</label>
                              <input type="text" value={formData.duration || ''} onChange={(e) => setFormData({...formData, duration: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Elite Level</label>
                              <input type="text" value={formData.level || ''} onChange={(e) => setFormData({...formData, level: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                          </>
                        )}
                        {activeTab === 'metrics' && (
                          <>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Value</label>
                              <input type="text" value={formData.value || ''} onChange={(e) => setFormData({...formData, value: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                            <div>
                              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Sub Label</label>
                              <input type="text" value={formData.sub_label || ''} onChange={(e) => setFormData({...formData, sub_label: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                            </div>
                          </>
                        )}
                        {activeTab === 'innovation_hub' && (
                          <div>
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">System Metric (Stats)</label>
                            <input type="text" value={formData.stats || ''} onChange={(e) => setFormData({...formData, stats: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                          </div>
                        )}

                        {/* Icon Profile */}
                        {activeTab !== 'testimonials' && activeTab !== 'team_members' && (
                          <div className="col-span-2">
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Icon Profile</label>
                            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-2 max-h-64 overflow-y-auto p-2 bg-black/20 rounded-xl border border-white/5">
                              {IconOptions.map(opt => (
                                <button key={opt.value} type="button" onClick={() => setFormData({...formData, icon_type: opt.value})}
                                className={`p-2 rounded-lg border transition-all flex items-center justify-center hover:scale-110 ${formData.icon_type === opt.value ? 'bg-primary border-primary text-white scale-110' : 'bg-black/40 border-white/10 text-white/20 hover:border-primary/30'}`} title={opt.label}>
                                  {opt.icon}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {(activeTab === 'metrics' || activeTab === 'home_solutions') && (
                          <div className="col-span-2">
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Color Theme</label>
                            <div className="flex gap-2">
                              {ColorOptions.map(opt => (
                                <button key={opt.value} type="button" onClick={() => setFormData({...formData, color_theme: opt.value, accent_color: opt.value})}
                                className={`w-8 h-8 rounded-full border-2 transition-all ${(formData.color_theme === opt.value || formData.accent_color === opt.value) ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60'} ${opt.class}`} title={opt.label} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Special: Features for Home Solutions */}
                      {activeTab === 'home_solutions' && (
                        <div>
                          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Solution Features (Comma Sep)</label>
                          <input type="text" value={formData.features?.join(', ') || ''} onChange={(e) => setFormData({...formData, features: e.target.value.split(',').map(t => t.trim())})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                        </div>
                      )}


                    {/* Assets: Image/Avatar */}
                    {(activeTab === 'projects' || activeTab === 'team_members') && (
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Visual Interface (Image)</label>
                        
                        {/* Upload Mode Toggle */}
                        <div className="flex gap-2 mb-3">
                          <button
                            type="button"
                            onClick={() => setImageUploadMode('url')}
                            className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                              imageUploadMode === 'url'
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-white/40 hover:text-white'
                            }`}
                          >
                            <LinkIcon size={14} className="inline mr-2" />
                            URL
                          </button>
                          <button
                            type="button"
                            onClick={() => setImageUploadMode('upload')}
                            className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                              imageUploadMode === 'upload'
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-white/40 hover:text-white'
                            }`}
                          >
                            <Upload size={14} className="inline mr-2" />
                            Upload
                          </button>
                        </div>

                        {/* URL Input */}
                        {imageUploadMode === 'url' && (
                          <input
                            type="text"
                            value={formData.image || ''}
                            onChange={(e) => {
                              const url = e.target.value;
                              setFormData({...formData, image: url});
                              setImagePreview(url);
                            }}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50 mb-3"
                            placeholder="https://example.com/image.jpg"
                            required={imageUploadMode === 'url'}
                          />
                        )}

                        {/* File Upload */}
                        {imageUploadMode === 'upload' && (
                          <div className="mb-3">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-black/20 hover:border-primary/50 transition-colors">
                              {uploadingImage ? (
                                <div className="flex flex-col items-center justify-center">
                                  <Loader2 className="animate-spin text-primary mb-2" size={24} />
                                  <span className="text-white/60 text-xs">Uploading...</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="text-white/40 mb-2" size={24} />
                                  <p className="text-xs text-white/60 mb-1">
                                    <span className="text-primary font-bold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-[10px] text-white/40">PNG, JPG, GIF up to 5MB</p>
                                </div>
                              )}
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'image')}
                                disabled={uploadingImage}
                              />
                            </label>
                          </div>
                        )}

                        {/* Image Preview */}
                        {(imagePreview || formData.image) && (
                          <div className="mt-3 relative rounded-xl overflow-hidden border border-white/10">
                            <img
                              src={imagePreview || formData.image}
                              alt="Preview"
                              className="w-full h-48 object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setFormData({...formData, image: ''});
                                setImagePreview('');
                              }}
                              className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors"
                            >
                              <X size={16} className="text-white" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab === 'testimonials' && (
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Visual Hash (Avatar)</label>
                        
                        {/* Upload Mode Toggle */}
                        <div className="flex gap-2 mb-3">
                          <button
                            type="button"
                            onClick={() => setAvatarUploadMode('url')}
                            className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                              avatarUploadMode === 'url'
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-white/40 hover:text-white'
                            }`}
                          >
                            <LinkIcon size={14} className="inline mr-2" />
                            URL
                          </button>
                          <button
                            type="button"
                            onClick={() => setAvatarUploadMode('upload')}
                            className={`flex-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                              avatarUploadMode === 'upload'
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-white/40 hover:text-white'
                            }`}
                          >
                            <Upload size={14} className="inline mr-2" />
                            Upload
                          </button>
                        </div>

                        {/* URL Input */}
                        {avatarUploadMode === 'url' && (
                          <input
                            type="text"
                            value={activeTab === 'testimonials' ? (formData.image || '') : (formData.avatar || '')}
                            onChange={(e) => {
                              const url = e.target.value;
                              if (activeTab === 'testimonials') {
                                setFormData({...formData, image: url});
                              } else {
                                setFormData({...formData, avatar: url});
                              }
                              setAvatarPreview(url);
                            }}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50 mb-3"
                            placeholder="https://example.com/avatar.jpg"
                            required={avatarUploadMode === 'url'}
                          />
                        )}

                        {/* File Upload */}
                        {avatarUploadMode === 'upload' && (
                          <div className="mb-3">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-black/20 hover:border-primary/50 transition-colors">
                              {uploadingImage ? (
                                <div className="flex flex-col items-center justify-center">
                                  <Loader2 className="animate-spin text-primary mb-2" size={24} />
                                  <span className="text-white/60 text-xs">Uploading...</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="text-white/40 mb-2" size={24} />
                                  <p className="text-xs text-white/60 mb-1">
                                    <span className="text-primary font-bold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-[10px] text-white/40">PNG, JPG, GIF up to 5MB</p>
                                </div>
                              )}
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'avatar')}
                                disabled={uploadingImage}
                              />
                            </label>
                          </div>
                        )}

                        {/* Avatar Preview */}
                        {(avatarPreview || (activeTab === 'testimonials' ? formData.image : formData.avatar)) && (
                          <div className="mt-3 relative rounded-xl overflow-hidden border border-white/10 w-32 h-32">
                            <img
                              src={avatarPreview || (activeTab === 'testimonials' ? formData.image : formData.avatar)}
                              alt="Avatar Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (activeTab === 'testimonials') {
                                  setFormData({...formData, image: ''});
                                } else {
                                  setFormData({...formData, avatar: ''});
                                }
                                setAvatarPreview('');
                              }}
                              className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors"
                            >
                              <X size={16} className="text-white" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Special: Tags for Projects */}
                    {activeTab === 'projects' && (
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Neural Mesh (Tags - Comma Sep)</label>
                        <input type="text" value={formData.tags?.join(', ') || ''} onChange={(e) => setFormData({...formData, tags: e.target.value.split(',').map(t => t.trim())})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50" required />
                      </div>
                    )}

                    <button disabled={authLoading} className="w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-[10px] mt-4 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                      {authLoading ? <Loader2 className="animate-spin" size={16} /> : <><Save size={16} /> Commit Change</>}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <div className="obsidian-card p-12 rounded-3xl text-center border border-white/5 flex flex-col items-center justify-center min-h-[500px]">
                   <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary/20 mb-6 animate-pulse">
                     <LayoutDashboard size={40} />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2 tracking-tight">System Idle</h3>
                   <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest max-w-[200px] leading-relaxed">
                     Awaiting Sector Record Selection for Modification
                   </p>
                </div>
              )}
            </AnimatePresence>
          </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}
