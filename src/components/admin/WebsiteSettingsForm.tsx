"use client";

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Loader2, Upload, Link as LinkIcon, Image as ImageIcon, Globe, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface WebsiteSettingsFormProps {
  settings: Record<string, string>;
  logoPreview: string;
  loading: boolean;
  onSettingsChange: (settings: Record<string, string>) => void;
  onLogoPreviewChange: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const WebsiteSettingsForm = memo(({
  settings,
  logoPreview,
  loading,
  onSettingsChange,
  onLogoPreviewChange,
  onSubmit,
}: WebsiteSettingsFormProps) => {
  const [logoUploadMode, setLogoUploadMode] = useState<'url' | 'upload'>('url');
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast.error(`Invalid file type: ${file.type}`);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds 5MB limit');
      return;
    }

    setUploadingLogo(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'website-settings');

      const response = await fetch('/api/upload', { method: 'POST', body: formData });
      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      if (result.success && result.url) {
        onSettingsChange({ ...settings, logo_url: result.url, logo_type: 'custom' });
        onLogoPreviewChange(result.url);
        toast.success('Logo uploaded successfully');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to upload logo');
    } finally {
      setUploadingLogo(false);
      e.target.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-0 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="obsidian-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 sm:mb-2">Website Settings</h2>
            <p className="text-white/40 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">Configure global website preferences</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <ImageIcon size={18} className="text-primary sm:w-5 sm:h-5" />
              Logo Configuration
            </h3>
            
            <div className="flex gap-2 mb-3">
              <button type="button" onClick={() => setLogoUploadMode('url')}
                className={`flex-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all touch-manipulation ${logoUploadMode === 'url' ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:text-white active:text-white'}`}>
                <LinkIcon size={14} className="inline mr-1 sm:mr-2" />URL
              </button>
              <button type="button" onClick={() => setLogoUploadMode('upload')}
                className={`flex-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all touch-manipulation ${logoUploadMode === 'upload' ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:text-white active:text-white'}`}>
                <Upload size={14} className="inline mr-1 sm:mr-2" />Upload
              </button>
            </div>

            {logoUploadMode === 'url' && (
              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Logo URL</label>
                <input type="text" value={settings.logo_url || ''}
                  onChange={(e) => { onSettingsChange({ ...settings, logo_url: e.target.value, logo_type: 'custom' }); onLogoPreviewChange(e.target.value); }}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none"
                  placeholder="https://example.com/logo.png" />
              </div>
            )}

            {logoUploadMode === 'upload' && (
              <label className="flex flex-col items-center justify-center w-full h-28 sm:h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-black/20 hover:border-primary/50 active:border-primary/50 transition-colors touch-manipulation">
                {uploadingLogo ? (
                  <div className="flex flex-col items-center"><Loader2 className="animate-spin text-primary mb-2" size={24} /><span className="text-white/60 text-xs">Uploading...</span></div>
                ) : (
                  <div className="flex flex-col items-center pt-5 pb-6"><Upload className="text-white/40 mb-2" size={24} /><p className="text-xs text-white/60 mb-1"><span className="text-primary font-bold">Tap to upload</span></p><p className="text-[10px] text-white/40">PNG, JPG, SVG up to 5MB</p></div>
                )}
                <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} disabled={uploadingLogo} />
              </label>
            )}

            {logoPreview && (
              <div className="mt-4 relative rounded-xl overflow-hidden border border-white/10 w-36 h-36 sm:w-48 sm:h-48 bg-black/20 flex items-center justify-center">
                <img src={logoPreview} alt="Logo Preview" className="max-w-full max-h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <button type="button" onClick={() => { onSettingsChange({ ...settings, logo_url: '', logo_type: 'default' }); onLogoPreviewChange(''); }}
                  className="absolute top-2 right-2 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center bg-red-500/80 hover:bg-red-500 active:bg-red-600 rounded-lg transition-colors touch-manipulation"><X size={16} className="text-white" /></button>
              </div>
            )}

            <button type="button" onClick={() => { onSettingsChange({ ...settings, logo_type: 'default', logo_url: '' }); onLogoPreviewChange(''); }}
              className="px-4 py-2.5 min-h-[44px] bg-white/5 text-white/60 hover:text-white active:text-white hover:bg-white/10 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all touch-manipulation">
              Reset to Default
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2"><Globe size={18} className="text-primary sm:w-5 sm:h-5" />Site Information</h3>
            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Site Name</label>
              <input type="text" value={settings.site_name || 'EASYIO'} onChange={(e) => onSettingsChange({ ...settings, site_name: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" />
            </div>
            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Site Tagline</label>
              <input type="text" value={settings.site_tagline || 'Technologies'} onChange={(e) => onSettingsChange({ ...settings, site_tagline: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2"><Users size={18} className="text-primary sm:w-5 sm:h-5" />Social Media Links</h3>
            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">GitHub URL</label>
              <input type="url" value={settings.github_url || ''} onChange={(e) => onSettingsChange({ ...settings, github_url: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="https://github.com/yourusername" inputMode="url" />
            </div>
            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Instagram URL</label>
              <input type="url" value={settings.instagram_url || ''} onChange={(e) => onSettingsChange({ ...settings, instagram_url: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="https://instagram.com/yourusername" inputMode="url" />
            </div>
            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Twitter URL</label>
              <input type="url" value={settings.twitter_url || ''} onChange={(e) => onSettingsChange({ ...settings, twitter_url: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="https://twitter.com/yourusername" inputMode="url" />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2"><Zap size={18} className="text-primary sm:w-5 sm:h-5" />Animation Settings</h3>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-black/20 rounded-xl border border-white/10 gap-3">
              <div className="flex-1 min-w-0">
                <label className="text-sm font-bold text-white mb-1 block">Hover Animation</label>
                <p className="text-[9px] sm:text-[10px] text-white/40 font-mono uppercase tracking-widest">Enable hover scale effects on logo</p>
              </div>
              <button type="button" onClick={() => onSettingsChange({ ...settings, hover_animation_enabled: settings.hover_animation_enabled === 'true' ? 'false' : 'true' })}
                className={`relative w-14 h-8 rounded-full transition-colors flex-shrink-0 touch-manipulation ${settings.hover_animation_enabled === 'true' ? 'bg-primary' : 'bg-white/10'}`}>
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${settings.hover_animation_enabled === 'true' ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>

          <button disabled={loading} type="submit"
            className="w-full min-h-[48px] py-3.5 sm:py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-[10px] mt-5 sm:mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 touch-manipulation">
            {loading ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Save Settings</>}
          </button>
        </form>
      </motion.div>
    </div>
  );
});

WebsiteSettingsForm.displayName = 'WebsiteSettingsForm';

export default WebsiteSettingsForm;
