"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import {
  AuthForm,
  AdminHeader,
  TabNavigation,
  DataList,
  FormPanel,
  WebsiteSettingsForm,
  useAdminData,
  useImageUpload,
  getFormDefaults,
  Tab,
} from '@/components/admin';

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [saveLoading, setSaveLoading] = useState(false);

  const {
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
  } = useAdminData();

  const {
    uploadingImage,
    imagePreview,
    avatarPreview,
    imageUploadMode,
    avatarUploadMode,
    setImagePreview,
    setAvatarPreview,
    setImageUploadMode,
    setAvatarUploadMode,
    handleImageUpload,
    resetPreviews,
    setPreviewsFromItem,
  } = useImageUpload();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchData(activeTab);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchData(activeTab);
    });

    return () => subscription.unsubscribe();
  }, [activeTab, fetchData]);

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

  const closePanels = useCallback(() => {
    setIsAdding(false);
    setEditingItem(null);
    setFormData({});
    resetPreviews();
  }, [resetPreviews]);

  const startAdding = useCallback(() => {
    closePanels();
    setIsAdding(true);
    setFormData(getFormDefaults(activeTab));
  }, [activeTab, closePanels]);

  const startEditing = useCallback((item: any) => {
    setEditingItem(item);
    setIsAdding(false);
    setFormData(item);
    setPreviewsFromItem(item, activeTab);
  }, [activeTab, setPreviewsFromItem]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    try {
      if (activeTab === 'website_settings') {
        await saveWebsiteSettings(websiteSettings);
        fetchData(activeTab);
      } else {
        await saveItem(formData, editingItem, activeTab, () => {
          closePanels();
          fetchData(activeTab);
        });
      }
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = useCallback(async (id: string) => {
    await deleteItem(id, activeTab, () => fetchData(activeTab));
  }, [activeTab, deleteItem, fetchData]);

  const onImageUploadHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'avatar') => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleImageUpload(file, type, activeTab, (url, uploadType) => {
      if (uploadType === 'image') {
        setFormData((prev: any) => ({ ...prev, image: url }));
      } else {
        if (activeTab === 'testimonials') {
          setFormData((prev: any) => ({ ...prev, image: url }));
        } else {
          setFormData((prev: any) => ({ ...prev, avatar: url }));
        }
      }
    });
    e.target.value = '';
  }, [activeTab, handleImageUpload]);

  if (loading && !data.length && !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  if (!session) {
    return (
      <AuthForm
        email={email}
        password={password}
        isSignUp={isSignUp}
        loading={authLoading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleAuth}
        onToggleMode={() => setIsSignUp(!isSignUp)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-12 pb-24 sm:pb-6">
      <div className="max-w-7xl mx-auto">
        <AdminHeader
          email={session.user.email}
          onSignOut={() => supabase.auth.signOut()}
        />

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'website_settings' ? (
          <WebsiteSettingsForm
            settings={websiteSettings}
            logoPreview={logoPreview}
            loading={saveLoading}
            onSettingsChange={setWebsiteSettings}
            onLogoPreviewChange={setLogoPreview}
            onSubmit={handleSave}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
            <DataList
              data={data}
              loading={loading}
              activeTab={activeTab}
              onEdit={startEditing}
              onDelete={handleDelete}
              onAdd={startAdding}
            />

            {activeTab !== 'messages' && (
              <FormPanel
                activeTab={activeTab}
                formData={formData}
                editingItem={editingItem}
                isAdding={isAdding}
                loading={saveLoading}
                uploadingImage={uploadingImage}
                imagePreview={imagePreview}
                avatarPreview={avatarPreview}
                imageUploadMode={imageUploadMode}
                avatarUploadMode={avatarUploadMode}
                onFormDataChange={setFormData}
                onClose={closePanels}
                onSubmit={handleSave}
                onImageUpload={onImageUploadHandler}
                onImageModeChange={setImageUploadMode}
                onAvatarModeChange={setAvatarUploadMode}
                onImagePreviewChange={setImagePreview}
                onAvatarPreviewChange={setAvatarPreview}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
