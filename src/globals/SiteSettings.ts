import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  fields: [
    { name: 'brandName', type: 'text', defaultValue: 'AURELIA' },
    { name: 'tagline', type: 'text', defaultValue: 'Your work, with room to think.' },
    { name: 'homeHeadline', type: 'text', defaultValue: 'Make room for better thinking.' },
    { name: 'homeDescription', type: 'textarea', defaultValue: 'A thoughtful workspace for projects, ideas, and research.' },
    { name: 'primaryAction', type: 'text', defaultValue: 'Explore the workspace' },
  ],
}
