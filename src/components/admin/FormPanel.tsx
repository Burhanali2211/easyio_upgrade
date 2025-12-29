"use client";

import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Loader2, Upload, Link as LinkIcon, LayoutDashboard, ChevronUp } from 'lucide-react';
import { Tab } from './types';
import { IconOptions, ColorOptions } from './constants';

interface FormPanelProps {
  activeTab: Tab;
  formData: any;
  editingItem: any | null;
  isAdding: boolean;
  loading: boolean;
  uploadingImage: boolean;
  imagePreview: string;
  avatarPreview: string;
  imageUploadMode: 'url' | 'upload';
  avatarUploadMode: 'url' | 'upload';
  onFormDataChange: (data: any) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'avatar') => void;
  onImageModeChange: (mode: 'url' | 'upload') => void;
  onAvatarModeChange: (mode: 'url' | 'upload') => void;
  onImagePreviewChange: (url: string) => void;
  onAvatarPreviewChange: (url: string) => void;
}

const FormPanel = memo(({
  activeTab,
  formData,
  editingItem,
  isAdding,
  loading,
  uploadingImage,
  imagePreview,
  avatarPreview,
  imageUploadMode,
  avatarUploadMode,
  onFormDataChange,
  onClose,
  onSubmit,
  onImageUpload,
  onImageModeChange,
  onAvatarModeChange,
  onImagePreviewChange,
  onAvatarPreviewChange,
}: FormPanelProps) => {
  const showPanel = isAdding || editingItem;
  const [isExpanded, setIsExpanded] = useState(true);

  const renderTitleField = () => {
    if (['projects', 'lab_experiments', 'logic_engines', 'erp_features', 'programs', 'home_solutions', 'innovation_hub'].includes(activeTab)) {
      return (
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">System Designation (Title)</label>
          <input type="text" value={formData.title || ''} onChange={(e) => onFormDataChange({...formData, title: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
        </div>
      );
    }
    if (['testimonials', 'team_members', 'partners'].includes(activeTab)) {
      return (
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Identity (Name)</label>
          <input type="text" value={formData.name || ''} onChange={(e) => onFormDataChange({...formData, name: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
        </div>
      );
    }
    if (activeTab === 'metrics') {
      return (
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Metric Label</label>
          <input type="text" value={formData.label || ''} onChange={(e) => onFormDataChange({...formData, label: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
        </div>
      );
    }
    return null;
  };

  const renderDescriptionField = () => {
    if (['projects', 'lab_experiments', 'logic_engines', 'erp_features', 'programs', 'home_solutions', 'innovation_hub'].includes(activeTab)) {
      return (
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Logic Definition (Description)</label>
          <textarea value={formData.description || ''} onChange={(e) => onFormDataChange({...formData, description: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white h-24 resize-none focus:border-primary/50 focus:outline-none" required />
        </div>
      );
    }
    if (activeTab === 'team_members') {
      return (
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Dossier (Bio)</label>
          <textarea value={formData.bio || ''} onChange={(e) => onFormDataChange({...formData, bio: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white h-24 resize-none focus:border-primary/50 focus:outline-none" required />
        </div>
      );
    }
    return null;
  };

  const renderTestimonialFields = () => {
    if (activeTab !== 'testimonials') return null;
    return (
      <>
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Role</label>
          <input type="text" value={formData.role || ''} onChange={(e) => onFormDataChange({...formData, role: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
        </div>
        <div>
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Company</label>
          <input type="text" value={formData.company || ''} onChange={(e) => onFormDataChange({...formData, company: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Validation Content</label>
          <textarea value={formData.content || ''} onChange={(e) => onFormDataChange({...formData, content: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white h-32 resize-none focus:border-primary/50 focus:outline-none" required />
        </div>
      </>
    );
  };

  const renderImageUpload = (type: 'image' | 'avatar', label: string, preview: string, mode: 'url' | 'upload', onModeChange: (m: 'url' | 'upload') => void, onPreviewChange: (url: string) => void) => (
    <div>
      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">{label}</label>
      <div className="flex gap-2 mb-3">
        <button type="button" onClick={() => onModeChange('url')}
          className={`flex-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all touch-manipulation ${mode === 'url' ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:text-white active:text-white'}`}>
          <LinkIcon size={14} className="inline mr-1 sm:mr-2" />URL
        </button>
        <button type="button" onClick={() => onModeChange('upload')}
          className={`flex-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all touch-manipulation ${mode === 'upload' ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:text-white active:text-white'}`}>
          <Upload size={14} className="inline mr-1 sm:mr-2" />Upload
        </button>
      </div>
      {mode === 'url' && (
        <input type="text" value={
          activeTab === 'partners' ? (formData.logo_url || '') :
          type === 'image' ? (formData.image || '') : 
          (activeTab === 'testimonials' ? formData.image || '' : formData.avatar || '')
        }
          onChange={(e) => {
            if (activeTab === 'partners') {
              onFormDataChange({...formData, logo_url: e.target.value});
              onPreviewChange(e.target.value);
            } else if (type === 'image') {
              onFormDataChange({...formData, image: e.target.value});
              onPreviewChange(e.target.value);
            } else {
              if (activeTab === 'testimonials') onFormDataChange({...formData, image: e.target.value}); 
              else onFormDataChange({...formData, avatar: e.target.value}); 
              onPreviewChange(e.target.value); 
            }
          }}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none mb-3"
          placeholder="https://example.com/image.jpg" required={mode === 'url'} />
      )}
      {mode === 'upload' && (
        <label className="flex flex-col items-center justify-center w-full h-28 sm:h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-black/20 hover:border-primary/50 active:border-primary/50 transition-colors mb-3 touch-manipulation">
          {uploadingImage ? (
            <div className="flex flex-col items-center"><Loader2 className="animate-spin text-primary mb-2" size={24} /><span className="text-white/60 text-xs">Uploading...</span></div>
          ) : (
            <div className="flex flex-col items-center pt-5 pb-6"><Upload className="text-white/40 mb-2" size={24} /><p className="text-xs text-white/60"><span className="text-primary font-bold">Tap to upload</span></p></div>
          )}
          <input type="file" className="hidden" accept="image/*" onChange={(e) => onImageUpload(e, type)} disabled={uploadingImage} />
        </label>
      )}
      {preview && (
        <div className={`mt-3 relative rounded-xl overflow-hidden border border-white/10 ${type === 'avatar' ? 'w-24 h-24 sm:w-32 sm:h-32' : activeTab === 'partners' ? 'w-full h-24 sm:h-32' : 'w-full h-36 sm:h-48'}`}>
          <img src={preview} alt="Preview" className={`w-full h-full ${activeTab === 'partners' ? 'object-contain' : 'object-cover'}`} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <button type="button" onClick={() => { 
            if (activeTab === 'partners') {
              onFormDataChange({...formData, logo_url: ''});
              onPreviewChange('');
            } else if (type === 'image') {
              onFormDataChange({...formData, image: ''});
              onPreviewChange('');
            } else {
              if (activeTab === 'testimonials') onFormDataChange({...formData, image: ''}); 
              else onFormDataChange({...formData, avatar: ''}); 
              onPreviewChange(''); 
            }
          }} className="absolute top-2 right-2 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center bg-red-500/80 hover:bg-red-500 active:bg-red-600 rounded-lg transition-colors touch-manipulation"><X size={16} className="text-white" /></button>
        </div>
      )}
    </div>
  );

  return (
    <div className="lg:col-span-4 lg:sticky lg:top-12">
      <AnimatePresence mode="wait">
        {showPanel ? (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
            className="obsidian-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">{editingItem ? 'Edit Protocol' : 'Initial Deployment'}</h2>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-white/40 hover:text-white active:text-white transition-colors touch-manipulation"
                >
                  <ChevronUp size={20} className={`transform transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
                </button>
                <button onClick={onClose} className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-white/20 hover:text-white active:text-white transition-colors touch-manipulation"><X size={20} /></button>
              </div>
            </div>
            
            <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                {renderTitleField()}
                {renderDescriptionField()}
                {renderTestimonialFields()}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['projects', 'home_solutions', 'innovation_hub'].includes(activeTab) && (
                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Category</label>
                      <input type="text" value={formData.category || ''} onChange={(e) => onFormDataChange({...formData, category: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                    </div>
                  )}
                  {activeTab === 'team_members' && (
                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Designation (Role)</label>
                      <input type="text" value={formData.role || ''} onChange={(e) => onFormDataChange({...formData, role: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                    </div>
                  )}
                  {activeTab === 'lab_experiments' && (
                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Current Status</label>
                      <input type="text" value={formData.status || ''} onChange={(e) => onFormDataChange({...formData, status: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                    </div>
                  )}
                  {activeTab === 'programs' && (
                    <>
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Duration</label>
                        <input type="text" value={formData.duration || ''} onChange={(e) => onFormDataChange({...formData, duration: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                      </div>
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Elite Level</label>
                        <input type="text" value={formData.level || ''} onChange={(e) => onFormDataChange({...formData, level: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                      </div>
                    </>
                  )}
                  {activeTab === 'metrics' && (
                    <>
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Value</label>
                        <input type="text" value={formData.value || ''} onChange={(e) => onFormDataChange({...formData, value: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                      </div>
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Sub Label</label>
                        <input type="text" value={formData.sub_label || ''} onChange={(e) => onFormDataChange({...formData, sub_label: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                      </div>
                    </>
                  )}
                  {activeTab === 'innovation_hub' && (
                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">System Metric (Stats)</label>
                      <input type="text" value={formData.stats || ''} onChange={(e) => onFormDataChange({...formData, stats: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                    </div>
                  )}
                  {activeTab !== 'testimonials' && activeTab !== 'team_members' && activeTab !== 'partners' && (
                    <div className="col-span-1 sm:col-span-2">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Icon Profile</label>
                      <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2 max-h-48 sm:max-h-64 overflow-y-auto p-2 bg-black/20 rounded-xl border border-white/5">
                        {IconOptions.map(opt => (
                          <button key={opt.value} type="button" onClick={() => onFormDataChange({...formData, icon_type: opt.value})}
                            className={`p-2 min-w-[40px] min-h-[40px] rounded-lg border transition-all flex items-center justify-center active:scale-95 touch-manipulation ${formData.icon_type === opt.value ? 'bg-primary border-primary text-white scale-110' : 'bg-black/40 border-white/10 text-white/20 hover:border-primary/30'}`} title={opt.label}>
                            {opt.icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {(activeTab === 'metrics' || activeTab === 'home_solutions') && (
                    <div className="col-span-1 sm:col-span-2">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Color Theme</label>
                      <div className="flex gap-2 flex-wrap">
                        {ColorOptions.map(opt => (
                          <button key={opt.value} type="button" onClick={() => onFormDataChange({...formData, color_theme: opt.value, accent_color: opt.value})}
                            className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full border-2 transition-all touch-manipulation ${(formData.color_theme === opt.value || formData.accent_color === opt.value) ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60'} ${opt.class}`} title={opt.label} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {activeTab === 'home_solutions' && (
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Solution Features (Comma Sep)</label>
                    <input type="text" value={formData.features?.join(', ') || ''} onChange={(e) => onFormDataChange({...formData, features: e.target.value.split(',').map((t: string) => t.trim())})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                  </div>
                )}

                {(activeTab === 'projects' || activeTab === 'team_members') && renderImageUpload('image', 'Visual Interface (Image)', imagePreview, imageUploadMode, onImageModeChange, onImagePreviewChange)}
                {activeTab === 'testimonials' && renderImageUpload('avatar', 'Visual Hash (Avatar)', avatarPreview, avatarUploadMode, onAvatarModeChange, onAvatarPreviewChange)}
                {activeTab === 'partners' && renderImageUpload('image', 'Company Logo (URL or Upload)', imagePreview, imageUploadMode, onImageModeChange, onImagePreviewChange)}

                {activeTab === 'projects' && (
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Neural Mesh (Tags - Comma Sep)</label>
                    <input type="text" value={formData.tags?.join(', ') || ''} onChange={(e) => onFormDataChange({...formData, tags: e.target.value.split(',').map((t: string) => t.trim())})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:border-primary/50 focus:outline-none" required />
                  </div>
                )}

                <button disabled={loading} className="w-full min-h-[48px] py-3.5 sm:py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-[10px] mt-4 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform touch-manipulation disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Commit Change</>}
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <div className="obsidian-card p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center border border-white/5 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[500px]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary/20 mb-4 sm:mb-6 animate-pulse">
              <LayoutDashboard size={32} className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 tracking-tight">System Idle</h3>
            <p className="text-white/40 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest max-w-[200px] leading-relaxed">
              Awaiting Sector Record Selection for Modification
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

FormPanel.displayName = 'FormPanel';

export default FormPanel;
