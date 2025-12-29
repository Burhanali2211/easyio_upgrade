"use client";

import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Tab } from '../types';

export function useAdminData() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [websiteSettings, setWebsiteSettings] = useState<Record<string, string>>({});
  const [logoPreview, setLogoPreview] = useState<string>('');

  const fetchData = useCallback(async (tab: Tab) => {
    setLoading(true);
    
    try {
      if (tab === 'website_settings') {
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
  }, []);

  const deleteItem = useCallback(async (id: string, tab: Tab, onSuccess: () => void) => {
    try {
      const { error } = await supabase
        .from(tab)
        .delete()
        .eq('id', id)
        .select();
        
      if (error) {
        console.error('Delete error:', error);
        throw new Error(error.message || 'Failed to delete record');
      }
      
      toast.success('Record deleted successfully');
      onSuccess();
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Failed to delete record');
    }
  }, []);

  const saveItem = useCallback(async (
    formData: any,
    editingItem: any | null,
    activeTab: Tab,
    onSuccess: () => void
  ) => {
    try {
      let dataToSave = { ...formData };
      
      Object.keys(dataToSave).forEach(key => {
        if (dataToSave[key] === '' || dataToSave[key] === undefined) {
          delete dataToSave[key];
        }
      });
      
      if (activeTab === 'testimonials') {
        if (dataToSave.avatar && !dataToSave.image) {
          dataToSave.image = dataToSave.avatar;
          delete dataToSave.avatar;
        }
        if (dataToSave.avatar) {
          delete dataToSave.avatar;
        }
      }
      
      if (!editingItem && dataToSave.id) {
        delete dataToSave.id;
      }
      
      if (editingItem) {
        let { data: updatedData, error } = await supabase
          .from(activeTab)
          .update(dataToSave)
          .eq('id', editingItem.id)
          .select();
          
          
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
        
          
        if (error) {
          console.error('Insert error:', error);
          throw new Error(error.message || 'Failed to create record');
        }
        
        if (!insertedData || insertedData.length === 0) {
          throw new Error('Insert succeeded but no data returned');
        }
        
        toast.success('New record created successfully');
      }
      
      onSuccess();
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error(error.message || 'Failed to save. Please check console for details.');
      throw error;
    }
  }, []);

  const saveWebsiteSettings = useCallback(async (settings: Record<string, string>) => {
    const settingsToUpdate = [
      { setting_key: 'logo_url', setting_value: settings.logo_url || '' },
      { setting_key: 'logo_type', setting_value: settings.logo_type || 'default' },
      { setting_key: 'hover_animation_enabled', setting_value: settings.hover_animation_enabled || 'false' },
      { setting_key: 'site_name', setting_value: settings.site_name || 'EASYIO' },
      { setting_key: 'site_tagline', setting_value: settings.site_tagline || 'Technologies' },
      { setting_key: 'github_url', setting_value: settings.github_url || '' },
      { setting_key: 'instagram_url', setting_value: settings.instagram_url || '' },
      { setting_key: 'twitter_url', setting_value: settings.twitter_url || '' },
    ];

    const response = await fetch('/api/website-settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
  }, []);

  return {
    data,
    loading,
    websiteSettings,
    logoPreview,
    setWebsiteSettings,
    setLogoPreview,
    fetchData,
    deleteItem,
    saveItem,
    saveWebsiteSettings,
  };
}
